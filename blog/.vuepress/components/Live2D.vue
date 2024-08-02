<script setup>
import { onMounted, shallowRef } from "vue";
let VueLive2D = shallowRef(null);
onMounted(async () => {
  VueLive2D.value = (await import("vue3-live2d")).default;
});
</script>
<template>
  <component
    v-if="VueLive2D"
    :is="VueLive2D"
    :style="{
      position: 'fixed',
      bottom: 0,
      right: 0,
      // zIndex：
      // 网页页脚 40
      // 文章目录 98
      zIndex: 99,
      // 返回顶部 100
    }"
    width="200"
    height="200"
    resolution="2"
    apiPath="/vue3-live2d-static-api/indexes"
    :model="['hk416_3401/hk416_3401', 'default']"
  />
</template>
