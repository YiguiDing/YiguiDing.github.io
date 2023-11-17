package com.example.config;

import java.nio.charset.Charset;

import javax.servlet.Filter;

import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

// 进一步简化的写法
public class ServeletContainerInitConfigSimplify extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[] { SpringConfig.class };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[] { SpringMvcConfig.class };
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] { "/" };
    }

    // 解决params参数中中文字符乱码的问题
    @Override
    protected Filter[] getServletFilters() {
        CharacterEncodingFilter cFilter = new CharacterEncodingFilter("UTF-8");
        return new Filter[] { cFilter };
    }
}
