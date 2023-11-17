package repository

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"path"
	"sync"
)

type Post struct {
	Id          int32  `json:"id"`
	Parent_id   int32  `json:"parent_id"`
	Content     string `json:"content"`
	Create_time int32  `json:"create_time"`
}
type PostDao struct {
}

var PostListMap map[int32](map[int32]*Post)
var postDao *PostDao
var psotOnc sync.Once

func initIdx2PostMap() error {
	workDir, _ := os.Getwd() // 获取工作目录
	filePath := path.Join(workDir, "./data/Post.db")
	file, err := os.Open(filePath)
	if err != nil {
		fmt.Println(err)
		os.Exit(-1)
		return err
	}
	bufScaner := bufio.NewScanner(file)
	temp := make(map[int32](map[int32]*Post)) // 类型是两层map
	for bufScaner.Scan() {                    // 每次读取一行
		post := Post{}
		err = json.Unmarshal([]byte(bufScaner.Text()), &post)
		if err != nil {
			return err
		}
		if temp[post.Parent_id] == nil { // 初始化第二层map
			temp[post.Parent_id] = make(map[int32]*Post)
		}
		temp[post.Parent_id][post.Id] = &post
	}
	PostListMap = temp
	return nil
}

func NewPostDaoInstance() *PostDao {
	psotOnc.Do(func() { // 懒汉单例
		initIdx2PostMap() // 初始化
		postDao = &PostDao{}
	})
	return postDao
}

// 根据父id获取回复列表
func (*PostDao) SelectPostListByFatherId(fatherId int32) []*Post {
	postMap := PostListMap[fatherId]
	postList := make([]*Post, 0)
	for _, post := range postMap {
		postList = append(postList, post)
	}
	return postList
}
