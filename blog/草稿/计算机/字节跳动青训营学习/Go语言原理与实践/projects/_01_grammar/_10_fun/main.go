package main

import "fmt"

func divsionA(a int, b int) int {
	return a / b
}

// 可以省略类型
func divsionB(a, b int) int {
	return a / b
}

// 可以返回多个值
func divsionC(a, b int) (res int, ok bool) {
	if b != 0 {
		res = a / b
		ok = true
	}
	return res, ok
}

func main() {
	fmt.Println(divsionA(4, 2)) // 2
	fmt.Println(divsionB(4, 2)) // 2
	fmt.Println(divsionC(4, 0)) // 0 false
}
