package com.example.demo.rabbitmq.directExchange;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.rabbitmq.directExchange.config.DirectExchangeConfig;

// @Component
public class MsgAutoReceiver {
    @Autowired
    AmqpTemplate amqpTemplate;

    @RabbitListener(queues = DirectExchangeConfig.queueName)
    public void autoReveive(String msg) {
        System.out.println("自动处理队列1的消息：" + msg);
    }

    @RabbitListener(queues = DirectExchangeConfig.queueName2)
    public void autoReveive2(String msg) {
        System.out.println("自动处理队列2的消息：" + msg);
    }
}
