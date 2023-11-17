package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.apache.ibatis.session.SqlSessionFactory;

@Configuration
public class MyBatiesConfig {
	@Bean
	public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
		SqlSessionFactoryBean ssfb = new SqlSessionFactoryBean();// 固定写法
		ssfb.setDataSource(dataSource);
		ssfb.setTypeAliasesPackage("com.example.domain");// 类型别名，好像不写也行
		return ssfb.getObject();
	}

	@Bean
	public MapperScannerConfigurer mapperScannerConfigurer() {
		MapperScannerConfigurer mscf = new MapperScannerConfigurer();// 固定写法
		mscf.setBasePackage("com.example.dao");// Mapper接口类的搜索路径
		return mscf;
	}


}
