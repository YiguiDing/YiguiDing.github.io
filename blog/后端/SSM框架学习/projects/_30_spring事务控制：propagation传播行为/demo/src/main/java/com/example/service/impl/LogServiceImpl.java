package com.example.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.dao.LogDao;
import com.example.service.LogService;

@Component
public class LogServiceImpl implements LogService {
    @Autowired
    LogDao logDao;

    @Override
    public void log(int uid_from, int uid_to, double money) {
        logDao.log(String.format("用户:%d向用户:%d发起转账请求,转账金额：%f元", uid_from, uid_to, money));
    }
}
