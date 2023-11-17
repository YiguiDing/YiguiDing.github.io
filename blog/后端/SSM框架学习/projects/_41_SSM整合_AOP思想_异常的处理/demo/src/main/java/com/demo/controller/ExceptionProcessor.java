package com.demo.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice // AOP扫描
@ResponseBody
public class ExceptionProcessor {

    @ExceptionHandler(Throwable.class)// 捕捉一切异常
    public Result processException(Throwable e) {
        return new Result(
            Code.SERVER_INTERNAL_ERR, // 服务器内部错误
            null,
            Msg.SERVER_INTERNAL_ERR
        );
    }
}
