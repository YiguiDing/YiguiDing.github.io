package dao_test

import (
	"fmt"
	"myblog/dao"
	"os"
	"testing"
)

func TestMain(m *testing.M) {
	code := m.Run()
	os.Exit(code)
}
func TestUser(t *testing.T) {
	user := dao.User.Add("dyg", "123456")
	fmt.Println(user)
	user = dao.User.GetByName(user.Name)
	fmt.Println(user)
	user = dao.User.GetByNameAndPassword(user.Name, user.Password)
	fmt.Println(user)
}
