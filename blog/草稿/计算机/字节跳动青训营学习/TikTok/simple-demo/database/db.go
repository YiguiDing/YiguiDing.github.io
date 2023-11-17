package database

import (
	"fmt"
	"sync"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Instance = singletonDB()

var dbInstan *gorm.DB
var onceSync sync.Once

func singletonDB() *gorm.DB {
	onceSync.Do(func() {
		db, err := gorm.Open(mysql.Open("root:root@tcp(127.0.0.1:3306)/blog?charset=utf8mb4&parseTime=True&loc=Local"), &gorm.Config{})
		if err != nil {
			fmt.Println(err)
			panic(err)
		}
		err = db.AutoMigrate(&User{}, &Article{}, &Tag{}, &Category{}, &Comment{})
		if err != nil {
			fmt.Println(err)
			panic(err)
		}
		dbInstan = db
	})
	return dbInstan
}

type User struct {
	gorm.Model
	Id        int64
	Name      string     `gorm:"unique"` // 用户名
	Password  string     // 加密后的密码
	Signature string     // 个人简介
	Tel       string     // 电话
	Email     string     // 邮箱
	Role      string     // 权限：root;user;
	Articles  []*Article `gorm:"many2many:users_articles;"` // 文章列表
}

type Article struct {
	gorm.Model
	Title     string      // 标题
	Content   string      // 内容
	Authors   []*User     `gorm:"many2many:users_articles;"`     // 作者列表
	Tags      []*Tag      `gorm:"many2many:articles_tags;"`      // 标签
	Categorys []*Category `gorm:"many2many:articles_categorys;"` // 分类
	Comments  []*Comment  `gorm:"foreignKey:BelongToArticleId"`  // has many 评论
	// AuthorID  int64
	// Author    User // 作者
}

type Tag struct {
	gorm.Model
	Name     string     // 标签名
	OwnerId  uint64     // 创建者id
	Owner    *User      `gorm:"foreignKey:OwnerId"`       // 创建者
	Articles []*Article `gorm:"many2many:articles_tags;"` // article_tags是连接表
}

type Category struct {
	gorm.Model
	Name     string     // 分类名
	OwnerId  uint64     // 创建者id
	Owner    *User      `gorm:"foreignKey:OwnerId"`            // 创建者
	Articles []*Article `gorm:"many2many:articles_categorys;"` // article_categorys是连接表
}

type Comment struct {
	gorm.Model
	Content string //内容

	BelongToArticleId uint64

	PublisherId uint64 // 发布者id
	Publisher   *User  `gorm:"foreignKey:PublisherId"` // 发布者

	BelongToCommentId uint64
	Comments          []*Comment `gorm:"foreignKey:BelongToCommentId"`
}
