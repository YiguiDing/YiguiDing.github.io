package com.example.service.impl;

import org.springframework.stereotype.Component;

import com.example.service.MyService;

@Component
public class MyServiceImpl implements MyService {
    @Override
    public void methodA() {
        System.out.println(0);
    }

    @Override
    public void methodB(int arg1) {
        System.out.println(arg1);
    }

    @Override
    public void methodC(int arg1, int arg2) {
        System.out.println(arg1 + arg2);
    }
}
