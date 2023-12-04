<script setup lang="ts">
import "spacecraft.io/client/style.css";
import { shallowRef, onMounted } from "vue";
// @ts-ignore
import type { ServerConfig } from "spacecraft.io/client";
let list: ServerConfig = [
  {
    label: "香港:https://dingdingdang.online",
    value: "https://dingdingdang.online",
  },
];
let Spacecraft = shallowRef();
onMounted(async () => {
  // @ts-ignore
  const { SpacecraftVue } = await import("spacecraft.io/client");
  Spacecraft.value = SpacecraftVue;
});
</script>
<template>
  <component v-if="Spacecraft" :is="Spacecraft" :server-addrs="list" />
</template>
