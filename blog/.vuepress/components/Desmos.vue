<template>
  <div ref="desmosElRef" class="desmosElRef"></div>
</template>
<script lang="ts" setup>
import { ref, defineProps, onMounted, toValue } from "vue";
const { expressions } = defineProps<{ expressions?: Array<{ id: string; latex: string }> }>();
const desmosElRef = ref<HTMLDivElement>();
onMounted(async () => {
  // const Desmos = await import("desmos");
  await import("./calculator.js");
  const calculator = Desmos.GraphingCalculator(toValue(desmosElRef)!);
  expressions?.forEach((expression) => {
    calculator.setExpression(expression);
  });
});
</script>

<style lang="less" scoped>
.desmosElRef {
  width: 100%;
  height: 400px;
}
</style>
