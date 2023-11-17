const mysql = require("mysql")

const db = mysql.createPool(
    {
        host:"127.0.0.1",
        user:"root",
        password: "root",
        database: "my_db_01"
    }
)
module.exports = db





























/*
my_db_01
    tb_users
        id INT auto_increment NOT NULL UNIQUE PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        nickname VARCHAR(255) ,
        email VARCHAR(255) ,
        user_pic TEXT ,

var sql = `
CREATE DATABASE IF NOT EXISTS my_db_01;
use my_db_01;
CREATE TABLE IF NOT EXISTS `my_db_01`.`tb_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NULL,
  `user_pic` TEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);
`
db.query(sql,(err,result)=>{
    console.log(err || result);
})
*/




