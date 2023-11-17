package main

import (
	"fmt"
	"os"
	"testing"

	"github.com/stretchr/testify/assert" // go get github.com/stretchr/testify/assert
)

func TestMain(m *testing.M) {
	fmt.Println("测试开始") // 测试前：初始化阶段
	code := m.Run()     // 执行测试阶段
	fmt.Println("测试结束") // 测试后：释放资源等收尾操作
	os.Exit(code)
}
func TestHello_Version1(t *testing.T) {
	res := hello()
	exp := "hello test"
	if res != exp {
		t.Errorf("期待值为：%v,实际值为：%v,测试未通过", exp, res)
	}
}
func TestHello_Version2(t *testing.T) {
	res := hello()
	exp := "hello test"
	assert.Equal(t, res, exp)
}
