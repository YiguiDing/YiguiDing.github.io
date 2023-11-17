package com.demo.testDao;

import java.util.ArrayList;
import java.util.Collection;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.demo.dao.BookDao;

@SpringBootTest
public class TestBookDao {
    @Autowired
    BookDao bookDao;

    @Test
    public void testSelects(){
        Collection<Long> ids =new ArrayList<Long>();
        ids.add(17L);
        ids.add(18L);
        System.out.println(bookDao.selectBatchIds(ids)); //[Book [id=17, name=1, author=me, description=描述], Book [id=18, name=1, author=me, description=描述]]
        bookDao.deleteBatchIds(ids);
        System.out.println(bookDao.selectBatchIds(ids)); //[]
    }
    


    @Test
    public void testDeletes(){
        Collection<Long> ids =new ArrayList<Long>();
        ids.add(17L);
        ids.add(18L);
        bookDao.deleteBatchIds(ids);
        System.out.println(bookDao.selectList(null));
    }
}
