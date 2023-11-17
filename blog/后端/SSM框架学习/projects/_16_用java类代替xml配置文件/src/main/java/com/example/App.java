package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.config.SpringConfig;
import com.example.dao.BookDao;
import com.example.service.Service;

public class App {
    public static void main(String[] args) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        BookDao myBookDao = (BookDao) ctx.getBean("myBookDao");// 通过id获取
        Service myService = (Service) ctx.getBean(Service.class);// 通过类名获取
        System.out.println(myBookDao);
        System.out.println(myService);
        /*
         * output:
         * BookDaoImpl的私有无参构造器被调用......
         * ServiceImp的私有无参构造器被调用......
         * com.example.dao.impl.BookDaoImpl@345965f2
         * com.example.service.impl.ServiceImp@429bd883
         */
    }
}
