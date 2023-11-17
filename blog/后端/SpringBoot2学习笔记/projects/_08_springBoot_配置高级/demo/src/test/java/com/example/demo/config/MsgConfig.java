package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MsgConfig {
    @Bean
    String getMsg(){
        // 假设这里创建了一个第三方的Bean，需要在测试环境中使用
        return "this is a message.";
    }
}