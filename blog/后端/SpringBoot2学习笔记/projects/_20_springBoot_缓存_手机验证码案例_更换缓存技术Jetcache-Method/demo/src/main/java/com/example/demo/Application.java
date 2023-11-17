package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.alicp.jetcache.anno.config.EnableCreateCacheAnnotation;
import com.alicp.jetcache.anno.config.EnableMethodCache;

@SpringBootApplication
@EnableCreateCacheAnnotation  // 启用createCache注解
@EnableMethodCache(basePackages="com.example.demo.service") // 启用方法缓存
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
