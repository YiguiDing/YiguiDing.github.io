package main

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(mysql.Open("root:root@tcp(127.0.0.1:3306)/go_db1"))
	fmt.Println(db, err)
	var users []User
	err = db.Select("id", "name", "tel").Find(&users, 1).Error
	fmt.Println(users, err)
}

/*
create table users(

	id INTEGER primary key,
	name VARCHAR(10),
	tel VARCHAR(15)

)
*/
type User struct {
	Id   int
	Name string
	Tel  string
}
