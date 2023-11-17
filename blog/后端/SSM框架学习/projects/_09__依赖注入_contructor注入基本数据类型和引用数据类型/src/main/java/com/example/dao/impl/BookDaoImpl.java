package com.example.dao.impl;

import com.example.dao.BookDao;

public class BookDaoImpl implements BookDao {

    String dbName;// 基本数据类型（算是吧？）
    int maxConnections;// 基本数据类型

    public BookDaoImpl(String dbName, int maxConnections) {
        System.out.println("BookDaoImpl的私有[有参]构造器被调用......");
        this.dbName = dbName;
        this.maxConnections = maxConnections;
    }

    @Override
    public void save() {
        System.out.println("dbName: "+dbName);
        System.out.println("maxConnections: "+maxConnections);
        System.out.println("BookDaoImpl: saving book...");
    }
}
