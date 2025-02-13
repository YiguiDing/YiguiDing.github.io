---
title: 记录在树莓派linux部署filebrowser服务实现文件服务器
date: 2024-10-22T12:16:00
index: true
article: false
---

## filebrowser配置

```bash
scp 'c:/迅雷下载/linux-armv6-filebrowser.tar.gz' pi@192.168.2.2:~
scp -r './etc/filebrowser' pi@192.168.2.2:~
```

```bash
ssh pi@192.168.2.2
ls
mv linux-armv6-filebrowser.tar.gz  filebrowser/
cd filebrowser/
tar -xvf linux-armv6-filebrowser.tar.gz 
sudo mv filebrowser /usr/bin/
sudo filebrowser -d /etc/filebrowser/filebrowser.db config init
sudo filebrowser -d /etc/filebrowser/filebrowser.db config set --address 0.0.0.0
sudo filebrowser -d /etc/filebrowser/filebrowser.db config set --port 8080
sudo filebrowser -d /etc/filebrowser/filebrowser.db config set --locale zh-cn
sudo filebrowser -d /etc/filebrowser/filebrowser.db config set --log /home/pi/log/filebrowser.log
sudo filebrowser -d /etc/filebrowser/filebrowser.db config set --root /home/pi/filebrowser/public/
sudo filebrowser -d /etc/filebrowser/filebrowser.db config set --branding.files /etc/filebrowser/branding/
sudo filebrowser -d /etc/filebrowser/filebrowser.db config set --branding.name "File Server"
# 用户名：root 密码：root
# 用户名：admin 密码：admin
sudo filebrowser -d /etc/filebrowser/filebrowser.db users add admin admin --perm.create --perm.delete --perm.download --perm.modify --perm.rename

# run test 
sudo filebrowser -d /etc/filebrowser/filebrowser.db
# sudo nono 
sudo vi /etc/rc.local
```

配置servers

```bash
pi@raspberrypi:~/server $ cat /etc/systemd/system/filebrowser.service
[Unit]
Description=filerowser server
After=network.target

[Service]
User=pi
WorkingDirectory=/
Restart=always
ExecStart=/usr/bin/filebrowser -d /etc/filebrowser/filebrowser.db
Restart=on-failure

[Install]
WantedBy=multi-user.target
```