package com.example.demo.controller.utils;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerExceptionProcessor {
    @ExceptionHandler(value = Throwable.class)
    public Result doException(Exception exception) {
        exception.printStackTrace();
        return new Result(null, Result.SER_INR_ERR);
    }
}
