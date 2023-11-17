package com.example.demo.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.pojo.Book;

@SpringBootTest
public class BookDaoTest {
    @Autowired
    BookDao bookDao;

    @Test
    public void insert() {
        Book book = new Book();
        for (int i = 0; i < 10; i++) {
            // book.setId(((long)i));
            book.setName("test");
            book.setType("test");
            book.setDescription("test");
            bookDao.insert(book);
        }
        System.out.println(bookDao.selectList(null));
    }

    @Test
    public void delete() {
        bookDao.deleteById(1649315090989301767L);
        bookDao.deleteById(1649315090989301764L);
        System.out.println(bookDao.selectList(null));
    }

    @Test
    public void pageTest() {
        IPage<Book> page = new Page<Book>(1, 5);
        bookDao.selectPage(page, null);
        System.out.println("当前页码->"+page.getCurrent());
        System.out.println("总页码->"+page.getPages());
        System.out.println("每页记录数->"+page.getSize());
        System.out.println("总记录数->"+page.getTotal());
        System.out.println("当前页->"+page.getRecords());
    }
    @Test
    public void selectByCondition(){
        // 执行日志 
        // SELECT id,name,type,description FROM tbl_book WHERE (name LIKE ?)
        // Parameters: %es%(String)
        // 也就是问号会被替换为字符串： %es%
        String name = "es";
        LambdaQueryWrapper<Book> condition = new  LambdaQueryWrapper<>();
        condition.like(name!=null,Book::getName, "es");
        bookDao.selectList(condition);
    }
}
