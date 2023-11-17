---
title: nodejs的mysql模块学习笔记
date: 2022-08-31 07:25:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [nodejs,mysql]
# ---article: false---
category: 后端
---


# nodejs的mysql模块学习笔记

**无法连接数据库的解决**  
`MySQL8` 之前的版本中加密规则是 `mysql_native_password` ,而在之后版本，加密规则是 `caching_sha2_password` ,当前nodejs的mysql模块不支持该加密规则,于是需要修改会旧的加密规则

```bash
# 进入mysql
mysql -u root -p
# 输入:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "新密码";
```

## 连接数据库

**示例代码**

```js
const mysql = require("mysql") 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "my_db_01",
})

db.connect();

```

## 查询数据库

**示例代码**

```js
db.query("SELECT * from users",(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(message);
    }
})
```

**输出result结果**  
注意: 执行`select`语句的查询结果为数组

```js
[
  RowDataPacket {
    id: 1,
    username: 'DingYigui',
    password: '123',
    status: 0
  },
  RowDataPacket {
    id: 10,
    username: 'DYG1231',
    password: 'd12yg1232',
    status: 0
  }
]
```

## 插入数据

**方法1**

```js
var user = {username:"newUser",password:"newPasswd"}
var sqlStr = "INSERT INTO users (username,password) VALUES (?,?);" //?为占位符

db.query(sqlStr,[user.username,user.password],(err,result)=>{ //第二个参数中的数据将被依次填入占位符
    if(err){
        console.log(err.message);
    }else{
        //affectedRows中记录了本次操作影响的行数
        if(result.affectedRows>0) console.log("插入成功!,新增" + result.affectedRows + "条数据");
        else console.log("插入数据失败!");
    }
})
```

**输出result结果**  
注意: 执行`INSERT` `UPDATE` `DELETE` 语句的结果均为对象

```js
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 11,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
```

**方法2:更高效的方式**

```js
var user = {username:"newUser2",password:"newPasswd2"}
var sqlStr = "INSERT INTO users set ?;" //?为占位符

db.query(sqlStr,user,(err,result)=>{ //将会自动展开为: UPDATE users SET username = "newUser2" , password = "newPasswd2" 
    if(err){
        console.log(err.message);
    }else{
        //affectedRows中记录了本次操作影响的行数
        if(result.affectedRows>0) console.log("插入成功!,新增" + result.affectedRows + "条数据");
        else console.log("插入数据失败!");
    }
})
```

## 更新数据

**方法1**

```js
var user = {username:"newUser3",password:"newPasswd3",id:2}
var sqlStr = "UPDATE users SET username=?,password=? WHERE id=?;" //?为占位符
db.query(sqlStr,[user.username,user.password,user.id],(err,result)=>{ //第二个参数中的数据将被依次填入占位符
    if(err){
        console.log(err.message);
    }else{
        //affectedRows中记录了本次操作影响的行数
        if(result.affectedRows>0) console.log("更新成功!,新增" + result.affectedRows + "条数据");
        else console.log("更新数据失败!");
    }
})
```

**方法2:更高效的方式**

```js
var user = {username:"newUser3",password:"newPasswd3",id:2 }
var sqlStr = "UPDATE users SET ? WHERE id=?;" //?为占位符

db.query(sqlStr,[user,user.id],(err,result)=>{ //将会自动展开为: UPDATE users SET username=newUser3,password=newPasswd3,id=2 WHERE id=2;
    if(err){
        console.log(err.message);
    }else{
        //affectedRows中记录了本次操作影响的行数
        if(result.affectedRows>0) console.log("更新成功!,新增" + result.affectedRows + "条数据");
        else console.log("更新数据失败!");
    }
})
```

## 删除数据

```js
var userID = 5 
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
```

## 标记数据为删除

实际中删除一个用户后存在用户想要撤销删除操作的可能,对于这种需求可以采取修改用户状态为已删除的方式来实现

```js
var userID = 5 
var sqlStr = "UPDATE users SET status=? WHERE id=?;" //?为占位符
db.query(sqlStr,[1,5],(err,result)=>{ 
    if(err){
        console.log(err.message);
    }else{
        //affectedRows中记录了本次操作影响的行数
        if(result.affectedRows>0) console.log("标记用户为已删除成功!,更新了" + result.affectedRows + "条数据");
        else console.log("标记用户为已删除失败!");
    }
})
```

## mysql2基本使用

```js
import mysql from "mysql2"
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "my_db_01",
})

export default  pool.promise()


// --------------------------------------------
import db from "./mysql.js" 
export async function getUserInfo(req,res){
    const sql = "???????"
    let result = await db.query(sql)
    res.send({
         status:0,
         message:"",
         data:result,
    })
}
```
