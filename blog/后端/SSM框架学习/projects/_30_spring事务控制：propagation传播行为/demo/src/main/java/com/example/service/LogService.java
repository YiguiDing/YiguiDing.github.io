package com.example.service;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(propagation = Propagation.REQUIRES_NEW/*
                                                      * 创建新事务，独立于事务管理者之外单独创建一个新事务，事务管理者管理下的事务出现异常，不会导致此处的事务回滚
                                                      */)
public interface LogService {
    public void log(int uid_from, int uid_to, double money);
}
