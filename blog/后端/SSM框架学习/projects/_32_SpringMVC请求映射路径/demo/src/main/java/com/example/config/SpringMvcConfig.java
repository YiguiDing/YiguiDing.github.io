package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration // 声明这是一个Spring配置
@ComponentScan("com.example.controller") // 设置SpringMVC加载对应的Bean
public class SpringMvcConfig {
    
}
