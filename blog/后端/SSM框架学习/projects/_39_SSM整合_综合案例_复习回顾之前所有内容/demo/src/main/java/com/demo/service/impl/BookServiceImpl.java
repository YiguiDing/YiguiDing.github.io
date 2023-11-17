package com.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.dao.BookDao;
import com.demo.pojo.Book;
import com.demo.service.BookService;

@Service
@Transactional(rollbackFor = { Throwable.class })
public class BookServiceImpl implements BookService {
    @Autowired
    BookDao bookDao;

    @Override
    public boolean add(Book book) {
        bookDao.add(book);
        return true;
    }

    @Override
    public boolean deleteById(Integer id) {
        bookDao.deleteById(id);
        return true;
    }

    @Override
    public boolean update(Book book) {
        bookDao.update(book);
        return true;
    }

    @Override
    public Book getById(Integer id) {
        return bookDao.getById(id);
    }

    @Override
    public List<Book> selectAll() {
        return bookDao.selectAll();
    }

}
