const express = require("express")
const app = express()
const session = require("express-session")

app.use(express.static("./webRoot"))

app.use(session({
    secret: "keyboard cat",     //任意字符串,用于加密cookie
    resave: false,              //固定写法
    saveUninitialized: true,    //固定写法
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post("/api/login", (req, res) => {

    console.log(req.session);

    //判断用户名和密码是否正确
    if (req.body.username != "admin" && req.body.password != "admin") {
        res.send({ 
            status: 1, 
            msg: "登陆失败" 
        })
        return;
    }

    //保存此次会话的用户信息
    req.session.userinfo = req.body
    req.session.islogin = true
    res.send({ 
        status: 0, 
        msg: "登陆成功" 
    })
    return;
})

app.get("/api/logout", (req, res) => {

    //判断该请求的是否已经登陆
    if (!req.session.islogin) {
        res.send({ 
            status: 1, 
            msg: "logout失败" 
        })
        return;
    }

    //销毁该会话
    req.session.destroy()
    res.send({ status: 0, msg: "logout成功" })
    return;
})

app.get("/api/get-username", (req, res) => {
    //判断该请求的是否已经登陆
    if (!req.session.islogin) {
        res.send({ 
            status: 1, 
            msg: "get-username失败" 
        })
        return;
    }
    res.send({ 
        status: 0, 
        msg: "get-username成功", 
        username: req.session.userinfo.username 
    })
    return;
})


app.listen(8000, () => {
    console.log("server is running at http://127.0.0.1:8000");
})