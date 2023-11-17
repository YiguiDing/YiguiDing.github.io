package com.example.demo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.ContextConfiguration;

import com.example.demo.jdbc.MyDataSource;

@SpringBootTest
class AppTest {
    @Test
    void test(){
        System.out.println("hello test");
    }

    @Value("${myconfig.info}")
    String info;

	@Test
    void getTest() {
        System.out.println(info);
    }

    @Value("${myconfig.tempDir}")
    String tempDir;
	@Test
    void test2(){
        System.out.println(tempDir); // output: /home/temp
    }

    @Value("${myconfig.anotherTest1}")
    String anotherTest1;
	@Test
    void test3(){
        System.out.println(anotherTest1);// output: 这是反斜杠和t \t
    }
    @Value("${myconfig.anotherTest2}")
    String anotherTest2;
	@Test
    void test4(){
        System.out.println(anotherTest2); // output: 这是制表符      _       _       _
    }

    @Autowired
    Environment env;
	@Test
    void test5(){
        System.out.println(env.getProperty("server.port")); // 80
        System.out.println(env.getProperty("username")); // Administrator
        System.out.println(env.getProperty("myconfig")); // null
        System.out.println(env.getProperty("myconfig.info")); // this is a config defind by me
    }

    @Autowired
    MyDataSource myDataSource;
	@Test
    public void test6(){
		System.out.println(myDataSource);
        //MyDataSource(driver=com.mysql.??.Driver, url=jdbc:mysql:///db1, username=root, passwd=root)

	}

}
