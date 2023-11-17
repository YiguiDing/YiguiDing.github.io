---
title: 
date: 2022-07-07 06:03:00+08:00
cover: ./cover/default_cover.jpg
tag: [笔记]
category: 笔记
# article: false # 在主页中隐藏
# id: #自定义文章id
# imageMin: true # 图像压缩
---




**基本语法**:

1. 创建连接:const socket = io(地址)
2. 发送消息: socket.emit(消息type类型，消息内容，接收到消息的回调函数)
3. 监听消息: socket.on(事件type类型，接收到消息的回调函数)

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
