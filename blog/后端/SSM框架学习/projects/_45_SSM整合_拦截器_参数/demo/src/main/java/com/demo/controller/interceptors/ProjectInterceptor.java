package com.demo.controller.interceptors;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
public class ProjectInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        Cookie[] cookies = request.getCookies();// 查看是否登录，鉴权
        HttpSession session = request.getSession();// 查看是否登录，鉴权
        System.out.println(cookies);// 输出：[Ljavax.servlet.http.Cookie;@5575d4bc
        System.out.println(session);// 输出：org.apache.catalina.session.StandardSessionFacade@3757f045
        System.out.println(handler); // 输出：com.demo.controller.BookController#add(Book)
        System.out.println(handler.getClass()); // 输出： class org.springframework.web.method.HandlerMethod
        HandlerMethod handlerMethod = (HandlerMethod) handler;
        // handlerMethod.getMethod().invoke();// 反射，直接调用方法
        System.out.println("1.preHandle");
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        // modelAndView 对象可以做页面跳转
        System.out.println("2.postHandle");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
                // ex 是程序中出现的原始的异常
        System.out.println("3.afterCompletion");
    }

}
