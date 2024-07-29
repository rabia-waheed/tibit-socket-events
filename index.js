import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: '*', // or specify the allowed origin(s)
      methods: ['GET', 'POST','PUT','DELETE'], // specify the allowed methods
    },
  });
  app.use(cors({
    origin: '*', // You can specify the exact origins instead of '*'
    methods: ['GET', 'POST','PUT', 'DELETE'],
  }));
  const port = 5050;

app.get('/', function(req, res) { 
  res.sendFile('index.html');
 });  
server.listen(port, function() { 
  console.log(`Listening on port ${port}`); 
}); 
io.on('connection', (socket) => {
    console.log('a user connected');
  
    socket.on('statVideo', (msg) => {
      console.log('statVideo: ' + msg);
      io.emit('statVideo', msg);
    });

    socket.on('video-action', (action) => {
      console.log('Received video action:', action);
     
      io.emit('video-action', action);
    });
    socket.on('videoAction', (action) => {
      console.log('Received video action:', action);
     
      io.emit('videoAction', action);
    });
    socket.on('test', (msg) => {
      console.log('testtt: ' + msg);
      io.emit('test', msg);
    });

    socket.on('nextStep', (msg) => {
      console.log('nextStep: ' + msg);
      io.emit('nextStep', msg);
    });
   //starter
   socket.on('starterIndex', (msg) => {
    console.log('starterIndex: ' + msg);
    io.emit('starterIndex', msg);
  });
  socket.on('findMatch', (msg) => {
    console.log('findMatch: ' + msg);
    io.emit('findMatch', msg);
  });
  socket.on('nextEpisode', (msg) => {
    console.log('nextEpisode: ' + msg);
    io.emit('nextEpisode', msg);
  });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });