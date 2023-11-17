package com.example.factory;

import org.springframework.beans.factory.FactoryBean;
import org.springframework.lang.Nullable;

import com.example.dao.BookDao;
import com.example.dao.impl.BookDaoImpl;

// 注意这里实现的接口是FactoryBean<BookDao>
public class BookDaoFactoryBean implements FactoryBean<BookDao> {
    BookDaoFactoryBean() {
        System.out.println("BookDaoFactoryBean的无参构造器被调用了......");
    }

    @Override
    @Nullable
    public BookDao getObject() throws Exception {
        System.out.println("BookDaoFactoryBean 的 getObject方法被调用......");
        return new BookDaoImpl();
    }

    @Override
    @Nullable
    public Class<?> getObjectType() {
        return BookDao.class;// 这里写的是接口类
    }

}
