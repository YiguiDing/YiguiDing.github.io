package main // 表示该文件属于名为main的包的一部分

import (
	"fmt" // 导入标准库的format包
)

func main()  {
	fmt.Println("hello world!")
	// 运行： go run ./helloworld.go
	// 编译： go build ./helloworld.go
}