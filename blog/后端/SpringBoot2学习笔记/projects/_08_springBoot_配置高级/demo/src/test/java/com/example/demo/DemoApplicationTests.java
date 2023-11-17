package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(
	// 在application.yml 中配置有 a:1 c:2 my-datasource.url:xxx.xxx
	args = {"--a=bb","--c=dd","--my-datasource.url=xxx"}, // args 将覆盖上述配置，优先级次之
	properties = {"a=b","c=d",/*"my-datasource.url=????" */} // properties将覆盖上述所有配置，优先级最高 
)
class DemoApplicationTests {
	@Value("${a}")
	String a;
	@Value("${c}")
	String c;
	@Value("${my-datasource.url}")
	String url;
	@Test
	void test() {
		System.out.println("-------------------------------------------");
		System.out.println(a); // 输出b
		System.out.println(c); // 输出d
		System.out.println(url); // 输出xxx
	}

}
