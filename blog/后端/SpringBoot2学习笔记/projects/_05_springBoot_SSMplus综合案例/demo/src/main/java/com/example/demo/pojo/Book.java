package com.example.demo.pojo;

import lombok.Data;

/*
mysql 
create database ssmp_demo1;
use ssmp_demo1;
drop table tbl_book;
create table tbl_book(
    id bigint primary key auto_increment,
    name varchar(40),
    type varchar(20),
    description varchar(100)
);
*/ 

@Data
public class Book {
    Long id;
    String name;
    String type;
    String description;
}
