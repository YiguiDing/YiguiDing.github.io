package com.example.demo;


import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.example.demo.pojo.Book;

@SpringBootTest
class DemoApplicationTests {
	@Autowired
	MongoTemplate mongoTemplate;
	@Test
	void add(){
		Book book = new Book();
		book.setId(1);
		book.setName("book1");
		book.setType("book1");
		book.setDesc("book1");
		mongoTemplate.insert(book);
	}
	@Test
	void find(){
		List<Book> books = mongoTemplate.findAll(Book.class);;
		System.out.println(books);
	}
}
