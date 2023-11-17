package controller

import (
	"context"
	"errors"
	"net/http"
	"strconv"
	"todolist/service"

	"github.com/gin-gonic/gin"
)

type taskController struct{}

var Task = &taskController{}

func (*taskController) QueryTodayTasks(ctx *gin.Context) {
	tasks := service.Task.QueryToday()
	ctx.JSON(http.StatusOK, Response{
		StatusCode: 0,
		StatusMsg:  "获取成功",
		Data:       tasks,
	})
}
func (*taskController) CreateTask(ctx *gin.Context) {
	content, _ := ctx.GetPostForm("content")
	task := service.Task.Create(content)
	ctx.JSON(http.StatusOK, Response{
		StatusCode: 0,
		StatusMsg:  "创建成功",
		Data:       task,
	})
}

func (*taskController) UpdateTask(ctx *gin.Context) {

	id_, exist := ctx.GetPostForm("id")
	content_, exist := ctx.GetPostForm("content")
	done_, exist := ctx.GetPostForm("done")

	task := service.Task.Update()
	ctx.JSON(http.StatusOK, Response{
		StatusCode: 0,
		StatusMsg:  "更新成功",
		Data:       task,
	})
}
func checkParmas(ctx *gin.Context) error {
	id_, id_exist := ctx.GetPostForm("id")
	content_, content_exist := ctx.GetPostForm("content")
	done_, done_exist := ctx.GetPostForm("done")

	if id_exist == false {
		return errors.New("缺少id")
	}
	if content_exist == false || done_exist == false {
		return errors.New("缺少需更新的字段")
	}
	id, id_err := strconv.Atoi(id_)
	context := 
}
