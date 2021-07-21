const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer)

io.on( "connection", socket => {
  console.log("user connected");
  socket.emit("welcome", "welcome man");
} )

io.on( "message", data => console.log( 1 ) )

httpServer.listen(3000);