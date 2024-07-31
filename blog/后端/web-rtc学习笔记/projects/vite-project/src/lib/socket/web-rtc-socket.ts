import { Socket } from "../type/socket";
import { SignalingChannel } from "./signaling-channel";

export class WebRTCSocket extends Socket {
  private peerConnection: RTCPeerConnection;
  private dataChannel?: RTCDataChannel;
  constructor(
    private initiator: boolean,
    private signalingChannel: SignalingChannel,
  ) {
    super();
    // ######################################################################################
    this.peerConnection = new RTCPeerConnection();
    // ######################################################################################
    // 接收并保存offer 然后发送answer
    this.signalingChannel.addListener("offer", async (offer) => {
      const remoteDesc = new RTCSessionDescription(offer);
      await this.peerConnection.setRemoteDescription(remoteDesc);
      this.sendAnswer();
    });
    // 接收并保存answer
    this.signalingChannel.addListener("answer", async (answer) => {
      const remoteDesc = new RTCSessionDescription(answer);
      await this.peerConnection.setRemoteDescription(remoteDesc);
    });
    // ######################################################################################
    // 接收并保存iceCandidate
    this.signalingChannel.addListener("icecandidate", async (icecandidate) => {
      await this.peerConnection.addIceCandidate(icecandidate);
    });
    // 监听和发送iceCandidate
    this.peerConnection.addEventListener("icecandidate", (e) => {
      if (e.candidate) this.signalingChannel.sendIceCandidate(e.candidate);
    });
    // ######################################################################################
    if (this.initiator) {
      // 发起方创建数据通道并发起邀约
      this.setUpDataChannel(this.peerConnection.createDataChannel("data"));
      this.sendOffer();
    } else {
      // 接收方等待数据通道
      this.peerConnection.addEventListener("datachannel", (e) => {
        this.setUpDataChannel(e.channel);
      });
    }
  }
  /**
   * 回复邀约
   */
  private async sendAnswer() {
    const answer = await this.peerConnection.createAnswer();
    await this.peerConnection.setLocalDescription(answer);
    this.signalingChannel.sendAnswer(answer);
  }
  /**
   * 发送邀约
   */
  private async sendOffer() {
    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);
    this.signalingChannel.sendOffer(offer);
  }
  setUpDataChannel(dataChannel: RTCDataChannel) {
    this.dataChannel = dataChannel;
    this.dataChannel.onopen = () => this.emit("open");
    this.dataChannel.onclose = () => this.emit("close");
    this.dataChannel.onmessage = (event) => this.emit("data", event.data);
  }
  write(data: ArrayBuffer): void {
    if (!this.dataChannel) throw new Error("链接尚未建立!");
    this.dataChannel.send(data);
  }
}
