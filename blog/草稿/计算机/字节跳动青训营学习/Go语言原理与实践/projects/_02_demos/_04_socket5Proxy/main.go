package main

import (
	"bufio"
	"context"
	"encoding/binary"
	"fmt"
	"io"
	"log"
	"net"

	"golang.org/x/exp/slices"
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

const VersionCode_Socket5 = 0x05
const MethodsCode_Not_Require_Authority = 0x00
const CmdCode_Connect = 0x01
const AddrTypeCode_ipv4 = 0x01
const AddrTypeCode_domain = 0x03
const AddrTypeCode_ipv6 = 0x04

func authority(reader *bufio.Reader, conn net.Conn) (err error) {
	// 1.这里实际上就是浏览器将告诉代理服务器它支持的协议版本和鉴权方式
	// 浏览器发来的报文格式：
	// +-------+-----------+------------+
	// | ver   | N-method  | methods 	|
	// +-------+-----------+------------+
	// | 1Byte | 1Byte     | 1-255Bytes |
	// +-------+-----------+------------+
	// version:协议版本，socket5为0x05
	// N-method 鉴权方式的个数
	// methods 含支持的每个鉴权方式的编码
	// - 0x00 不需要鉴权
	// - 0x02 需要用户名密码鉴权
	version, err := reader.ReadByte()
	if err != nil {
		return fmt.Errorf("read version fail,error:%v", err)
	}
	if version != VersionCode_Socket5 {
		return fmt.Errorf("unsupport version:%v", version)
	}
	n, err := reader.ReadByte()
	if err != nil {
		return fmt.Errorf("read n fail error:%v", err)
	}
	methods := make([]byte, n)            // 创建一个长度为n的切片
	_, err = io.ReadFull(reader, methods) // 填充切片
	if err != nil {
		return fmt.Errorf("read methods fail error:%v", err)
	}
	if !slices.Contains(methods, MethodsCode_Not_Require_Authority) { // 如果浏览器支持的鉴权方式中没有服务器所需的方式
		return fmt.Errorf("unsupport method:%v", MethodsCode_Not_Require_Authority)
	}
	log.Println("version:", version, "methods:", methods)

	// 2.现在，代理服务器要告诉浏览器选择了什么协议
	// 发给浏览器的报文格式：
	// +-------+------------+
	// | ver   | method 	|
	// +-------+------------+
	// | 1Byte | 1Byte      |
	// +-------+------------+
	_, err = conn.Write([]byte{VersionCode_Socket5, MethodsCode_Not_Require_Authority})
	if err != nil {
		return fmt.Errorf("write fail error:%v", err)
	}
	return nil
}
func connect(bufReader *bufio.Reader, clientConn net.Conn) (err error) {
	// 浏览器会发来报文信息，含要访问的目标地址信息，代理服务器要通过报文信息和目标地址建立连接，报文格式：
	// +-----+-----+------+------+-----------+-----------+
	// | VER | CMD | RSV  | ATYP | Dist.Addr | Dist.Port |
	// +-----+-----+------+------+-----------+-----------+
	// |  1  |  1  | 0x00 |  1   | varable   |    2      |
	// +-----+-----+------+------+-----------+-----------+
	// Ver 版本号 0x05 为socket5
	// CMD 命令  0x01 表示连接请求
	// Atyp 目标地址类型：
	// - 0x01 	ipv4地址  Dist.Addr为四字节
	// - 0x03   域名      Dist.Addr为可变长值
	// Dist.Addr 目标地址，可变长值
	// Dist.Port 目标端口，2字节
	buf := make([]byte, 4)
	_, err = io.ReadFull(bufReader, buf)
	if err != nil {
		return fmt.Errorf("read dialgram fail: %v", err)
	}
	ver, cmd, atyp := buf[0], buf[1], buf[3]
	if ver != VersionCode_Socket5 {
		return fmt.Errorf("unsupport version: %v", ver)
	}
	if cmd != CmdCode_Connect {
		return fmt.Errorf("unsupport cmd: %v", cmd)
	}
	addr := ""
	switch atyp {
	case AddrTypeCode_ipv4:
		_, err := io.ReadFull(bufReader, buf)
		if err != nil {
			return fmt.Errorf("read addr fail: %v", err)
		}
		addr = fmt.Sprintf("%d.%d.%d.%d", buf[0], buf[1], buf[2], buf[3])
	case AddrTypeCode_domain:
		n, err := bufReader.ReadByte()
		if err != nil {
			return fmt.Errorf("read domain fail: %v", err)
		}
		domain := make([]byte, n)
		_, err = io.ReadFull(bufReader, domain)
		if err != nil {
			return fmt.Errorf("read domain fail: %v", err)
		}
		addr = string(domain)
	case AddrTypeCode_ipv6:
		return fmt.Errorf("unsupport ipv6")
	default:
		return fmt.Errorf("unknow ATYP")
	}
	_, err = io.ReadFull(bufReader, buf[:2]) // 只读取两个字节，cun到buf中
	if err != nil {
		return fmt.Errorf("read port fail:%v", err)
	}
	port := binary.BigEndian.Uint16(buf[:2])
	fmt.Println("dial:", addr, port)

	// 现在通过浏览器发来的报文，得到了浏览器想要访问的目标主机的地址。
	// 现在，让代理服务器和和目标主机建立TCP连接
	destConn, err := net.Dial("tcp", fmt.Sprintf("%v:%v", addr, port))
	if err != nil {
		return fmt.Errorf("dial fail:%v", err)
	}
	defer destConn.Close()
	fmt.Println("dial success")

	// 现在给浏览器一个响应，让浏览器发实际的请求，报文格式：
	// +-----+-----+------+------+-----------+-----------+
	// | VER | REP | RSV  | ATYP | Dist.Addr | Dist.Port |
	// +-----+-----+------+------+-----------+-----------+
	// |  1  |  1  | 0x00 |  1   | varable   |    2      |
	// +-----+-----+------+------+-----------+-----------+
	// VER socks版本 这里为0x05
	// REP Relay Field 填0x00 表示成功
	// RSV 保留字段
	// Atyp 目标地址类型：
	// - 0x01 	ipv4地址  Dist.Addr为四字节
	// - 0x03   域名      Dist.Addr为可变长值
	// Dist.Addr 目标地址，可变长值
	// Dist.Port 目标端口，2字节
	_, err = clientConn.Write([]byte{VersionCode_Socket5, 0x00, 0x00, 0x01, 0, 0, 0, 0, 0, 0}) // socks5协议不需要填地址，所以填0
	if err != nil {
		return fmt.Errorf("write fail:%v", err)
	}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	// 这里相当于是开了两个子进程
	go func() {
		// copy实现是用死循环把 "源"拷贝到"目标"
		io.Copy(destConn, clientConn) // 把浏览器的请求数据发给目标主机
		cancel()                      // 出错后将导致cancel被调用
	}()
	go func() {
		io.Copy(clientConn, destConn) // 把目标主机的响应发给浏览器
		cancel()
	}()
	<-ctx.Done() // 等待ctx被执行完成，也就是cancel()被调用，否则会直接return，导致建立的连接被断开
	return nil
}
func process(conn net.Conn) {
	defer conn.Close()                 // 在函数执行完毕后调用关闭连接
	bufReader := bufio.NewReader(conn) // 创建缓冲读取流
	err := authority(bufReader, conn)  // 鉴权
	if err != nil {
		log.Println("client %v,authorty fail:%v", conn.RemoteAddr(), err)
	}
	err = connect(bufReader, conn)
	if err != nil {
		log.Println("client %v,connect fail:%v", conn.RemoteAddr(), err)
	}
}
