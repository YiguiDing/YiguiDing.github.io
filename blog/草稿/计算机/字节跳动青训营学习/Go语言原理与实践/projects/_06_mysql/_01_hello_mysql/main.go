package main

import (
	"database/sql" // 官方sql接口
	"fmt"

	_ "github.com/go-sql-driver/mysql" // mysqlDriver驱动，实现了官方sql接口
)

/*
create table users(

	id INTEGER primary key,
	name VARCHAR(10),
	tel VARCHAR(15)

)
*/
type User struct {
	id   int
	name string
	tel  string
}

func main() {
	db, err := sql.Open("mysql", "root:root@tcp(127.0.0.1:3306)/go_db1")
	fmt.Println(db, err)
	// res, err := db.Exec("insert into users(id,name,tel) values(?,?,?);", 1, "测试Name", "111111")
	// fmt.Println(res, err)
	rows, err := db.Query("select id,name,tel from users where id = ?;", 1)
	fmt.Println(rows, err)
	defer func() {
		// 尽管在遍历完毕后 rows.Next() 会自动将其关闭，但是要防止在scan的过程中出现错误导致提前return
		// 处理完返回数据后要close关闭rows，防止造成资源泄露
		err := rows.Close()
		fmt.Println(err)
	}()

	var users []User
	for rows.Next() {
		var user User
		err := rows.Scan(&user.id, &user.name, &user.tel)
		if err != nil {
			continue
		}
		users = append(users, user)
	}
	fmt.Println(users)

	err = rows.Err() // 非数据相关的错误
	if err != nil {
		fmt.Println(err)
	}
}
