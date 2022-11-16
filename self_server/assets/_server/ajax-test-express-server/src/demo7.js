//引入express
const express = require('express');

//创建应用对象
const app = express();

//创建路由
app.all("/demo7",(request,response)=>{
    response.setHeader("access-control-allow-origin","*");
    response.setHeader("access-control-allow-headers","*");
    response.send("hello client");
})

//监听端口
app.listen(8000,()=>{
    console.log("服务已启动,8000端口监听中...")
})