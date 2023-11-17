package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

func main() {
	r := rand.New(rand.NewSource(time.Now().UnixMilli())) // 用时间戳创建随机种子源，用随机源创建rand实例对象
	res := r.Intn(100)
	fmt.Println("随机数已生成，快来猜一猜！")
	bufReader := bufio.NewReader(os.Stdin)
	for {
		str, err := bufReader.ReadString('\n')
		if err != nil {
			fmt.Println("输入有误，请重新输入,err:", str, err)
			continue
		}
		str = strings.TrimSpace(str)
		num, err := strconv.Atoi(str)
		if err != nil {
			fmt.Println("输入有误，请重新输入,err:", err)
			continue
		}
		if num < res {
			fmt.Println("猜小了！")
		} else if num > res {
			fmt.Println("猜大了！")
		} else {
			fmt.Println("猜对了！")
			break
		}
	}
}
