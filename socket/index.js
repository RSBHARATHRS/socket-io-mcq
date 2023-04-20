const app = require('express')();
const httpServer = require('http').createServer(app);

const port = process.env.PORT || 4000;

module.exports = (io) => {

  io.on('connection', socket => {

    console.log('new connection');
    socket.emit("message", "worldwewr");

    socket.on('score', (message) => {
      console.log("score:", message);
      io.emit('score', message);
    });

    socket.on('disconnect', () => console.log('disconnected'));

  })
}