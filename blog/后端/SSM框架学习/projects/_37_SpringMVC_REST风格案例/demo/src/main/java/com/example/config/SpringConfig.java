package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.stereotype.Controller;

@Configuration
// 使用过滤器排除表现层Bean
@ComponentScan(
    value = "com.demo", 
    excludeFilters = {
        // 按注解排除掉控制器
        @Filter(type = FilterType.ANNOTATION, classes = Controller.class)
    }
)
// 使用精确匹配，只扫描service和dao，不扫描controller
// @ComponentScan({ "com.demo.service", "com.demo.dao" }) 
public class SpringConfig {

}
