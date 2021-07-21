const express = require( "express" )
const app = express()
const port = 8000

const server = app.listen( port, () => {
    console.log( `The server is running on port ${ port }` )
} )

const io = require( "socket.io" )( server, { cors: true } )

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

io.on( "NewRotation", ( socket, deg ) => socket.broadcast.emit( "SetRotation", deg ) )