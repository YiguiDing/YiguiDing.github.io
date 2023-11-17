package com.example.dao.impl;

import org.springframework.stereotype.Component;

import com.example.dao.BookDao;

@Component
public class BookDaoImpl implements BookDao {
    private BookDaoImpl(){
        System.out.println("BookDaoImpl的私有无参构造器被调用......");
    }
    @Override
    public void save() {
        System.out.println("BookDaoImpl: saving book...");
    }
}
