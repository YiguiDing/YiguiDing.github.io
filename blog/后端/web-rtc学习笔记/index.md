---
title: web-rtc学习笔记：通过DataChannel实现二进制数据流的传输
date: 2024-08-01T22:58:00
---


# web-rtc学习笔记

## WebRTC通信原理

WebRTC（Web Real-Time Communication）是一个支持浏览器之间实时通信的技术框架。  
它允许在用户的浏览器中直接进行音视频聊天或数据共享，无需安装任何插件。

- **建立连接**：WebRTC使用一种称为PeerConnection的API来创建和管理点对点的连接。
- **媒体处理**：通过getUserMedia API获取用户的音频和视频流。
- **数据传输**：通过DataChannels进行文本、二进制数据等非媒体信息的传输。
- **信令交换**：为了建立连接，需要通过信令服务器交换一些必要的信息，如SDP描述和ICE候选信息。

## 相关概念

- **SDP (Session Description Protocol)**: 是一个用于描述多媒体会话的格式化文本协议。在WebRTC中，SDP描述了会话的媒体类型（音频、视频）、编码方式、端口信息等。
- **ICE (Interactive Connectivity Establishment)**: 是一种网络穿透技术，用于解决NAT穿越问题，确保不同网络环境下的设备能够互相通信。
- **Candidate**: ICE候选是潜在的网络接口和端口组合，可以用来建立点对点连接。通常包括主机候选、反射候选、中继候选等。
- **Offer/Answer**: 在WebRTC中，两个Peer之间需要通过Offer和Answer的方式来协商连接参数。发起方发送一个包含其SDP描述的Offer给接收方，接收方根据Offer生成自己的SDP描述并返回Answer，双方以此完成连接的建立。
- **信令服务器**：在WebRTC通信中并不直接参与媒体流的传输，它的主要作用是在两个Peer之间传递必要的控制信息，比如SDP描述和ICE候选信息。这通常是通过WebSocket、XMPP或其他实时通信协议实现的。

WebRTC通过一系列的协议和技术实现在浏览器之间的直接通信，  
而信令服务器则负责帮助双方协商出连接所需的参数，从而建立起通信通道。

## WebRTC建立连接的流程

WebRTC建立连接的过程涉及到多个步骤，主要包括信令交换和媒体流传输（数据流）两大部分。

### 简单总结

1. 交换offer/answer
2. 交换iceCandidata
3. 建立音视频通信或字节通信。

### 详细流程

下面是一个典型的WebRTC连接建立的详细流程：

1. **初始化PeerConnection对象**:
   - 创建`RTCPeerConnection`实例，这是WebRTC的核心组件，用于建立和维护点对点连接。

2. **设置媒体流**:
   - 使用`getUserMedia()`API获取本地媒体流（例如摄像头和麦克风的输出）。
   - 将本地媒体流添加到`RTCPeerConnection`实例中。

3. **创建Offer**:
   - 调用`createOffer()`方法来生成一个包含本地媒体流描述的SDP（Session Description Protocol）描述。
   - 使用`setLocalDescription()`方法设置本地描述。

4. **发送Offer**:
   - 通过信令服务器将Offer SDP发送给远程端。信令服务器可以是WebSocket、XMPP或任何其他支持实时消息传递的服务。

5. **接收Offer**:
   - 远程端接收到Offer SDP。

6. **创建Answer**:
   - 远程端使用`createAnswer()`方法生成一个包含其媒体流描述的SDP描述。
   - 使用`setLocalDescription()`方法设置远程端的本地描述。

7. **发送Answer**:
   - 通过信令服务器将Answer SDP发送回发起端。

8. **接收Answer**:
   - 发起端接收到Answer SDP。

9. **设置远程描述**:
   - 在两端分别使用`setRemoteDescription()`方法设置对方的描述。
     - 发起端设置远程端的Answer SDP。
     - 远程端设置发起端的Offer SDP。

10. **ICE候选交换**:
    - 当`RTCPeerConnection`发现新的ICE候选时，它会触发`icecandidate`事件。
    - 每个端通过信令服务器将ICE候选信息发送给对方。
    - 对方接收到ICE候选后，将其添加到其`RTCPeerConnection`实例中。

11. **连接建立**:
    - 当ICE候选交换完成后，连接建立成功，两端可以开始交换媒体流。

12. **媒体流传输**:
    - 一旦连接建立，媒体流就可以直接在两端之间传输，无需通过服务器中转。

13. **关闭连接**:
    - 当不再需要连接时，可以通过关闭`RTCPeerConnection`来结束会话。

这个流程中的关键部分是通过信令服务器进行的Offer/Answer交换以及ICE候选的收集与交换。这些步骤确保了两个端点能够正确地协商它们之间的连接参数，并建立一个高质量的实时通信连接。

## 代码实现

### 信令服务器——服务端代码实现

```ts
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

```

### 信令服务器——客户端代码实现

```ts
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
```

### WebRTCSocket代码实现

```ts
import { EventEmitter } from "node:events";

type Events = {
  open: [];
  data: [Buffer];
  close: [];
};

export abstract class Socket extends EventEmitter<Events> {
  constructor() {
    super();
  }
  abstract write(data: Buffer): void;
}
```

```ts
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
```

### 前端代码实现

```vue
<script setup lang="ts">
import { Manager } from "socket.io-client";
import { WebRTCSocket } from "./lib/socket/web-rtc-socket";
import { SignalingChannel } from "./lib/socket/signaling-channel";
import { Buffer } from "node:buffer";
import { ref } from "vue";

let open = ref(false);
let temp = ref("");
let messages = ref(new Array<any>());
let webSocket = new Manager("localhost:8080");
let signalingChannel = new SignalingChannel(webSocket);
let webRtcSocket: WebRTCSocket;

async function init(initiator: boolean) {
  webRtcSocket = new WebRTCSocket(initiator, signalingChannel);
  webRtcSocket.on("open", () => (open.value = true));
  webRtcSocket.on("close", () => (open.value = false));
  webRtcSocket.on("data", (data) => messages.value.push(data));
}

async function send() {
  webRtcSocket.write(Buffer.from(temp.value));
  temp.value = "";
}
</script>
<template>
  <div class="wrapper">
    <div class="top">连接状态：{{ open }}</div>
    <div class="top">收到消息：</div>
    <div class="content">
      <div class="row" v-for="item in messages">{{ Buffer.from(item) }}</div>
    </div>
    <div class="bottom">
      <button @click="() => init(true)">发起连接</button>
      <button @click="() => init(false)">等待连接</button>
      <input v-model="temp" type="text" />
      <button @click="send">发送消息</button>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid gray;
  .content {
    width: 100%;
    min-height: 100px;
  }
  .bottom {
    display: flex;
  }
}
</style>
```

### 实现效果

![Alt text](assets/images/image.png)
