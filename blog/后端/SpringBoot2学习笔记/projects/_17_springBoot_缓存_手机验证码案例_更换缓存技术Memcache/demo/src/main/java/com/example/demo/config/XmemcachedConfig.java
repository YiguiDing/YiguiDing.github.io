package com.example.demo.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import net.rubyeye.xmemcached.MemcachedClient;
import net.rubyeye.xmemcached.XMemcachedClientBuilder;

@Configuration
public class XmemcachedConfig {
    @Autowired
    XmemcachedConfigProps config;


    @Bean
    MemcachedClient getClient() throws IOException{
        XMemcachedClientBuilder builder = new XMemcachedClientBuilder(config.getAddress());
        builder.setConnectionPoolSize(config.getPoolSize());
        builder.setOpTimeout(config.getOpTimeout());
        return builder.build();
    }
}
