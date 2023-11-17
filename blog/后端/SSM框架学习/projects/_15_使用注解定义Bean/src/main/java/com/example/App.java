package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.dao.BookDao;
import com.example.service.Service;

public class App {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookDao myBookDao = (BookDao) ctx.getBean("myBookDao");// 通过id获取
        Service myService = (Service) ctx.getBean(Service.class);// 通过类名获取
        System.out.println(myBookDao);
        System.out.println(myService);
    }
}
