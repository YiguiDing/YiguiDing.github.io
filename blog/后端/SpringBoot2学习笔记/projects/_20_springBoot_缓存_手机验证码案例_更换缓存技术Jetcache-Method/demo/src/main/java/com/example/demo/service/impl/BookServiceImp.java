package com.example.demo.service.impl;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alicp.jetcache.anno.CacheInvalidate;
import com.alicp.jetcache.anno.CacheType;
import com.alicp.jetcache.anno.CacheUpdate;
import com.alicp.jetcache.anno.Cached;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.dao.BookDao;
import com.example.demo.pojo.Book;
import com.example.demo.service.BookSevice;

@Service
public class BookServiceImp extends ServiceImpl<BookDao, Book> implements BookSevice {
    @Autowired
    BookDao bookDao;

    // 数据添加成功则缓存数据
    @CacheUpdate(condition = "#result==true", name = "book_", key = "#book.id",value = "#book")
    @Override
    public boolean save(Book book) {
        return bookDao.insert(book) > 0;
    }

    // 数据库中的数据删除成功后，删除缓存中的对象，使得下一次查询时从数据库查询
    @CacheInvalidate(condition = "#result==true", name = "book_", key = "#book.id")
    @Override
    public boolean removeById(Book book) {
        return bookDao.deleteById(book) > 0;
    }

    // 数据库中的数据更新成功后，删除缓存中的对象，使得下一次查询时从数据库查询
    @CacheInvalidate(condition = "#result==true", name = "book_", key = "#book.id")
    @Override
    public boolean updateById(Book book) {
        return bookDao.updateById(book) > 0;
    }
    // 数据库中的数据查询成功后，更新缓存中的对象
    @Cached(name = "book_", key = "#id", expire = 3600, cacheType = CacheType.LOCAL)
    @Override
    public Book getById(Serializable id) {
        return bookDao.selectById(id);
    }
}
