---
title: frp配置过程记录(ipad远程登录电脑)
date: 2022-08-04 20:26:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [frp,linux,ipad]
# ---article: false---
category: 工具
---


# frp配置过程记录(ipad远程登录电脑)

## 服务端配置过程

**准备工作**

```bash
# 从github下载frp的releases版本
wget -O https://github.com/fatedier/frp/releases/download/v0.44.0/frp_0.44.0_linux_amd64.tar.gz
# 解压
tar -xvf ./frp_0.44.0_linux_amd64.tar.gz
# 进入目录
cd ./frp_0.44.0_linux_amd64
# 创建文件夹
mkdir ~/frps/
# 移动
mv ./frps ~/frps/
# 添加执行权限
chmod +x ~/frps/frps
```

**编写配置文件**

```bash
cat > ~/frps/frps.ini  << EOF
# frps.ini
[common]
# 这里是基本配置部分
bind_port = 7000
bind_udp_port = 7000

# 这里设置鉴权方式为:token
authentication_method = token
# 随便写一段英文+数字 服务端和客户端需一致
token = swhm3elmbxnbnuqvoh5i5wlitjyymv22
EOF
```

**临时启动服务测试是否配置成功**

```bash
~/frps/frps -c ~/frps/frps.ini
```

**配置开机自启:创建并编辑 frps.service 文件**

```bash
# su用于提权 否则无法使用cat
su
cat > /etc/systemd/system/frps.service  << EOF
# for redhat8
[Unit]
# 服务名称，可自定义
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
# 启动frps的命令，需修改为您的frps的安装路径
# /home/userName/ 为路径
ExecStart = /home/dyg/frps/frps -c /home/dyg/frps/frps.ini

[Install]
WantedBy = multi-user.target
EOF
```


**新版配置文件**

```bash
sudo cat > /etc/systemd/system/frps.service << EOF
[Unit]
Description=frp server
After=network.target

[Service]
# User=root
# WorkingDirectory=/
Restart=always
ExecStart=/usr/local/bin/frps -c /usr/local/etc/frps.toml
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
```

**配置开机自启:使用 systemd 命令，管理 frps**

```bash
# 启动frp
systemctl start frps
# 停止frp
systemctl stop frps
# 重启frp
systemctl restart frps
# 查看frp状态
systemctl status frps
# 配置 frps 开机自启
systemctl enable frps
# 取消配置 frps 开机自启
systemctl disable frps
```

## 客户端配置（win10电脑）

**frpc.ini文件**

```txt
[common]
protocol = tcp
# xx.xx.xx.xx 为服务端ip地址或域名
server_addr = xx.xx.xx.xx
server_port = 7000
authentication_method = token
# 随便写一段英文+数字 服务端和客户端需一致
token = swhm3elmbxnbnuqvoh5i5wlitjyymv22

# win10远程桌面TCP配置
[mstsc_TCP]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 11111

# win10远程桌面UDP配置
[mstsc_UDP]
type = udp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 11111
```

**启动服务**
将frpc.exe和frpc.ini放置到相同目录,然后执行

```bash
./frpc.exe
```

## 客户端配置2（ubuntu20.04）

适用于ubuntu centos

```bash
# 切换目录
cd frp_0.44.0_linux_amd64/
# frpc拷贝到/usr/local/bin/
sudo cp frpc /usr/local/bin/frpc
# frpc.ini拷贝到/etc/frp/
sudo mkdir /etc/frp/
sudo cp frpc.ini /etc/frp/
# 编辑配置为系统服务
vim /usr/lib/systemd/system/frpc.service
#########################################
[Unit]
Description=frpc
After=network.target
[Service]
TimeoutStartSec=1
ExecStart=/usr/local/bin/frpc -c /etc/frp/frpc.ini
ExecStop=/bin/kill $MAINPID
[Install]
WantedBy=multi-user.target
###########################################

# 启动 frp 并设置开机启动
systemctl enable frpc
systemctl start frpc
systemctl status frpc
 
# 部分服务器上,可以需要加 .service 后缀来操作,即:
systemctl enable frpc.service
systemctl start frpc.service
systemctl status frpc.service
```
