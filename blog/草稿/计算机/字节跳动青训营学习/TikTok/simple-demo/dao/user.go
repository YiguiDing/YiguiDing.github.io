package dao

import (
	"myblog/database"
)

type userDao struct{}

var User = &userDao{}
var db = database.Instance

func (*userDao) GetByName(name string) *database.User {
	var user database.User
	db.Take(&user, "name=?", name)
	return &user
}
func (*userDao) GetByNameAndPassword(name, password string) *database.User {
	var user database.User
	db.Take(&user, "name=? and password=?", name, password)
	return &user
}
func (*userDao) Add(name, passwd string) *database.User {
	var user = database.User{
		Name:     name,
		Password: passwd,
	}
	db.Save(&user)
	return &user
}
