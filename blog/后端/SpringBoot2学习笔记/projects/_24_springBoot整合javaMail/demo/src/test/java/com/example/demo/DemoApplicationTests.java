package com.example.demo;

import java.io.File;

import javax.mail.Store;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.service.SmtpMailServer;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	SmtpMailServer sMailServer;

	@Test
	void testSimpleSend() {
		sMailServer.SendSimpleMail("2449695354@qq.com", "test", "content");
	}

	@Test
	void testSend() {
		sMailServer.SendMail(
				"2449695354@qq.com",
				"标题",
				"<h1>标题</h1>" +
				"<a href=\"https://baidu.com\">百度</a>",
				new File[]{new File("D:\\GitProject\\my-projects\\blogWebSites\\blog\\articles\\\u540E\u7AEF\\SpringBoot2\u5B66\u4E60\u7B14\u8BB0\\projects\\_24_springBoot\u6574\u5408javaMail\\demo\\src\\test\\java\\com\\example\\demo\\DemoApplicationTests.java")}
		); 
	}
}
