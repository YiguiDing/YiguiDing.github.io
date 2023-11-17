package com.example;

import javax.sql.DataSource;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.alibaba.druid.pool.DruidDataSource;
import com.example.config.SpringConfig;

public class App {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        DataSource ds = ctx.getBean(DruidDataSource.class);
        System.out.println(ds);
        ctx.close();
        /*
         * {
         * CreateTime:"2023-04-10 23:07:44",
         * ActiveCount:0,
         * PoolingCount:0,
         * CreateCount:0,
         * DestroyCount:0,
         * CloseCount:0,
         * ConnectCount:0,
         * Connections:[
         * ]
         * }
         * 四月 10, 2023 11:07:45 下午
         * com.alibaba.druid.support.logging.JakartaCommonsLoggingImpl info
         * 信息: {dataSource-0} closing ...
         */
    }
}
