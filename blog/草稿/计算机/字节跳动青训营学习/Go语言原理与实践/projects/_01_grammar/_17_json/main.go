package main

import (
	"encoding/json"
	"fmt"
)

type user struct {
	// 字段名称为大写为公开字段，json可对这些字段序列化
	Name string
	pswd string
	Age  int `json:"age"` // 可以自定义json字段名
}

func main() {
	u1 := user{"dyg", "pswd", 10}
	buf, _ := json.Marshal(u1)
	fmt.Println(string(buf)) //{"Name":"dyg","age":10}
	var u2 user
	err := json.Unmarshal(buf, &u2)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("%+v\n", u2) // {Name:dyg pswd: Age:10}

}
