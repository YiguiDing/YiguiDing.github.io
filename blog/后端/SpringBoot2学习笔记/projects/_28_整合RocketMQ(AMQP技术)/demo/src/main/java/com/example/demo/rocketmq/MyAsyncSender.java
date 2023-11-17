package com.example.demo.rocketmq;

import org.apache.rocketmq.client.producer.SendCallback;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.spring.core.RocketMQTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MyAsyncSender {
    @Autowired
    RocketMQTemplate rocketMQTemplate;

    public void send(String msg) {
        System.out.println("异步发送消息：" + msg);
        rocketMQTemplate.asyncSend("my_destination_1", msg, new SendCallback() {
            @Override
            public void onSuccess(SendResult sendResult) {
                System.out.println("异步消息发送成功......");
            }

            @Override
            public void onException(Throwable e) {
                System.out.println("异步消息发送失败......");
            }
        });
    }
}
