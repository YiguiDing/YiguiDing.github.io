const express = require("express")
const app = express()

const userRouter = require("./src/user") //导入user路由模块
app.use(userRouter) //注册路由

app.listen(8000,()=>{
    console.log("server is running at http://127.0.0.1:8000");
})