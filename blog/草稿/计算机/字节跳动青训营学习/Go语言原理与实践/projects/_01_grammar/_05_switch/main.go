package main

import (
	"fmt"
	"time"
)

func main() {
	// switch不需要手动break！！！
	i := 1
	switch i {
	case 1:
		fmt.Println("1")
	case 2:
		fmt.Println("2")
	default:
		fmt.Println("default")
	}

	t := time.Now()
	// Switch支持任意类型，字符串、结构体
	switch {
	case t.Hour() < 12:
		fmt.Println("现在是上午")
	default:
		fmt.Println("现在是下午")
	}
}
