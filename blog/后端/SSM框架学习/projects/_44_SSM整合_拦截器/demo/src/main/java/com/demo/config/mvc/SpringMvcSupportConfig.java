package com.demo.config.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import com.demo.controller.interceptors.ProjectInterceptor;

@Configuration
public class SpringMvcSupportConfig extends WebMvcConfigurationSupport {

    @Autowired // 依赖注入
    ProjectInterceptor projectInterceptor;// 拦截器

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 使所有静态资源访问被放行
        registry.addResourceHandler("/**").addResourceLocations("/");
    }

    @Override
    protected void addInterceptors(InterceptorRegistry registry) {
        // 给books url 添加拦截器
        registry.addInterceptor(projectInterceptor).addPathPatterns("/books", "/books/*", "/books/**");
    }
}
