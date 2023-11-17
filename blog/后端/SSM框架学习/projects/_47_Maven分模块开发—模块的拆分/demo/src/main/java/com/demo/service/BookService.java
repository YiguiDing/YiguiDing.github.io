package com.demo.service;

import java.util.List;
import com.demo.pojo.Book;

public interface BookService {

    boolean add(Book book);

    boolean deleteById(Integer id);

    boolean update(Book book);

    Book getById(Integer id);

    List<Book> selectAll();
}
