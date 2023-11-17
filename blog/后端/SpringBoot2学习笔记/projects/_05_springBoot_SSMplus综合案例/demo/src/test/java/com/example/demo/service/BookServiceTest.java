package com.example.demo.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class BookServiceTest {
    @Autowired
    BookService bookService;
    @Test
    public void testGetById() {
        System.out.println(bookService.getById(5));
        //输出： Book(id=5, name=test, type=test, description=test)
    }
}
