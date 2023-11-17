package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration // 声明这是一个Spring配置
@ComponentScan("com.example.controller") // 设置SpringMVC加载对应的Bean
@EnableWebMvc // 开启一系列功能，包括自动将请求体中的JSON数据自动装配到处理函数的形参中
public class SpringMvcConfig {
    
}
