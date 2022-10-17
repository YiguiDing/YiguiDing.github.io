const express = require("express")
const app = express()




const qs = require("querystring")
function BodyUrlDataDecoded(req,res,next){//定义中间件
    req.bodyUrlData = []
    req.on("data",(chunk)=>{ //监听req的data
        req.bodyUrlData.push(chunk) //收集数据片段
    })
    req.on("end",()=>{//监听req的end事件
        var temp = req.bodyUrlData.toString() //将收集的数据片段转换为字符串
        req.body = qs.parse(temp) // 将字符串通过nodejs内置的querystring模块解析为json对象
        next()
    })
}
app.use(BodyUrlDataDecoded) //注册中间件





app.all("/",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","*")
    console.log(req.body);
    res.send(req.body)
})
app.listen(8000,()=>{
    console.log("express server is running at http://127.0.0.1:8000");
})