<script setup>
import { onMounted, ref } from "vue";
let VueLive2D = ref(undefined);
onMounted(async () => {
  // 保证其只在浏览器环境被导入
  VueLive2D.value = (await import("vue-live2d")).default;
  console.log(VueLive2D.value);
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
    :homePage="'/'"
    direction="right"
    width="300"
    height="300"
    apiPath="/live2d_models/indexes"
    :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']"
  />
</template>
