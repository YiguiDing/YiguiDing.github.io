package dao_test

import (
	"encoding/json"
	"fmt"
	"os"
	"testing"
	"time"
	"todolist/dao"
	"todolist/db"
)

func TestMain(m *testing.M) {
	code := m.Run()
	os.Exit(code)
}
func TestInsert(t *testing.T) {
	res := dao.Task.Insert(&db.Task{
		Content: "测试",
	})
	fmt.Printf("Insert:%#v", res)
}
func TestQuery(t *testing.T) {
	res := dao.Task.Query(&db.Task{}, time.Now().Add(-24*time.Hour), time.Now())
	buf, _ := json.Marshal(res)
	fmt.Printf("Query:%v", string(buf))
}
func TestUpdate(t *testing.T) {
	res := dao.Task.Update(&db.Task{
		ID:      1,
		Content: "updated",
		Done:    true,
	})
	fmt.Printf("Update:%#v", res)
}
