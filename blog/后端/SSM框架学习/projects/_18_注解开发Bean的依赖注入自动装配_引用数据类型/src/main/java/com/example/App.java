package com.example;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.config.SpringConfig;
import com.example.service.Service;

public class App {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        Service myService = (Service) ctx.getBean(Service.class);// 通过类名获取
        myService.save();
        /*
         * output:
         * BookDaoImpl的私有无参构造器被调用......
         * ServiceImp的私有无参构造器被调用......
         * afterInit() Method executed......
         * ServiceImp: saving book...
         * BookDaoImpl: saving book...
         */
        ctx.close();
    }
}
