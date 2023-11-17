package com.demo.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan("com.demo.controller")
@Import(SpringMvcSupportConfig.class) // 记得导入配置，但最好不要写包扫描com.demo.config,不然会把spring的容器也扫描到
public class SpringMvcConfig {
    
}
