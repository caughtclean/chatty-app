// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('node-uuid');

// Set the port to 4000
const PORT = 4000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });
wss.broadcast = function broadcast(message) {
  wss.clients.forEach(function each(socket) {
    socket.send(JSON.stringify(message))
  });
}

wss.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message_string) => {
    debugger
    message = JSON.parse(message_string);
    user = message.user
    switch(message.type) {
      case "newMessage":
        message.id = uuid.v4()
        wss.broadcast(message);
        console.log("newmessage", message)
        break;
      case "newUser":
        wss.broadcast(message, user)
        console.log("newUser", user)
        break;
      default:

        throw new Error("Unknown event type " + data.type);
    // message.id = uuid.v4()
    // wss.broadcast(message);

    console.log('Got message', message)
    };
  });

  socket.on('close', () => console.log('Client disconnected'));
});

