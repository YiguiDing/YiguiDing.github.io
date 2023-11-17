package com.example.demo.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.pojo.Book;

@SpringBootTest
public class BookServiceQuickTest {
    @Autowired
    BookServiceQuick bookService;

    @Test
    public void testGetById() {
        Page<Book> page = bookService.page(new Page<>(1, 5));
        System.out.println(page.getCurrent());
        System.out.println(page.getPages());
        System.out.println(page.getSize());
        System.out.println(page.getTotal());
        System.out.println(page.getRecords());
    }
}
