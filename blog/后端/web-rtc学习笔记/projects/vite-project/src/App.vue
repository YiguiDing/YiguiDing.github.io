<script setup lang="ts">
import { Manager } from "socket.io-client";
import { WebRTCSocket } from "./lib/socket/web-rtc-socket";
import { SignalingChannel } from "./lib/socket/signaling-channel";
import { onMounted } from "vue";

async function main() {
  let web_socket = new Manager("localhost:8080");
  let signalingChannel = new SignalingChannel(web_socket);
  let peerConnection = new RTCPeerConnection();
  let webRtcSocket = new WebRTCSocket(peerConnection, signalingChannel);
  await webRtcSocket.sendOffer();
  webRtcSocket.on("data", (data) => console.log(data));
  webRtcSocket.on("open", () => {
    webRtcSocket.write(Buffer.from("hello web-rtc!"));
  });
}

onMounted(main);
</script>
<template>
  <div></div>
</template>

<style scoped lang="less"></style>
