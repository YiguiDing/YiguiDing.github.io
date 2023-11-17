package main

import "fmt"

type user struct {
	uuid string
	name string
	pswd string
}

// 带指针才能对结构体修改
func (u *user) setPswd(pswd string) {
	u.pswd = pswd
}
func (u user) checkPswd(pswd string) bool {
	return u.pswd == pswd
}

func main() {

	a := user{uuid: "001", name: "dyg", pswd: "111"}
	a.setPswd("222")
	fmt.Println(a.checkPswd("222")) // true
}
