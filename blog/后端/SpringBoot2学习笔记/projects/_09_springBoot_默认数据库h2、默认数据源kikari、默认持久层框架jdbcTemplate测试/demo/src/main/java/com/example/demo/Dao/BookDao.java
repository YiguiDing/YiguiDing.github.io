package com.example.demo.Dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.example.demo.pojo.Book;


@Component
public class BookDao {
    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<Book> selectAll() throws SQLException {
        String sql = "select * from "+Book.tabName;
        List<Book> books = jdbcTemplate.query(sql, Book.rowMapper);
        return books;
    }
}
