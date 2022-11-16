<template>
  <ul class="list-group">
    <li v-for="item in todoListData" :key="item.id"
      class="list-group-item d-flex justify-content-between align-items-center">
      <input class="form-check-input tick" type="checkbox" v-model="item.done">
      <span class="context" :class="item.done ? 'ticked':''" >{{item.task}}</span>
      <span v-if="item.done" class="badge bg-success rounded-pill status">已完成</span>
      <span v-else class="badge bg-warning rounded-pill status">未完成</span>
      <span class="badge bg-danger del" @click="del(item.id)">删除</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    'todoListData': {
      type: Array,
      required: true,
      defult: []
    }
  },
  methods: {
    del(id) {
      this.todoListData.splice(this.todoListData.filter(item => item.id == id), 1)
    }
  }
}
</script>
<style lang="less" scoped>
ul li {
  display: flex;
  justify-content:flex-between;
  .tick {
    margin-right: 10px;
  }

  .context {
    flex:1;
    overflow: hidden;
    text-overflow: ellipsis;
    &.ticked{
      text-decoration: line-through green ;
      color: gray;
      font-style:italic;
    }
  }

  .status {
    margin-left: 10px;
  }

  .del {
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>