package com.example.demo.msg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class TaskDispacher {
    @Autowired
    JmsMessagingTemplate messageTemplate;
    // 作为消息生产者，向消息队列传递数据
    public void DispachTask(String task){
        messageTemplate.convertAndSend("tasks.queue", task);
    }
}
