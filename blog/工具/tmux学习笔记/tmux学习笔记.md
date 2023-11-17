---
title: tmux学习笔记
date: 2022-11-23 03:17:00+08:00
cover: ./cover/default_cover.jpg
tag: [tmux]
category: 工具
# ---article: false--- # 在主页中隐藏
---

# tmux学习笔记

## 安装tmux

```bash
apt-get update
sudo apt install tmux
```

## 创建、列出、连接、删除会话

```bash
# 创建 tmux会话session
tmux new -s your_session_name
# 列出 tmux维持到会话 tmux list-session
tmux ls
# 连接 到一个tmux维持会话 t表示target_session 此外，使用该命令可以支持多个用户同时连接到一个tmux回话上，效果类似屏幕共享，两方都能操作终端，两方都能实时看到操作过程
tmux attach -t your_session_name

# 删除会话
tmux kill-session -t
```

## 关于会话Session

```bash
# 切换会话session
ctrl+b s
# 分离detached会话和终端 （此时session的会话会被tmux维持，即使断开ssh连接，在该session启动的服务也不会停止）
ctrl+b d
# 会话重命名
ctrl+b $
```

## 关于窗口Window

```bash
## 在当前 会话 中 创建create 新窗口
ctrl+b c
## 切换到下next一个窗口
ctrl+b n
## 切换到前previous一个窗口
ctrl+b p
## 切换到指定序号的窗口
ctrl+b <number>
## 在列表中选择窗口
ctrl+b w
## 窗口重命名
ctrl+b ,
## 窗口关闭
ctrl+d
exit
```

## 关于面板Pane

```
# 在当前窗口中创建 竖 分屏面板
ctrl+b %
# 在当前窗口中创建 横 分屏面板
ctrl+b “
# 将当前面板pane拆分为独立窗口window
ctrl+b !
# 关闭当前面板
ctrl+b x
# 全屏/非全屏 切换 当前面板
ctrl+b z
# 查看query当前窗格编号
ctrl+b q

# 切换面板
## 按方向键切换面板
ctrl+b ⬆️
ctrl+b ⬇️
ctrl+b ⬅️
ctrl+b ➡️

## 上一个面板
ctrl+b ;
## 下一个面板
ctrl+b o
## 光标切换面板
ctrl+b <arrow number>
```
