<template>
  <div class="esHeaderBox" :style="{'color':color,'background-color': bgcolor,'height':height}">
  {{headerName}}
  </div>
</template>

<script>
export default {
    props:{
        'headerName':{
            type:String,
            required:true,
            default:"默认标题",
        },
        'color':{
            type:String,
            default:"white",
        },
        'bgcolor':{
            type:String,
            default:"#0d6efd",
        },
        'height':{
            type:String,
            default:"40px"
        }
    }
}
</script>

<style lang="less" scoped>
    .esHeaderBox{
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: center;/*左右居中*/
        align-items: center;/*上下居中*/
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
    }
</style>