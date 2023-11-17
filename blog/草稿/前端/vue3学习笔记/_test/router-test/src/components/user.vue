<template>
  <div class="userInfoBox">
    <div class="left">
      <button @click="logout">登出</button><br>
      <router-link to="/user/info">用户信息</router-link><br>
      <router-link to="/user/right">用户权利</router-link>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      localStorage.setItem("token",'')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less">
.userInfoBox{
  display: flex;
  .left{
    width: 200px;
    background-color: skyblue;
  }
  .right{
    flex: 1;
    background-color: pink;
  }
}
.actived_by_router{
  background-color: red;
}
</style>