package com.example.advice;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component // 交给SpringIOC容器管理
@Aspect // 告知Spring这是一个AOP
public class ServiceAdvice {

    @Pointcut("execution(public void com.example.service.*.*.method*(..))") // *表示通配符，匹配methodA methodB methodC 三个方法
    private void pointCut_A(/* 空方法，用于定义切入点 */) {
    }

    @Before("pointCut_A()") // 在切入点A之前执行
    public void newFun1(JoinPoint jp) {
        System.out.println("[ Before ] ");
    }

    @AfterReturning(value = "pointCut_A()", returning = "ret"/* 指定返回值传递给谁 */)
    public void newFun4(JoinPoint jp/* 必须是第一个参数 */, Object ret) {
        System.out.println("[ AfterReturning ] [ return: ] " + ret);
    }

    @AfterThrowing(value = "pointCut_A()", throwing = "exception"/* 指定异常传递给谁 */)
    public void newFun5(JoinPoint jp, Throwable exception) {
        System.out.println("[ AfterThrowing ] [exception:]" + exception);
    }

    @After("pointCut_A()")
    public void newFun2(JoinPoint jp) {
        System.out.println("[ After ] ");
    }

    @Around("pointCut_A()")
    public Object newFun3(ProceedingJoinPoint pjp) throws Throwable {
        Signature signature = pjp.getSignature();
        System.out.println("正在执行的方法是: " + signature);
        System.out.println("[ Around:atart ] ");
        Object[] args = pjp.getArgs();
        // args[0] = 修改参数，可以对传入的值预处理
        Object res = pjp.proceed(args/* 不传递也可以，因为默认自动传递 */);
        System.out.println("[ Around:ended ] ");
        return res;// 如果原始方法有返回值，则必须在此处返回一个值,如果原方法返回void 则proceed返回null
    }
}
