package com.example.service.impl;

import com.example.dao.BookDao;
import com.example.dao.UserDao;
import com.example.service.Service;

public class ServiceImp implements Service {
    BookDao bookDao_ofService;// 引用数据类型
    UserDao userDao_ofService;// 引用数据类型
    
   
    private ServiceImp() {
        System.out.println("ServiceImp的私有[无参]构造器被调用......");
    }

    @Override
    public void save() {
        System.out.println("ServiceImp: saving...");
        bookDao_ofService.save();
        userDao_ofService.save();
    }

    public void setBookDao_ofService(BookDao bookDao) {
        System.out.println("引用数据类型BookDao被注入");
        this.bookDao_ofService = bookDao;
    }

    public void setUserDao_ofService(UserDao userDao) {
        System.out.println("引用数据类型UserDao被注入");
        this.userDao_ofService = userDao;
    }
    
}
