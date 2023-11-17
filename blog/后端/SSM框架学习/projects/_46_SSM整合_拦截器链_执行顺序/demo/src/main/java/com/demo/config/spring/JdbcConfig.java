package com.demo.config.spring;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;
import com.alibaba.druid.pool.DruidDataSource;

@Configuration
@PropertySource("classpath:jdbc.prop")
public class JdbcConfig {
    @Value("${jdbc.driver}")
    String driver;
    @Value("${jdbc.url}")
    String url;
    @Value("${jdbc.user}")
    String user;
    @Value("${jdbc.password}")
    String password;

    @Bean
    DataSource datasource() {
        DruidDataSource dds = new DruidDataSource();
        dds.setDriverClassName(driver);
        dds.setUrl(url);
        dds.setUsername(user);
        dds.setPassword(password);
        return dds;
    }

    @Bean
    PlatformTransactionManager platformTransactionManager(DataSource datasource) {
        DataSourceTransactionManager pManager = new DataSourceTransactionManager();
        pManager.setDataSource(datasource);
        return pManager;
    }
}
