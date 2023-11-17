package com.example.demo.jobs;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class PrintMsgJob {
    @Scheduled(cron = "0/5 * * * * ?")
    public void job() {
        System.out.println("print msg task executed");
    }
}
