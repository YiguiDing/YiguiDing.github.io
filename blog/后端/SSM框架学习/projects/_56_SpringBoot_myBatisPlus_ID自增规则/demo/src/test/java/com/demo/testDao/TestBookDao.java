package com.demo.testDao;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.demo.dao.BookDao;
import com.demo.pojo.Book;

@SpringBootTest
public class TestBookDao {
    @Autowired
    BookDao bookDao;
    @Test
    public void testInsert(){
        Book book = new Book();
        book.setName("00001");
        book.setDescription("00001des");
        bookDao.insert(book);
        System.out.println(bookDao.selectList(null));
    }
}
