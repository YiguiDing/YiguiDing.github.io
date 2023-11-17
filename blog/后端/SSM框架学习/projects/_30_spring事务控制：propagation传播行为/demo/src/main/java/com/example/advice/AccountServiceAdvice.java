package com.example.advice;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AccountServiceAdvice {
    @Pointcut("execution(void com.example.service.*.transfer(..))")
    private void pt() {}

    @AfterThrowing(value = "pt()",throwing = "error")
    public void advice(JoinPoint jp, Throwable error) {
        System.out.println(error.getMessage());
    }
}
