package com.example.service.impl;

import com.example.dao.BookDao;
import com.example.service.Service;

public class ServiceImp implements Service {
    BookDao bookDao;// 注释掉 = new BookDaoImpl();
    private ServiceImp(){
        System.out.println("ServiceImp的无参构造器被调用......");
    }
    @Override
    public void save() {
        System.out.println("ServiceImp: saving book...");
        bookDao.save();
    }
    public void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }
}
