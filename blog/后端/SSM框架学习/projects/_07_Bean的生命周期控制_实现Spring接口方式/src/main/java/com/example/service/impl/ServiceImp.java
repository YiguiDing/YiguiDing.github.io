package com.example.service.impl;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

import com.example.dao.BookDao;
import com.example.service.Service;

public class ServiceImp implements Service, InitializingBean, DisposableBean {
    BookDao bookDao;// 注释掉 = new BookDaoImpl();

    private ServiceImp() {
        System.out.println("ServiceImp的私有无参构造器被调用......");
    }

    @Override
    public void save() {
        System.out.println("ServiceImp: saving book...");
        bookDao.save();
    }

    public void setBookDao(BookDao bookDao) {
        System.out.println("setBookDao()被调用......");
        this.bookDao = bookDao;
    }

    @Override
    public void afterPropertiesSet() {
        // 这会在setter方法之后被调用
        System.out.println("BookDaoImpl的实例对象: " + this + ".afterPropertiesSet()被调用......");
        System.out.println("BookDaoImpl的实例对象: " + this + "即将被初始化....");
    }

    @Override
    public void destroy() {
        System.out.println("BookDaoImpl的实例对象: " + this + ".destory()被调用......");
        System.out.println("BookDaoImpl的实例对象: " + this + "即将被销毁....");
    }
}
