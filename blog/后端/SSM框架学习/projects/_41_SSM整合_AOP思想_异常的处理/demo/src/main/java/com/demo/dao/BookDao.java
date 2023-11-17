package com.demo.dao;

import java.util.List;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.demo.pojo.Book;

/*
    create database ssm_demo1;
    use ssm_demo1;
    create table book(
        id int primary key auto_increment,
        name varchar(10),
        author varchar(10),
        description varchar(10)
    );

*/

public interface BookDao {
    @Insert("insert into book(name,author,description) values(#{name},#{author},#{description});")
    void add(Book book);

    @Delete("delete from book where id = #{id}; ")
    void deleteById(Integer id);

    @Update("update book set name=#{name},author=#{author},description=#{description} where id = #{id};")
    void update(Book book);

    @Select("select * from book where id = #{id};")
    Book getById(Integer id);

    @Select("select * from book ;")
    List<Book> selectAll();
}
