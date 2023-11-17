const express = require("express")

const app = express();

app.get("/get_str",(request,response)=>{
    response.send("hello world!!")
})

app.get("/get_json",(request,response)=>{
    response.send({hello:"world"})
})
app.listen(8000,()=>{
    console.log("express server is running at http://127.0.0.1:8000")
})