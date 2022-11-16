const express = require("express")
const app = express()

//定义中间件1
const mw1 = function(req,res,next){
    req.startTime = Date.now()
    console.log("执行了第1个中间件")
    next()
}
//注册中间件1:先注册的先执行,后注册的后执行
app.use(mw1)

//定义中间件2
const mw2 = function(req,res,next){
    console.log("执行了第2个中间件")
    next()
}
//注册中间件2
app.use(mw2)


app.get("/testRW",(req,res)=>{ //挂载路由
    var now = Date.now()
    var gap = now-req.startTime
    res.send("处理该请求耗时:"+ gap + "ms")
})


app.listen(8000,()=>{
    console.log("server is running at http://127.0.0.1:8000");
})