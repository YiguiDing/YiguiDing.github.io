package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.dao.BookDao;
import com.example.service.Service;

public class App2WithSpring {
    public static void main(String[] args) {
        // 第一步，把spring-context包写入 pom.xml
        // 第二步，编写"applicationContext.xml" 容器配置文件
        // 第三步，使用 ClassPathXmlApplicationContext 实例化IOC容器
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        // 第四步，从容器根据Bean Id获取实例对象
        BookDao bookDao = (BookDao) ctx.getBean("myBookDao_id1");
        Service service = (Service) ctx.getBean("myService_id2");
        bookDao.save();// 输出一行
        service.save();// 输出两行
    }
}
