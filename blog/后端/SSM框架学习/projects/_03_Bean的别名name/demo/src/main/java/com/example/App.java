package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.service.Service;

public class App {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        Service service1 = (Service) ctx.getBean("server_alies1");
        Service service2 = (Service) ctx.getBean("server_alies2");
        Service service3 = (Service) ctx.getBean("server_alies3");
        Service service4 = (Service) ctx.getBean("server_alies4");
        System.out.println(service1);// 地址相同
        System.out.println(service2);// 地址相同
        System.out.println(service3);// 地址相同
        System.out.println(service4);// 地址相同
        service4.save();// 输出两行
    }
}
