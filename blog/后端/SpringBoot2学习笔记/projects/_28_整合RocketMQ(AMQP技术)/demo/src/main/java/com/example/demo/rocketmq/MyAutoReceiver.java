package com.example.demo.rocketmq;

import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.springframework.stereotype.Component;

@Component
// topic要和目的地名称一致，消费者组要和生产者组对应
@RocketMQMessageListener(topic = "my_destination_1", consumerGroup = "my_group_1")
public class MyAutoReceiver implements RocketMQListener<String> {
    @Override
    public void onMessage(String message) {
        System.out.println("收到消息：" + message);
    }
}
