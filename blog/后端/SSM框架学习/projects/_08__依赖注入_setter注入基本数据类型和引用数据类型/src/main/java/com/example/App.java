package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.service.Service;

public class App {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        Service service1 = (Service) ctx.getBean("myService_id");
        service1.save();
        // 输出很多行:
        /*
         * BookDaoImpl的私有[无参]构造器被调用......
         * 基本数据类型dbName被注入
         * 基本数据类型maxConnections被注入
         * UserDaoImpl的私有[无参]构造器被调用......
         * 基本数据类型dbName被注入
         * 基本数据类型maxConnections被注入
         * ServiceImp的私有[无参]构造器被调用......
         * 引用数据类型BookDao被注入
         * 引用数据类型UserDao被注入
         * ServiceImp: saving...
         * dbName: mysql_db_books
         * maxConnections: 50
         * BookDaoImpl: saving book...
         * dbName: mysql_db_users
         * maxConnections: 1000
         * UserDaoImpl: saving user...
         * 
         */
    }
}
