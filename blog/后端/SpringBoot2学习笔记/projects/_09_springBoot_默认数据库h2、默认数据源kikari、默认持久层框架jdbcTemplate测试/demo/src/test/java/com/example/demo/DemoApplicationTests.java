package com.example.demo;

import java.sql.SQLException;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.Dao.BookDao;
import com.example.demo.pojo.Book;

@SpringBootTest
class DemoApplicationTests {
	@Autowired
	BookDao bookDao;
	@Test
	void test() throws SQLException {
		List<Book> selectAll = bookDao.selectAll();
		System.out.println(selectAll);
	}

}
