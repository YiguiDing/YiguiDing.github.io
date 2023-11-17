package com.example.demo.dao;

import org.apache.ibatis.annotations.Mapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.pojo.Book;

@Mapper
public interface BookDao extends BaseMapper<Book> {
}
