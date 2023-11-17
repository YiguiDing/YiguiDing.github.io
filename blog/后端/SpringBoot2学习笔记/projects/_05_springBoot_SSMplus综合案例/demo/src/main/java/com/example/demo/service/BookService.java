package com.example.demo.service;


import org.springframework.stereotype.Component;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.pojo.Book;

public interface BookService {
    public Boolean add(Book book);// 增
    public Boolean deleteById(Integer id);// 删
    public Boolean update(Book book);// 改
    public Book getById(Integer id);// 查
    public Page<Book> getByPage(int cur,int pageSize);// 按页查
}
