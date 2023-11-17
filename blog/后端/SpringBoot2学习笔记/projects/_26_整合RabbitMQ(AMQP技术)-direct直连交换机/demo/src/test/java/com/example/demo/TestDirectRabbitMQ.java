package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.rabbitmq.directExchange.MsgReceiver;
import com.example.demo.rabbitmq.directExchange.MsgSender;

@SpringBootTest
public class TestDirectRabbitMQ {
    @Autowired
    MsgReceiver receiver;

    @Autowired
    MsgSender sender;

    @Test
    void testSendMsg() {
        sender.sendToQ1("hello");
        sender.sendToQ2("world");
    }

    @Test
    void testReceiveMsg() {
        receiver.reveive();
        receiver.reveive2();
    }
}
