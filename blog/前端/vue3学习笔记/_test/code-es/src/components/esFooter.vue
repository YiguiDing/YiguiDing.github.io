<template>
    <div class="esFooterBox" :style="{'height':height}">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" :checked="allIsSelectted" @change="checkboxChanged" id="esFooterBox_selecttedAll">
            <label class="form-check-label" for="esFooterBox_selecttedAll">全选</label>
        </div>
        <div class="totalPrice">
            合计: <span>¥{{totalPrice}}</span> 
        </div>
        <button class="btn btn-primary checkOut">
            结算:({{countSelectted}})
        </button>
    </div>
</template>

<script>
export default {
    emits: ["checkboxChanged"],
    props: {
        'height': {
            type: String,
            default: "60px"
        },
        'allIsSelectted':{
            type:Boolean,
            require:true
        },
        'totalPrice':{
            type:[Number,String],
            require:true
        },
        'countSelectted':{
            type:Number,
            require:true
        }
    },
    methods:{
        checkboxChanged(){
            this.$emit('checkboxChanged')
        }
    }
}
</script>

<style lang="less" scoped>
.esFooterBox {
    display: flex;
    justify-content:space-between;/*左右居中*/
    align-items: center;/*上下居中*/
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    padding:0 10px;
    background-color: white;
    .totalPrice{
        span{
            color: red;
        }
    }
    .checkOut{
        padding: 10px 20px;
        border-radius:99999px;
    }
}
</style>