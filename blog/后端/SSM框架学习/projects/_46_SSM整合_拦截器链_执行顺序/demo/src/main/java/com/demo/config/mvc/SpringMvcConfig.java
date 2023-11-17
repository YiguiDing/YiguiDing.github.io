package com.demo.config.mvc;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan({
    "com.demo.controller",
    "com.demo.config.mvc" // 这个东西还是得用扫描的方式导入，因为这个里面有属性需要被依赖注入
})
// @Import(SpringMvcSupportConfig.class) // 这么写，拦截器无法加载，类里面的属性无法被依赖注入
public class SpringMvcConfig {
    
}
