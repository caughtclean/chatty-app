// server.js

const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 4000
const PORT = 4000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.on('connection', (socket) => {
  console.log('Client connected');

    setTimeout(() => {
    socket.send(JSON.stringify({ type: "hello"}))
  }, 2000)

    socket.on('message', (message) => {
    message = JSON.parse(message);
    console.log('Got message', message)
  });

  socket.on('close', () => console.log('Client disconnected'));
});