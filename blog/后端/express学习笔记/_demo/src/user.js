const express = require("express")
const routerApp = express.Router()     //创建路由对象

routerApp.get("/user/list",(req,res)=>{ //挂载路由
    res.send("getted user list")
})

routerApp.post("/user/add",(req,res)=>{ //挂载路由
    res.send("added user")
})

module.exports = routerApp //导出路由对象

