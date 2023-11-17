package router

import (
	"todolist/controller"

	"github.com/gin-gonic/gin"
)

func Init(router *gin.Engine) {
	// for static page
	router.Static("/*", "./static")
	api := router.Group("/api")
	// for task api
	tasks := api.Group("/tasks")
	{
		tasks.GET("/", controller.Task.QueryTodayTasks)
		tasks.POST("/", controller.Task.CreateTask)
	}
}
