package db_test

import (
	"fmt"
	"os"
	"testing"
	"todolist/db"
)

func TestMain(m *testing.M) {
	code := m.Run()
	os.Exit(code)
}
func TestDB(t *testing.T) {
	fmt.Printf("%#v", db.Instance)
}
