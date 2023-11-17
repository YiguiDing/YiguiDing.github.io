package com.example.dao;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.domain.Account;

/*
    drop database if exists db8;
    create database db8;
    use db8;
    drop table account;
    create table account( 
        uid int primary key auto_increment,
        uname varchar(10) unique,
        passwd varchar(10),
        money double(20,2) default 0 
    );
 */

public interface AccountDao {
    @Insert("insert into account(uname,passwd) values(#{uname},#{passwd});")
    void createAccount(Account Account);

    @Insert("delete from account where uid =#{uid};")
    void deleteAccountById(int uid);

    @Update("update account set uname=#{uname}, passwd=#{passwd} where uid = #{uid};")
    void alterAccount(Account Account);

    @Select("select * from account where uid=#{uid};")
    Account getAccountById(int uid);

    @Update("update account set money=money+#{incresement} where uid = #{uid};")
    void addMoneyById(@Param("uid") int uid, @Param("incresement") double incresement);

    @Select("select * from account;")
    List<Account> selectAll();
}
