import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer)

io.on( "connection", socket => {
  console.log("user connected");
  socket.emit("welcome", "welcome man");
} )

io.on( "message", data => console.log( 1 ) )

httpServer.listen(3000);