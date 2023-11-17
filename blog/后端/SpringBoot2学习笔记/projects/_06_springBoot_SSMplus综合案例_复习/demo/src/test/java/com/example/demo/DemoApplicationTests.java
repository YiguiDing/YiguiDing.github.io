package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.dao.BookDao;
import com.example.demo.pojo.Book;

@SpringBootTest
class DemoApplicationTests {
	@Autowired
	BookDao bookDao;

	@Test
	void contextLoads() {
		// bookDao.insert(new Book(1l,"aaaa","kkkk",1.0));
		bookDao.selectById(1);
	}

}
