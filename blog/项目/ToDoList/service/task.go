package service

import (
	"time"
	"todolist/dao"
	"todolist/db"
)

type taskService struct{}

var Task = &taskService{}

func (*taskService) Create(content string) *db.Task {
	task := dao.Task.Insert(&db.Task{
		Content: content,
	})
	return task
}
func (*taskService) QueryToday() []*db.Task {
	t1 := time.Now()
	t2 := time.Date(t1.Year(), t1.Month(), t1.Day(), 0, 0, 0, 0, time.UTC)
	tasks := dao.Task.Query(&db.Task{}, t2, t1)
	return tasks
}
func (*taskService) Update(taskid uint, task *db.Task) *db.Task {
	return dao.Task.Update(&db.Task{
		ID:      taskid,
		Content: task.Content,
		Done:    task.Done,
	})
}
