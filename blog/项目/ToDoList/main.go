package main

import (
	"fmt"
	"todolist/router"

	"github.com/gin-gonic/gin"
)

var add = "0.0.0.0"
var port = "80"
var addr = fmt.Sprintf("%s:%s", add, port)

func main() {
	engin := gin.Default()
	router.Init(engin)
	engin.Run()
	err := engin.Run(addr)
	if err != nil {
		panic("error:fail to start http server at" + addr)
	}
}
