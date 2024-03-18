<template>
  <myTable :data="goodsList">
    <template v-slot:header>
      <td>序号</td>
      <td>商品名称</td>
      <td>价格</td>
      <td>标签</td>
      <td>操作</td>
    </template>
    <template v-slot:item="{row}">
      <td>{{row.id}}</td>
      <td>{{row.name}}</td>
      <td>{{row.price}}</td>
      <td>
        <span
        v-for="tag in row.tags" :key="tag" 
        class="badge bg-warning text-dark" 
        style="margin:0 5px;cursor: pointer;"
        @click="row.tags.splice(row.tags.findIndex(item => item == tag),1)"
        >{{tag}}</span>

        <input
        type="text" 
        class="form-control"
        style="display: inline;width: 100px; float: right;"
        v-if="row.inputVisible" 
        v-model.trim="row.inputValue" 
        @blur="addTag(row),row.inputValue=''"
        @keyup.enter="addTag(row),row.inputValue=''"
        @keyup.esc="row.inputValue=''"
        v-focus
        >

        <button 
        v-if="!row.inputVisible" 
        type="button"
        class="btn btn-primary" 
        style="padding:2px auto;float: right;" 
        @click="row.inputVisible = true"
        >+Tag
      </button>

      </td>
      <td>
        <button type="button"  class="btn btn-danger">删除</button>
      </td>
    </template>
  </myTable>
</template>


<script>
  import myTable from './components/myTable.vue'
  export default {
    components: {
      myTable
    },
    data() {
      return {
        goodsList: [
          { id: 1, name: "test test test test test test test", price: 100, inputVisible:false, tags: ['tag1', 'tag2'] },
          { id: 2, name: "test test test test test test test", price: 100, inputVisible:false, tags: ['tag1', 'tag2'] },
          { id: 3, name: "test test test test test test test", price: 100, inputVisible:false, tags: ['tag1', 'tag2'] },
          { id: 4, name: "test test test test test test test", price: 100, inputVisible:false, tags: ['tag1', 'tag2'] },
          { id: 5, name: "test test test test test test test", price: 100, inputVisible:false, tags: ['tag1', 'tag2'] },
          { id: 6, name: "test test test test test test test", price: 100, inputVisible:false, tags: ['tag1', 'tag2'] },
        ]
      }
    },
    methods:{
      addTag(row){
        let value =  row.inputValue//获取文本框内容
        row.inputVisible = false//隐藏文本框
        if(value || !row.tags.includes(value)){//判断是否为空 是否已经存在标签
          row.tags.push(value)//添加标签
        }
      },

    },
    directives:{
        focus:{
          mounted(el){
            console.log(el);
            el.focus()
          }
        }
      }
  }
</script>
<style scoped>

</style>