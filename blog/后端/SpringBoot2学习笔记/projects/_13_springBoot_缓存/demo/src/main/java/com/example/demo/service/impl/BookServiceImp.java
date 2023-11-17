package com.example.demo.service.impl;

import java.io.Serializable;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.dao.BookDao;
import com.example.demo.pojo.Book;
import com.example.demo.service.BookSevice;

@Service
public class BookServiceImp extends ServiceImpl<BookDao,Book> implements BookSevice{
    @Override
    // 查询结果是可缓存的,alue指定存放的命名空间,key指定id
    @Cacheable(value = "cacheSpaceName_Books",key = "#id")
    public Book getById(Serializable id) {
        return super.getById(id);
    }
}
