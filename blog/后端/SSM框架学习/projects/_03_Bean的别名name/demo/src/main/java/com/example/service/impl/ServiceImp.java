package com.example.service.impl;

import com.example.dao.BookDao;
import com.example.dao.impl.BookDaoImpl;
import com.example.service.Service;

public class ServiceImp implements Service {
    BookDao bookDao;// 注释掉 = new BookDaoImpl();
    @Override
    public void save() {
        System.out.println("ServiceImp: saving book...");
        bookDao.save();
    }
    public void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }
}
