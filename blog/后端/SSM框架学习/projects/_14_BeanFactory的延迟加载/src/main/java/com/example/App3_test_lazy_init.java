package com.example;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;

import com.example.service.Service;

public class App3_test_lazy_init {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext-lazy-init.xml");
        /*
         * 有输出，BookDaoImpl被配置为立即加载，myService被配置为懒惰加载
         * output:
         * BookDaoImpl的私有无参构造器被调用......
         */
        Service myService = (Service) ctx.getBean("myService");
        /*
         * 有输出，myService被配置为懒惰加载，所以会在调用getbean是被初始化和注入属性值
         * output:
         * ServiceImp的私有无参构造器被调用......
         * setBookDao()被调用
         */
        myService.save();
        /*
         * output：
         * ServiceImp: saving book...
         * BookDaoImpl: saving book...
         */
    }
}
