---
title: vue中的jsx写法格式
date: 2023-11-21T19:51:00+08:00
tag: [jsx,vue]
category: 前端
star: true
---

# vue中的jsx写法格式

# 基于单文件的jsx写法(使用体验较好)

```vue
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
```

## 基于jsx/tsx文件写法

```jsx
import { defineComponent, ref } from 'vue'
// 引入后缀为'.module.css'的文件,会生成局部作用域的css类名/id
import styles from "./HelloWorld3.module.css"
export default defineComponent({
  setup() {
    const idName = styles.button_id
    const count = ref(0)
    const setCount = () => count.value++
    return function Render() {
      return <button id={idName} className={styles.button} onClick={setCount}>count is {count.value}</button>
    }
  },
})
```

```css
/* HelloWorld3.module.css */
.button{
  background-color: green;
}
#button_id{
  color: red;
}
```
