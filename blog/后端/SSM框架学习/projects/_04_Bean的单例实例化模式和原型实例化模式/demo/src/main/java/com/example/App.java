package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.service.impl.ServiceImp;

public class App {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        ServiceImp service1 = (ServiceImp) ctx.getBean("myService_id2");
        ServiceImp service2 = (ServiceImp) ctx.getBean("myService_id2");
        ServiceImp service3 = (ServiceImp) ctx.getBean("myService_id2");
        ServiceImp service4 = (ServiceImp) ctx.getBean("myService_id2");
        System.out.println(service1);// 地址不相同,因为scope="prototype"
        System.out.println(service2);// 地址不相同,因为scope="prototype"
        System.out.println(service3);// 地址不相同,因为scope="prototype"
        System.out.println(service4);// 地址不相同,因为scope="prototype"
        System.out.println(service1.getBookDao());// 地址相同,因为scope="singleton"
        System.out.println(service2.getBookDao());// 地址相同,因为scope="singleton"
        System.out.println(service3.getBookDao());// 地址相同,因为scope="singleton"
        System.out.println(service4.getBookDao());// 地址相同,因为scope="singleton"
        service4.save();// 输出两行
    }
}
