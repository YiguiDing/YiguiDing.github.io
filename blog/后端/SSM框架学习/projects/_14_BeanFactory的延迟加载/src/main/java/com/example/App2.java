package com.example;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;

import com.example.service.Service;

public class App2 {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        /*
         * 有输出，ApplicationContext是立即加载初始化说有bean
         * output:
         * ServiceImp的私有无参构造器被调用......
         * BookDaoImpl的私有无参构造器被调用......
         * setBookDao()被调用
         */
        Service myService = (Service) ctx.getBean("myService");
        /*
         * output:
         * 没有输出
         */
        myService.save();
        /*
         * output：
         * ServiceImp: saving book...
         * BookDaoImpl: saving book...
         */
    }
}
