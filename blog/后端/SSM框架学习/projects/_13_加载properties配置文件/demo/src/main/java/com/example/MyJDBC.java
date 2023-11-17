package com.example;

public class MyJDBC {
    String driverClassName;
    public void setDriverClassName(String driverClassName) {
        System.out.println("[driverClassName]属性被注入，内容：" + driverClassName);
        this.driverClassName = driverClassName;
    }
}
