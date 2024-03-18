<template>
  <!-- component绑定字符串变量`comName` -->
  <component :is="comName"></component>
  <!-- button切换遍历`comName`的值 -->
  <button @click="comName='ComponentA'">显示ComponentA</button>
  <button @click="comName='ComponentB'">显示ComponentB</button>
</template>

<script>
  import ComponentA from './components/componentA.vue'
  import ComponentB from './components/componentB.vue'
  export default{
    components:{
      //注册子组件
      ComponentA,
      ComponentB
    },
    data(){
      return{
        //定义变量数据
        comName:'ComponentA'
      }
    },
    methods:{
    }
  }
</script>