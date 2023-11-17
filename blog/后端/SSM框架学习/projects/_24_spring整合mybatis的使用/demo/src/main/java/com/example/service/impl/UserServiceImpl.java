package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.dao.UserDao;
import com.example.domain.User;
import com.example.service.UserService;

@Component
public class UserServiceImpl implements UserService {
    @Autowired
    public UserDao userDao;

    @Override
    public void add(User user) {
        userDao.createUser(user);
    }

    @Override
    public User getById(int uid) {
        return userDao.getUserById(uid);
    }

    @Override
    public void update(User user) {
        userDao.alterUser(user);
    }

    @Override
    public List<User> getAll() {
        return userDao.selectAll();
    }
}
