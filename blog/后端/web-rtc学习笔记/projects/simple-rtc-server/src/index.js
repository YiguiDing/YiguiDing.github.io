import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: "*" } });

const addr = "0.0.0.0";
const port = 8080;

io.of("/signaling").on("connection", (socket) => {
  socket.on("offer", (offer) => socket.broadcast.emit("offer", offer));
  socket.on("answer", (answer) => socket.broadcast.emit("answer", answer));
  socket.on("icecandidate", (icecandidate) => socket.broadcast.emit("icecandidate", icecandidate));
});

httpServer.listen(port, addr, () => {
  console.log(`server is running at ${addr}:${port}`);
});
