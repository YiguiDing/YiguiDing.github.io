package com.example.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@ComponentScan("com.example")
@PropertySource("serverConfig.properties") // 不支持使用通配符，但支持classpath:filename.ext
public class SpringConfig {

}
