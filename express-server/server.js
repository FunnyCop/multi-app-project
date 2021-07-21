var express = require("express");
var app = express();
var socket = require('socket.io');
var server = app.listen(3000);
var io = socket.listen(server);

io.sockets.on( "connection", socket => {
  console.log("user connected");
  socket.emit("welcome", "welcome man");
} )

io.sockets.on( "message", data => console.log( 1 ) )