package com.example.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.example.pojo.User;

// @Controller
// @ResponseBody
@RestController() // 代替上面两句话
@RequestMapping("/users")
public class UserController {

    // 模拟数据层操作
    Map<Integer, User> usersDao = new HashMap<>();

    // 请求：localhost/users?id=1&name=dyg&age=15
    // 方法：POST
    // 参数：
    // 返回：save:User [id=1, name=dyg, age=15]
    @PostMapping
    String save(User user) {
        usersDao.put(user.getId(), user);
        return "save:" + user;
    }

    // 请求：localhost/users/1
    // 方法：DELETE
    // 参数：
    // 返回：delete:1
    @DeleteMapping("/{id}") // 代替上面一句话
    String delete(@PathVariable int id) {
        usersDao.remove(id);
        return "delete:" + id;
    }

    // 请求：localhost/users/?id=1&name=dyg&age=15
    // 方法：PUT
    // 参数：
    // 返回：update:User [id=1, name=dyg, age=15]
    @PutMapping // 代替上面一句话
    String update(User user) {
        if (usersDao.containsKey(user.getId()))
            usersDao.put(user.getId(), user);
        return "update:" + user;
    }

    // 请求：localhost/users/1
    // 方法：GET
    // 参数：
    // 返回：{"id":1,"name":"dyg","age":15}
    @GetMapping("/{id}") // 代替上面一句话
    User get(@PathVariable int id) {
        return usersDao.get(id);
    }
}
