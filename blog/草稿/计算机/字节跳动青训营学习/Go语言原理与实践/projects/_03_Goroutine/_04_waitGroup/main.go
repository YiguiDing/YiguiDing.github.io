package main

import (
	"fmt"
	"sync"
)

func main() {
	var flag sync.WaitGroup
	flag.Add(10) // 设置其内部计数器为10
	for i := 0; i < 10; i++ {
		go func(idx int) { // 创建协程来执行
			fmt.Println("hello goruntine", idx)
			flag.Done() // 每执行一次，计数器都自减
		}(i)
	}
	flag.Wait() // 阻塞，直到计数器为0
}

/*
运行结果
hello goruntine 9
hello goruntine 3
hello goruntine 1
hello goruntine 0
hello goruntine 2
hello goruntine 6
hello goruntine 7
hello goruntine 4
hello goruntine 8
hello goruntine 5
*/
