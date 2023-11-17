package main

import "fmt"

func main() {
	a := make([]int, 4)
	a[0] = 1
	a[1] = 2
	a[2] = 3
	a = append(a, 5) // 必须把结果赋值
	fmt.Println(a)   // [1 2 3 0 5]

	// 和python类似，支持切片操作但不支持负数
	fmt.Println(a[1:3]) // [2 3]
	fmt.Println(a[1:])  // [2 3 0 5]
	fmt.Println(a[:3])  // [1 2 3]

	b := make([]int, len(a))
	copy(b, a)
	fmt.Println(b) //[1 2 3 0 5]

	c := []int{1, 2, 3} // c是切片
	c = append(c, 4)
	fmt.Println(c[0:4]) // [1 2 3 4]

	var d []int // d 是切片
	d = append(d, 1)
	fmt.Println(d) // [1]
}
