package com.example.dao.impl;

import com.example.dao.UserDao;

public class UserDaoImpl implements UserDao {
    String dbName;// 基本数据类型（算是吧？）
    int maxConnections;// 基本数据类型

    public UserDaoImpl(String dbName, int maxConnections) {
        System.out.println("UserDaoImpl的私有[有参]构造器被调用......");
        this.dbName = dbName;
        this.maxConnections = maxConnections;
    }

    @Override
    public void save() {
        System.out.println("dbName: " + dbName);
        System.out.println("maxConnections: " + maxConnections);
        System.out.println("UserDaoImpl: saving user...");
    }
}
