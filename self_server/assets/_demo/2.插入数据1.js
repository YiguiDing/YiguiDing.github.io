const mysql = require("mysql") 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "my_db_01",
})

db.connect();

var user = {username:"newUse1r",password:"newPasswd"}
var sqlStr = "INSERT INTO users (username,password) VALUES (?,?);"

db.query(sqlStr,[user.username,user.password],(err,result)=>{
    if(err){
        console.log(err.message);
    }else{
        if(result.affectedRows>0) console.log("插入成功!,新增" + result.affectedRows + "条数据");
        else console.log("插入数据失败!");
    }
})