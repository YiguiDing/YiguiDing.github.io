<template>
  <div ref="wrapper" class="desmosElRef"></div>
  <!-- <button @click="console.log(calculator.getState())">getState</button> -->
</template>
<script lang="ts" setup>
import { ref, defineProps, onMounted, toValue } from "vue";
import DesmosURL from "./calculator.js?url"; // v1.10.1

const { state, expressions } = defineProps<{
  state?: object;
  expressions?: Array<{ id: string; latex: string }>;
}>();

const wrapper = ref<HTMLDivElement>();
const calculator = ref<any>(undefined);
onMounted(async () => {
  // @ts-ignore
  await import(/* @vite-ignore */ DesmosURL);
  calculator.value = window.Desmos.GraphingCalculator(toValue(wrapper)!);
  // setState
  state && calculator.value.setState(state);
  // setExpression
  expressions?.forEach((expression) => {
    calculator.value.setExpression(expression);
  });
});
</script>

<style lang="less" scoped>
.desmosElRef {
  width: 100%;
  height: 400px;
}
</style>
