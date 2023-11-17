package db

//
// ATTACH DATABASE 'todolist.db' AS 'todolist';
// .database
import (
	"time"

	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

var Instance *gorm.DB

func init() {
	db, err := gorm.Open(sqlite.Open("todolist.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&Task{})
	Instance = db
}

type Task struct {
	ID        uint `gorm:"primarykey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	Content   string
	Done      bool
}
