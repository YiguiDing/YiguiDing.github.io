//引入express
const express = require('express');


//创建应用对象
const app = express();

//引入中间件,用于获取request.body内容
const bodyParser = require('body-parser');

// 解析 text(默认请求头)
app.use(bodyParser.text());

// 解析 application/x-www-form-urlencoded //也就是解析a=1&b=2 这种url格式的数据
// app.use(bodyParser.urlencoded({ extended: false })) 
        // extended: false 方法内部使用querystring模块处理请求参数的格式
        // extended: true 方法内部使用第三方模块qs模块请求参数的格式

// 解析 json(application/json)
// app.use(bodyParser.json());

//创建路由
app.post("/demo3",(request,response)=>{
    //设置响应头
    response.setHeader("access-control-allow-origin","*");//允许跨域,若没有,则当以文件方式打开前端页面或访问前端页面的域名或端口与服务端不一致时,响应报文会被浏览器拦截
    //设置响应体
            // 接受到的是字符串
            response.send("你发送的数据是:" + request.body);
            // 接受到的是对象
            response.send("你发送的数据是:" + JSON.stringify(request.body));
        })


//监听端口
app.listen(8000,()=>{
    console.log("服务已启动,8000端口监听中...")
})