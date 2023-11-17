package com.example.demo.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.dao.BookDao;
import com.example.demo.pojo.Book;
import com.example.demo.pojo.QueryBookCondition;
import com.example.demo.service.BookServiceQuick;

@Service
public class BookServiceQuickImpl
        extends ServiceImpl<BookDao, Book> // 继承myBatisPlus serviceImpl实现类
        implements BookServiceQuick // 实现bookService接口
{
    // 1.可以再继续写一些想要的方法

    // 2.可以 @Override重写 或 重载 继承的方法
    public Page<Book> getPage(int page, int size) {
        return this.page(new Page<>(page, size));
    }

    public Page<Book> getPageWithCondition(int page, int size, QueryBookCondition condition) {
        LambdaQueryWrapper<Book> wrapper = new LambdaQueryWrapper<Book>();
        if (condition != null) {
            wrapper.eq(condition.getId() != null, Book::getId, condition.getId());
            wrapper.eq( condition.getName() != null, Book::getName, condition.getName());
            wrapper.eq(condition.getType() != null, Book::getType, condition.getType());
        }
        return this.page(new Page<Book>(page, size), wrapper);
    }
}
