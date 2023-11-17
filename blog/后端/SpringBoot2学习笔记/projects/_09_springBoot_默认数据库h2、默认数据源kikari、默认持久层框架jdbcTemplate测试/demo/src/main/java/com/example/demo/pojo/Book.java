package com.example.demo.pojo;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import lombok.Data;


/*
 * 
create table tbl_book(id integer,name varchar,type varchar,description varchar)
insert into TBL_BOOK(id,name,type,description) values(1,'1','2','3')

 */
/**
 * Book
 */
@Data
public class Book {
    int id;
    String name;
    String type;
    String description;
    public static String tabName = "tbl_book";
    public static RowMapper<Book> rowMapper = new RowMapper<Book>() {
        @Override
        public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
            Book book = new Book();
            book.setId(rs.getInt("id"));
            book.setName(rs.getString("name"));
            book.setType(rs.getString("type"));
            book.setDescription(rs.getString("description"));
            return book;
        }
    };
}
