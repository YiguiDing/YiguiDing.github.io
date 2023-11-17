package com.example;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.config.SpringConfig;
import com.example.service.Service;

public class App {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        Service myService1 = (Service) ctx.getBean(Service.class);// 通过类名获取
        Service myService2 = (Service) ctx.getBean(Service.class);// 通过类名获取
        System.out.println(myService1);
        System.out.println(myService2);
        /*
         * output:
         * BookDaoImpl的私有无参构造器被调用......
         * ServiceImp的私有无参构造器被调用......
         * afterInit() Method executed......
         * ServiceImp的私有无参构造器被调用......
         * afterInit() Method executed......
         * com.example.service.impl.ServiceImp@971d0d8
         * com.example.service.impl.ServiceImp@51931956
         */
        ctx.close();
    }
}
