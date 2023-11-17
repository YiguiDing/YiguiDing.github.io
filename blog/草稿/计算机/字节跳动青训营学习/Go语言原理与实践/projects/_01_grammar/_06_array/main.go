package main

import (
	"fmt"
)

func main() {
	var a [5]int
	a[0] = 1
	fmt.Println(a[0])

	var b [5][5]int
	b[0][0] = 1
	fmt.Println(b[0][0])

	c := [3]int{1, 2, 3} // c是数组
	fmt.Println(c)       // [1 2 3]
	// c=append(c,4) // 报错，c不是切片
}
