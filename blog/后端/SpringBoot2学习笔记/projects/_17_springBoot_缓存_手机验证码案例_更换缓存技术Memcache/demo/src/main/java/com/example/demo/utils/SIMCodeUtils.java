package com.example.demo.utils;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import net.rubyeye.xmemcached.MemcachedClient;

@Component // 该注解表示将该类交给spring管理，这样缓存才会生效
public class SIMCodeUtils {
    @Autowired
    MemcachedClient cache; // 自动装配

    static String[] prefix = { "000000", "00000", "0000", "000", "00", "0", "" };

    // 生成验证码，同时把结果缓存起来
    public String GenerateCode(String tel) {
        long hashCode = tel.hashCode();
        hashCode ^= 27489347134820342l;
        hashCode ^= System.currentTimeMillis();
        hashCode %= 1000000; // 0~999,999
        String code = String.valueOf(hashCode);
        String res = prefix[code.length()] + code;
        try {
            // 缓存数据
            cache.set(tel, 60, res);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    // 获取缓存里的验证码
    public String GetCode(String tel) {
        String res = null;
        try {
            // 从缓存中取出数据
            res = cache.get(tel);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }
}
