package com.example.demo;

import java.util.Arrays;

import javax.sql.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ConfigurableApplicationContext;

import com.alibaba.druid.pool.DruidDataSource;
import com.example.demo.config.MyServer;
import com.example.demo.config.configDruid;

@SpringBootApplication
@EnableConfigurationProperties({MyServer.class,configDruid.class})
public class DemoApplication {

	public static void main(String[] args) {
		System.out.println("---------------------------------------------");
		System.out.println(Arrays.toString(args));
		System.out.println("---------------------------------------------");
		ConfigurableApplicationContext ctx = SpringApplication.run(DemoApplication.class, args);;
		MyServer myServer = ctx.getBean(MyServer.class);
		System.out.println(myServer); //输出： MyServer(ip=0.0.0.0, port=80, timeOut=10 milliseconds, size=10485760B)

		DruidDataSource dataSource = ctx.getBean(DruidDataSource.class);
		System.out.println(dataSource.getDriverClassName()); //输出：xxx.xxx
	}

}
