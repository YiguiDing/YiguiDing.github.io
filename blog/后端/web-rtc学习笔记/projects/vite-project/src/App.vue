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
    <div class="content">
      收到消息：
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
