---
title: nginx实现反向代理并启用ssl的最简配置
date: 2022-08-23 17:36:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [nginx,反向代理]
# ---article: false---
category: 笔记
---


# nginx实现反向代理并启用ssl的最简配置

```confg
server {
    listen       8082; 
    server_name  localhost;

    #启用ssl
    ssl on;
    #ssl证书
    ssl_certificate  /home/dyg/.ssl/cert.crt;
    #ssl证书私钥
    ssl_certificate_key /home/dyg/.ssl/cert-key.key;

    location / {
        #反向代理
        proxy_pass http://localhost:8081;
        #默认页面
        index  index.html index.htm;
    }
}
```

# 将http请求转成https

**案例:将http:80请求转成https:443**
**仅适用于默认端口**

```confg
server {
    listen       443; 
    server_name  localhost;

    #启用ssl
    ssl on;
    #ssl证书
    ssl_certificate  /home/dyg/.ssl/cert.crt;
    #ssl证书私钥
    ssl_certificate_key /home/dyg/.ssl/cert-key.key;

    location / {
        #反向代理
        proxy_pass http://localhost:8081;
        #默认页面
        index  index.html index.htm;
    }
}
server {
    listen 80;
    server_name localhost;
    #将http请求转成https
    rewrite ^(.*)$ https://$host$1 permanent;
}
```
