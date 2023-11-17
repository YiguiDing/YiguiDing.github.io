package com.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.demo.dao.TestDao;

@SpringBootTest
class DemoApplicationTests {
	@Autowired
	TestDao testDao;
	@Test
	void test() {
		testDao.test();
	}
}
