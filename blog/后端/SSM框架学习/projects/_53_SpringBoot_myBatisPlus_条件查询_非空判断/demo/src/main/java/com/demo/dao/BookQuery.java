package com.demo.dao;
import com.demo.pojo.Book;
import lombok.Data;

@Data
public class BookQuery extends Book {// 定义查询条件类
    private Long id_max;// 数值相关的类才需要范围查询
}