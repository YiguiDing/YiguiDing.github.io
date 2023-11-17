package main

import (
	"bufio"
	"os"
	"strings"
)

// 获取外部文件的第一行
func getFileFirstLine() string {
	file, err := os.Open("./file.txt")
	if err != nil {
		return ""
	}
	defer file.Close()
	bufScanner := bufio.NewScanner(file)
	for bufScanner.Scan() {
		return bufScanner.Text()
	}
	return ""
}

// 函数的功能是把外部文件第一行的中的0 替换为 1
// 函数的执行结果依赖getLogFirstLine(),而该函数又依赖外部文件
func replaceAll0To1() string {
	firstLine := getFileFirstLine()
	result := strings.ReplaceAll(firstLine, "0", "1")
	return result
}
