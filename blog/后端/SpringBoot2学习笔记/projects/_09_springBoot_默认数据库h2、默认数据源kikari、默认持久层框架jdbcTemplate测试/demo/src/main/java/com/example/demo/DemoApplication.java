package com.example.demo;

import java.sql.SQLException;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.demo.Dao.BookDao;
import com.example.demo.pojo.Book;

@SpringBootApplication
public class DemoApplication {
	public static void main(String[] args) throws SQLException {
		ConfigurableApplicationContext ctx = SpringApplication.run(DemoApplication.class, args);
		BookDao bookDao = ctx.getBean(BookDao.class);
		List<Book> books = bookDao.selectAll();
		System.out.println(books);
		//输出：[Book(id=1, name=1, type=2, description=3), Book(id=2, name=2, type=2, description=2)]
	}
}
