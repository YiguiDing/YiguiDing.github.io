package com.example.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.alibaba.druid.pool.DruidDataSource;

@Configuration
public class SpringConfig {

    @Bean // 表示把其返回值当做bean管理
    // @Bean("druid_id1") // 指定id
    // @Bean({"druid_id1","druid_id2"}) // 指定多个id
    public DataSource myDruidDataSource() {
        DruidDataSource dds = new DruidDataSource();
        dds.setDriverClassName("com.mysql.jdbc.Driver");
        dds.setUrl("jdbc:///db5");
        dds.setUsername("root");
        dds.setPassword("root");
        return dds;
    }
}
