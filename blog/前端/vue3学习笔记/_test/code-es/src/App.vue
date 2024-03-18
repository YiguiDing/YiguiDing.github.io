<template>

  <esHeaderVue 
  headerName="购物车" 
  :height="40+'px'"
  ></esHeaderVue>

  <esOrderListVue
  :orderList="orderList" 
  :paddingTop="40+'px'" 
  :paddingBottom="60+'px'"
  ></esOrderListVue>

  <esFooterVue 
  :height="60+'px'" 
  @checkboxChanged="changeAllBeSelecttedStatus"
  :allIsSelectted="allIsSelectted" 
  :totalPrice="totalPrice" 
  :countSelectted="countSelectted"
  ></esFooterVue>

</template>
<script>
import esHeaderVue from './components/esHeader.vue';
import esOrderListVue from './components/esOrderList.vue';
import esFooterVue from './components/esFooter.vue'
export default
  {
    components:
    {
      esHeaderVue,
      esOrderListVue,
      esFooterVue
    },
    data() {
      return {
        orderList: 
        [
          //测试数据
          { "id": 1, "goods_name": "班俏BANQIAO超火ins潮卫衣女士2020秋季新款韩版宽松慵懒风薄款外套带帽上衣", "goods_img": "https://www.escook.cn/vuebase/pics/1.png", "goods_price": 108, "goods_count": 1, "goods_state": true },
          { "id": 2, "goods_name": "嘉叶希连帽卫衣女春秋薄款2020新款宽松bf韩版字母印花中长款外套ins潮", "goods_img": "https://www.escook.cn/vuebase/pics/2.png", "goods_price": 129, "goods_count": 1, "goods_state": true },
          { "id": 3, "goods_name": "思蜜怡2020休闲运动套装女春秋季新款时尚大码宽松长袖卫衣两件套", "goods_img": "https://www.escook.cn/vuebase/pics/3.png", "goods_price": 198, "goods_count": 1, "goods_state": false },
          { "id": 4, "goods_name": "思蜜怡卫衣女加绒加厚2020秋冬装新款韩版宽松上衣连帽中长款外套", "goods_img": "https://www.escook.cn/vuebase/pics/4.png", "goods_price": 99, "goods_count": 1, "goods_state": false },
          { "id": 5, "goods_name": "幂凝早秋季卫衣女春秋装韩版宽松中长款假两件上衣薄款ins盐系外套潮", "goods_img": "https://www.escook.cn/vuebase/pics/5.png", "goods_price": 156, "goods_count": 1, "goods_state": true },
          { "id": 6, "goods_name": "ME&CITY女装冬季新款针织抽绳休闲连帽卫衣女", "goods_img": "https://www.escook.cn/vuebase/pics/6.png", "goods_price": 142.8, "goods_count": 1, "goods_state": true },
          { "id": 7, "goods_name": "幂凝假两件女士卫衣秋冬女装2020年新款韩版宽松春秋季薄款ins潮外套", "goods_img": "https://www.escook.cn/vuebase/pics/7.png", "goods_price": 219, "goods_count": 2, "goods_state": true },
          { "id": 8, "goods_name": "依魅人2020休闲运动衣套装女秋季新款秋季韩版宽松卫衣 时尚两件套", "goods_img": "https://www.escook.cn/vuebase/pics/8.png", "goods_price": 178, "goods_count": 1, "goods_state": true },
          { "id": 9, "goods_name": "芷臻(zhizhen)加厚卫衣2020春秋季女长袖韩版宽松短款加绒春秋装连帽开衫外套冬", "goods_img": "https://www.escook.cn/vuebase/pics/9.png", "goods_price": 128, "goods_count": 1, "goods_state": false },
          { "id": 10, "goods_name": "Semir森马卫衣女冬装2019新款可爱甜美大撞色小清新连帽薄绒女士套头衫", "goods_img": "https://www.escook.cn/vuebase/pics/10.png", "goods_price": 153, "goods_count": 1, "goods_state": false }
        ]
      }
    },
    created() {//created生命周期函数,创建完毕后便调用
      this.getOrderList()
    },
    computed: {
        selectted(){//筛选出选中的项
            return this.orderList.filter(item => item.goods_state)
        },
        totalPrice() {//计算总价
            let totalPrice = 0
            this.selectted.forEach(element => {
                totalPrice += element.goods_price * element.goods_count
            });
            return totalPrice.toFixed(2);//保留两位小数
        },
        countSelectted(){//选中商品数
            return this.selectted.length
        },
        allIsSelectted(){//计算是否全部被选中
            for (let index = 0; index < this.orderList.length; index++) {
                const element = this.orderList[index];
                if(!element.goods_state)
                    return false
                else
                    continue
            }
            return true
        },
    },
    methods:{
      async getOrderList() {//获取订单列表
        let { data: reqBody } = await this.$http.get("/api/cart")
        // this.orderList = reqBody.list
      },
        changeAllBeSelecttedStatus(){//选中全部 或 全部取消选中
            let nowStates = this.allIsSelectted
            this.orderList.forEach(element=>{
                element.goods_state= !nowStates
            })
        }
    }
  }
</script>
<style scoped>

</style>
