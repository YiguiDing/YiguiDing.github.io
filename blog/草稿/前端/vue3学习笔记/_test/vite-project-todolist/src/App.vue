<template>
  <div class="todolist_main">
    <todoListInput @addTask="addTask"></todoListInput>
    <todoListList v-bind:todoListData=" btnStatus==1?  allTodoListData : btnStatus==2? doneTodoListData : notDoneTodoListData "></todoListList>
    <toDoListBtns v-model:btnStatus="btnStatus"></toDoListBtns>
  </div>
</template>
<script>
import todoListInput from "./components/todoListInput.vue"
import todoListList from "./components/todoListList.vue"
import toDoListBtns from "./components/toDoListBtns.vue"
export default {
  components: {
    todoListInput,
    todoListList,
    toDoListBtns
  },
  data() {
    return {
      nextId: 5,
      btnStatus: 1, //变化范围:[1,2,3]
      todoList: [
        { id: 0, task: "测试文字0", done: true },
        { id: 1, task: "测试文字1", done: true },
        { id: 2, task: "测试文字2", done: false },
        { id: 3, task: "测试文字3", done: true },
        { id: 4, task: "测试文字4", done: true },
      ]
    }
  },
  methods: {
    addTask(task) {
      if(!task) return alert("任务名称不能为空......")
      this.todoList.push({
          id: this.nextId++,
          task: task,
          done: false,
      })
    },
  },
  computed: {
    allTodoListData() {
      return this.todoList
    },
    doneTodoListData() {
      return this.todoList.filter(item => item.done)
    },
    notDoneTodoListData() {
      return this.todoList.filter(item => !item.done)
    }
  }

}
</script>

<style lang="less" scoped>
.todolist_main {
  margin: 10px auto;
  width: 600px;
}
</style>