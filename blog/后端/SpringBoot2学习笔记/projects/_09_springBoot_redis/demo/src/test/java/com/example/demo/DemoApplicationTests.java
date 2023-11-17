package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

@SpringBootTest
class DemoApplicationTests {
	// 在这两个对象中存储同样的key:value 存储的形式是不同的
	@Autowired
	RedisTemplate<Object,Object> redisTemplate;
	@Autowired
	StringRedisTemplate stringRedisTemplate;

	@Test
	void test1() {
		ValueOperations<Object,Object> operations = redisTemplate.opsForValue();
		operations.set("name", "dyg");
		Object res = operations.get("name");
		System.out.println(res);
	}
	@Test
	void test2() {
		ValueOperations<String,String> operations = stringRedisTemplate.opsForValue();
		operations.set("name", "dyg");
		String res = operations.get("name");
		System.out.println(res);
	}
}
