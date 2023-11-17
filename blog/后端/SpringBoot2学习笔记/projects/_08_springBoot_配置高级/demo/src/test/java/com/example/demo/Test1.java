package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

import com.example.demo.config.MsgConfig;

@SpringBootTest
@Import({MsgConfig.class})// 导入Bean配置
public class Test1 {
    @Autowired
    String msg; 
    @Test
    void test(){
        System.out.println(msg);// 输出：this is a message.
    }
}
