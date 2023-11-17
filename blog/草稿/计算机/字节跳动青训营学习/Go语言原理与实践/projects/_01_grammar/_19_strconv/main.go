package main

import (
	"fmt"
	"strconv"
)

func main() {
	num1, err := strconv.ParseInt("123", 10, 64) // 123 10进制 返回64bit精度数值
	fmt.Println(num1, err)                       //123 <nil>

	num2, err := strconv.ParseInt("ff", 16, 64) // 16进制不能写0x 否则会报错
	fmt.Println(num2, err)                      //255 <nil>

	num3, err := strconv.ParseInt("0xff", 0, 64) // 0进制表示自动根据前缀判断进制
	fmt.Println(num3, err)                       //255 <nil>

	num4, err := strconv.Atoi("123") // 10进制转换
	fmt.Println(num4, err)           //123 <nil>

	num5_str := strconv.Itoa(123) // 10进制转换
	fmt.Println(num5_str)         //123
}
