package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.service.Service;

public class App {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        Service service1 = (Service) ctx.getBean("myService_id2");
        service1.save();
        // 输出四行:
        /*
         * BookDaoImpl的私有无参构造器被调用......
         * ServiceImp的私有无参构造器被调用......
         * ServiceImp: saving book...
         * BookDaoImpl: saving book...
         * 
         */
    }
}
