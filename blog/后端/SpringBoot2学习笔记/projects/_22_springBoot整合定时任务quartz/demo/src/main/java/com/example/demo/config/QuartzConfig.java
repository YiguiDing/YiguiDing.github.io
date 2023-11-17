package com.example.demo.config;

import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.jobs.PrintMsgJob;

@Configuration
public class QuartzConfig {

    @Bean
    public JobDetail printMsgJobDetail() {
        return JobBuilder
                // 指定job方法
                .newJob(PrintMsgJob.class)
                // 设置job名
                .withIdentity("printMsgJob")
                // 持久化，否则任务不执行就会被丢弃
                .storeDurably()
                .build();
    }

    @Bean
    public Trigger printMsgJobTrigger() {
        return TriggerBuilder
                .newTrigger()
                // 绑定JobDetail
                .forJob("printMsgJob")
                // Schedule可以传入schedule对象也可以传入cron表达式
                // cron表达式格式：
                // 秒 分 时 日 月 周
                // * 代表任意
                // ?代表和前面一致 比如：填写了月日后，星期可以填?
                // ,可以认为表示或
                // a/b表示从a开始每隔b执行
                .withSchedule(CronScheduleBuilder.cronSchedule("0/5 * * * * ?"))
                .build(); 
    }
}
