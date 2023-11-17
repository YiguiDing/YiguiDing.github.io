package main

import (
	"fmt"
)

func main() {
	// go没有while循环
	for {
		fmt.Println("这是死循环")
		break // 跳出循环
	}
	for i := 0; i < 10; i++ { // 经典for循环，可以其中三个语句都可以省略
		fmt.Println(i)
		continue // 进入下一个循环
	}
	i := 0
	for i < 10 { // 退化为while循环
		fmt.Println(i)
		i++
	}
}
