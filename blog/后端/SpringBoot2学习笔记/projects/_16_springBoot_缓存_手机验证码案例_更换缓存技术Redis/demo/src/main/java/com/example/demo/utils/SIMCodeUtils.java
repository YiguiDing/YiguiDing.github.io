package com.example.demo.utils;

import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

@Component // 该注解表示将该类交给spring管理，这样缓存才会生效 
public class SIMCodeUtils {
    static String[] prefix = { "000000", "00000", "0000", "000", "00", "0", "" };

    // 生成验证码，同时把结果缓存起来
    // CachePut表示只会把函数返回值存起来，但不会到缓存中去取值 
    @CachePut(value = "simcode", key = "#tel")
    public String GenerateCode(String tel) {
        long hashCode = tel.hashCode();
        hashCode ^= 27489347134820342l;
        hashCode ^= System.currentTimeMillis();
        hashCode %= 1000000; // 0~999,999
        String code = String.valueOf(hashCode);
        return prefix[code.length()] + code;
    }

    // 获取缓存里的验证码
    @Cacheable(value = "simcode", key = "#tel")
    public String GetCode(String tel) {
        return null;
    }
}
