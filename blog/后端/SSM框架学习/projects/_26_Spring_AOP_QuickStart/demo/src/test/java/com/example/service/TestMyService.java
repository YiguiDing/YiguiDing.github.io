package com.example.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.example.config.SpringConfig;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringJUnitConfig(classes = SpringConfig.class)
public class TestMyService {
    @Autowired
    MyService myService;
    @Test
    public void testMethodA(){
        myService.methodA();
    }
}
