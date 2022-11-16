//引入express
const express = require('express');

//创建应用对象
const app = express();

//创建路由
app.get("/demo1",(request,response)=>{
    //设置响应头
    response.setHeader("access-control-allow-origin","*");//允许跨域,若没有,则当以文件方式打开前端页面或访问前端页面的域名或端口与服务端不一致时,响应报文会被浏览器拦截
    //设置响应体
    response.send("Hello Express!!");
})

//监听端口
app.listen(8000,()=>{
    console.log("服务已启动,8000端口监听中...")
})