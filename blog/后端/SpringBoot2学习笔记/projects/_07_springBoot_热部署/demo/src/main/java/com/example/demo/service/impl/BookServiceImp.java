package com.example.demo.service.impl;

import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.dao.BookDao;
import com.example.demo.pojo.Book;
import com.example.demo.service.BookSevice;

@Service
public class BookServiceImp 
    extends ServiceImpl<BookDao,Book>
    implements BookSevice{
    
}
