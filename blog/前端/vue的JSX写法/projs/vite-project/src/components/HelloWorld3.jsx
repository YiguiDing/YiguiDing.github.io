import { defineComponent, ref } from 'vue'
// 模块化css类名/id
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