var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(8000, function(){
    console.log('listening on port 8000');
});


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