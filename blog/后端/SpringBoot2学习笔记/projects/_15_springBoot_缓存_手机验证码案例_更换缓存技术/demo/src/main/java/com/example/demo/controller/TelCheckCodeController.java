package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controller.util.Result;
import com.example.demo.service.TelCheckCodeSevice;

@RestController
@RequestMapping("/tel")
public class TelCheckCodeController {
    @Autowired
    TelCheckCodeSevice telCheckCodeSevice;

    @GetMapping
    Result sendCode(String tel) {
        String res = telCheckCodeSevice.SendCodeToPhone(tel);
        return new Result(res, new Result.Message(0, "发送成功"));
    }

    @PostMapping
    Result checkCode(String tel, String code) {
        boolean res= telCheckCodeSevice.CheckCode(tel, code);
        return new Result(res, new Result.Message(0, "校验完毕"));
    }
}
