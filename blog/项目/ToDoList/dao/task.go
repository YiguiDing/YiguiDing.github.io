package dao

import (
	"time"
	"todolist/db"
)

type taskDao struct{}

var Task = &taskDao{}

func (*taskDao) Insert(task *db.Task) *db.Task {
	db.Instance.Create(&task)
	return task
}
func (*taskDao) Query(conditions *db.Task, from, to time.Time) []*db.Task {
	tasks := make([]*db.Task, 0)
	conditions.CreatedAt = time.Time{}
	conditions.UpdatedAt = time.Time{}
	db.Instance.Where(conditions).Where("created_at  BETWEEN ? AND ?", from, to).Find(&tasks)
	return tasks
}
func (*taskDao) Update(task *db.Task) *db.Task {
	db.Instance.Model(task).Select("content", "done").Updates(*task)
	return task
}
