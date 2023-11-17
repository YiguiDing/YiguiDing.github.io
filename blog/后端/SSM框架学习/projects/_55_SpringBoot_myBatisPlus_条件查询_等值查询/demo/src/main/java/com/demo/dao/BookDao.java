package com.demo.dao;

import org.apache.ibatis.annotations.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.demo.pojo.Book;

@Mapper
public interface BookDao extends BaseMapper<Book> {
    
}
