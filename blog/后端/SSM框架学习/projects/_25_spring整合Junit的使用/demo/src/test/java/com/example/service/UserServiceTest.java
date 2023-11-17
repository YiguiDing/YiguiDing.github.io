package com.example.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.example.config.SpringConfig;

@RunWith(SpringJUnit4ClassRunner.class) // 设置JUnit的类运行器为Spring的SpringJUnit4ClassRunner类运行器
@ContextConfiguration(classes = SpringConfig.class) // 设置Spring容器的配置类
public class UserServiceTest {

    @Autowired // 自动装载
    private UserService userService;

    @Test
    public void TestGetAll(){
        System.out.println(userService.getAll());
    }
}
