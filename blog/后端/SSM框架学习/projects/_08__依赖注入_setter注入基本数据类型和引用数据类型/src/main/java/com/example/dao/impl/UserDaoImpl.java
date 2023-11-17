package com.example.dao.impl;

import com.example.dao.UserDao;

public class UserDaoImpl implements UserDao {
    String dbName;// 基本数据类型（算是吧？）
    int maxConnections;// 基本数据类型

    private UserDaoImpl() {
        System.out.println("UserDaoImpl的私有[无参]构造器被调用......");
    }

    @Override
    public void save() {
        System.out.println("dbName: " + dbName);
        System.out.println("maxConnections: " + maxConnections);
        System.out.println("UserDaoImpl: saving user...");
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
