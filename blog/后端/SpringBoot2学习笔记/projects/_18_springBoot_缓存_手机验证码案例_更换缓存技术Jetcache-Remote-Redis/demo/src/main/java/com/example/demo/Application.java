package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.alicp.jetcache.anno.config.EnableCreateCacheAnnotation;

@SpringBootApplication
@EnableCreateCacheAnnotation  // 启用createCache注解
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
