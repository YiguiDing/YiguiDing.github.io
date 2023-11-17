package main

import "fmt"

type user struct {
	uuid string
	name string
	pswd string
}

func setPswd(u *user, pswd string) {
	u.pswd = pswd
}
func checkPswd(u user, pswd string) bool {
	return u.pswd == pswd
}

func main() {
	a := user{uuid: "001", name: "dyg", pswd: "111"}
	b := user{"001", "dyg", "111"}
	fmt.Println(a)
	fmt.Println(b)

	setPswd(&a, "123")
	fmt.Println(checkPswd(a, "123"))
}
