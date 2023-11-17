package com.example.demo.service.impl;


import org.springframework.beans.factory.annotation.Autowired;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.dao.BookDao;
import com.example.demo.pojo.Book;
import com.example.demo.service.BookService;

public class BookServiceImpl implements BookService {
    @Autowired
    BookDao bookDao;
    @Override
    public Boolean add(Book book) {
        return bookDao.insert(book) > 0;
    }

    @Override
    public Boolean deleteById(Integer id) {
        return bookDao.deleteById(id) > 0;
    }

    @Override
    public Boolean update(Book book) {
        return bookDao.update(book, null) > 0;
    }

    @Override
    public Book getById(Integer id) {
        return bookDao.selectById(id);
    }

    @Override
    public Page<Book> getByPage(int cur, int pageSize) {
        Page<Book> page = new Page<>(cur, pageSize);
        bookDao.selectPage(page, null);
        return page;
    }
    
}
