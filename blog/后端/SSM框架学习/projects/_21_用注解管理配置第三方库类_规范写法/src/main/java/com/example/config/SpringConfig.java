package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
// 写法1 使用import注解，导入class
@Import(jdbcConfig.class) // 导入单个外部配置类 Import注解只能存在一个
// @Import({AConfig.class,BConfig.class,CConfig.class}) //导入多个外部配置类

// 写法2 使用ComponentScan注解，指定扫描包名，这种写法不推荐，因为存在字符串，代码重构时无法自动更新
// @ComponentScan({"com.example.config"})
public class SpringConfig {}