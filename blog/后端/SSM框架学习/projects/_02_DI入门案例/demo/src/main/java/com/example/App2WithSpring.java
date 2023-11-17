package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.service.Service;

public class App2WithSpring {
    public static void main(String[] args) {
        // 依赖注入：
        // 第一步 修改将被依赖注入的类，让其不要自己创建所要依赖的对象
        // 第二步 为其编写setBookDan() 方法，使外部创建的对象可以通过这个方法注入进去
        // 第三步 修改applicationcontext.xml文件，指定两对象的依赖关系
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        Service service = (Service) ctx.getBean("myService_id2");
        service.save();// 输出两行
    }
}
