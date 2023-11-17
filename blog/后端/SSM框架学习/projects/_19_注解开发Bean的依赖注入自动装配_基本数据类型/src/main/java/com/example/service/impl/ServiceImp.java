package com.example.service.impl;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.example.dao.BookDao;
import com.example.service.Service;

@Component
@Scope("prototype")
public class ServiceImp implements Service {
    @Value("DDDserver") // 字面量注入
    String serverName;
    @Value("${serverConfig.maxConnections}") // 通过外部配置文件注入
    int maxConnections;

    @Autowired
    @Qualifier("bookDao1")
    BookDao bookDao;

    private ServiceImp() {
        System.out.println("ServiceImp的私有无参构造器被调用......");
    }

    @Override
    public void save() {
        System.out.println("----------------->serverName: " + serverName);
        System.out.println("----------------->maxConnections: " + maxConnections);
        System.out.println("ServiceImp: saving book...");
        bookDao.save();
    }

    public void setBookDao(BookDao bookDao) {
        System.out.println("setBookDao()被调用");
        this.bookDao = bookDao;
    }

    @PostConstruct
    public void afterInit() {
        System.out.println("afterInit() Method executed......");
    }

    @PreDestroy
    public void beforeDestory() {
        System.out.println("beforeDestory() Method executed......");
    }
}
