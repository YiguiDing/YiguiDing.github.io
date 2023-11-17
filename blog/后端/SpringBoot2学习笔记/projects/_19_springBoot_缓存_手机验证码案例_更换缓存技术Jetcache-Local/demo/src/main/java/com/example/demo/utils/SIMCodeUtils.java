package com.example.demo.utils;

import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Component;

import com.alicp.jetcache.Cache;
import com.alicp.jetcache.anno.CacheType;
import com.alicp.jetcache.anno.CreateCache;


@Component // 该注解表示将该类交给spring管理，这样缓存才会生效
public class SIMCodeUtils {
    // 使用createCache注解
    @CreateCache(area = "default", name = "sim", expire = 60, timeUnit = TimeUnit.SECONDS,cacheType = CacheType.LOCAL)
    // cache中key将为 simArea_sim_key
    Cache<String, String> jetCache;

    static String[] prefix = { "000000", "00000", "0000", "000", "00", "0", "" };

    // 生成验证码，同时把结果缓存起来
    public String GenerateCode(String tel) {
        long hashCode = tel.hashCode();
        hashCode ^= 27489347134820342l;
        hashCode ^= System.currentTimeMillis();
        hashCode %= 1000000; // 0~999,999
        String code = String.valueOf(hashCode);
        String res = prefix[code.length()] + code;
        // 缓存数据
        jetCache.put(tel, res);
        return res;
    }

    // 获取缓存里的验证码
    public String GetCode(String tel) {
        String res = null;
        // 从缓存中取出数据
        res = jetCache.get(tel);
        return res;
    }
}
