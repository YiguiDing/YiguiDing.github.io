package main

import "fmt"

func main() {
	// range可以遍历slice和map

	a := []int{1, 2, 3}
	for idx, val := range a {
		fmt.Println(idx, val)
	}

	b := map[string]int{"aaa": 1, "bbb": 2}
	for key, val := range b {
		fmt.Println(key, val)
	}
}
