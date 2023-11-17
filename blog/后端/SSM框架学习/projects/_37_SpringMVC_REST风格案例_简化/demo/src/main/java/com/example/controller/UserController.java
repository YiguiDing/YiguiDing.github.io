package com.example.controller;

import org.springframework.web.bind.annotation.*;

import com.example.pojo.User;

// @Controller
// @ResponseBody
@RestController() // 代替上面两句话
@RequestMapping("/users")
public class UserController {
    // 请求：localhost/users/5
    // 参数：
    // 返回：get:5
    // @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @GetMapping("/{id}") // 代替上面一句话
    String get(@PathVariable int id) {
        return "get:" + id;
    }

    // 请求：localhost/users
    // 参数：
    // 返回：save:User [name=dyg, age=10]
    // @RequestMapping(method = RequestMethod.POST)
    @PostMapping // 代替上面一句话
    String save(User user) {
        return "save:" + user;
    }

    // 请求：localhost/users?name=dyg&age=18
    // 参数：
    // 返回：update:User [name=dyg, age=18]
    // @RequestMapping(method = RequestMethod.PUT)
    @PutMapping // 代替上面一句话
    String update(User user) {
        return "update:" + user;
    }

    // 请求：localhost/users/5
    // 参数：
    // 返回：delete:5
    // @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @DeleteMapping("/{id}") // 代替上面一句话
    String delete(@PathVariable int id) {
        return "delete:" + id;
    }

}
