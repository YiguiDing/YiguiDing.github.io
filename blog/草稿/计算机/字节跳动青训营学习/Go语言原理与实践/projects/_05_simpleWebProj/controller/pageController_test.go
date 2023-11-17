package controller

import (
	"encoding/json"
	"fmt"
	"os"
	"testing"
)

func TestMain(t *testing.M) {
	code := t.Run()
	os.Exit(code)
}

func TestPageController(t *testing.T) {
	pageInfo := QueryPageInfo("1")
	buf, err := json.Marshal(pageInfo)
	fmt.Printf("%#v,%#v", string(buf), err)
}
