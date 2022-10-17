const fs = require("fs")

fs.readFile("./1.fs.js","utf-8",(err,data)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
})

fs.writeFile("./1.readfile.js","这是写入的数据",err=>{
    if (err) {
        console.log(err);
    }
})
