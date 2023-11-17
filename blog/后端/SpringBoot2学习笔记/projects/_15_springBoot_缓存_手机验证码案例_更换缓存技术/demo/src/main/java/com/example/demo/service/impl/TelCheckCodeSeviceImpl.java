package com.example.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.service.TelCheckCodeSevice;
import com.example.demo.utils.SIMCodeUtils;

@Service
public class TelCheckCodeSeviceImpl implements TelCheckCodeSevice {
    @Autowired
    SIMCodeUtils simCodeUtils;

    @Override
    public String SendCodeToPhone(String tel) {
        return simCodeUtils.GenerateCode(tel); // 发送验证码到手机
    }

    @Override
    public Boolean CheckCode(String tel, String code) {
        return code.equals(simCodeUtils.GetCode(tel)); // 对比缓存中的验证码
    }
}
