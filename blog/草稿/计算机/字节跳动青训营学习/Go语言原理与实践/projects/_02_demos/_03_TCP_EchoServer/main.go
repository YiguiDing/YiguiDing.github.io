package main

import (
	"bufio"
	"fmt"
	"net"
)

func main() {
	listener, err := net.Listen("tcp", "0.0.0.0:1080") // 创建服务器
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("tcp server is running at 0.0.0.0:1080")
	for {
		connection, err := listener.Accept() // 接受到客户端请求
		if err != nil {
			fmt.Println(err)
			continue
		}
		go process(connection) // 处理客户端请求
	}
}
func process(conn net.Conn) {
	defer conn.Close()                 // 在函数执行完毕后调用关闭连接
	bufReader := bufio.NewReader(conn) // 创建缓冲读取流
	for {
		bit, err := bufReader.ReadByte() // 读取一个字节的数据
		if err != nil {
			fmt.Println(err)
			return
		}
		_, err = conn.Write([]byte{bit}) // 发送一个字节的数据
		if err != nil {
			fmt.Println(err)
			return
		}
	}
}
