<script setup lang="jsx">
import { ref } from 'vue'
const count = ref(0)
const setCount = () => count.value++
const Render = () => <button onClick={setCount}>count is {count.value}</button>
</script>

<template>
  <Render />
</template>

<style scoped>
button {
  background-color: red;
}
</style>
