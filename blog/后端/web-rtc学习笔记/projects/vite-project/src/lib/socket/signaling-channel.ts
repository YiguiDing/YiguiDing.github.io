import { EventEmitter } from "node:events";
import { Socket, Manager } from "socket.io-client";

type Events = {
  offer: [RTCSessionDescriptionInit];
  answer: [RTCSessionDescriptionInit];
  icecandidate: [RTCIceCandidate];
};

export class SignalingChannel extends EventEmitter<Events> {
  socket: Socket;
  constructor(web_socket_manager: Manager) {
    super();
    this.socket = web_socket_manager.socket("/signaling");
    this.socket.on("offer", (offer) => this.emit("offer", offer));
    this.socket.on("answer", (answer) => this.emit("answer", answer));
    this.socket.on("icecandidate", (icecandidate) => this.emit("icecandidate", icecandidate));
  }
  sendOffer(offer: RTCSessionDescriptionInit) {
    this.socket.emit("offer", offer);
  }
  sendAnswer(answer: RTCSessionDescriptionInit) {
    this.socket.emit("answer", answer);
  }
  sendIceCandidate(icecandidate: RTCIceCandidate) {
    this.socket.emit("icecandidate", icecandidate);
  }
}
