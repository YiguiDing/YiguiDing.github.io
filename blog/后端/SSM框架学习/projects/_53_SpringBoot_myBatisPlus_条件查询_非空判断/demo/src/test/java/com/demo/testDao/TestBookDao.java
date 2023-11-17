package com.demo.testDao;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.demo.dao.BookDao;
import com.demo.dao.BookQuery;
import com.demo.pojo.Book;

@SpringBootTest
public class TestBookDao {
    @Autowired
    BookDao bookDao;

    @Test
    public void test() {
        BookQuery bookQuery = new BookQuery();// 模拟book查询条件
        bookQuery.setId(5L);
        bookQuery.setId_max(10L);

        LambdaQueryWrapper<Book> qlw = new LambdaQueryWrapper<>();
        qlw.ge(bookQuery.getId() != null/* 非空判断 */, Book::getId, bookQuery.getId());
        qlw.le(bookQuery.getId_max() != null, Book::getId, bookQuery.getId_max());

        List<Book> selectList = bookDao.selectList(qlw);
        System.out.println(selectList);
    }
}
