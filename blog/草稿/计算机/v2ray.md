---
date: 2023-10-29T01:46
---


# v2ray配置记录

```bash

# 创建安装目录
mkdir  /usr/local/lib/v2ray/

# 进入安装目录
cd /usr/local/lib/v2ray/

# 官网下载v2ray
wget ????/v2ray-linux-64.zip

# 解压v2ray（可能需要安装unzip命令）
unzip v2ray-linux-64.zip

# 查看解压后目录下文件内容
ls -l
# total 46008
# -rw-r--r-- 1 root root     4221 Feb  8  2023 config.json
# -rw-r--r-- 1 root root  9967014 Feb  8  2023 geoip.dat
# -rw-r--r-- 1 root root   170243 Feb  8  2023 geoip-only-cn-private.dat
# -rw-r--r-- 1 root root  1512983 Feb  8  2023 geosite.dat
# drwxr-xr-x 3 root root     4096 Feb  8  2023 systemd
# -rwxr-xr-x 2 root root 23724032 Feb  8  2023 v2ray
# -rw-r--r-- 1 root root 11706579 Oct 29 01:11 v2ray-linux-64.zip
# -rw-r--r-- 1 root root      391 Feb  8  2023 vpoint_socks_vmess.json
# -rw-r--r-- 1 root root      537 Feb  8  2023 vpoint_vmess_freedom.json



# 安装系统服务配置文件
# 在：/usr/local/lib/v2ray/systemd/system/v2ray.service中
# 描述了安装地址和配置文件地址：
# ExecStart=/usr/local/bin/v2ray run -config /usr/local/etc/v2ray/config.json）
cp ./systemd/system/* /etc/systemd/system/

# 创建硬链接
ln ./v2ray /usr/local/bin/v2ray
# (for  V2Ray 4.31.0)
ln ./v2ctl /usr/local/bin/v2ctl

# 创建配置文件
mkdir /usr/local/etc/v2ray/

# 复制默认配置作为系统服务配置
cp ./config.json  /usr/local/etc/v2ray/
# 
vi /usr/local/etc/v2ray/config.json
# 查看config.json内容：
# root@iZj6cin9q6x5p5bh4ofx79Z:/usr/local/etc/v2ray# cat config.json 
# {
#   "inbounds": [
#       {
#           "port": 2000, 
#           "protocol": "vmess",
#           "settings": {
#               "clients": [
#                   {
#                       "id": "？？？？？？？？？？？？？？？？？？？？？？？"
#                   }
#               ]
#           }
#       }
#   ],
#   "outbounds": [
#       {
#           "protocol": "freedom"
#       }
#   ]
# }

# 设置开机自启
systemctl enable v2ray

# 启动服务
systemctl start v2ray

# 在云服务器控制面板开启防火墙
```

# 记录scp的安装和如何使用其来复制文件

```bash
# 安装sshd
apt install open-ssh ssh-client

# 生成key
ssh-keygen

# 使用scp(语法和cp一致)
scp ./xxx.json root@xx.xx.xx.xx:/xx/xx/xx/
```
