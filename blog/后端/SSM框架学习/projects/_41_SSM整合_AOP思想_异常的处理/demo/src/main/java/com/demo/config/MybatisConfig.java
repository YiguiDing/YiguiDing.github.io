package com.demo.config;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.sql.DataSource;

@Configuration
public class MybatisConfig {
    @Bean
    SqlSessionFactoryBean sessionFactoryBean(DataSource datasource) {
        SqlSessionFactoryBean sqlsfb = new SqlSessionFactoryBean();
        sqlsfb.setDataSource(datasource);
        sqlsfb.setTypeAliasesPackage("com.demo.pojo");
        return sqlsfb;
    }
    @Bean
    MapperScannerConfigurer mapperScannerConfigurer(){
        MapperScannerConfigurer msc = new MapperScannerConfigurer();
        msc.setBasePackage("com.demo.dao");
        return msc;
    }
}
