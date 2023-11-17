package com.example.demo.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.pojo.Book;
import com.example.demo.pojo.QueryBookCondition;

public interface BookServiceQuick extends IService<Book> // 继承mybatisPlus写好的接口
{
    // 1.可以再继续写一些想要的接口

    // 2.可以 @Override重写 或 重载 继承的方法
    public Page<Book> getPage(int page, int size);

    public Page<Book> getPageWithCondition(int page, int size, QueryBookCondition condition);

}
