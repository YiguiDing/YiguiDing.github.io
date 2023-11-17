package main

import (
	"fmt"
	"os"
	"testing"

	"bou.ke/monkey" // go get bou.ke/monkey
)

func TestMain(m *testing.M) {
	code := m.Run()
	os.Exit(code)
}
func TestA(t *testing.T) {
	firstLine := getFileFirstLine() // 获取外部文件的第一行
	fmt.Println(firstLine)
}
func TestB(t *testing.T) {
	result := replaceAll0To1() // 函数的执行结果依赖getLogFirstLine(),而该函数又依赖外部文件，预期将是不定的
	fmt.Println(result)
}

func TestC(t *testing.T) {
	monkey.Patch(getFileFirstLine, func() string { // patch 就是将函数替换为另一个函数，让其不再依赖外部文件，使其拥有确定值
		return "000111"
	})
	defer monkey.Unpatch(getFileFirstLine) // unpatch,恢复这个函数

	result := replaceAll0To1() // 函数的测试结果不再依赖getFileFirstLine函数，也就不再外部文件，结果是确定的
	expect := "111111"
	if result != expect {
		t.Errorf("测试未通过，预期：%v，结果：%v", expect, result)
	}
}
