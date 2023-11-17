package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.pojo.Book;
import com.example.demo.service.BookServiceQuick;

// @RestController
// @RequestMapping("/books")
public class BookController_ {
    @Autowired
    BookServiceQuick bookService;

    // 增
    @PostMapping
    public boolean add(@RequestBody Book book) {
        return bookService.save(book);
    }

    // 删
    @DeleteMapping("/{id}")
    public boolean add(@PathVariable int id) {
        return bookService.removeById(id);
    }

    // 改
    @PutMapping
    public boolean update(@RequestBody Book book) {
        return bookService.update(book, null);
    }

    // 查
    @GetMapping("/{id}")
    public Book get(@PathVariable int id) {
        return bookService.getById(id);
    }

    // 分页查
    @GetMapping("/page/{page}")
    public Page<Book> page(@PathVariable int page) {
        return bookService.page(new Page<Book>(page, 10));
    }
}
