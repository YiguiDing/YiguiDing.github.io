package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.example.config") // // 引入其他配置文件
@ComponentScan("com.example.service") // 扫描包路径,管理bean
public class SpringConfig {
}
