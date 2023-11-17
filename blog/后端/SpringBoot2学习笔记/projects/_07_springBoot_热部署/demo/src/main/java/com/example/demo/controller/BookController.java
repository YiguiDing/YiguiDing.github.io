package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.controller.util.Result;
import com.example.demo.pojo.Book;
import com.example.demo.pojo.BookCondition;
import com.example.demo.service.impl.BookServiceImp;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/books")
public class BookController {
// public class BookController extends BaseClass {
    // static  Logger log = LoggerFactory.getLogger(BookController.class);
    @Autowired
    BookServiceImp bookService;
    int MAX_PAGE_SIZE = 25;
    @PostMapping
    Result save(@RequestBody(required = true) Book book) {
        boolean res = bookService.save(book);
        log.debug("这是debug日志");   
        log.info("这是info日志");
        log.warn("这是warn日志");
        log.error("这是error日志");
        // log.error("这是error日志");
        
        if (res) return new Result(res, Result.SAVE_OK);
        else return new Result(res, Result.SAVE_ER);
    }

    @GetMapping("/{id}")
    Result get(@PathVariable int id) {
        Book book = bookService.getById(id);
        if (book != null) return new Result(book, Result.QUEY_OK);
        else return new Result(book, Result.QUEY_ER);
    }

    @PutMapping
    Result update(@RequestBody Book book) {
        boolean res = bookService.updateById(book);
        if (res) return new Result(res, Result.MODF_OK);
        else return new Result(res, Result.MODF_ER);
    }

    @DeleteMapping("/{id}")
    Result delete(@PathVariable int id) {
        boolean res = bookService.removeById(id);
        if (res) return new Result(res, Result.DELT_OK);
        else return new Result(res, Result.DELT_ER);
    }

    @GetMapping("/page/{page}")
    Result page(
        @PathVariable int page,
        @RequestBody(required = false) BookCondition condition
    ){
        Page<Book> p = new Page<>(page, MAX_PAGE_SIZE);
        LambdaQueryWrapper<Book> queryWrapper = new LambdaQueryWrapper<>();
        if(condition!=null){
            queryWrapper.eq(condition.getId()!=null, Book::getId, condition.getId());
            queryWrapper.between(condition.getPriceMax()!=null && condition.getPriceMin()!=null, Book::getPrice,condition.getPriceMin(),condition.getPriceMax());
            queryWrapper.like(condition.getName()!=null, Book::getName,condition.getName());
            queryWrapper.like(condition.getDescription()!=null, Book::getDescription,condition.getDescription());
        }
        Page<Book> res = bookService.page(p, queryWrapper);
        log.debug("这是debug日志");
        log.info("这是info日志");
        log.warn("这是warn日志");
        log.error("这是error日志");
        if(res!=null) return new Result(res, Result.QUEY_OK);
        else return new Result(res, Result.QUEY_ER);
    }
}
