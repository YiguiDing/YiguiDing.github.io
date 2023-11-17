package com.example;

import javax.sql.DataSource;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {
        ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println(context);
        DataSource dds = (DataSource) context.getBean("myGruid");
        System.out.println(dds);
        context.close();
        /*
         * 输出
         * org.springframework.context.support.ClassPathXmlApplicationContext@179d3b25,
         * started on Mon Apr 10 13:51:12 CST 2023
         * {
         * CreateTime:"2023-04-10 13:51:13",
         * ActiveCount:0,
         * PoolingCount:0,
         * CreateCount:0,
         * DestroyCount:0,
         * CloseCount:0,
         * ConnectCount:0,
         * Connections:[
         * ]
         * }
         * 四月 10, 2023 1:51:13 下午
         * com.alibaba.druid.support.logging.JakartaCommonsLoggingImpl info
         * 信息: {dataSource-0} closing ...
         */
    }
}
