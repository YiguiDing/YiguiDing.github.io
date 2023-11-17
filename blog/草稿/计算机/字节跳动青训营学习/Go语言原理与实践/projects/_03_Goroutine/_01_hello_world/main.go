package main

import (
	"fmt"
	"time"
)

func main() {
	for i := 0; i < 10; i++ {
		go fmt.Println("hello goruntine", i) // 创建协程来执行
	}
	time.Sleep(2 * time.Second) // 防止线程提前结束（后续可以用更好的方式来实现）
}

/*
运行结果
hello goruntine 9
hello goruntine 0
hello goruntine 1
hello goruntine 2
hello goruntine 3
hello goruntine 4
hello goruntine 5
hello goruntine 6
hello goruntine 7
hello goruntine 8
*/
