---
title: ubuntu22.04配置过程命令记录
date: 2022-08-12 11:54:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [ubuntu22]
# ---article: false---
category: 笔记
---


# ubuntu22.04配置过程命令记录

win10关了开机自启的应用 什么程序都没运行 内存竟然吃了近5G CPU吹出来的风热的要死 卸了一堆应用关了一堆系统服务和应用服务内存仍然要吃2.4G 反观最新版的ubuntu22.04 启动至图形界面 只吃了1.5g内存 决定安装使用 在此记录下配置过程 以备不时之需

## 目录

- [ubuntu22.04配置过程命令记录](#ubuntu2204配置过程命令记录)
  - [目录](#目录)
  - [安装系统](#安装系统)
    - [空间分配](#空间分配)
  - [换源](#换源)
  - [安装软件](#安装软件)
    - [apt-get常用命令](#apt-get常用命令)
    - [dpkg常用命令](#dpkg常用命令)
  - [配置服务](#配置服务)
  - [防火墙](#防火墙)
  - [权限管理](#权限管理)
    - [sudo命令提示用户不在sudoers中的问题的解决](#sudo命令提示用户不在sudoers中的问题的解决)
  - [挂载NTFS分区](#挂载ntfs分区)
    - [解决不能写入文件系统的问题](#解决不能写入文件系统的问题)
  - [配置sshd](#配置sshd)
  - [配置合上笔记本后不休眠](#配置合上笔记本后不休眠)
  - [使用`./configure`编译文件时依赖报错问题的解决方法](#使用configure编译文件时依赖报错问题的解决方法)
  - [ubuntu安装xfce4并配置xrdp过程记录](#ubuntu安装xfce4并配置xrdp过程记录)
    - [安装及配置](#安装及配置)
    - [在xfce中不能打开终端的解决](#在xfce中不能打开终端的解决)
  - [ubuntu安装gnome并配置xrdp过程记录](#ubuntu安装gnome并配置xrdp过程记录)
    - [安装及配置](#安装及配置-1)
    - [解决“色彩管理设备” 弹窗](#解决色彩管理设备-弹窗)
    - [解决“刷新系统软件源需要认证” / “refresh the system repositories” 弹窗](#解决刷新系统软件源需要认证--refresh-the-system-repositories-弹窗)
    - [XRDP远程桌面连接Ubuntu后没有 Dock、桌面图标 背后的程序们](#xrdp远程桌面连接ubuntu后没有-dock桌面图标-背后的程序们)
    - [使用默认桌面配置](#使用默认桌面配置)

## 安装系统

### 空间分配

- `/` **根目录** 10-15-20g 足以 此处分配剩余的所有空间
  - `/home` **家目录** 应当分配剩余的所有空间 此处未单独分配
  - `/var` **存放数据库或程序输出日志的目录** 应当视情况而定 此处未单独分配
  - `/boot` **引导分区** 512MB 可有可无 但最好单独分区 否则系统无法引导就只能重装系统了
- `swap` **交换分区** 一倍内存大小足矣
- `efi` **efi系统分区** 512MB

## 换源

**备份**

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

**编辑创建新文件**

```bash
sudo gedit /etc/apt/sources.list
```

**写入文件**

```bash
# 清华源
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
```

**更新软件包列表（Source）**

```bash
apt-get update
    # 其他操作：
    # 更新已安装的软件包 (谨慎使用，会导致linux内核升级到最新版本)
    # apt-get upgrade
    # 更新已安装的软件包（识别并处理依赖关系的改变）
    # apt-get dist-upgrade
```

## 安装软件

**常用软件包名称**

- python3.10
- python3-pip

### apt-get常用命令

```bash
# 普通安装
apt-get install PackageName
# 安装指定包的指定版本
apt-get install PackageName=VersionName
# 重新安装
apt-get --reinstall install PackageName
```

```bash
# 修复依赖关系
apt-get -f install
```

```bash
# 下载软件包的源码
apt-get source PackageName
# 安装源码包所需要的编译环境
apt-get build-dep PackageName
```

```bash
# 删除软件包, 保留配置文件
apt-get remove PackageName
# 删除软件包, 同时删除配置文件
apt-get --purge remove PackageName
```

```bash
# 清除 已下载的软件包 和 旧软件包
apt-get clean && apt-get autoclean
```

```bash
# 搜索软件包
apt-cache search PackageName
```

```bash
# 获取软件包的相关信息, 如说明、大小、版本等
apt-cache show PackageName
```

```bash
# 查看该软件包需要哪些依赖包
apt-cache depends PackageName
# 查看该软件包被哪些包依赖
apt-cache rdepends PackageName
```

```bash
# 检查是否有损坏的依赖
apt-get check PackageName
```

### dpkg常用命令

- dpkg 是Debian Package的简写，是为Debian 专门开发的套件管理系统，方便软件的安装、更新及移除。
- 所有源自Debian的Linux发行版都使用dpkg，如Ubuntu

```bash
# 安装本地Debian软件包
dpkg -i <package.deb>
# 列出包内容
dpkg -c <package.deb>
# 提取包裹信息(可以查看包的正式名称，用于卸载)
dpkg -I <package.deb>
```

```bash
# 列出已安装的所有软件包
dpkg -l
# 列出安装的所有文件清单
dpkg -L <package>
```

```bash
# 移除一个已安装的包裹 并删掉数据和可执行文件
dpkg -r <package>
# 完全清除一个已安装的包裹 并删掉数据和可执行文件 并删除所有的配置文件
dpkg -P <package>
```

```bash
# 显示已安装包裹的信息
dpkg -s <package>
# 重新配制一个已经安装的包裹，如果它使用的是 debconf (debconf 为包裹安装提供了一个统一的配制界面)
dpkg-reconfigure <package>
```

## 配置服务

```bash
# 编辑配置为系统服务
vim /usr/lib/systemd/system/XXXX.service
#########################################
[Unit]
Description=XXXX
After=network.target
[Service]
TimeoutStartSec=1
ExecStart=/usr/local/bin/XXXX -c /etc/frp/XXXX.ini
ExecStop=/bin/kill $MAINPID
[Install]
WantedBy=multi-user.target
###########################################

# 启动 frp 并设置开机启动
systemctl enable XXXX
systemctl start XXXX
systemctl status XXXX
 
# 部分服务器上,可以需要加 .service 后缀来操作,即:
systemctl enable XXXX.service
systemctl start XXXX.service
systemctl status XXXX.service
```

## 防火墙

```bash
# 查看防火墙状态
sudo ufw status
# 开启防火墙
sudo ufw enable
# 关闭防火墙
sudo ufw disable
```

## 权限管理

### sudo命令提示用户不在sudoers中的问题的解决

根据文件`/etc/sudoers`内容可知,只需要将指定用户添加到sudo组,指定的用户就能得到执行sudo命令的权限

```txt
# root 用户拥有所有权限 可在此添加一行给某个用户root权限
root    ALL=(ALL:ALL) ALL

# admin 组的成员拥有root权限
%admin ALL=(ALL) ALL

# sudo 组的成员拥有执行任何命令的权限
%sudo   ALL=(ALL:ALL) ALL
```

只需要将用户添加到sudo组(添加为附加组)

```bash
usermod 你的用户名 -G sudo
# 修改用户组后可能需重启生效
```

## 挂载NTFS分区

**查看所有磁盘分区情况**

```bash
fdisk -l
```

**查看磁盘分区挂载情况**

```bash
df -h
```

**查看目标分区的UUID**

```bash
sudo blkid |grep sdb2
```

**查看ubuntu是否安装了ntfs-3g软件包**

```bash
dpkg -l | grep ntfs
# 没有则安装
apt-get install ntfs-3g
```

**临时挂载磁盘**

```bash
mount -t ntfs-3g -o umask=022 /dev/sdc5 /mnt/E/
```

**卸载挂载的磁盘**

```bash
umount /mnt/E/
```

**配置开机自动挂载磁盘**

```bash
sudo vim /etc/fstab
```

**配置方法1：**

```bash
# 挂载的分区使用默认的权限，也就是属于用户root 属于root组
UUID=EA06BA3106B9FF1F /mnt/E/ ntfs-3g defaults 0 2
```

**配置方法2：**

- 使用`UUID`的好处是可以保证在重新分区后仍然能够唯一定位一个分区 若使用`/dev/sdb3`的方式则会在分区数量改变后发生错误
- `rw`表示读写 `dmask` 是目录权限掩码 `fmask` 是文件权限掩码 `uid` 和 `gid` 可分别通过 `id -u` `id -g`获取
- `<dump>` 为0时 `dump` 工具不会对其备份,为 1 时则会
- `<pass>` 为0时 `fsck` 工具不会对其检查,为 1 2 时则会,根目录应当获得最高的优先权 1, 其它所有需要被检查的设备设置为 2

```bash
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
UUID=EA06BA3106B9FF1F /mnt/E/ ntfs-3g rw,uid=1000,gid=1000,dmask=022,fmask=111 0 2
```

**挂载测试：检查fstab有无错误**

```bash
mount -a
```

**创建软连接到桌面**

```bash
ln -s /mnt/D ~/Desktop/D
ln -s /mnt/E ~/Desktop/E
```

### 解决不能写入文件系统的问题

**问题:** 无法写入文件系统,且umount后,重新执行`mount -a`时,报错 `Could not mount read-write, trying read-only`

**解决:** 该报错可能是由于文件系统错误导致的,须用ntfsfix命令修复之(ntfsfix包含在ntfs-3g中)

```
sudo ntfsfix /dev/sda4
sudo umount /mnt/D/
sudo umount /mnt/E/
```

## 配置sshd

**安装**

```
apt install openssh-server
```

**配置启动服务**

```
# 一条命令启动ssh和sshd
systemctl enable ssh
```

## 配置合上笔记本后不休眠

**编辑文件/etc/systemd/logind.conf**

```
HandlePowerKey: 按下电源键后的行为，默认poweroff
HandleSleepKey: 按下挂起键后的行为，默认suspend
HandleHibernateKey: 按下休眠键后的行为，默认hibernate
HandleLidSwitch: 合上笔记本盖后的行为，默认suspend（改为ignore即可）
```

**配置完毕后需重启服务**

```
# 如果执行下列代码后黑屏则需重启电脑
sudo service systemd-logind restart
```

## 使用`./configure`编译文件时依赖报错问题的解决方法

**故障重现**

```bash
./configure
# 报错信息
# checking for Qt5Svg >= 5.15.2... no
# configure: error: Package requirements (Qt5Svg >= 5.15.2) were not met:
# you may set the environment variables Qt5Svg_CFLAGS
# and Qt5Svg_LIBS to avoid the need to call pkg-config.
```

```
大概意思就是:提示缺少依赖Qt5Svg,并提示应当指定环境变量 Qt5Svg_CFLAGS Qt5Svg_LIBS
```

**查找相关库所在的包的包名**

```bash
sudo apt-cache search Qt5Svg
# 输出: 
# libqt5svg5 - Qt 5 SVG module
# libqt5svg5-dev - Qt 5 SVG module development files
```

**安装包名**

```bash
sudo apt-get install libqt5svg5-dev
```

**查找包的安装路径**

```bash
dpkg -L libqt5svg5-dev
# 输出信息
# /.
# /usr
# /usr/include
# /usr/include/x86_64-linux-gnu
# /usr/include/x86_64-linux-gnu/qt5
# /usr/include/x86_64-linux-gnu/qt5/QtSvg
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/QGraphicsSvgItem
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/QSvgGenerator
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/QSvgRenderer
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/QSvgWidget
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/QtSvg
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/QtSvgDepends
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/QtSvgVersion
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/qgraphicssvgitem.h
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/qsvggenerator.h
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/qsvgrenderer.h
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/qsvgwidget.h
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/qtsvgglobal.h
# /usr/include/x86_64-linux-gnu/qt5/QtSvg/qtsvgversion.h
# /usr/lib
# /usr/lib/x86_64-linux-gnu
# /usr/lib/x86_64-linux-gnu/cmake
# /usr/lib/x86_64-linux-gnu/cmake/Qt5Gui
# /usr/lib/x86_64-linux-gnu/cmake/Qt5Gui/Qt5Gui_QSvgIconPlugin.cmake
# /usr/lib/x86_64-linux-gnu/cmake/Qt5Gui/Qt5Gui_QSvgPlugin.cmake
# /usr/lib/x86_64-linux-gnu/cmake/Qt5Svg
# /usr/lib/x86_64-linux-gnu/cmake/Qt5Svg/Qt5SvgConfig.cmake
# /usr/lib/x86_64-linux-gnu/cmake/Qt5Svg/Qt5SvgConfigVersion.cmake
# /usr/lib/x86_64-linux-gnu/libQt5Svg.prl
# /usr/lib/x86_64-linux-gnu/pkgconfig
# /usr/lib/x86_64-linux-gnu/pkgconfig/Qt5Svg.pc
# /usr/lib/x86_64-linux-gnu/qt5
# /usr/lib/x86_64-linux-gnu/qt5/mkspecs
# /usr/lib/x86_64-linux-gnu/qt5/mkspecs/modules
# /usr/lib/x86_64-linux-gnu/qt5/mkspecs/modules/qt_lib_svg.pri
# /usr/share
# /usr/share/doc
# /usr/share/doc/libqt5svg5-dev
# /usr/share/doc/libqt5svg5-dev/copyright
# /usr/lib/x86_64-linux-gnu/libQt5Svg.so 
# /usr/share/doc/libqt5svg5-dev/changelog.Debian.gz
```

**设定环境变量**
根据上一步的输出可以推测出

- **头文件所在目录(XXX.h所在目录)** 和
- **库文件所在目录(XXX.so所在目录)**

```bash
export Qt5Svg_CFLAGS=/usr/include/x86_64-linux-gnu/qt5/QtSvg
export Qt5Svg_LIBS=/usr/lib/x86_64-linux-gnu
```

**重新执行**

```bash
./configure
```

## ubuntu安装xfce4并配置xrdp过程记录

当前ubuntu22.04的图像界面是gnome 而xrdp对gnome支持并不好 所以安装xfce4的图像界面

### 安装及配置

**安装xrdp**

```
sudo apt-get install xrdp
```

**安装xfce4**

```
sudo apt-get install xfce4
```

**配置xrdp开机自启动**

```
# xrdp xrdp的守护进程
sudo service xrdp restart
sudo systemctl enable xrdp
# xrdp-sesman 会话管理的守护进程
sudo service xrdp-sesman restart
sudo systemctl enable xrdp-sesman
```

**配置 `xrdp` 的 `/etc/xrdp/startwm.sh`**

```
# 注释掉原先配置
# test -x /etc/X11/Xsession && exec /etc/X11/Xsession
# exec /bin/sh /etc/X11/Xsession

# 添加新配置用于启动xfce4
startxfce4
```

**由于xrdp远程连接创建后，对登录使用的账户不知道该启动哪个桌面Session会话导致闪退,需手动创建**

```
# vi ~/.xsession
# xfce4桌面
echo xfce4-session > ~/.xsession
```

### 在xfce中不能打开终端的解决

**安装xfce4-terminal**

```
sudo apt install xfce4-terminal
```

**修改默认xfce4的默认terminal**  
鼠标右键->`applications`->运行程序->输入：`xfce4-settings-manager`-> 找到:`默认应用程序` -> 工具 -> 修改默认terminal为**xfce终端**

## ubuntu安装gnome并配置xrdp过程记录

### 安装及配置

**重新安装gnome使其自动解决依赖问题自动安装未安装的工具插件**

```
sudo apt-get install gnome
```

**安装xrdp**

```
sudo apt-get install xrdp
```

**配置xrdp开机自启动**

```
# xrdp xrdp的守护进程
sudo service xrdp restart
sudo systemctl enable xrdp
# xrdp-sesman 会话管理的守护进程
sudo service xrdp-sesman restart
sudo systemctl enable xrdp-sesman
```

**配置 `xrdp` 的 `/etc/xrdp/startwm.sh`**

```
# 维持原先配置
test -x /etc/X11/Xsession && exec /etc/X11/Xsession
exec /bin/sh /etc/X11/Xsession

```

**由于xrdp远程连接创建后，对登录使用的账户不知道该启动哪个桌面Session会话导致闪退,需手动创建**

```
# vi ~/.xsession
# Unity 桌面(老版本)
echo unity> ~/.xsession
 
# ubuntu-desktop 原始桌面
echo gnome-session > ~/.xsession
```

### 解决“色彩管理设备” 弹窗

**创建文件 `/etc/polkit-1/localauthority/50-local.d/45-allow-colord.pkla`**

**并写入内容：**

```
[Allow Colord all Users]
Identity=unix-user:*
Action=org.freedesktop.color-manager.create-device;org.freedesktop.color-manager.create-profile;org.freedesktop.color-manager.delete-device;org.freedesktop.color-manager.delete-profile;org.freedesktop.color-manager.modify-device;org.freedesktop.color-manager.modify-profile
ResultAny=no
ResultInactive=no
ResultActive=yes
```

### 解决“刷新系统软件源需要认证” / “refresh the system repositories” 弹窗

**创建文件 `/etc/polkit-1/localauthority/50-local.d/46-allow-packagekit.pkla`**

**并写入内容：**

```
[Allow Refresh Repository all Users]
Identity=unix-user:*
Action=org.freedesktop.packagekit.system-sources-refresh
ResultAny=no
ResultInactive=no
ResultActive=yes
```

### XRDP远程桌面连接Ubuntu后没有 Dock、桌面图标 背后的程序们

各个扩展程序可在如下目录中看到
cd /usr/share/gnome-shell/extensions/

**安装并执行**

```
sudo apt-get install gnome-extensions-app 
gnome-extensions-app 
# 然后弹出的窗口中开启dock
```

### 使用默认桌面配置

**添加配置文件`~/.xsessionrc`**

```bash
export GNOME_SHELL_SESSION_MODE=ubuntu
export XDG_CURRENT_DESKTOP=ubuntu:GNOME
export XDG_CONFIG_DIRS=/etc/xdg/xdg-ubuntu:/etc/xdg
```
