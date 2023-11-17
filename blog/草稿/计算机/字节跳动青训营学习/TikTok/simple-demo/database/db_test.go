package database_test

import (
	"myblog/database"
	"os"
	"testing"
)

func TestMain(m *testing.M) {
	code := m.Run()
	os.Exit(code)
}
func TestDB(t *testing.T) {
	db := database.Instance
	t.Logf("%#v\n", db)
}
