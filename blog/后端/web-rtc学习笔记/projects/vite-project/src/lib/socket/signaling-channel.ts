import { EventEmitter } from "node:events";
import { Socket, Manager } from "socket.io-client";

type Events = {
  offer: [RTCSessionDescriptionInit];
  answer: [RTCSessionDescriptionInit];
};

export class SignalingChannel extends EventEmitter<Events> {
  socket: Socket;
  constructor(web_socket_manager: Manager) {
    super();
    this.socket = web_socket_manager.socket("/signaling");
    this.socket.on("offer", (offer) => this.emit("offer", offer));
    this.socket.on("answer", (answer) => this.emit("answer", answer));
  }
  sendOffer(offer: RTCSessionDescriptionInit) {
    this.socket.emit("offer", offer);
  }
  sendAnswer(answer: RTCSessionDescriptionInit) {
    this.socket.emit("answer", answer);
  }
}
