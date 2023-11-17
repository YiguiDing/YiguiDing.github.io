package com.demo.testDao;

import java.util.List;
import java.util.Map;

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
    public void test0() {
        // 方式1
        QueryWrapper<Book> qw = new QueryWrapper<>();
        qw.select("id", "name"); // 指定查询的列名,不查询的列赋值为null

        List<Book> selectList = bookDao.selectList(qw);
        System.out.println(selectList);
    }

    @Test
    public void test1() {
        // 方式2
        LambdaQueryWrapper<Book> qlw = new LambdaQueryWrapper<>();
        qlw.select(Book::getId, Book::getName); // 指定查询的列名,不查询的列赋值为null

        List<Book> selectList = bookDao.selectList(qlw);
        System.out.println(selectList);
    }

    @Test
    public void test2() {
        // 统计列数
        QueryWrapper<Book> qw = new QueryWrapper<>();
        qw.select("count(*)"); // 输出： [{count(*)=34}]

        List<Map<String, Object>> selectList = bookDao.selectMaps(qw);
        System.out.println(selectList);
    }

    @Test
    public void test3() {
        // 分组
        QueryWrapper<Book> qw = new QueryWrapper<>();
        qw.groupBy("name"); // 分组

        List<Map<String, Object>> selectList = bookDao.selectMaps(qw);
        System.out.println(selectList);// 输出：[{author=me, name=1, description=描述, id=16}, {author=me, name=post-tes1t, description=des, id=8}]
    }
    @Test
    public void test4() {
        // 分组
        LambdaQueryWrapper<Book> lqw = new LambdaQueryWrapper<>();
        lqw.groupBy(Book::getName); // 分组
        List<Map<String, Object>> selectList = bookDao.selectMaps(lqw);
        System.out.println(selectList);// 输出：[{author=me, name=1, description=描述, id=16}, {author=me, name=post-tes1t, description=des, id=8}]
    }
    

}
