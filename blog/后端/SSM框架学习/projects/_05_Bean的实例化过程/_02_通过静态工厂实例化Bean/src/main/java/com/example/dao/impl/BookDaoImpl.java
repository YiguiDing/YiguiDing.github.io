package com.example.dao.impl;

import com.example.dao.BookDao;

public class BookDaoImpl implements BookDao {
    public BookDaoImpl(){
        System.out.println("BookDaoImpl的无参构造器被调用......");
    }
    @Override
    public void save() {
        System.out.println("BookDaoImpl: saving book...");
    }
}
