---
title: ubuntu下配置xRDP过程记录
date: 2022-08-12 06:55:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [ubuntu,xRDP]
# ---article: false---
category: 笔记
---


# ubuntu下配置xRDP过程记录

## xRDP

- RDP是windows系统下默认的远程桌面协议 默认端口3389
- VNC是linux系统下默认的远程桌面协议 默认端口5900
- **xRDP**是RDP的开源版本
  - 安装xRDP的linux可以通过windows原生的远程桌面连接程序MSTSC建立远程连接，
  - 于是市面上一系列用于远程登录windows的手机端app和PC端应用程序也可用于登陆linux

## 通过命令安装

```shell
sudo apt install  xrdp
```

## 添加用户到组

```shell
默认情况下，Xrdp 使用 /etc/ssl/private/ssl-cert-snakeoil.key 仅“ssl-cert” 用户组可读
sudo adduser 用户名 ssl-cert
或
sudo usermod 用户名 -G ssl-cert
```

## 配置服务

**配置文档/etc/xrdp/xrdp.ini**
xrdp.ini 关键部分在globals

```conf
[globals]
bitmap_cache=yes       #位图缓存
bitmap_compression=yes #位图压缩
port=3389              #监听端口
crypt_level=low        #加密程度（none为不加密 low为40位，默认为high 128位，medium为双40位）
channel_code=1         #????
```

**配置文档/etc/xrdp/sesman.ini**

```conf
[Globals]
ListenAddress=127.0.0.1      #监听ip地址(默认即可)
ListenPort=3350              #监听端口(默认即可)
EnableUserWindowManager=1    #1为开启,可让用户自定义自己的启动脚本
UserWindowManager=startwm.sh
DefaultWindowManager=startwm.sh
 
[Security]
AllowRootLogin=1              #允许root登陆
MaxLoginRetry=4               #最大重试次数
TerminalServerUsers=tSUSErs   #允许连接的用户组(如果不存在则默认全部用户允许连接)
TerminalServerAdmins=tsadmins #允许连接的超级用户(如果不存在则默认全部用户允许连接)
 
[Sessions]
MaxSessions=10           #最大会话数
KillDisconnected=0       #是否立即关闭断开的连接(如果为1,则断开连接后会自动注销)
IdleTimeLimit=0          #空闲会话时间限制(0为没有限制)
DisconnectedTimeLimit=0  #断开连接的存活时间(0为没有限制)
 
[Logging]
LogFile=./sesman.log     #登陆日志文件
LogLevel=DEBUG           #登陆日志记录等级(级别分别为,core,error,warn,info,debug)
EnableSyslog=0           #是否开启日志
SyslogLevel=DEBUG        #系统日志记录等级
```

## 启动服务

```shell
sudo systemctl enable xrdp
sudo service xrdp start
```

<!-- 

## 通过源码编译安装安装
```shell
# 在github上下载
wget https://github.com/neutrinolabs/xrdp/releases/download/v0.9.19/xrdp-0.9.19.tar.gz
# 解压
tar -xvf xrdp-0.9.19.tar.gz
# 
cd ./xrdp-0.9.19

# 略： 刚发现详细安装过程github的wiki上都有
``` 

-->

## 构建、编译、安装 pulseaudio 模块 实现音频重定向

data：2022-08-15
**获得的构建文件**
根据官方wiki文章[《Build-on-Debian-or-Ubuntu（在 Debian 或 Ubuntu 上构建）》](https://github.com/neutrinolabs/pulseaudio-module-xrdp/wiki/Build-on-Debian-or-Ubuntu)可知，**获得的文件构建**有**两种方式**，

- 一种是从 pulseaudio 服务器构建中提取内部开发文件，或执行脚本 『暂不使用这种方式』
- 另一方种方式是直接下载已经构建好的文件[pulseaudio-headers-xrdb](https://github.com/lnee94/pulseaudio-headers-xrdb/releases/tag/v1.0)并通过命令安装`pkg -i pulseaudio-headers-xrdb.deb`,将会解压到目录`/opt/pulseaudio-headers-xrdb/`

```bash
cd ~
wget https://github.com/lnee94/pulseaudio-headers-xrdb/releases/download/v1.0/pulseaudio-headers-xrdb.deb
pkg -i pulseaudio-headers-xrdb.deb
```

**编译 xrdp pulseaudio 模块**

```bash
# 编译构建 pulseaudio 模块本身需要一些构建工具和包开发工具
sudo apt install build-essential dpkg-dev libpulse-dev git autoconf libtool

cd ~
git clone https://github.com/neutrinolabs/pulseaudio-module-xrdp.git
cd pulseaudio-module-xrdp

./bootstrap && ./configure PULSE_DIR=/opt/pulseaudio-headers-xrdb/
make
```

**安装 xrdp pulseaudio 模块**

```bash
cd pulseaudio-module-xrdp
sudo make install

# 该命令执行后，
# 构建的模块将被安装在正确的目录
# 同时：a script load_pa_modules.sh to load the modules when a session is started. On many systems this script is installed by default in /usr/libexec/pulseaudio-module-xrdp/
# 同时：Install a desktop file pulseaudio-xrdp.desktop which will call the load_pa_modules.sh script when a desktop is loaded. On many systems this script is installed by default in /etc/xdg/autostart
```

**确认是否安装成功**

```
ls $(pkg-config --variable=modlibexecdir libpulse) | grep xrdp
# 输出结果中应当包含
# module-xrdp-sink.so
# module-xrdp-source.so
```
