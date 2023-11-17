package com.example.demo.rabbitmq.directExchange.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DirectExchangeConfig {

    public static final String queueName = "my_queue1";
    public static final String queueName2 = "my_queue2";

    public static final String directExchangeName = "my_direct_exchange1";
    
    public static final String routingKey = "my_directRoutingKey";
    public static final String routingKey2 = "my_directRoutingKey2";

    @Bean
    public Queue getQueue() {
        return new Queue(
                queueName, // 消息队列的名
                false, // 消息服务器是否将消息持久化
                false, // 是否是专用的消息队列，专用消息队列将在连接断开后删除
                false // 是否将消费者和生产者都不使用的消息自动删除
        );
    }

    @Bean
    public Queue getQueue2() {
        return new Queue(
                queueName2, // 消息队列的名
                false, // 消息服务器是否将消息持久化
                false, // 是否是专用的消息队列，专用消息队列将在连接断开后删除
                false // 是否将消费者和生产者都不使用的消息自动删除
        );
    }

    @Bean
    public DirectExchange getDirectExchange() {
        return new DirectExchange(
                directExchangeName, // 直连交换机名
                false, // 消息服务器是否将消息持久化
                false// 是否将消费者和生产者都不使用的消息自动删除
        );
    }

    @Bean
    public Binding bing() {
        // 绑定队列和交换机，并命名
        return BindingBuilder.bind(getQueue()).to(getDirectExchange()).with(routingKey);
    }

    @Bean
    public Binding bing2() {
        // 绑定队列和交换机，并命名
        return BindingBuilder.bind(getQueue2()).to(getDirectExchange()).with(routingKey2);
    }
}
