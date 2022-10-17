<template>
    <div class="counterBox">
        <button class="btn" @click="myCount--">-</button>
        <!-- @keyup.enter="event=>event.target.value=myCount"表示当enter键抬起事件发生后重新更新input的value,否则当在结合[ v-model.lazy]使用时不会自动更新,显示错误值 -->
        <!-- <input class="" type="text" v-model.lazy="myCount" @keyup.enter="event=>event.target.value=myCount"> -->
        <!-- 下面一行代码完美解决了上述问题 -->
        <input class="" type="text" :value="myCount" @focusout="myCount = $event.target.value">
        <button class="btn" @click="myCount++">+</button>
    </div>
</template>

<script>
export default {
    props: {
        count:{
            type:Number,
            require: true
        },
        min:{
            type:Number,
            default: NaN //默认值表示不进行最小值检查
        }
    },
    emits: ["update:count"],
    data(){
        return{
            //本地数据 myCount
            myCount:this.count
        }
    },
    methods: {
        setCount(newValue){//设置外部数据 count
            this.$emit("update:count",newValue)
        }
    },
    watch:{
        // 监听 外部数据 count 的改变 和本地数据 myCount 的改变 
        // 使得 myCount ----> `myCount++ 或 myCount-- 或 从input标签输入myCount` ---->  数据合法性检测 ----> count
        // 使得 myCount <------------------------------------------------------------------------------ count
        
        count(newVal){//监听 外部数据 count 的改变,然使其更新到myCount
            this.myCount = newVal
        },
        myCount(newVal,oldVal){//监听 本地数据 myCount 的改变,然使其更新到 外部数据 count
            newVal = parseInt(newVal)
            oldVal = parseInt(oldVal)
            if(typeof newVal == 'number' &&  (this.min == NaN ||  newVal >= this.min) )//判断是否合法
            {
                this.setCount(newVal) //数据合法,则向外部更新新值
            }
            else{
                this.myCount=oldVal //保持原值
            }
        }
    }
}
</script>

<style lang="less" scoped>
.counterBox {
    display: flex;
    // 水平
    justify-content: space-between;
    // 垂直居中
    align-items: center;
    button{
        // height: 1em;
        padding-top: 0;
        padding-bottom: 0;
    }
    input,p{
        max-width: 3em;
        text-align: center;
        padding: 0 10px;
        border: 1px solid rgb(220, 220, 220);
        border-radius: 5px;
        font-size: smaller;
    }
}
</style>