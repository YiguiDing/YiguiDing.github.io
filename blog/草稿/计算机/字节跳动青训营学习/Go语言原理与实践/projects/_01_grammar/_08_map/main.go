package main

import "fmt"

func main() {
	// 类似于其他语言的hash、字典
	// map是无序的
	a := make(map[string]int)
	a["A"] = 10
	fmt.Println(a)
	fmt.Println(a["A"]) //map[A:10]
	fmt.Println(len(a)) // 1
	val, exist := a["A"]
	if exist {
		fmt.Println(val) // 10
		delete(a, "A")
	}
	b := map[string]int{"B": 20}
	fmt.Println(b) // map[B:20]
}
