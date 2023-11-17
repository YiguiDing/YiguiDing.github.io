package com.example.controller;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.pojo.User;

@Controller
@RequestMapping("/TestResponse")
public class TestResponse {
    // 请求：localhost/TestResponse/idx
    // 参数：
    // 返回： <html><body><h2>Hello World!</h2></body></html>
    // @ResponseBody 这句话不要加
    @RequestMapping("/idx")
    String idx() {
        return "/index.jsp";
    }

    // 请求：localhost/TestResponse/str
    // 参数：
    // 返回：this is a string.
    @ResponseBody
    @RequestMapping("/str")
    String str() {
        return "this is a string.";
    }

    // 请求：localhost/TestResponse/obj
    // 参数：
    // 返回：{"name": "dyg","age": 16 }
    @ResponseBody
    @RequestMapping("/obj")
    User obj() {
        return new User("dyg", 16);
    }

    // 请求：localhost/TestResponse/list
    // 参数：
    // 返回：[ { "name": "dyg1", "age": 10 }, { "name": "dyg2", "age": 11 }]
    @ResponseBody
    @RequestMapping("/list")
    List<User> list() {
        List<User> list = new LinkedList<>();
        list.add(new User("dyg1", 10));
        list.add(new User("dyg2", 11));
        return list;
    }

    // 请求：localhost/TestResponse/set
    // 参数：
    // 返回：[ { "name": "dyg1", "age": 10 }, { "name": "dyg2", "age": 11 }]
    @ResponseBody
    @RequestMapping("/set")
    Set<User> set() {
        Set<User> set = new HashSet<>();
        set.add(new User("dyg1", 10));
        set.add(new User("dyg2", 11));
        return set;
    }
}
