package main

import (
	"os"
	"sync"
	"testing"
)

func TestMain(m *testing.M) {
	code := m.Run()
	os.Exit(code)
}
func BenchmarkTestA(b *testing.B) {
	// fmt.Println("N:", b.N) // 执行次数
	initServiceIdxMap()
	b.ResetTimer() // 重置计时器
	// b.N // B 是传递给基准测试函数以管理基准的类型 计时并指定要运行的迭代次数。
	for i := 0; i < b.N; i++ {
		randomSelectService() // 顺序执行N次，统计耗时
	}
}
func BenchmarkTestB(b *testing.B) {
	// fmt.Println("N:", b.N) // 执行次数
	initServiceIdxMap()
	var flag sync.WaitGroup
	flag.Add(b.N)
	b.ResetTimer()             // 重置计时器
	for i := 0; i < b.N; i++ { // 并发执行N次，统计耗时
		go func() {
			defer flag.Done()
			randomSelectService()
		}()
	}
	flag.Wait()
}

func BenchmarkTestC(b *testing.B) {
	// fmt.Println("N:", b.N) // 执行次数
	initServiceIdxMap()
	b.ResetTimer()                       // 重置计时器
	b.RunParallel(func(pb *testing.PB) { // 并行执行N次，统计耗时 （并行是通过并发来模拟实现的）
		for pb.Next() {
			randomSelectService()
		}
	})
}

func BenchmarkTestD(b *testing.B) {
	// fmt.Println("N:", b.N) // 执行次数
	initServiceIdxMap()
	b.ResetTimer() // 重置计时器
	// b.N // B 是传递给基准测试函数以管理基准的类型 计时并指定要运行的迭代次数。
	for i := 0; i < b.N; i++ {
		fastRandomSelectService() // 顺序执行N次，统计耗时
	}
}
func BenchmarkTestE(b *testing.B) {
	// fmt.Println("N:", b.N) // 执行次数
	initServiceIdxMap()
	var flag sync.WaitGroup
	flag.Add(b.N)
	b.ResetTimer()             // 重置计时器
	for i := 0; i < b.N; i++ { // 并发执行N次，统计耗时
		go func() {
			defer flag.Done()
			fastRandomSelectService()
		}()
	}
	flag.Wait()
}

func BenchmarkTestF(b *testing.B) {
	// fmt.Println("N:", b.N) // 执行次数
	initServiceIdxMap()
	b.ResetTimer()                       // 重置计时器
	b.RunParallel(func(pb *testing.PB) { // 并行执行N次，统计耗时 （并行是通过并发来模拟实现的）
		for pb.Next() {
			fastRandomSelectService()
		}
	})
}
