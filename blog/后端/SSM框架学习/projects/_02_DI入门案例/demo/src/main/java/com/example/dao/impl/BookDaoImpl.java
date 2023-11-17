package com.example.dao.impl;

import com.example.dao.BookDao;

public class BookDaoImpl implements BookDao {

    @Override
    public void save() {
        System.out.println("BookDaoImpl: saving book...");
    }
}
