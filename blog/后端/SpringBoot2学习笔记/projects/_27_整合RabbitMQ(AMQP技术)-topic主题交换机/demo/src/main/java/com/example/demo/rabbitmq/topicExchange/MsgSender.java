package com.example.demo.rabbitmq.topicExchange;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.rabbitmq.topicExchange.config.TopicExchangeConfig;

@Component
public class MsgSender {
    @Autowired
    AmqpTemplate amqpTemplate;

    public void sendOrder(String orderid) {
        System.out.println("发送消息到路由(my_topic1.orders.id):" + orderid);
        // 路由会把消息发送给队列1和队列2
        amqpTemplate.convertAndSend(
                TopicExchangeConfig.topicExchangeName,
                "my_topic1.orders.id",
                orderid);
    }

    public void sendUser(String userid) {
        System.out.println("发送消息到路由(my_topic1.users.id):" + userid);
        // 路由会把消息发送给队列1和队列2
        amqpTemplate.convertAndSend(
                TopicExchangeConfig.topicExchangeName,
                "my_topic1.users.id",
                userid);
    }

    public void sendOther(String other) {
        System.out.println("发送消息到路由(my_topic1.other):" + other);
        // 路由会把消息发送给队列2
        amqpTemplate.convertAndSend(
                TopicExchangeConfig.topicExchangeName,
                "my_topic1.other",
                other);
    }
}
