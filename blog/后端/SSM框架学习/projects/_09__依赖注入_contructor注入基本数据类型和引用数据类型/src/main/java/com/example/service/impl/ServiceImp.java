package com.example.service.impl;

import com.example.dao.BookDao;
import com.example.dao.UserDao;
import com.example.service.Service;

public class ServiceImp implements Service {
    BookDao bookDao;// 引用数据类型
    UserDao userDao;// 引用数据类型
   
    public ServiceImp(BookDao bookDao, UserDao userDao) {
        System.out.println("ServiceImp的私有[有参]构造器被调用......");
        this.bookDao = bookDao;
        this.userDao = userDao;
    }

    @Override
    public void save() {
        System.out.println("ServiceImp: saving...");
        bookDao.save();
        userDao.save();
    }
}
