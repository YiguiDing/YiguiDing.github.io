package com.example.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.alibaba.druid.pool.DruidDataSource;
import com.example.dao.BookDao;

@Configuration
@PropertySource("classpath:jdbcConfig.prop") // 导入外部配置文件
public class jdbcConfig {
    // 基本数据类型的注入
    @Value("${jdbcConfig.driverClass}") // 通过配置文件注入基本数据类型
    String driverClass;
    @Value("${jdbcConfig.url}")
    String url;
    @Value("${jdbcConfig.username}")
    String username;
    @Value("${jdbcConfig.password}")
    String password;

    @Bean // 表示这里生成一个Bean
    public DataSource myDruidDataSource(BookDao bookDao /* 引用数据类型的注入需要通过形参来实现 */) {
        System.out.println(bookDao);// 假设这里是在注入引用数据类型
        DruidDataSource dds = new DruidDataSource();
        dds.setDriverClassName(driverClass);// 基本数据类型的注入：通过配置类的属性来传入值
        dds.setUrl(url);
        dds.setUsername(username);
        dds.setPassword(password);
        return dds;
    }
}
