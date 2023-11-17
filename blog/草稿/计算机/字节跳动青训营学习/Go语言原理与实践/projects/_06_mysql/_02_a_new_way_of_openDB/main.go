package main

import (
	"database/sql" // 官方sql接口
	"fmt"

	"github.com/go-sql-driver/mysql" // mysqlDriver驱动，实现了官方sql接口
)

func main() {
	// 新版的写法
	mysqlConnector, _ := mysql.NewConnector(&mysql.Config{
		User:      "root",
		Passwd:    "root",
		Net:       "tcp",
		Addr:      "127.0.0.1:3306",
		DBName:    "go_db1",
		ParseTime: true,
	})
	db := sql.OpenDB(mysqlConnector)
	defer db.Close() // 必要的
	fmt.Println(db)
}
