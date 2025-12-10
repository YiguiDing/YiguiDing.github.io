---
title: "filebrowser配置记录"
date: 2025-12-10
tags: [filebrowser, nginx]
categories: [技术]
article: false
---

## filebrowser配置记录

**创建用户**

```bash
# 添加一个普通用户
adduser dyg
# 添加附属组到管理员组(暂不需要)
# usermod -aG sudo dyg
```

**下载安装filebrowser**

```bash
su root
cd ~
wget https://github.com/filebrowser/filebrowser/releases/download/v2.51.2/linux-amd64-filebrowser.tar.gz
tar -xzvf linux-amd64-filebrowser.tar.gz -C ./
mv filebrowser /usr/local/bin/
```

**配置filebrowser**

```bash
sudo mkdir /usr/local/etc/filebrowser/
mkdir /var/filebrowser/log/
mkdir /var/filebrowser/root/
# 初始化(生成)filebrowser.db 文件
filebrowser -d /usr/local/etc/filebrowser/filebrowser.db config init
filebrowser -d /usr/local/etc/filebrowser/filebrowser.db users add admin <your pasword> --perm.admin
filebrowser -d /usr/local/etc/filebrowser/filebrowser.db config set \
--address 127.0.0.1 \
--port 8081 \
--locale zh-cn \
--log /var/filebrowser/log/filebrowser.log \
--root /var/filebrowser/root/
```

```bash
# 确保这些文件属于该用户
sudo chown dyg:dyg /usr/local/etc/filebrowser/ -R
sudo chown dyg:dyg /var/filebrowser/log/ -R
sudo chown dyg:dyg /var/filebrowser/root/ -R

# 切换到dyg用户
su dyg
# 尝试运行命令 确保没有权限问题
filebrowser -d /usr/local/etc/filebrowser/filebrowser.db
```

**编写服务文件**

```bash
# 切回root
su root
# 编写服务文件
cat > /etc/systemd/system/filebrowser.service << EOF
[Unit]
Description=filerowser server
After=network.target

[Service]
User=dyg
WorkingDirectory=/home/dyg/
Restart=always
ExecStart=/usr/local/bin/filebrowser -d /usr/local/etc/filebrowser/filebrowser.db
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

# 启动服务
systemctl start filebrowser.service
systemctl status filebrowser.service
systemctl enable filebrowser.service
```


**获取证书**
> 需提前修改DNS记录 添加泛解析域名 *.dingdingdang.online -> 公网ip

```bash
certbot -d file.dingdingdang.online
```

**添加nginx代理配置**

```bash
cat >> /etc/nginx/conf.d/default.conf << EOF
# for file server
server{
    listen 443 ssl;
    server_name file.dingdingdang.online;

    ssl_certificate     /etc/letsencrypt/archive/file.dingdingdang.online/cert1.pem;
    ssl_certificate_key /etc/letsencrypt/archive/file.dingdingdang.online/privkey1.pem;
    ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers           HIGH:!aNULL:!MD5;
    
    location / {
        proxy_pass http://127.0.0.1:8081;
    }
}
EOF
```