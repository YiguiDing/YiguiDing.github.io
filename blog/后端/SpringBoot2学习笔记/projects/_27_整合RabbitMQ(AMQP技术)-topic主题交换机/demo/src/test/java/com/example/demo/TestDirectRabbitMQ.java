package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.rabbitmq.topicExchange.MsgReceiver;
import com.example.demo.rabbitmq.topicExchange.MsgSender;

@SpringBootTest
public class TestDirectRabbitMQ {
    @Autowired
    MsgReceiver receiver;

    @Autowired
    MsgSender sender;

    @Test
    void testSendMsg() {
        sender.sendOrder("this is a order id");
        sender.sendUser("this is a user id");
        sender.sendOther("this is a object");
    }

    @Test
    void testReceiveMsg() {
        receiver.reveive();
        receiver.reveive2();
    }
}
