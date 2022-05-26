---
layout: post
title: "MySql笔记"
date: 2022-05-27 04:50:00 +0800
cover: /images/article/MySql.webp
tags: [笔记,MySql]
categories: 笔记
---

# mySql笔记


## mySql8.0
* 列出所有数据库:show databases;
* 清空MySQL——root密码
    1. 停止 MySQL 任务 net stop MySQL
    1. mysqld 命令 mysqld --console --skip-grant-tables --shared-memory
    1. 无密码进入mysql mysql -u root
    1. 清空root 密码 UPDATE user SET authentication_string="" WHERE user='root';
    2. 重新载入授权表。FLUSH PRIVILEGES;
        * 如果你不使用该命令，你就无法使用新创建的用户来连接mysql服务器，除非你重启mysql服务器。
* 修改用户密码
  1. use mysql;
  4. alter user root@localhost identified by '密码';
  5. FLUSH PRIVILEGES;