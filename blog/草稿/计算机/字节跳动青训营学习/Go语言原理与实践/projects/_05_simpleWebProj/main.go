package main

import (
	"fmt"
	"main/controller"

	"github.com/gin-gonic/gin"
)

func main() {
	g := gin.Default()
	g.GET("/community/topic/:id", func(ctx *gin.Context) {
		topicId := ctx.Param("id")
		data := controller.QueryPageInfo(topicId)
		ctx.JSON(200, data)
	})
	err := g.Run("0.0.0.0:8080")
	if err != nil {
		fmt.Println(err)
	}
}
