package com.example.demo.service.impl;

import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.dao.BookDao;
import com.example.demo.pojo.Book;
import com.example.demo.service.BookSevice;

@Service
public class BookServiceImp extends ServiceImpl<BookDao,Book> implements BookSevice{
    @Autowired
    BookDao bookDao;
    HashMap<Integer,Book> cache = new HashMap<>();
    Book getById_withCache(int id){
        Book book = cache.get(id); // 从缓存中取出
        if(book==null) cache.put(id, book=bookDao.selectById(id)); // 缓存中没有 则从数据库中获取,同时存入缓存
        return book;// 返回
    }
}
