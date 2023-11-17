package com.example.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.controller.utils.Result;
import com.example.demo.pojo.Book;
import com.example.demo.pojo.QueryBookCondition;
import com.example.demo.service.BookServiceQuick;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    BookServiceQuick bookService;

    // 增
    @PostMapping
    public Result add(@RequestBody Book book) throws Exception {
        boolean res = bookService.save(book);
        Result result = new Result();
        result.setDate(res);
        result.setInfo(res ? Result.ADD_OK : Result.ADD_FL);
        return result;
    }

    // 删
    @DeleteMapping("/{id}")
    public Result del(@PathVariable int id) {
        boolean res = bookService.removeById(id);
        Result result = new Result();
        result.setDate(res);
        result.setInfo(res ? Result.DEL_OK : Result.DEL_FL);
        return result;
    }

    // 改
    @PutMapping
    public Result update(@RequestBody Book book) {
        System.out.println(book);
        boolean res = bookService.updateById(book);
        Result result = new Result();
        result.setDate(res);
        result.setInfo(res ? Result.UPD_OK : Result.UPD_FL);
        return result;
    }

    // 查
    @GetMapping("/{id}")
    public Result get(@PathVariable int id) {
        Book book = bookService.getById(id);
        Result result = new Result();
        result.setDate(book);
        result.setInfo(book != null ? Result.SER_OK : Result.SER_FL);
        return result;
    }

    // 分页查
    // @GetMapping("/page/{page}")
    // public Result page(@PathVariable int page) {
    // Page<Book> res = bookService.getPage(page,10);
    // Result result = new Result();
    // result.setDate(res);
    // result.setInfo(res != null ? Result.PAG_OK : Result.PAG_FL);
    // return result;
    // }

    // 分页查+条件查
    @GetMapping("/page/{page}")
    public Result pageAndCondition(
            @PathVariable int page,
            @RequestBody(required = false) QueryBookCondition condition // 不是必要参数
    ) {
        Page<Book> res = bookService.getPageWithCondition(page, 10, condition);
        Result result = new Result();
        result.setDate(res);
        result.setInfo(res != null ? Result.PAG_OK : Result.PAG_FL);
        return result;
    }
}
