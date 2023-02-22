const express = require("express");
const { initializeRoutes } = require("./api/routes");
let app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io'); // Add this

const server = http.createServer(app); // Add this
const port = process.env.PORT || 8080;

app.use(cors()); // Add cors middleware
app.use(express.json());
app = initializeRoutes(app);

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Listen for when the client connects via socket.io-client
io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  // Add a user to a room
  socket.on('join_room', (data) => {
    const { username, room } = data; // Data sent from client when join_room event emitted
    socket.join(room); // Join the user to a socket room
  });
});

server.listen(port, () => console.log("🚀 server is successfully running!"));
  