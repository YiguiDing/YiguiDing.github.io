<template>
  <div ref="wrapper" class="desmosElRef"></div>
  <!-- <button @click="console.log(calculator.getState())">getState</button> -->
</template>
<script lang="ts" setup>
import { ref, defineProps, onMounted, toValue } from "vue";
const { state, expressions } = defineProps<{
  state?: object;
  expressions?: Array<{ id: string; latex: string }>;
}>();
const wrapper = ref<HTMLDivElement>();
const calculator = ref<any>(undefined);
onMounted(async () => {
  // ########################################################################
  // import desmos method 1: import from npm/desmos@1.5.4
  // const Desmos = await import("desmos");
  // ########################################################################
  // const calculator = Desmos.GraphingCalculator(toValue(desmosElRef)!);
  // import desmos method 2: import desmos@v1.10.1
  await import("./calculator.js");
  calculator.value = window.Desmos.GraphingCalculator(toValue(wrapper)!);
  // ########################################################################
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
