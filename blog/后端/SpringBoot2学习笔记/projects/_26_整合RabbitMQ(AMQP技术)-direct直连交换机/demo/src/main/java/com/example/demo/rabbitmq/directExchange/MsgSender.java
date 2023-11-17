package com.example.demo.rabbitmq.directExchange;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.rabbitmq.directExchange.config.DirectExchangeConfig;

@Component
public class MsgSender {
    @Autowired
    AmqpTemplate amqpTemplate;

    public void sendToQ1(String msg) {
        System.out.println("发送消息给队列1:" + msg);
        // 把消息发送给队列1
        amqpTemplate.convertAndSend(
                DirectExchangeConfig.directExchangeName,
                DirectExchangeConfig.routingKey,
                msg);
    }

    public void sendToQ2(String msg) {
        System.out.println("发送消息给队列2:" + msg);
        // 把消息发送给队列2
        amqpTemplate.convertAndSend(
                DirectExchangeConfig.directExchangeName,
                DirectExchangeConfig.routingKey2,
                msg);
    }
}
