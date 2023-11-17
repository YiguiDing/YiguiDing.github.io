package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.example") // 包扫描
// @ComponentScan({"com.example.dao","com.example.service"}) // 扫描多个包
public class SpringConfig {

}
