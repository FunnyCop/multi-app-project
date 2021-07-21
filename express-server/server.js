const express = require('express');
const app = express();

const server = app.listen(3000, () =>
  console.log('The server is all fired up on port 3000')
);

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
  console.log("user connected");
  socket.emit("welcome", "welcome man");
})

io.on("message", data => console.log(1))