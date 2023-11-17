package main

import (
	"fmt"
	"time"
)

func main() {
	now := time.Now()
	fmt.Println(now) // 2023-07-25 16:13:24.4809153 +0800 CST m=+0.007581401

	t1 := time.Date(2023, 7, 25, 16, 05, 31, 0, time.UTC)
	fmt.Println(t1)                                                                                    //2023-07-25 16:05:31 +0000 UTC
	fmt.Println(t1.Year(), t1.Month(), t1.Day(), t1.Hour(), t1.Minute(), t1.Second(), t1.Nanosecond()) //2023 July 25 16 5 31 0

	t2 := time.Date(2023, 7, 25, 16, 10, 31, 0, time.UTC)
	fmt.Println(t2.Format("2006-01-02 15:04:05")) // 2023-07-25 16:10:31

	differ := t2.Sub(t1)
	fmt.Println(differ)                             // 5m0s
	fmt.Println(differ.Minutes(), differ.Seconds()) //5 300

	t3, err := time.Parse("2006-01-02 15:04:05", "2023-07-25 16:05:31")
	fmt.Println(t3, err) // 2023-07-25 16:05:31 +0000 UTC <nil>
}
