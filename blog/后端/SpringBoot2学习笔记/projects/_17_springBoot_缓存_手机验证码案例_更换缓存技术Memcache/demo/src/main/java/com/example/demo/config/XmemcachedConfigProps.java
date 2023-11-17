package com.example.demo.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data // 为了有getter方法
@Component // 为了能自动装配
@ConfigurationProperties(prefix = "xmemcached")
public class XmemcachedConfigProps {
    String address; // 地址
    int poolSize; // 连接池大小
    long opTimeout; // 操作超时时间
}
