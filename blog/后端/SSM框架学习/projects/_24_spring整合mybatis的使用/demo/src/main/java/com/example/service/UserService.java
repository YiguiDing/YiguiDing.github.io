package com.example.service;

import java.util.List;

import com.example.domain.User;

public interface UserService {
    void add(User user);

    void update(User user);

    User getById(int uid);

    List<User> getAll();
}
