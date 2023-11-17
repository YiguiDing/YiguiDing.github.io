package service

import (
	"errors"
	"main/repository"
	"sync"
)

type PageInfo struct {
	Topic    *repository.Topic
	PostList []*repository.Post
}
type PageInfoService struct {
}

// 查询页面信息
func QueryPageInfo(topicId int32) (*PageInfo, error) {
	flow := QueryPageInfoFLow{topicId: topicId} // 创建一个查询页面信息的流程
	pageInfo, err := flow.Do()                  // 执行这个流程，得到结果
	if err != nil {
		return nil, err
	}
	return pageInfo, nil
}

// 查询页面数据操作流程所需的数据结构
type QueryPageInfoFLow struct {
	topicId  int32
	topic    *repository.Topic
	postList []*repository.Post
	pageInfo *PageInfo
}

func (flow *QueryPageInfoFLow) Do() (*PageInfo, error) {
	err := flow.checkParam() // 检查参数
	if err != nil {
		return nil, err
	}
	err = flow.prepareInfo() // 准备数据
	if err != nil {
		return nil, err
	}
	err = flow.packPageInfo() // 组装数据
	if err != nil {
		return nil, err
	}
	return flow.pageInfo, nil // 返回数据
}

// 检查参数，id不能为负
func (flow *QueryPageInfoFLow) checkParam() error {
	if flow.topicId < 0 {
		return errors.New("topicId coludn't be negative")
	}
	return nil
}

// 准备数据，使用两个协程来分别取获取topic和postlist
func (flow *QueryPageInfoFLow) prepareInfo() error {
	var wg sync.WaitGroup
	wg.Add(2)
	go func() {
		topicDao := repository.NewTopicDaoInstance()
		flow.topic = topicDao.SelectTopicById(flow.topicId)
		wg.Done()
	}()
	go func() {
		postDao := repository.NewPostDaoInstance()
		flow.postList = postDao.SelectPostListByFatherId(flow.topicId)
		wg.Done()
	}()
	wg.Wait()
	return nil
}

// 组装数据
func (flow *QueryPageInfoFLow) packPageInfo() error {
	flow.pageInfo = &PageInfo{}
	flow.pageInfo.Topic = flow.topic
	flow.pageInfo.PostList = flow.postList
	return nil
}
