package com.example.demo.rabbitmq.topicExchange;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.rabbitmq.topicExchange.config.TopicExchangeConfig;

@Component
public class MsgReceiver {
    @Autowired
    AmqpTemplate amqpTemplate;

    // 从队列1获取消息
    public void reveive() {
        System.out.println("从队列1获取消息...");
        String msg = (String) amqpTemplate.receiveAndConvert(TopicExchangeConfig.queueName);
        if (msg == null)
            return;
        System.out.println("处理消息：" + msg);
    }

    // 从队列2获取消息
    public void reveive2() {
        System.out.println("从队列2获取消息...");
        String msg = (String) amqpTemplate.receiveAndConvert(TopicExchangeConfig.queueName2);
        if (msg == null)
            return;
        System.out.println("处理消息：" + msg);
    }
}
