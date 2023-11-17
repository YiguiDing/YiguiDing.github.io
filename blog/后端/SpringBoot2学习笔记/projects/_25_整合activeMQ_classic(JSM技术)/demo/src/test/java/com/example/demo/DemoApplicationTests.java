package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.msg.TaskDispacher;
import com.example.demo.msg.TaskProcessor;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	TaskDispacher dispacher;

	@Test
	public void testMsg() {
		dispacher.DispachTask("这是一个任务消息");
	}

	@Autowired
	TaskProcessor processor;

	@Test
	public void testProcess() {
		processor.Processor();
	}
		@Test
	public void testAutoProcess() {
	}

}
