package main

import (
	"fmt"
	"math"
)

func main() {
	// var 是变量 const是常量 都可以自动推断类型
	var a = "aaaa"      // 字符串 自动推导类型
	var b, c int = 1, 2 // 数值
	var d = true
	var e float64 = 0.5
	f := float64(e) // := 可以实现不声明f而直接赋值
	g := a + "bbb"
	const pi float64 = 3.14    // 常量声明
	fmt.Println(a, b, c, d, e) // aaaa 1 2 true 0.5
	fmt.Println(f)             // 0.5
	fmt.Println(g)             // aaaabbb
	fmt.Println(math.Cos(pi))  // -0.9999987317275396
}
