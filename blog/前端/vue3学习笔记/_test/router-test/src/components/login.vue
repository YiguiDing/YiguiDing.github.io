<template>
    <div class="loginBox">
        username:<input type="text" v-model="username"><br>
        password:<input type="password" v-model="password"><br>
        <button @click="login">submit</button>
    </div>
</template>

<script>
import {} from "vue-router"
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            localStorage.setItem("token","")
            if(this.username=='admin' && this.password=='admin')//模拟判断是否登陆成功
            {
                this.$router.push('/user')
                localStorage.setItem("token","XXXXXXXX")//模拟存储token
            }else{
                alert('用户名或密码错误')
            }
        }
    }
}
</script>

<style>
.loginBox{
    width: 400px;
    height: 400px;
    background-color: #fff;
}
</style>