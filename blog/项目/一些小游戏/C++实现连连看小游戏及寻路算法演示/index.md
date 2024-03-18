---
title: C++实现连连看小游戏及寻路算法演示
date: 2021-04-03 06:03:00+08:00
cover: ./cover/C++实现连连看小游戏及寻路算法演示.gif
tag: [连连看,C++,demo,game]
category: 笔记
# ---article: false---
# id: 
imageMin: true # 图像压缩
---

# 实现连连看小游戏及寻路算法演示

![](./cover/C++实现连连看小游戏及寻路算法演示.gif)

# [-->下载<--](./uploads/连连看/Linkup.exe)

## 映射彩虹色

**原理**
![](./images/C++实现连连看小游戏及寻路算法演示/2022-10-18-16-56-24.png)

**代码**

```c++
    int preocess_color(double rate)//[0.0 ~ 1.0]  -> struct rgb[char red,char green,char blue]
    {
        int R=0;
        int G=0;
        int B=0;
        if(rate<=1/6.0)
        {
            R=255;
            G=152/(1/6.0)*rate;
            B=0;
        }
        else
        if(rate<=2/6.0)
        {
            R=255;
            G=255/(2/6.0)*rate;
            B=0;
        }
        else
        if(rate<=3/6.0)
        {
            R=255/(0-(1/6.0))*(rate-2/6.0)+255;
            G=255;
            B=0;
        }
        else
        if(rate<=4/6.0)
        {
            R=0;
            G=255;
            B=255/(1/6.0)*(rate-3/6.0);
        }
        else
        if(rate<=5/6.0)
        {
            R=0;
            G=255/(0-(1/6.0))*(rate-4/6.0)+255;
            B=255;
        }
        else
        //if(rate<=1)
        {
            R=150/(1/6.0)*(rate-5/6.0);
            G=0;
            B=255;
        }
        return EGERGB(R,G,B);

    }
```

## 计算互补色

```c++
    //计算互补色180°
    int process_another_color(int in_color)
    {

        int B=GetRValue(in_color);
        int G=GetGValue(in_color);
        int R=GetBValue(in_color);


        return EGERGB(255-R,255-G,255-B);
    }
```
