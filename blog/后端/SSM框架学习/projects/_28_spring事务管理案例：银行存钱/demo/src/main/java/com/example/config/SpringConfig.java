package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@ComponentScan("com.example.config")  // 引入其他配置文件
@ComponentScan("com.example.service") // 扫描包路径,管理bean
@ComponentScan("com.example.advice") // 扫描AOP
@EnableAspectJAutoProxy
public class SpringConfig {
}
