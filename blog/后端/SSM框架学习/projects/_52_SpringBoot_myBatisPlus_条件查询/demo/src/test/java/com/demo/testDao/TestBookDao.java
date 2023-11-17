package com.demo.testDao;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.demo.dao.BookDao;
import com.demo.pojo.Book;

@SpringBootTest
public class TestBookDao {
    @Autowired
    BookDao bookDao;

    @Test
    public void testSelectAllWithConditions_1() {
        // 写法1

        QueryWrapper<Book> qwrapper = new QueryWrapper<>();
        // 默认是并且 and & 多条件关系运算

        // 写法1.1
        // qwrapper.ge("id", 5);// id小于5
        // qwrapper.le("id", 10);// id大于100

        // 写法1.2
        // 链式写法
        qwrapper.ge("id", 5).le("id", 10);

        List<Book> selectList = bookDao.selectList(qwrapper);
        System.out.println(selectList);
    }

    @Test
    public void testSelectAllWithConditions_2() {
        // 写法2
        QueryWrapper<Book> qwrapper = new QueryWrapper<>();
        // 默认是并且 and & 多条件关系运算

        // 写法2.1
        // qwrapper.lambda().ge(Book::getId, 5);
        // qwrapper.lambda().le(Book::getId, 10);

        // 写法2.2
        // 链式写法
        qwrapper.lambda().ge(Book::getId, 5).le(Book::getId, 10);

        List<Book> selectList = bookDao.selectList(qwrapper);
        System.out.println(selectList);
    }

    @Test
    public void testSelectAllWithConditions_3() {
        // 写法3
        LambdaQueryWrapper<Book> qwrapper = new LambdaQueryWrapper<>();
        // 默认是并且 and & 多条件关系运算

        // 写法3.1
        // qwrapper.ge(Book::getId, 5);
        // qwrapper.le(Book::getId, 10);

        // 写法3.2
        // 链式写法
        qwrapper.ge(Book::getId, 5).le(Book::getId, 10);

        List<Book> selectList = bookDao.selectList(qwrapper);
        System.out.println(selectList);
    }

    @Test
    public void testSelectAllWithConditions_4() {
        // 多条件
        LambdaQueryWrapper<Book> qwrapper = new LambdaQueryWrapper<>();
        // 默认是并且 and & 多条件关系运算

        // 或运算：
        qwrapper.ge(Book::getId, 5).or().le(Book::getId, 10);

        List<Book> selectList = bookDao.selectList(qwrapper);
        System.out.println(selectList);
    }
}
