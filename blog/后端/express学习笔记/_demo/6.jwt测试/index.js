const express = require("express")
const app = express()

//jwt身份认证
const jwtEncode = require("jsonwebtoken") //加密
// const jwtDecode = require("express-jwt")  //解密
var { expressjwt: jwtDecode } = require("express-jwt");
const secretKey = "dfwofwiefjw0wfej02fj023j0r2" //随便写一段密钥用于加密token

//用于支持跨源
const cors = require("cors")
app.use(cors())

// 静态资源
app.use(express.static("./webRoot"))

//解密请求头中的 jwtToken 解析还原为json对象 并把解析出来的信息挂载到 req.auth 上
//同时配置了访问权限 没有Token则不能访问任何接口 
//unless指定某些页面不需要Token 这里指定 /api/login 不需要身份认证便能访问
app.use(
    jwtDecode({
        secret: secretKey,
        algorithms: ["HS256"] //防止潜在的降级攻击所必需的
    })
        .unless({ path: [/^\/api\/login/] }) //指定 /api/login 不需要身份认证便能访问
)

//用于req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//登陆api
app.post("/api/login", (req, res) => {

    //判断用户名和密码是否正确
    if (req.body.username != "admin" && req.body.password != "admin") {
        res.send({
            status: 1,
            msg: "登陆失败"
        })
        return;
    }

    //生成token
    //sign方法:sign(参数1,参数2,参数3)
    // 参数1 待加密的数据
    // 参数2 加密密钥
    // 参数3 配置项,可配置有效期
    var token = jwtEncode.sign({ username: req.body.username }, secretKey, { expiresIn: "30s" })
    //发送token
    res.send({
        status: 0,
        msg: "登陆成功",
        token: token
    })
})

// app.get("/api/logout", (req, res) => {
// logout不需要服务端执行任何操作了 只需要客户端删除token就好了
//     res.send({ 
//         status: 0, 
//         msg: "logout成功" 
//     })
//     return;
// })

app.get("/api/get-userinfo", (req, res) => {
    res.send({
        status: 0,
        msg: "获取用户的信息成功",
        userinfo: req.auth
    })
    return;
})

app.use((err, res, req, next) => { //处理错误
    if (err.name == "UnauthorizedError") {
        req.send({
            status: 401,
            msg: "未登陆或登陆状态已过期,请重新登陆",
            err: err
        })
    } else {
        req.send({
            status: 500,
            msg: "服务器未知错误",
            err: err
        })
    }
}
)




app.listen(8000, () => {
    console.log("server is running at http://127.0.0.1:8000");
})