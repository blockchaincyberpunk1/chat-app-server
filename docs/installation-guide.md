# Server Installation Guide for Chat App

## Getting Started

This guide will assist you in setting up the backend server for the Chat App on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation Steps

1. **Clone the Repository**

    Clone the Chat App repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   ```

2. **Navigate to the Server directory**
    Change to the server directory in the cloned repository:

   ```bash
   cd chat-app/server
   ```

3. **Install Dependencies**
   Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

4. **Start the Server**
   Launch the server:

   ```bash
   npm start
   ```

You should see a message indicating that the server is running on a specific port (default is 4000).

## Verifying the Setup

Once the server is running, it will listen for incoming socket connections from the Chat App frontend. You can integrate it with any frontend service that follows the same communication protocol.  Please refer to our [User Manual](docs/user-manual.md). 

## Contributing

To confirm that the server is functioning properly, visit http://localhost:4000 in your web browser. You should not encounter any errors.

## Troubleshooting

### Port Conflicts
If the server fails to start because the port is already in use, you have two options:
- Change the `PORT` variable in your server's code to a different port.
- Free up the port that is currently in use.

### Dependency Issues
If you face issues with missing or incorrect versions of dependencies, make sure to run npm install in the server directory.


