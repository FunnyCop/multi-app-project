const io = require("socket.io");
const server = io.Server(3000);

server.on( "connection", socket => {
  console.log("user connected");
  socket.emit("welcome", "welcome man");
} )

server.on( "message", data => console.log( 1 ) )