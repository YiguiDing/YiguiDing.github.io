package com.demo.config.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import com.demo.controller.interceptors.ProjectInterceptor1;
import com.demo.controller.interceptors.ProjectInterceptor2;

@Configuration
public class SpringMvcSupportConfig extends WebMvcConfigurationSupport {

    @Autowired // 依赖注入
    ProjectInterceptor1 projectInterceptor1;// 拦截器1
    @Autowired // 依赖注入
    ProjectInterceptor2 projectInterceptor2;// 拦截器2

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 使所有静态资源访问被放行
        registry.addResourceHandler("/**").addResourceLocations("/");
    }

    @Override
    protected void addInterceptors(InterceptorRegistry registry) {
        // 给books url 添加拦截器
        registry.addInterceptor(projectInterceptor1).addPathPatterns("/books", "/books/*", "/books/**");
        registry.addInterceptor(projectInterceptor2).addPathPatterns("/books", "/books/*", "/books/**");
        // 运行顺序和注册顺序相一致
        /*
         * 执行顺序
         * 1.1.preHandle
         *      2.1.preHandle
         *      2.2.postHandle
         * 1.2.postHandle
         *      2.3.afterCompletion
         * 1.3.afterCompletion
         */
    }
}
