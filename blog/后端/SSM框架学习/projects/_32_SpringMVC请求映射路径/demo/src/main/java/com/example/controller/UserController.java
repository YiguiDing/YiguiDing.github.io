package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // 声明告知Spring这是一个控制器，实际上，这是一个`@Component`的别名
@RequestMapping("/user") // 访问前缀
public class UserController {
    @RequestMapping("/save") // url映射
    @ResponseBody // 将返回值作为响应体
    public String save() {
        System.out.println("req save methad.");
        return "{'msg':'req /user/save methad.'}";
    }

    @RequestMapping("/delete")
    @ResponseBody
    public String delete() {
        System.out.println("req save methad.");
        return "{'msg':'req /user/delete methad.'}";
    }
}
