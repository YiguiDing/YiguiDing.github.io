---
title: Alpine Linux(iSH and UTM)配置过程记录
date: 2022-08-04T17:59:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [iSH,Alpine,Linux]
category: 笔记
# ---article: false---
---


# Alpine Linux(iSH and UTM)配置过程记录

## 目录

- [Alpine Linux(iSH and UTM)配置过程记录](#alpine-linuxish-and-utm配置过程记录)
  - [目录](#目录)
  - [一、换源配置](#一换源配置)
  - [二、安装软件](#二安装软件)
  - [三、配置服务管理openrc](#三配置服务管理openrc)
  - [配置开启ssh服务](#配置开启ssh服务)
  - [实现ish后台运行配置](#实现ish后台运行配置)
  - [尝试安装vsCode网页版](#尝试安装vscode网页版)
    - [尝试1：在iSH中尝试通过npm安装（配置失败）](#尝试1在ish中尝试通过npm安装配置失败)
    - [尝试2：在iSH中尝试通过docker安装（配置失败）](#尝试2在ish中尝试通过docker安装配置失败)
    - [尝试3：在UTM中安装Alpine3.16.1再尝试使用npm安装（配置失败）](#尝试3在utm中安装alpine3161再尝试使用npm安装配置失败)
    - [尝试4：在UTM中安装Alpine3.16.1再尝试使用yarn安装（配置失败）](#尝试4在utm中安装alpine3161再尝试使用yarn安装配置失败)
    - [尝试5：在UTM中安装Alpine3.16.1再尝试使用release版本安装（配置失败）](#尝试5在utm中安装alpine3161再尝试使用release版本安装配置失败)
    - [尝试6：在UTM中安装Alpine3.16.1并开启JIT再尝试使用release版本安装（成功）](#尝试6在utm中安装alpine3161并开启jit再尝试使用release版本安装成功)

## 一、换源配置

**1.编辑文件**

```bash
vi /etc/apk/repositories
```

**2.添加内容 注意版本号要和原来的一致**

```bash
# 任选一组
# 阿里云源 实测可以使用
http://mirrors.aliyun.com/alpine/v3.12/main
http://mirrors.aliyun.com/alpine/v3.12/community
# 中科大源 实测可以使用
http://mirrors.ustc.edu.cn/alpine/v3.12/main
http://mirrors.ustc.edu.cn/alpine/v3.12/community
# 清华源 实测可以使用
http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/main
http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/community
```

**3.更新**

```bash
apk update
```

**4.另一种一步到位的方法**

```bash
# 配置
cat >> .profile << EOF
echo 'http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.14/main' > /etc/apk/repositories
echo 'http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.14/community' >> /etc/apk/repositories
EOF
# 执行
source .profile
# 应用修改
apk update
```

## 二、安装软件

```bash
apk add openrc
apk add curl
apk add npm
apk add git
apk add nss #for https
apk add openssh
```

## 三、配置服务管理openrc

**1.安装openrc**

```bash
apk add openrc
# 注意 要先安装openrc 再安装要启动的服务比如docker 否则提示服务不存在
```

**2.编辑/etc/inittab 将`::sysinit:/sbin/openrc sysinit`中的`sysinit`删除**

```bash
vi /etc/inittab
```

**3.重启ish**

**4.添加服务**

```bash
rc-update add sshd
```

**5.删除服务**

```bash
rc-update del sshd
```

**6.启动服务**

```bash
rc-service sshd start
```

**7.暂停服务**

```bash
rc-service sshd stop
```

**8.查询服务状态**

```bash
rc-status -a
```

## 配置开启ssh服务

**1. 安装ssh**

```bash
apk add openssh
```

**2.为本机生成SSH主机秘钥**

```bash
ssh-keygen -A
```

**3.临时启动守护进程**

```bash
/usr/sbin/sshd
```

**4.将守护进程添加到开机启动**

```bash
rc-update add sshd
# 移除开机自启服务：rc-update del sshd
```

**5.启动服务**

```bash
rc-service sshd start
# 暂停服务：rc-service sshd stop
```

**6.配置sshd**

```bash
cat >> /etc/ssh/sshd_config  << EOF
# 允许root登录 禁止密码登录
# PermitRootLogin prohibit-password
# 允许root登录
PermitRootLogin yes
# 允许公钥登录
PubkeyAuthentication yes
# 允许密码登录
PasswordAuthentication yes                                       
# 不允许空密码
PermitEmptyPasswords no
EOF
```

## 实现ish后台运行配置

**1.关键代码**

```bash
# 说明：ish是ios系统上的应用程序，为使iSH进程能够支持长期后台运行而不被杀死，需要不断获取手机位置信息
cat /dev/location > /dev/null &
```

**2.配置**

```bash
echo 'cat /dev/location > /dev/null &' >> .profile
cat .profile # 检查配置是否成功
```

## 尝试安装vsCode网页版

### 尝试1：在iSH中尝试通过npm安装（配置失败）

**先要安装`npm`和`nodejs`**
但由于npm软件最新版使用了一些ish没有实现的指令 导致运行npm会提示非法指令 所以只能安装低版本

**1.修改 /etc/apk/repositories 将版本改为3.12版本**

```bash
# 修改
cat >> .profile << EOF
echo 'http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/main' > /etc/apk/repositories
echo 'http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/community' >> /etc/apk/repositories
EOF
# 更新
apk update
```

**2.安装**

```bash
apk add nodejs=12.22.12-r0 npm=12.22.12-r0
```

**3.npm换为国内源**

```bash
npm config set registry https://registry.npmmirror.com
# 或者安装yarn: npm install -g yarn
```

**4.然后安装code-server**

```bash
npm install -g code-server --unsafe-perm
# 然后在这一步卡死了
# ish1.2.3（build298） 卡在了yarn
```

### 尝试2：在iSH中尝试通过docker安装（配置失败）

**1.安装docker和compose**

```bash
apk add docker
apk add docker-compose
# compose可以根据yml文件中的配置来启动docker
```

**2.下载coder**

```bash
git clone https://github.com/coder/coder.git --depth=1
```

**3.临时启动守护进程测试**

```bash
rc-service docker start
# 报错并卡死：
# 原因：ish没有实现filesystems文件
# 报错提示：grep: /proc/filesystems: No such file
# 如果直接执行： rc-update add sshd 会导致卡死
```

**4.启动**

```bash
CODER_ACCESS_URL=http://localhost:7080
docker-compose up
```

### 尝试3：在UTM中安装Alpine3.16.1再尝试使用npm安装（配置失败）

安装UTM 在UTM中安装Alpine3.16.1

```bash
# 安装时最好设置好密码
# 并且在提示：# PermitRootLogin prohibit-password ？
# 输入yes
```

安装nodejs npm

```bash
# 安装过程依赖python
apk add python3
# code-server要求node16 ： code-server@4.5.1: wanted: {"node":"16"} (current: {"node":"12.22.12","npm":"6.14.16"})
apk add nodejs=16.16.0-r0 npm
npm install -g code-server --unsafe-perm
# 依旧报错 ：  gyp: Undefined variable module_name in binding.gyp while trying to load binding.gyp
# 还是argon2的问题
```

尝试1、3出错原因和这个类似：[#5184](https://github.com/coder/code-server/issues/5184)

### 尝试4：在UTM中安装Alpine3.16.1再尝试使用yarn安装（配置失败）

该方法根据自issue：[#5174](https://github.com/coder/code-server/issues/5174)

```bash
npm install -g yarn
sudo yarn global add code-server
```

**绷不住了！！！ 报错超时，好像是虚拟机的问题！！！**

```txt
ipad:~# npm install yarn -g
added 1 package in 1m
ipad:~# sudo yarn global add code-server
-ash: sudo: not found
ipad:~# yarn global add code-server
yarn global v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "code-server > @coder/logger@1.1.16" has unmet peer dependency "@google-cloud/logging@^4.5.2".
[4/4] Building fresh packages...
success Installed "code-server@4.5.1" with binaries:
      - code-server
Done in 893.96s.
ipad:~# code-server 
[2022-08-06T18:56:50.068Z] info  Wrote default config file to ~/.config/code-server/config.yaml
[2022-08-06T18:57:00.929Z] error timed out
```

### 尝试5：在UTM中安装Alpine3.16.1再尝试使用release版本安装（配置失败）

既然在UTM安装的是64bit版本的系统 为什么不直接使用release版本？？？

```bash
# 下载
wget https://github.com/coder/code-server/releases/download/v4.5.1/code-server-4.5.1-linux-amd64.tar.gz
# 解压
tar -xvf ./code-server-4.5.1-linux-amd64

cd ./code-server-4.5.1-linux-amd64
# 执行，报错：./lib/node not fond
./code-server
# 安装node
apk add node 
# 查看安装目录
which node
# 建立软连接
ln -s /usr/bin/node ./lib/node

# 再次执行
./code-server
# 依旧报错
# [2022-08-06T18:57:00.929Z] error timed out

# 查文档得知要求：glibc >= 2.17 and glibcxx >= v3.4.18
# 而
#alpine linux追求系统小，默认使用了uclibc，但用glibc编译的程序无法直接在上面运行了。
#需要自行安装第三方的alpine glibc，然后就可以无障碍运行其他机器编译的依赖glibc的程序了。


# 查了issue #1706 发现code-server 对于glibc glibcxx已经静态编译了 不需要系统自带静态链接库了


```

### 尝试6：在UTM中安装Alpine3.16.1并开启JIT再尝试使用release版本安装（成功）

方法同上，UTM使用JIT（jitterbug）启动，终于可以了！！！原来是运行速度的问题

完整过程：

```bash
# 下载
wget https://github.com/coder/code-server/releases/download/v4.5.1/code-server-4.5.1-linux-amd64.tar.gz
# 解压
tar -xvf ./code-server-4.5.1-linux-amd64
# 递归创建文件夹
mkdir -p ~/.local/lib ~/.local/bin
# 移动并改名
mv ./code-server-4.5.1-linux-amd64 ~/.local/lib/code-server-4.5.1/
# 建立软连接
ln -s ~/.local/lib/code-server-4.5.1/bin/code-server ~/.local/bin/code-server
# 添加到环境变量
PATH="/root/.local/bin:$PATH"
# 运行
code-server 



# 如果提示-ash: node: not found 则为node添加软连接
ln -s /usr/bin/node ~/.local/lib/code-server-4.5.1/lib/node
# 原因：
# 使用命令：ldd ~/.local/lib/code-server-4.5.1/lib/node
# 可以发现缺少一些动态链接库，因为alpine是阉割版的linux
# 所以直接apk add nodejs
# 然后删除原文件
# rm ~/.local/lib/code-server-4.5.1/lib/node
# which node 查看刚安装的node的所在目录
# 然后添加软连接
ln -s /usr/bin/node ~/.local/lib/code-server-4.5.1/lib/node
```

**编辑配置文件修改密码**

```bash
cat > ~/.config/code-server/config.yaml <<EOF
bind-addr: 0.0.0.0:80
auth: password
password: *****数字加英文*****
cert: false
EOF
```

**配置自动添加环境变量**

```
vi .profile
PATH="/root/.local/bin:$PATH"
```

**配置开机自启服务（暂时没有解决输出重定向的问题）**

```bash
vim /etc/init.d/vscode
```

```bash
#!/sbin/openrc-run
name="vscode"
command="/root/.local/bin/code-server > /dev/null & "
#command_background="yes"
depend() {
        need net
        after sshd
}
```

```bash
# 修改权限 否则提示* rc-service: Permission denied
chmod 755 /etc/init.d/vscode
```

```bash
管理服务
列出所有可用服务
rc-service --list | grep vscode

启动/停止/重启 已有服务
rc-service 服务名 start/stop/restart
或
/etc/init.d/服务名 start/stop/restart

添加到开机自启动
rc-update add vscode
```
