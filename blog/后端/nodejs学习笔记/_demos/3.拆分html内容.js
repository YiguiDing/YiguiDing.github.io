const fs = require("fs")
const path = require("path")


fs.readFile(path.join(__dirname,"./src/待拆分文件.html"),"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        // console.log(data);
        resolveCSS(data);
        resolveJS(data);
        resolveHTML(data);
    }
})


function resolveCSS(html){
    const reg = /<style>[\s\S]*<\/style>/
    var value = reg.exec(html)[0].replace(/<style>/g,"").replace(/<\/style>/g,"")
    // console.log(value);
    fs.writeFile(path.join(__dirname,"./src/index.css"),value,err=>{
        if(err)
            console.log("resolveCSS failed:"+err);
        else
            console.log("resolveCSS success");
    })
}

function resolveJS(html){
    const reg = /<script>[\s\S]*<\/script>/
    var value = reg.exec(html)[0].replace(/<script>/g,"").replace(/<\/script>/g,"")
    // console.log(value);
    fs.writeFile(path.join(__dirname,"./src/index.js"),value,err=>{
        if(err)
            console.log("resolveJS failed:"+err);
        else
            console.log("resolveJS success");
    })
    return value;
}

function resolveHTML(html){
    var value = html
    .replace(/<style>[\s\S]*<\/style>/,"")
    .replace(/<script>[\s\S]*<\/script>/,"")
    .replace(/<\/title>/,`</title>
        <link rel="stylesheet" href="./index.css" \>
        <script src="./index.js"></script>
    `)
    fs.writeFile(path.join(__dirname,"./src/index.html"),value,err=>{
        if(err)
        console.log("resolveHTML failed:"+err);
        else
        console.log("resolveHTML success:"+value);
    })
}