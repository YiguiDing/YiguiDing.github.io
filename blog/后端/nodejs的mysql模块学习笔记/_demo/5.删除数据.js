const mysql = require("mysql") 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "my_db_01",
})

db.connect();

// var user = {username:"newUser3",password:"newPasswd3",id:8}
// var sqlStr = "UPDATE users SET username=?,password=? WHERE id=?;" //?为占位符
// db.query(sqlStr,[user.username,user.password,user.id],(err,result)=>{ //第二个参数中的数据将被依次填入占位符
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log(result);
//         //affectedRows中记录了本次操作影响的行数
//         if(result.affectedRows>0) console.log("插入成功!,新增" + result.affectedRows + "条数据");
//         else console.log("插入数据失败!");
//     }
// })

var userID = 10 
var sqlStr = "DELETE FROM users WHERE id=?;" //?为占位符
db.query(sqlStr,userID,(err,result)=>{ 
    if(err){
        console.log(err.message);
    }else{
        //affectedRows中记录了本次操作影响的行数
        if(result.affectedRows>0) console.log("删除成功!,删除" + result.affectedRows + "条数据");
        else console.log("删除数据失败!");
    }
})