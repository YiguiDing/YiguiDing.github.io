package com.example.service.impl;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.example.dao.BookDao;
import com.example.service.Service;

// 不填id的component只能通过类的class访问
@Component
@Scope("prototype") // 原型模式，默认为单例模式
public class ServiceImp implements Service {
    // 如果容器中只有一个`BookDao`实例，无论属性名和id是否一致，都会被注入
    // 如果容器中含有多个`BookDao`实例，bookDao的id需和此处的属性名一致
    // 自动装配,写在此处会利用反射暴力注入，不会调用setter方法
    @Autowired
    @Qualifier("bookDao1") // 如果容器中含有多个`BookDao`实例,用`@Qualifier`注解来指定具体注入的bean的id
    BookDao bookDao;

    private ServiceImp() {
        System.out.println("ServiceImp的私有无参构造器被调用......");
    }

    @Override
    public void save() {
        System.out.println("ServiceImp: saving book...");
        bookDao.save();
    }

    // 如果容器中只有一个`BookDao`实例，无论属性名和id是否一致，都会被注入
    // 如果容器中含有多个`BookDao`实例，bookDao的id需和此处的属性名一致
    // 自动装配，写在此处会执行setter方法
    // @Autowired
    public void setBookDao(BookDao bookDao) {
        System.out.println("setBookDao()被调用");
        this.bookDao = bookDao;
    }

    // 生命周期控制
    // 在setter方法执行后执行
    @PostConstruct
    public void afterInit() {
        System.out.println("afterInit() Method executed......");
    }

    // 生命周期控制
    // 销毁实例所要前执行的函数
    @PreDestroy
    public void beforeDestory() {
        System.out.println("beforeDestory() Method executed......");
    }
}
