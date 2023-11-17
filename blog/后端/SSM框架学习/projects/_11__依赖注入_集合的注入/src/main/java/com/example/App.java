package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        Demo test = (Demo) ctx.getBean("test");
        System.out.println(test);
        // 输出:
        /*
         * Demo [myArray=[123, 456, 789], myList=[123, 456, 789], mySet=[123, 456, 789],
         * myMap={name=YiguiDing, age=22}, myProperties={age=22, name=YiguiDing}]
         */
    }
}
