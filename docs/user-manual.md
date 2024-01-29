# Chat App Backend - User Manual

## Introduction

This user manual provides a guide to using and understanding the backend of the Chat App. The backend is built using Node.js, Express, and Socket.IO, and it facilitates real-time communication for the chat application.

## Getting Started

1. **Starting the Server**: 
   - Ensure Node.js is installed on your machine.
   - Navigate to the `server` directory and run `npm start`. This will start the server on the default port (4000).

2. **Configuration**: 
   - The server's CORS settings are configured for `http://10.0.0.46:3000`. Adjust this to match your frontend's domain.

## Features

- **Real-Time Messaging**: The server uses Socket.IO to enable real-time messaging between users.
- **Chat Rooms**: Users can join and communicate in multiple chat rooms.
- **Private Messaging**: The server supports private messaging functionality.
- **User Management**: Handles user connections and disconnections.

## Usage

- **Connecting to the Server**: 
  - The frontend should connect to the server using Socket.IO client with the ENDPOINT `http://127.0.0.1:4000`.
- **Joining a Room**: 
  - Users can join a room by emitting a `joinRoom` event with their username and chosen room.
- **Sending Messages**: 
  - To send a message, emit a `chatMessage` event with the room and message content.
- **Private Messaging**: 
  - Send a private message to a specific user by emitting a `privateMessage` event with the receiver's ID and message content.

## Troubleshooting

- **Server Not Starting**: Ensure all dependencies are installed correctly with `npm install`.
- **Connection Issues**: Verify the CORS settings and ensure the frontend domain matches.
- **Socket Events Not Working**: Check the event names and parameters being used in the frontend to ensure they match the server's expectations.

## Conclusion

This manual should help you understand and interact with the Chat App's backend. For further queries or issues, refer to the project's [README](README.md) or open an issue in the repository.
