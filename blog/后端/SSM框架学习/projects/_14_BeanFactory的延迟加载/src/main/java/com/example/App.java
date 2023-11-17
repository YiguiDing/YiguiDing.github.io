package com.example;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

import com.example.service.Service;

public class App {
    public static void main(String[] args) {
        BeanFactory ctx = new XmlBeanFactory(new ClassPathResource("applicationContext.xml"));
        /*
         * output:
         * 没有任何输出，因为懒惰加载，beans没有被初始化
         */
        Service myService = (Service) ctx.getBean("myService");
        /*
         * 获取bean实例，此时会调用bean的构造方法
         * output:
         * ServiceImp的私有无参构造器被调用......
         * BookDaoImpl的私有无参构造器被调用......
         */
        myService.save();
        /*
         * output：
         * ServiceImp: saving book...
         * BookDaoImpl: saving book...
         */
    }
}
