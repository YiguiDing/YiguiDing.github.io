package main

import (
	"fmt"
)

func main() {
	// 不用写() 但必须写{}
	if 1+1 == 2 {
		fmt.Println("1+1=2") // 1+1=2
	} else {
		fmt.Println("1+1!=2")
	}

	if flag := true; flag == true {
		fmt.Println("flag==true")
	}
}
