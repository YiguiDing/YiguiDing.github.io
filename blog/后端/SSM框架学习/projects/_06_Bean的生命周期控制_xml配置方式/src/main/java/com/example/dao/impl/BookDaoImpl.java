package com.example.dao.impl;

import com.example.dao.BookDao;

public class BookDaoImpl implements BookDao {
    private BookDaoImpl() {
        System.out.println("BookDaoImpl的私有无参构造器被调用......");
    }

    @Override
    public void save() {
        System.out.println("BookDaoImpl: saving book...");
    }

    void init() {
        System.out.println("BookDaoImpl的实例对象: " + this + ".init()被调用......");
        System.out.println("BookDaoImpl的实例对象: " + this + "即将被初始化....");
    }

    void destory() {
        System.out.println("BookDaoImpl的实例对象: " + this + ".destory()被调用......");
        System.out.println("BookDaoImpl的实例对象: " + this + "即将被销毁....");
    }
}
