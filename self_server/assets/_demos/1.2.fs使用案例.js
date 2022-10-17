const fs = require("fs")

fs.readFile("./src/成绩.txt","utf-8",(err,data)=>{
    if (err) {
        console.log("文件读取错误" + err.message);
    }else{
        console.log("文件读取成功:" + data);

        var list = data.split(" ")
        var newList = []
        var target = ""

        console.log("处理数据中......");
        list.forEach((value,index)=>{
            newList.push(value.replace("=",":"))
        })
        target = newList.join("\r\n")

        console.log("处理数据完毕:");
        console.log(target);

        console.log("写入数据中......");
        fs.writeFile("./src/成绩-output.txt",target,err=>{
            if (err) {
                console.log(err);
            }else{
                console.log("写入完毕.");
            }
        })
    }
})

