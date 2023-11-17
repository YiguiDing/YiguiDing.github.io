package com.example.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;

/*
    create table log(
        info TEXT,
        time DATE
    );


 */
public interface LogDao {
    @Insert("insert into log(info,time) values(#{info},now());")
    public void log(@Param("info") String info);
}
