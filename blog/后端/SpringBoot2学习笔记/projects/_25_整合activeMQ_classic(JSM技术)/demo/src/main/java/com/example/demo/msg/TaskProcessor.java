package com.example.demo.msg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsMessagingTemplate;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Component;

@Component
public class TaskProcessor {
    @Autowired
    JmsMessagingTemplate messageTemplate;

    // 作为消息消费者，主动从消息队列取数据
    public void Processor() {
        System.out.println("取数据...");
        // 如果服务端没有数据，则会阻塞，一直卡在这里，直到取到数据
        String task = messageTemplate.receiveAndConvert("tasks.queue", String.class);
        System.out.println("取到数据");
        System.out.println("processor:" + task);
    }

    // 作为消息消费者，自动取数据
    @JmsListener(destination = "tasks.queue")
    // @SendTo("result.queue") // 可以把方法的返回值(处理结果)转发给另一个消息队列
    public void AutoProcessor(String task) {
        System.out.println("取到数据");
        System.out.println("processor:" + task);
    }

}
