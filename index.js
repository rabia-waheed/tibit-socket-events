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
    socket.on('meetingJoin', (msg) => {
      console.log('meetingJoin: ' + msg);
      io.emit('meetingJoin', msg);
    });
    socket.on('currentState', (msg) => {
      console.log('currentState: ' + msg);
      io.emit('currentState', msg);
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
  socket.on('extendMeeting', (msg) => {
    console.log('extendMeeting: ' + msg);
    io.emit('extendMeeting', msg);
  });
  socket.on('hostLeave', (msg) => {
    console.log('hostLeave: ' + msg);
    io.emit('hostLeave', msg);
  });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
<<<<<<< HEAD
  // commented this line in dev-2
=======
// commented this line
>>>>>>> dev
