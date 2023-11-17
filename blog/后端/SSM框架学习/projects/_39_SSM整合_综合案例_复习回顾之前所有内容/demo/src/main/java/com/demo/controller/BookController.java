package com.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demo.pojo.Book;
import com.demo.service.BookService;

@Controller
@ResponseBody
@RequestMapping("/books")
public class BookController {
    @Autowired
    BookService bookService;

    // 请求：localhost/books
    // 方式：POST
    // 参数：{ "name":"post-tes1t", "author":"me", "description":"des"}
    // 响应：true
    @PostMapping
    boolean add(@RequestBody Book book) {
        return bookService.add(book);
    }

    // 请求：localhost/books/1
    // 方式：Delete
    // 参数：
    // 响应：true
    @DeleteMapping("/{id}")
    boolean delete(@PathVariable Integer id) {
        return bookService.deleteById(id);
    }

    // 请求：localhost/books/1
    // 方式：Put
    // 参数：{ "id":1, "name":"post-test1", "author":"dyg", "description":"descrip"}
    // 响应：true
    @PutMapping
    boolean update(@RequestBody Book book) {
        return bookService.update(book);
    }

    // 请求：localhost/books/8
    // 方式：Get
    // 参数：
    // 响应： { "id": 8, "name": "post-tes1t", "author": "me","description": "des" }
    @GetMapping("/{id}")
    Book getById(@PathVariable Integer id) {
        return bookService.getById(id);
    }

    // 请求：localhost/books/
    // 方式：Get
    // 参数：
    // 响应： [ { "id": 8, "name": "post-tes1t","author":"me", "description": "des" } ]
    @GetMapping
    List<Book> selectAll() {
        return bookService.selectAll();
    }
}
