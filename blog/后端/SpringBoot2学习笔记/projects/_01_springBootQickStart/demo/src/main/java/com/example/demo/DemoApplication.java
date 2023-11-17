package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.demo.controller.TestController;

@SpringBootApplication /*重要注解 */
public class DemoApplication/*引导类 */ {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = 
		
		// SpringApplication.run()的返回值是容器
		SpringApplication.run(DemoApplication.class, args);

		TestController bean = ctx.getBean(TestController.class);
		System.out.println(bean);
	}

}
