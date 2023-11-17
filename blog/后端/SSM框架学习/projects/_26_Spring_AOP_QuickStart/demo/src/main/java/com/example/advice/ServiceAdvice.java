package com.example.advice;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component // 交给SpringIOC容器管理
@Aspect // 告知Spring这是一个AOP
public class ServiceAdvice {

    @Pointcut("execution(public void com.example.service.*.*.method*(..))")// *表示通配符，匹配methodA methodB methodC 三个方法
    private void pointCut_A(/* 空方法，用于定义切入点 */) {
    }

    @Before("pointCut_A()") // 在切入点A之前执行
    public void newFun/* 新方法 */() {
        System.out.println("[ start time ] " + System.currentTimeMillis());
    }
}
