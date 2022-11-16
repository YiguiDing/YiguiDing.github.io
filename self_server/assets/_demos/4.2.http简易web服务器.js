//导入http模块
const fs = require("fs")
const path = require("path")
const http = require("http")

//创建实例对象
const server = http.createServer()

//绑定request事件
server.on("request",(req,res)=>{
    const rootUrl = "./src"
    let url = req.url
    let content = `<h1>404</h1>`
    
    if(url==="/" || url==="/index" || url==="/index.html"){
        url=`/index.html`
    }

    fs.readFile(path.join(__dirname,rootUrl,url),"utf-8",(err,data)=>{
        if(err) {
            // content = err.message
        }
        else {
            content = data
        }
        // res.setHeader("Content-Type","text/html;charset=utf-8")
        res.end(content)
    })
})

//启动服务
server.listen(8000,()=>{
    console.log("服务器已启动,http://127.0.0.1:8000/");
})