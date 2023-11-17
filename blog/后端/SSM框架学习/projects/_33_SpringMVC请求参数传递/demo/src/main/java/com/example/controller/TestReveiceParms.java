package com.example.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.pojo.User;

@Controller
@RequestMapping("/parms")
public class TestReveiceParms {
    @RequestMapping("/show")
    @ResponseBody
    // 通用于 post 和 get 方法的urlencoded格式的数据
    String fun(String name, int age) {
        System.out.println(name);
        System.out.println(age);
        return "" + name + age;
    }

    @RequestMapping("/array")
    @ResponseBody
    String array(String[] likes) {
        System.out.println(Arrays.toString(likes));
        return Arrays.toString(likes);
    }

    @RequestMapping("/obj")
    @ResponseBody
    String obj(User user) {
        return user.toString();
    }

    // localhost/parms/list?likes=1&likes=2
    @RequestMapping("/list")
    @ResponseBody
    String list(@RequestParam List<String> likes) {
        return likes.toString();
    }
}
