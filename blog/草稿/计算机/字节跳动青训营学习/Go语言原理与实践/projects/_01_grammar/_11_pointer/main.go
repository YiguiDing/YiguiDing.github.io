package main

import "fmt"

func add(n int) {
	n++
}
func padd(n *int) {
	*n += 1
}

func main() {
	n := 1
	add(n)
	fmt.Println(n)
	padd(&n)
	fmt.Println(n)

}
