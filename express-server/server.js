var express = require('express');
var app = express();

var socketio = require('socket.io');

var server = app.listen( 8000, () => {
    console.log('listening on port 8000');
});

var io = socketio( server, {pingTimeout: 60000} )


io.on( "connection", socket => {
    console.log( "Client Connected" )

    // socket.emit(
    //     "Welcome",
    //     message = `Welcome Client ${ socket.id }`
    // )

    // socket.broadcast.emit(
    //     "NewClient",
    //     message = `Client ${ socket.id } has connected`
    // )
} )

io.on( "message", data => console.log( 1 ) )