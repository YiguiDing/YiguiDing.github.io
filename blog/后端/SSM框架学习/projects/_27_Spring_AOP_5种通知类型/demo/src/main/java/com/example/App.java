package com.example;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.config.SpringConfig;
import com.example.service.MyService;

public final class App {
    public static void main(String[] args) {
        ConfigurableApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        MyService service = ctx.getBean(MyService.class);
        // service.methodA();
        // service.methodB(1);
        service.methodC(1, 2);
        /*
         * [ Around:atart ]
         * [ Before ]
         * 3
         * [ AfterReturning ] [ return: ] null
         * [ After ]
         * [ Around:ended ]
         */
    }
}
