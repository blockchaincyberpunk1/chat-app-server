const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

// Initialize Express app and enable CORS
const app = express();
app.use(cors()); // Enable CORS for all routes

// Create an HTTP server and initialize Socket.IO with CORS options
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://10.0.0.46:3000", // Update to match the domain of your frontend
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 4000;

// Store users and room data
let users = {};
let usersInRoom = {};

/**
 * Set up socket.io connection event
 */
io.on("connection", (socket) => {
  console.log(`New client connected: ${socket.id}`);

  /**
   * Join room event listener
   * @param {Object} data - Contains username and room to join
   */
  socket.on("joinRoom", ({ username, room }) => {
    users[socket.id] = { username, room };
    socket.join(room);

    usersInRoom[room] = [
      ...(usersInRoom[room] || []),
      { id: socket.id, username },
    ];
    io.to(room).emit("roomData", { room, users: usersInRoom[room] });

    socket.broadcast
      .to(room)
      .emit("notification", `${username} has joined the room`);
    console.log(`${username} joined ${room}`);
  });

  /**
   * Chat message event listener
   * @param {Object} data - Contains room and message text
   */
  socket.on("chatMessage", ({ room, message }) => {
    io.to(room).emit("message", {
      user: users[socket.id].username,
      text: message,
    });
  });

  /**
   * Private message event listener
   * @param {Object} data - Contains receiver's ID and message text
   */
  socket.on("privateMessage", ({ receiverId, message }) => {
    socket.to(receiverId).emit("privateMessage", {
      from: users[socket.id].username,
      message,
    });
  });

  /**
   * Handle user disconnection
   */
  socket.on("disconnect", () => {
    if (users[socket.id]) {
      const { username, room } = users[socket.id];
      usersInRoom[room] = usersInRoom[room].filter(
        (user) => user.id !== socket.id
      );
      io.to(room).emit("roomData", { room, users: usersInRoom[room] });

      socket.broadcast
        .to(room)
        .emit("notification", `${username} has left the room`);
      console.log(`${username} has left the room ${room}`);
    }

    delete users[socket.id];
    console.log(`Client disconnected: ${socket.id}`);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
