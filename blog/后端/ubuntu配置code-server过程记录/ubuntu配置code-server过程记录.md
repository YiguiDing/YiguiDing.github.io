---
title: ubuntu配置code-server过程记录
date: 2022-08-09 16:17:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [code-server,ubuntu]
# ---article: false---
category: 笔记
---


# ubuntu配置code-server过程记录

**完整过程**

```bash
# 下载
wget https://github.com/coder/code-server/releases/download/v4.5.1/code-server-4.5.1-linux-amd64.tar.gz
## 或者在pc端下载好了之后通过sftp传输
# 解压
tar -xvf ./code-server-4.5.1-linux-amd64.tar.gz
# 递归创建文件夹
mkdir -p ~/.local/lib ~/.local/bin
# 移动并改名
mv ./code-server-4.5.1-linux-amd64 ~/.local/lib/code-server-4.5.1/
# 建立软连接
ln -s ~/.local/lib/code-server-4.5.1/bin/code-server ~/.local/bin/code-server
# 添加到环境变量
PATH="~/.local/bin:$PATH"
# 运行
code-server 
```

**编辑配置文件修改密码**

```bash
cat > ~/.config/code-server/config.yaml <<EOF
bind-addr: 0.0.0.0:8080
auth: password
password: *****数字加英文*****
cert: false
EOF
```

**配置自动添加环境变量**

```bash
vim  .profile
PATH="~/.local/bin:$PATH"
```

**配置服务**
**若是通过`dpkg -i code-server-4.5.1-linux-amd64.deb` 这种安装方式安装的,服务配置文件`code-server.service`会被自动配置好,只需要执行:**

```bash
# 启动服务
systemctl start code-server@用户名.service
# 添加到开机自启动
systemctl enable code-server@用户名.service
```
