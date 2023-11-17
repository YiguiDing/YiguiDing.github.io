package com.example.controller;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller
@RequestMapping("/testdate")
public class TestReviceDate {
    // 请求：localhost/testdate/dates?date1=2023/12/12 23:59:59&date2=2023-12-12&date3=2023/10/12 08:59:59
    // 数据：
    // 返回：
    /*
     * 输出：
     * Tue Dec 12 23:59:59 CST 2023
     * yyyy-MM-dd => Tue Dec 12 00:00:00 CST 2023
     * yyyy/MM/dd HH:mm:ss => Thu Oct 12 08:59:59 CST 2023
     */
    @RequestMapping("/dates")
    @ResponseBody
    String dates(
            Date date1,// 默认按照Date(String s)的方式解析时间，该构造函数可以接收的格式多种多样
            /*DateTimeFormat指定按何种格式解析时间*/
            @DateTimeFormat(pattern = "yyyy-MM-dd") Date date2,
            @DateTimeFormat(pattern = "yyyy/MM/dd HH:mm:ss") Date date3) {
        System.out.println("date1:" + date1);
        System.out.println("date2:yyyy-MM-dd => " + date2);
        System.out.println("date3:yyyy/MM/dd HH:mm:ss => " + date3);
        return "";
    }
}
