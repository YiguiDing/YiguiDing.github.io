package controller

import (
	"main/service"
	"strconv"
)

// 定义页面数据
type PageData struct {
	Code int32       `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
}

func QueryPageInfo(topicIdStr string) *PageData {
	topicId, err := strconv.Atoi(topicIdStr) // 获取id
	if err != nil {
		return &PageData{
			Code: 501,
			Msg:  err.Error(),
		}
	}
	pageInfo, err := service.QueryPageInfo(int32(topicId))
	if err != nil {
		return &PageData{
			Code: 502,
			Msg:  err.Error(),
		}
	}
	return &PageData{ // 返回数据
		Code: 0,
		Msg:  "查询成功",
		Data: &pageInfo,
	}
}
