---
date: 2023-03-04 13:25:00+08:00
title: 蓝桥杯 2022 年 javaB 组真题刷题笔记
cover: ./cover/蓝桥杯历年真题刷题笔记.png
tag: [蓝桥杯,JAVA,算法,刷题笔记]
category: 算法
# ---article: false--- # 在主页中隐藏
---
# 蓝桥杯 2022 年 javaB 组真题刷题笔记

## 目录

- [蓝桥杯 2022 年 javaB 组真题刷题笔记](#蓝桥杯-2022-年-javab-组真题刷题笔记)
  - [目录](#目录)
  - [字符统计](#字符统计)
  - [最少刷题数](#最少刷题数)

## 字符统计

```
题目 2672: 蓝桥杯2022年第十三届省赛真题-字符统计
时间限制: 1s 内存限制: 512MB 提交: 1242 解决: 933
题目描述
给定一个只包含大写字母的字符串 S，请你输出其中出现次数最多的字母。

如果有多个字母均出现了最多次，按字母表顺序依次输出所有这些字母。

输入格式
一个只包含大写字母的字符串 S .
输出格式
若干个大写字母，代表答案。
样例输入
BABBACAC
样例输出
AB
提示
对于 100% 的评测用例，1 ≤ |S | ≤ 106 .
```

**通过测试的代码**

```java
import java.util.Scanner;

public class _01_字符统计 {
 public static void main(String[] args) {
  Scanner sc = new Scanner(System.in);
  String str = sc.nextLine();
  int[] counter = new int[256];
  int max = 0;
  for (int i = 0; i < str.length(); i++) {
   int k = ++counter[str.charAt(i)];
   if (max < k) {
    max = k;
   }
  }
  for (int i = 0; i < counter.length; i++) {
   if (counter[i] == max) {
    System.out.print((char) i);
   }
  }
 }
}
```

## 最少刷题数

```
题目描述
小蓝老师教的编程课有 N 名学生，编号依次是 1 . . . N。第 i 号学生这学期刷题的数量是 Ai。

对于每一名学生，请你计算他至少还要再刷多少道题，才能使得全班刷题比他多的学生数不超过刷题比他少的学生数。

输入格式
第一行包含一个正整数 N。

第二行包含 N 个整数：A1, A2, A3, . . . , AN.

输出格式
输出 N 个整数，依次表示第 1 . . . N 号学生分别至少还要再刷多少道题。
样例输入
5
12 10 15 20 6
样例输出
0 3 0 0 7
提示
对于 30% 的数据，1 ≤ N ≤ 1000, 0 ≤ Ai ≤ 1000. 

对于 100% 的数据，1 ≤ N ≤ 100000, 0 ≤ Ai ≤ 100000.
```
