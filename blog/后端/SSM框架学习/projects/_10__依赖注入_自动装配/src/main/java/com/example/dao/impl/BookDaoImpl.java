package com.example.dao.impl;

import com.example.dao.BookDao;

public class BookDaoImpl implements BookDao {

    String dbName;// 基本数据类型（算是吧？）
    int maxConnections;// 基本数据类型

    private BookDaoImpl() {
        System.out.println("BookDaoImpl的私有[无参]构造器被调用......");
    }

    @Override
    public void save() {
        System.out.println("dbName: "+dbName);
        System.out.println("maxConnections: "+maxConnections);
        System.out.println("BookDaoImpl: saving book...");
    }

    public void setDbName(String dbName) {
        System.out.println("基本数据类型dbName被注入");
        this.dbName = dbName;
    }

    public void setMaxConnections(int maxConnections) {
        System.out.println("基本数据类型maxConnections被注入");
        this.maxConnections = maxConnections;
    }
    
}
