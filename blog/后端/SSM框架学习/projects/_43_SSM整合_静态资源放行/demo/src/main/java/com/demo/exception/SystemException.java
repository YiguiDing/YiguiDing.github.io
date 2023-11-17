package com.demo.exception;

// 系统级异常
public class SystemException extends RuntimeException {
    int code;
    

    public SystemException(int code) {
        this.code = code;
    }

    public SystemException(String message, int code) {
        super(message);
        this.code = code;
    }

    public SystemException(Throwable cause, int code) {
        super(cause);
        this.code = code;
    }

    public SystemException(String message, Throwable cause, int code) {
        super(message, cause);
        this.code = code;
    }

    public SystemException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace,
            int code) {
        super(message, cause, enableSuppression, writableStackTrace);
        this.code = code;
    }

    public int getCode() {
        return code;
    }
    
}
