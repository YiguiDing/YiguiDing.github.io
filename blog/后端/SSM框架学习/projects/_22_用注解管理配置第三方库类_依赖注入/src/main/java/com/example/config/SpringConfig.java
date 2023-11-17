package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration // 声明配置类
@Import(jdbcConfig.class) // 导入外部配置
@ComponentScan({"com.example.dao"})// 包扫描，管理Bean
public class SpringConfig {}