const mysql = require("mysql") 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "my_db_01",
})

db.connect();

db.query("SELECT * from users",(err,message)=>{
    if(err){
        console.log(err);
    }else{
        console.log(message);
    }
})