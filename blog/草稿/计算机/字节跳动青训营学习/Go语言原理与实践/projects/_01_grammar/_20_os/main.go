package main

import (
	"fmt"
	"os"
	"os/exec"
)

func main() {
	fmt.Println(os.Args) // 参数列表

	// 读取和设置环境
	fmt.Println(os.Getenv("GOROOT")) // D:\app\go1.20.6.windows-amd64\go
	fmt.Println(os.Getenv("GOPATH")) // D:\app\go1.20.6.windows-amd64\gopath
	err := os.Setenv("AAA", "BBB")
	fmt.Println(err) // <nil>

	// 执行子进程并获取输出
	res, err := exec.Command("go", "version").CombinedOutput()
	fmt.Println(string(res), err) // go version go1.20.6 windows/amd64   <nil>
}
