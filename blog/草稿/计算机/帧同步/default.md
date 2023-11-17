---
title: 
date: 2023-01-22 03:17:00+08:00
cover: ./cover/default_cover.jpg
tag: [笔记]
category: 笔记

---

## 实现帧同步的关键点

- **帧同步的目标**： 所有客户端从服务端得到的是相同的数据
- **在正式代码中不要使用浮点型**，因为浮点型在各个硬件平台上的实现标准可能不一样，754/854
- **一般情况下不建议使用多线程**，除非能保证多个线程处理完毕后返回的数据是相同的

- 单机模式：
  - inputhandler() 输入处理
  - update() 更新
  - step()
- 传统观念的状态同步
  - 客户端把输入发送给服务端
  - 服务端处理输入，返回计算结果
  - 客户端根据结果更新
- 常规的帧同步
  - 服务端定时的向客户端发送同步信息
  - 客户端把输入发送给服务端
  - 服务端处理输入，返回计算结果
  - 客户端根据结果更新

<style>
    gold{
        color:black;
        background-color:gold;
    }
    green{
        color:white;
        background-color:green;
    }
    warn{
        color:white;
        background-color:red;
    }
</style>
