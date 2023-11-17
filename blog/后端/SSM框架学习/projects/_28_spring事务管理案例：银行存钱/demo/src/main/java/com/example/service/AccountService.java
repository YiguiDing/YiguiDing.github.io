package com.example.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.example.domain.Account;

@Transactional // 对该业务层的所有接口开启事务
public interface AccountService {
    void add(Account user);

    void deleteById(int uid);

    void update(Account user);

    Account getById(int uid);

    List<Account> getAll();

    // 转账
    void transfer(int fromId, int toId, double money) ;
    // 存钱
    void save(int uid,double money);
}
