//导入http模块
const http = require("http")

//创建实例对象
const server = http.createServer()

//绑定request事件
server.on("request",(req,res)=>{
    const url = req.url
    let content = `<h1>404</h1>`
    
    if(url==="/" || url==="/index" || url==="/index.html"){
        content = `<h1>index</h1>`
    }else
    if(url==="/about" ||  url==="/about.html"){
        content = `<h1>about</h1>`
    }

    res.setHeader("Content-Type","text/html;charset=utf-8")
    res.end(content)
})

//启动服务
server.listen(8000,()=>{
    console.log("服务器已启动,正在监听8000端口...");
})