package repository

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"path"
	"sync"
)

type Topic struct {
	Id          int32  `json:"id"`
	Title       string `json:"title"`
	Content     string `json:"content"`
	Create_time int32  `json:"create_time"`
}
type TopicDao struct {
}

var TopicMap map[int32]*Topic

var topicDaoSingleInstance *TopicDao // 单例模式，dao的实例对象
var topicOnc sync.Once               // 保证执行的锁

// 用于初始化 TopicMap 对象， 该对象可以通过id快速获取topic
func initIdx2TopicMap() error {
	workDir, _ := os.Getwd()                          // 获取工作目录
	filePath := path.Join(workDir, "./data/Topic.db") // 拼接路径
	file, err := os.Open(filePath)                    // 打开文件
	if err != nil {
		fmt.Println(err)
		os.Exit(-1) // 文件不存在就直接报错然后退出
	}
	bufScaner := bufio.NewScanner(file)
	temp := make(map[int32]*Topic)
	for bufScaner.Scan() { // Scan会扫描到下一个token，默认的token分割函数是按照行分割，所以每次会读取一行
		topic := Topic{}                                       // 创建topic对象
		err = json.Unmarshal([]byte(bufScaner.Text()), &topic) // 扫描一行数据，反序列化，存到topic
		if err != nil {
			return err
		}
		temp[topic.Id] = &topic // 存入
	}
	TopicMap = temp
	return nil
}

func NewTopicDaoInstance() *TopicDao { // 单例模式创建TopicDao
	topicOnc.Do(func() {
		initIdx2TopicMap()
		topicDaoSingleInstance = &TopicDao{}
	})
	return topicDaoSingleInstance
}

// 根据id获取一个Topic
func (*TopicDao) SelectTopicById(id int32) *Topic {
	return TopicMap[id]
}
