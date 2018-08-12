const WebSocket = require('ws');
const express = require('express');
const http = require('http');

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });
 
wss.on('connection', function connection(ws) {

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('hello from server');
  });
 
  ws.send('something');
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Listenning on port  ${server.address().port}`)
});