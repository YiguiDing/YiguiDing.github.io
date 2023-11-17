package com.example.demo.rocketmq;

import org.apache.rocketmq.spring.core.RocketMQTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MySyncSender {
    @Autowired
    RocketMQTemplate rocketMQTemplate;

    public void send(String msg) {
        System.out.println("同步发送消息：" + msg);
        rocketMQTemplate.convertAndSend("my_destination_1", msg);
        System.out.println("同步消息发送完毕......");
    }
}
