package com.example.demo.config;

import javax.sql.DataSource;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import com.alibaba.druid.pool.DruidDataSource;

@ConfigurationProperties // 必须写
public class configDruid {
    @Bean
    @ConfigurationProperties(prefix = "my-datasource") // 必须写
    DataSource dataSource() {
        DataSource dataSource = new DruidDataSource();
        return dataSource;// my-datasource下的属性会自动使用setter函数注入到datasource中
    }
}
