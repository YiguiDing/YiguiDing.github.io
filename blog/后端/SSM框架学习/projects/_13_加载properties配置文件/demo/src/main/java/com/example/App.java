package com.example;

import javax.sql.DataSource;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println(context);
        DataSource dds = (DataSource) context.getBean("myGruid");
        MyJDBC myJdbc = (MyJDBC) context.getBean("MyJDBCforTest");
        System.out.println(dds);
        System.out.println(myJdbc);
        context.close();
        /*
         * output:
         * [driverClassName]属性被注入，内容：com.mysql.jdbc.Driver
         * org.springframework.context.support.ClassPathXmlApplicationContext@179d3b25,
         * started on Mon Apr 10 15:21:22 CST 2023
         * {
         * CreateTime:"2023-04-10 15:21:22",
         * ActiveCount:0,
         * PoolingCount:0,
         * CreateCount:0,
         * DestroyCount:0,
         * CloseCount:0,
         * ConnectCount:0,
         * Connections:[
         * ]
         * }
         * com.example.MyJDBC@7e2d773b
         * 四月 10, 2023 3:21:22 下午
         * com.alibaba.druid.support.logging.JakartaCommonsLoggingImpl info
         * 信息: {dataSource-0} closing ...
         */

    }
}
