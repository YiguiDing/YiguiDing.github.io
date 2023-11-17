package main

import (
	"math/rand"

	"github.com/bytedance/gopkg/lang/fastrand"
)

type Service struct {
}

const maxSize = 10

var serviceIdxMap [maxSize]*Service

// 初始化服务器列表
func initServiceIdxMap() {
	for i := 0; i < maxSize; i++ {
		serviceIdxMap[i] = &Service{}
	}
}

// 随机选择服务器实现负载均衡
func randomSelectService() *Service {
	return serviceIdxMap[rand.Intn(maxSize)]
}

// fastrand随机选择服务器实现负载均衡
func fastRandomSelectService() *Service {
	return serviceIdxMap[fastrand.Intn(maxSize)]
}
