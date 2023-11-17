package com.example.demo.rocketmq;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {
	@Autowired
	MySyncSender syncSender;
	@Autowired
	MyAsyncSender asyncSender;

	@Test
	void testSend() {
		asyncSender.send("hello msg1");
		syncSender.send("hello msg2");
		/*
		 * 异步发送消息：hello msg1
		 * 同步发送消息：hello msg2
		 * 同步消息发送完毕......
		 * 收到消息：hello msg2
		 * 异步消息发送成功......
		 * 收到消息：hello msg1
		 */
	}
}
