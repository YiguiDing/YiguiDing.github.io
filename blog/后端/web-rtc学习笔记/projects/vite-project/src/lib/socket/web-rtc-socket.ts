import { Socket } from "../type/socket";
import { SignalingChannel } from "./signaling-channel";

export class WebRTCSocket extends Socket {
  dataChannel: RTCDataChannel;
  constructor(
    private peerConnection: RTCPeerConnection,
    private signalingChannel: SignalingChannel,
  ) {
    super();
    // 初始化 data channel
    this.dataChannel = this.peerConnection.createDataChannel("data");
    this.dataChannel.onopen = () => this.emit("open");
    this.dataChannel.onclose = () => this.emit("close");
    this.dataChannel.onmessage = (event) => this.emit("data", event.data);
    // 收到 offer 自动回复 answer
    this.signalingChannel.once("offer", async (offer) => {
      this.peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await this.peerConnection.createAnswer();
      await this.peerConnection.setLocalDescription(answer);
      signalingChannel.sendAnswer(answer);
    });
    // 收到 answer 设置 remote 描述
    this.signalingChannel.once("answer", async (answer) => {
      const remoteDesc = new RTCSessionDescription(answer);
      await this.peerConnection.setRemoteDescription(remoteDesc);
    });
  }
  async sendOffer() {
    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);
    /** 等待 ICE 收集完成后的 localDescription */
    let _offer_ = await this.waitToCompleteICEGathering(1000);
    if (!_offer_) throw Error("failed to gather ICE candidates for offer");
    this.signalingChannel.sendOffer(_offer_);
  }
  write(data: Buffer): void {
    this.dataChannel.send(data);
  }
  /**
   * 等待 ICE 收集完成
   * @param timeout
   * @returns
   */
  private waitToCompleteICEGathering(timeout: number) {
    return new Promise<RTCSessionDescription>((resolve) => {
      setTimeout(() => resolve(this.peerConnection.localDescription!), timeout);
      this.peerConnection.addEventListener("icegatheringstatechange", () => {
        if (this.peerConnection.iceGatheringState === "complete")
          resolve(this.peerConnection.localDescription!);
      });
    });
  }
}
