package main

import (
	"fmt"
	"strings"
)

func main() {
	a := "123"
	fmt.Println(strings.Contains(a, "12"))                 //true
	fmt.Println(strings.Count(a, "1"))                     //1
	fmt.Println(strings.HasPrefix(a, "1"))                 //1
	fmt.Println(strings.HasSuffix(a, "23"))                //true
	fmt.Println(strings.Index(a, "23"))                    //true
	fmt.Println(strings.Join([]string{"aaa", "bbb"}, "-")) //aaa-bbb
	fmt.Println(strings.Repeat(a, 2))                      //123123
	fmt.Println(strings.Replace(a, "23", "00", -1))        //100
	fmt.Println(strings.ReplaceAll(a, "23", "00"))         //100
	fmt.Println(strings.Split("a-b-c-d", "-"))             //[a b c d]
	fmt.Println(strings.ToLower(a))                        //123
	fmt.Println(strings.ToUpper(a))                        //123
	fmt.Println(len(a))                                    //3
	fmt.Println(len("中文"))                                 //6
}
