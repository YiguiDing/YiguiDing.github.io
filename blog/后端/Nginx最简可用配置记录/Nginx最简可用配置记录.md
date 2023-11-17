---
date: 2023-04-04 12:33:00+08:00
title: Nginx最简可用配置记录
cover: ./cover/default_cover.jpg
tag: [express]
category: 后端
# ---article: false---
---

# Nginx最简可用配置记录

> nginx version: nginx/1.22.1

`/etc/nginx/nginx.conf`

```conf
# 什么都没改，默认配置
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on; # gzip 其实可以启用

    include /etc/nginx/conf.d/*.conf;# 这里就是引入default.conf配置文件
}
```

`/etc/nginx/conf.d/default.conf`

```conf
# 所有http协议的请求全部重定向为https请求
server{
    listen 80;
    #（第一种）把http的域名请求转成https
    #return 301 https://$host$request_uri;
    #（第二种）强制将http://${server_name配置}的URL重写成https
    # server_name ???.???.???;
    # rewrite ^(.*) https://${server_name}$1 permanent;
    #（第三种）强制将http://${请求的host}的URL重写成https
    rewrite ^(.*) https://$host$1 permanent; 
}
# for blog
server{
    # # listen 80; #  监听80端口 默认http协议
    listen 443 ssl; # 监听443端口 ssl表示https协议
    server_name dingdingdang.online www.dingdingdang.online; # 域名，可填写多个
    ssl_certificate     ssl/dingdingdang.online.pem;# 证书，表示放在/etc/nginx/ssl/ 目录下
    ssl_certificate_key ssl/dingdingdang.online.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    location / {
        root /var/www/blog;// 网站根目录，要注意目录的权限
        index index index.html index.htm;// 主页
    }
}



# for file server
server{
    # listen 80;
    listen 443 ssl;
    server_name file.dingdingdang.online; 
    ssl_certificate     ssl/file.dingdingdang.online.pem;
    ssl_certificate_key ssl/file.dingdingdang.online.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    location / {
        proxy_pass http://127.0.0.1:8081;// 单纯重定向
    }
}



# -----------------------------start:for vscode and vscode's wss--------------------------------------

# 因为 code-server 不仅需要代理 http://127.0.0.1:8080 还需要 代理ws://127.0.0.1:8080
map $http_upgrade $connection_upgrade {# map
    default upgrade;
    '' close;
}
server{
    # listen 80;
    listen 443 ssl;
    server_name code.dingdingdang.online; 
    ssl_certificate     ssl/code.dingdingdang.online.pem;
    ssl_certificate_key ssl/code.dingdingdang.online.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://127.0.0.1:8080;
        # 下面的部分就是使其支持wss://127.0.0.1:8080
        proxy_http_version 1.1;
        proxy_pass_header Server;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Upgrade $http_upgrade;
    }
}
# -----------------------------end:for vscode and vscode's wss--------------------------------------



# 代理
# for google
server{
    # listen 80;
    listen 443 ssl;
    server_name google.dingdingdang.online; 
    ssl_certificate     ssl/dingdingdang.online.pem;
    ssl_certificate_key ssl/dingdingdang.online.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    location / {
        proxy_pass https://www.google.com/;
    }
}
# for github
server{
    # listen 80;
    listen 443 ssl;
    server_name github.dingdingdang.online; 
    ssl_certificate     ssl/dingdingdang.online.pem;
    ssl_certificate_key ssl/dingdingdang.online.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    location / {
        proxy_pass https://github.com/;
    }
}

# 以下为默认配置
# server {
#     listen       80;
#     server_name  localhost;

#     #access_log  /var/log/nginx/host.access.log  main;

#     location / {
#         root   /usr/share/nginx/html;
#         index  index.html index.htm;
#     }

#     #error_page  404              /404.html;

#     # redirect server error pages to the static page /50x.html
#     #
#     error_page   500 502 503 504  /50x.html;
#     location = /50x.html {
#         root   /usr/share/nginx/html;
#     }

#     # proxy the PHP scripts to Apache listening on 127.0.0.1:80
#     #
#     #location ~ \.php$ {
#     #    proxy_pass   http://127.0.0.1;
#     #}

#     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
#     #
#     #location ~ \.php$ {
#     #    root           html;
#     #    fastcgi_pass   127.0.0.1:9000;
#     #    fastcgi_index  index.php;
#     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
#     #    include        fastcgi_params;
#     #}

#     # deny access to .htaccess files, if Apache's document root
#     # concurs with nginx's one
#     #
#     #location ~ /\.ht {
#     #    deny  all;
#     #}
# }
```
