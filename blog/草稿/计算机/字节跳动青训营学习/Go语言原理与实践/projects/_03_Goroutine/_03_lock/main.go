package main

import (
	"fmt"
	"sync"
	"time"
)

var x int64 = 0        // x
var xLocker sync.Mutex // x的锁

func addWithLock() { // 带锁的自增
	xLocker.Lock() // 上锁
	x++
	xLocker.Unlock() // 解锁
}
func addWithOutLock() { // 不带锁的自增
	x++
}

func main() {
	x = 0
	for i := 0; i < 10000; i++ {
		go addWithLock()
	}
	time.Sleep(2 * time.Second)
	fmt.Println(x) // 10000

	x = 0
	for i := 0; i < 10000; i++ {
		go addWithOutLock()
	}
	time.Sleep(2 * time.Second)
	fmt.Println(x) // 9748
}
