package com.example.controller;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.pojo.User;

@Controller
public class UserController {
    // 请求：localhost/users/5
    // 参数：
    // 返回：get:5
    @ResponseBody
    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    String get(@PathVariable int id) {
        return "get:" + id;
    }

    // 请求：localhost/users
    // 参数：
    // 返回：save:User [name=dyg, age=10]
    @ResponseBody
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    String save(User user) {
        return "save:" + user;
    }

    // 请求：localhost/users?name=dyg&age=18
    // 参数：
    // 返回：update:User [name=dyg, age=18]
    @ResponseBody
    @RequestMapping(value = "/users", method = RequestMethod.PUT)
    String update( User user) {
        return "update:" + user;
    }

    // 请求：localhost/users/5
    // 参数：
    // 返回：delete:5
    @ResponseBody
    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    String delete(@PathVariable int id) {
        return "delete:" + id;
    }

}
