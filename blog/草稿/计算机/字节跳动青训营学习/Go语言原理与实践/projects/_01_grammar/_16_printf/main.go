package main

import (
	"fmt"
)

type point struct {
	x int
	y int
}

func main() {
	fmt.Printf("a=%.3f\n", 3.1415)
	a := point{1, 2}
	fmt.Printf("a=%v\n", a)  // %v 可以输出任何类型
	fmt.Printf("a=%+v\n", a) // %+v 输出字段详细信息
	fmt.Printf("a=%#v\n", a) // %#v 输出类型详细信息
	// 输出：
	//a=3.142
	//a={1 2}
	//a={x:1 y:2}
	//a=main.point{x:1, y:2}
}
