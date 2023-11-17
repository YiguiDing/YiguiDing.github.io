package main

import (
	"errors"
	"fmt"
)

type user struct {
	uuid string
	name string
	pswd string
}

func findUser(users []user, name string) (res *user, err error) {
	for _, usr := range users { // _可以用来占位，这样不会报错："变量声明但未使用"
		if usr.name == name {
			return &usr, nil
		}
	}
	return nil, errors.New("not fond")
}

func main() {
	users := []user{{name: "dyg"}}

	user, err := findUser(users, "hhh")
	if err != err {
		fmt.Println(user)
	} else {
		fmt.Println(err)
	}
}
