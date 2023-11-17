package main

import "fmt"

func main() {
	srcA := make(chan int)    // 无缓冲的通道
	resB := make(chan int, 3) // 有缓冲的通道

	// 协程A 生成数据
	go func() {
		defer close(srcA) // 函数执行完后关闭通道A
		for i := 1; i < 10; i++ {
			srcA <- i // 向通道A中写入数据
		}
	}()

	// 协程B 处理数据
	go func() {
		defer close(resB)     // 函数执行完后关闭通道B
		for i := range srcA { // 从通道A中读取数据，直到通道被关闭
			resB <- i * i // 将结果写入通道B
		}
	}()

	// 主协程 消费数据
	for k := range resB { // 从通道B中读取数据，直到通道关闭
		fmt.Println(k)
	}
}
