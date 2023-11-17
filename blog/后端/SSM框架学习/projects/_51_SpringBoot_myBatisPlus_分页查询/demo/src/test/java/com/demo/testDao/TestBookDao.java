package com.demo.testDao;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.demo.dao.BookDao;
import com.demo.pojo.Book;

@SpringBootTest
public class TestBookDao {
    @Autowired
    BookDao bookDao;
    @Test
    public void testSelectAll(){
        List<Book> selectList = bookDao.selectList(null);
        System.out.println(selectList);
    }
    @Test
    public void testPag(){
        Page<Book> selectPage = bookDao.selectPage(new Page<>(2,4), null);
        System.out.println(selectPage.getCountId());
        System.out.println(selectPage.getCurrent());
        System.out.println(selectPage.getPages());
        System.out.println(selectPage.getSize());
        System.out.println(selectPage.getTotal());
        System.out.println(selectPage.getMaxLimit());
        System.out.println(selectPage.getOrders());
        System.out.println(selectPage.getRecords());
    }
}
