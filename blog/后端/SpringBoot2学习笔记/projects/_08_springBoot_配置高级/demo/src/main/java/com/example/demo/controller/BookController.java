package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lombok.AllArgsConstructor;
import lombok.Data;
@RestController
@RequestMapping("/books")
public class BookController {
    @GetMapping("/{id}")
    R get(@PathVariable int id){
        return new R("查询成功,你请求的ID为"+id+"。",R.QUERY_SUCCESS);
    }
}
@Data
@AllArgsConstructor
class R{
    Object data;
    Msg msg;
    static Msg QUERY_SUCCESS = new Msg(100001,"查询成功");
    @AllArgsConstructor @Data static class Msg{ int state;String info;}
}
