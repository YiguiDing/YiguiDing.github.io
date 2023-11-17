package com.example.dao.impl;

import org.springframework.stereotype.Component;

import com.example.dao.BookDao;

// Component表示该类是一个Bean，括号中的字符串就是bean的id，
@Component("bookDao1")
public class BookDaoImpl implements BookDao {
    private BookDaoImpl(){
        System.out.println("BookDaoImpl的私有无参构造器被调用......");
    }
    @Override
    public void save() {
        System.out.println("BookDaoImpl: saving book...");
    }
}
