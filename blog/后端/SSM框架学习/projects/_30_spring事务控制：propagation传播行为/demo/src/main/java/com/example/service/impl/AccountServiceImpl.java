package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.dao.AccountDao;
import com.example.domain.Account;
import com.example.service.AccountService;
import com.example.service.LogService;

@Component
public class AccountServiceImpl implements AccountService {
    @Autowired
    AccountDao accountDao;
    @Autowired
    LogService logService;

    // 转账
    @Override
    public void transfer(int fromId, int toId, double money) throws Exception {

        logService.log(fromId, toId, money); // 此处设置了propagation，不会回滚
        accountDao.addMoneyById(fromId, -money); // 此处会回滚
        if (true){
            throw new Error("模拟异常中断，数据回滚，但希望日志仍然写入");
        }
        accountDao.addMoneyById(toId, money);
        Account accountA = accountDao.getAccountById(fromId);
        Account accountB = accountDao.getAccountById(fromId);

        if (accountA.getMoney() >= 0 && accountB.getMoney() >= 0) {
            throw new Error("余额不足，转账失败，数据回滚");
        }
    }

    @Override
    public void save(int uid, double money) {
        accountDao.addMoneyById(uid, money);
    }

    @Override
    public void add(Account user) {
        accountDao.createAccount(user);
    }

    @Override
    public Account getById(int uid) {
        return accountDao.getAccountById(uid);
    }

    @Override
    public void update(Account user) {
        accountDao.alterAccount(user);
    }

    @Override
    public List<Account> getAll() {
        return accountDao.selectAll();
    }

    @Override
    public void deleteById(int uid) {
        accountDao.deleteAccountById(uid);
    }

}
