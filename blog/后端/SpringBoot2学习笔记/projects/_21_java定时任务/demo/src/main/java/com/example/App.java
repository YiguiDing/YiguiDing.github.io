package com.example;

import java.util.Timer;
import java.util.TimerTask;

/**
 * Hello world!
 */
public final class App {
    public static void main(String[] args) {
        Timer timer = new Timer();
        TimerTask task = new TimerTask() {
            @Override
            public void run() {
                System.out.println("this is a task.");
            }
        };
        timer.schedule(task, 0/* 延迟执行 */, 1000/* 两次执行的间隔 */);
    }
}
