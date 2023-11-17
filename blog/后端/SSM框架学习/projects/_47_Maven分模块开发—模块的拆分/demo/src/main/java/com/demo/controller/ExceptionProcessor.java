package com.demo.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demo.exception.BusinessException;
import com.demo.exception.SystemException;

@ControllerAdvice
@ResponseBody
public class ExceptionProcessor {
    @ExceptionHandler(SystemException.class) // 捕捉自定义的系统级异常
    public Result processSystemException(SystemException err) {
        // 1.记录日志
        // 2.发消息给运维
        // 3.发邮件给开发者
        // 4.响应给请求
        return new Result(
                err.getCode(), // 错误代码
                null,
                err.getMessage()// 错误消息
        );
    }

    @ExceptionHandler(BusinessException.class) // 捕捉自定义的业务级异常
    public Result processBusinessException(BusinessException err) {
        // 1.响应给请求
        return new Result(
                err.getCode(), // 错误代码
                null,
                err.getMessage()// 错误消息
        );
    }

    @ExceptionHandler(Throwable.class) // 捕捉一切异常
    public Result processException(Throwable e) {
        return new Result(
                Code.UNKNOWN_ERR, // 未知异常
                null,
                Msg.UNKNOWN_ERR // 未知异常
        );
    }
}
