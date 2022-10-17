const express = require("express")
const cors = require("cors")
const confg = require("./confg")
var { expressjwt: jwtDecode } = require("express-jwt");


const app = express()


app.use((req,res,next)=>{
    res.msgSend=(msg,errMsg=null,status=1,data=null)=>{
        res.send(
            {
                status,
                msg,
                errMsg,
                data
            }
        )
    }
    next()
})
app.use(
    jwtDecode({
        secret:confg.jwtSecretKey,
        algorithms: ["HS256"]
    })
        .unless({path:[/\/api/]})
)
app.use(cors())//跨域访问访问中间件
app.use(express.json())//解析请求体中json格式字符串中间件
app.use(express.urlencoded({extended:false}))//解析请求体中url格式字符串中间件



const user = require("./router/user")
app.use("/api",user)//注册user模块

const userinfo = require("./router/userinfo")
app.use("/my",userinfo)//注册userinfo模块


app.use((err,req,res,next)=>{
    if(err.name === "UnauthorizedError")
        res.msgSend("身份认证失败,未登陆或登陆超时,请重新登陆",err.message)
    else
        res.msgSend("未知错误",err.message)
    next()
})


app.listen(8000,()=>{
    console.log("api server is running at http://127.0.0.1:8000");
})