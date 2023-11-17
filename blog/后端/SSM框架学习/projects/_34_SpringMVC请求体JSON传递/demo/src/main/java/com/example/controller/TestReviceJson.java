package com.example.controller;

import java.util.Arrays;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/testjson")
public class TestReviceJson {
    // 请求：localhost/testjson/array
    // 数据：["123","456"]
    // 返回：[123, 456]
    @ResponseBody
    @RequestMapping("/array")
    String array(@RequestBody /* json在body中 */ String[] array) {
        return Arrays.toString(array);
    }
}
