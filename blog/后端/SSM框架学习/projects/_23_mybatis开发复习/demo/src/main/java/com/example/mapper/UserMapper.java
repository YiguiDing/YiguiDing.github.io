package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

/*
    drop database if exists db7;
    create database db7;
    use db7;
    create table user( uid int primary key auto_increment,uname varchar(10),passwd varchar(10));
    
    drop table user;
 */
public interface UserMapper {
    @Insert("insert into user(uname,passwd) values(#{uname},#{passwd});")
    void createUser(User user);

    @Update("update user set uname=#{uname}, passwd=#{passwd} where uid = #{uid};")
    void alterUser(User user);

    @Select("select * from user where uid=#{uid};")
    User getUserById(int uid);

    @Select("select * from user;")
    List<User> selectAll();
}
