<template>
    <div class="btn-group btns" role="group">
        <button type="button" class="btn" :class="btnStatus==1? 'btn-primary':'btn-secondary'" @click="changeBtnStatus(1)">全部</button>
        <button type="button" class="btn" :class="btnStatus==2? 'btn-primary':'btn-secondary'" @click="changeBtnStatus(2)">已完成</button>
        <button type="button" class="btn" :class="btnStatus==3? 'btn-primary':'btn-secondary'" @click="changeBtnStatus(3)">未完成</button>
    </div>
</template>
<script>
export default {
    emits:["update:btnStatus"],
    props: {
        'btnStatus': {
            type: Number,
            required: true,
            defult: 0
        }
    },
    methods:{
        changeBtnStatus(status){
            this.$emit("update:btnStatus",status)
        }
    }
}
</script>
  
<style lang="less" scoped>
.btns {
    width: 100%;
    display: flex;
    button {
        flex: 1;
    }
}
</style>