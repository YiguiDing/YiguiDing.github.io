//导入http模块
const http = require("http")

//创建实例对象
const server = http.createServer()

//绑定request事件
server.on("request",(req,res)=>{
    console.log("收到了一个http请求...");
})

//启动服务
server.listen(8000,()=>{
    console.log("服务器已启动,正在监听8000端口...");
})