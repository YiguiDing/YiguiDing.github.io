package com.demo.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@Import({ JdbcConfig.class, MybatisConfig.class })
@ComponentScan({ /* "com.demo.dao", */ "com.demo.service" })
@EnableTransactionManagement
public class SpringConfig {

}
