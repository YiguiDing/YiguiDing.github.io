package com.demo.testDao;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.demo.dao.BookDao;
import com.demo.pojo.Book;

@SpringBootTest
public class TestBookDao {
    @Autowired
    BookDao bookDao;

    @Test
    // 等值判断
    public void equalTest() {
        LambdaQueryWrapper<Book> qwrapper = new LambdaQueryWrapper<>();
        qwrapper.eq(Book::getId, 8);
        Book res = bookDao.selectOne(qwrapper);
        System.out.println(res); //Book [id=8, name=post-tes1t, author=me, description=des]
    }
    @Test
    public void rangeTest(){
        // lt le ==> lessThan小于   lessEqual小于等于
        // gt ge ==> greatThan  greatEqual
        // eq    ==> equal
        // between ==> between
        LambdaQueryWrapper<Book> qwrapper = new LambdaQueryWrapper<>();
        qwrapper.between(Book::getId, 8,10);// v1 <= v2
        List<Book> res = bookDao.selectList(qwrapper);
        System.out.println(res);//[Book [id=8, name=post-tes1t, author=me, description=des], Book [id=9, name=post-tes1t, author=me, description=111], Book [id=10, name=post-tes1t, author=me, description=asb]]
    }
    @Test
    public void likeTest(){
        // 非全文检索匹配
        LambdaQueryWrapper<Book> qwrapper = new LambdaQueryWrapper<>();
        qwrapper.like(Book::getName, "tes");
        // qwrapper.likeLeft(Book::getName, "tes"); // %tes
        // qwrapper.likeRight(Book::getName, "tes"); // tes%
        List<Book> res = bookDao.selectList(qwrapper);
        System.out.println(res);//[Book [id=8, name=post-tes1t, author=me, description=des], Book [id=9, name=post-tes1t, author=me, description=111], Book [id=10, name=post-tes1t, author=me, description=asb], Book [id=11, name=post-tes1t, author=me, description=a1111sb], Book [id=12, name=post-tes1t, author=me, description=a1111111sb], Book [id=13, name=post-tes1t, author=me, description=a1111111sb], Book [id=14, name=post-tes1t, author=me, description=a1111sb], Book [id=15, name=post-tes1t, author=me, description=a1111sb]]

    }
}
