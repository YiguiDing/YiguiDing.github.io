---
title: java学习笔记
date: 2022-09-21 14:37:00+08:00
cover: ./cover/default_cover.jpg
tag: [,,HIDE]
category: 笔记
---

## lello world

```java
public class HelloWorld {
    /* 第一个Java程序
     * 它将输出字符串 Hello World
     */
    public static void main(String[] args) {
        System.out.println("Hello World"); // 输出 Hello World
    }
}
```

**编译执行**

```bash
javac HelloWorld.java 
java HelloWorld
```

## random

```java
import java.util.Random;//导入包
public class main1 {
    public static void main(String[] args){
        Random r = new Random();//创建对象
        System.out.println(r.nextInt(10));//获取并输出
    }
}
```
