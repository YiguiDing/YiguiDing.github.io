package com.example.demo.jdbc;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@ConfigurationProperties(prefix = "mydatasource")
public class MyDataSource {
    String driver;
    String url;
    String username;
    String passwd;
}
