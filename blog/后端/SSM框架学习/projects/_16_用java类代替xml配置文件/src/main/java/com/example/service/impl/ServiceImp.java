package com.example.service.impl;

import org.springframework.stereotype.Component;

import com.example.dao.BookDao;
import com.example.service.Service;

// 不填id的component只能通过类的class访问
@Component
public class ServiceImp implements Service {
    BookDao bookDao;// 注释掉 = new BookDaoImpl();
    private ServiceImp(){
        System.out.println("ServiceImp的私有无参构造器被调用......");
    }
    @Override
    public void save() {
        System.out.println("ServiceImp: saving book...");
        bookDao.save();
    }
    public void setBookDao(BookDao bookDao) {
        System.out.println("setBookDao()被调用");
        this.bookDao = bookDao;
    }
}
