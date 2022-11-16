<template>
      <div class="input-group ">
      <span class="input-group-text" >任务</span>
      <input type="text" class="form-control" placeholder="请填写任务信息" v-model="task">
      <button class="btn btn-primary" type="button" @click="addTask">添加新任务</button>
    </div>
</template>

<script>
export default {
  emits:["addTask"],
  data(){
    return{
      task:""
    }
  },
  methods:{
    addTask(){
      this.$emit("addTask",this.task)
      this.task=""
    }
  }
}
</script>