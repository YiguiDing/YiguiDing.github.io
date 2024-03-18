<template>
    <div class="orderListBox" :style="{'padding-top': paddingTop,'padding-bottom': paddingBottom}">
        <ul>
            <li v-for="item in orderList" :key="item.id">
                <div class="form-check checkbox">
                    <input class="form-check-input" type="checkbox" v-model="item.goods_state">
                </div>
                <img :src="item.goods_img" alt="">
                <div class="orderInfo">
                    <div class="goods_name">{{item.goods_name}}</div>
                    <div class="goods_price_info">
                        <span class="goods_price">¥{{item.goods_price}}</span>
                        <esCounterVue v-model:count="item.goods_count" :min="1"></esCounterVue>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import esCounterVue from './esCounter.vue';
export default {
    props: {
        orderList: {
            type: Array,
            require: true,
        },
        paddingTop:{
            type:String,
            default:"40px"
        },
        paddingBottom:{
            type:String,
            default:"40px"
        },
    },
    components: {
        esCounterVue
    }
}
</script>

<style lang="less" scoped>
.orderListBox {
    ul,
    li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid rgb(240, 240, 240);

        .checkbox {
            display: flex;
            align-items: center;
            justify-content: center;
            /*左右居中*/
            width: 40px;

            input {
                border-radius: 50%;
            }
        }

        img {
            height: 100px;
            width: 100px;
        }

        .orderInfo {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;

            .goods_price_info {
                display: flex;
                justify-content: space-between;
                /*上下居中*/
                align-items: center;
                .goods_price {
                    color: red;
                    font-weight: bold;
                }
            }
        }

    }

}
</style>