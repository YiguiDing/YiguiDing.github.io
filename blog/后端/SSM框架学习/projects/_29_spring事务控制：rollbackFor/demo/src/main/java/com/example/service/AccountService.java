package com.example.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.example.domain.Account;

// Sping事务默认会对Error异常和RuntimeException异常执行回滚，对于其他异常则不会执行回滚
@Transactional(rollbackFor = { Exception.class /*这样可让非RunTimeException异常被抛出时，事务也回滚 */})
public interface AccountService {
    void add(Account user);

    void deleteById(int uid);

    void update(Account user);

    Account getById(int uid);

    List<Account> getAll();

    // 转账
    void transfer(int fromId, int toId, double money) throws Exception;

    // 存钱
    void save(int uid, double money);
}
