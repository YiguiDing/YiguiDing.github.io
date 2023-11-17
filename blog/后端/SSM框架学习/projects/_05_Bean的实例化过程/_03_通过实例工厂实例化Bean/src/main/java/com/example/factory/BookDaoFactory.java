package com.example.factory;

import com.example.dao.BookDao;
import com.example.dao.impl.BookDaoImpl;

public class BookDaoFactory {
    BookDaoFactory() {
        System.out.println("BookDaoFactory被实例化了......");
    }

    BookDao getBookDao() {
        System.out.println("BookDaoFactory的getBookDao方法被调用......");
        return new BookDaoImpl();
    }
}
