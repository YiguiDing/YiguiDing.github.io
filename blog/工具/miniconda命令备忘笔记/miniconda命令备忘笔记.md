---
# layout: post

title: "miniconda备忘笔记"
date: 2022-01-29 13:52:00+08:00
cover: ./cover/miniconda备忘笔记.png
tag: [笔记, miniconda]
# ---article: false---
category: 工具
---

# miniconda命令备忘笔记

![](./cover/miniconda备忘笔记.png)

- miniconda和anaconda中都包含了conda。
- conda是一款软件管理软件，相当于windows里面的应用商店。
- miniconda 安装包大小约为51.4 Mb，包含conda、python
- anaconda 安装包大小约为462 Mb，包含了数据科学和机器学习要用到的很多软件。

## 安装Miniconda

**下载**

> - <https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/>
> - <https://www.anaconda.com/download/success#miniconda>

**安装**

```bash
# 1.解压安装miniConda
# 2.然后在bash中执行：
$ /d/app/miniconda3/Scripts/conda init bash
$ /d/app/miniconda3/Scripts/conda init powershell
$ /d/app/miniconda3/Scripts/conda init cmd.exe
```

- win10安装方法
  - 官网下载安装包安装
  - 配置环境
    - 自动配置环境(初始化终端Shell 以便往后可以直接运行conda命令)
      - `/Miniconda3安装目录/Miniconda3/Scripts/conda init [shellName]`
    - gitShell手动配置环境
      - 在git安装目录中的etc/profile 添加如下代码
      - `export PATH="$PATH:/Miniconda3安装目录/Miniconda3/Scripts/"`
    - powerShell手动配置环境
      - 添加系统环境变量
      - PATH:`/Miniconda3安装目录/Miniconda3/Scripts/`

## 创建并激活环境

- 重启shell
- 创建一个名为d2l的环境 `conda create --name d2l python=3.8 -y`
- 查看现有环境 `conda env list`
- 激活 d2l 环境`conda activate d2l`

## 环境

- 创建环境
  - conda create [--name|-n] 环境名
- 列出环境
  - conda env list
- 删除环境
  - conda env remove --name 环境名
- 激活环境
  - conda activate 环境名

## 软件

- 安装软件包
  - conda install package_name
- 切换默认channel安装软件包
  - conda install -c channel_name package_name

## 源

- 默认的conda channel是defaults，但其代码包不全。
- conda-forge
  - 该channel有强大的社区支持，提供了大多数安装包，且更新及时
- 创建.condarc文件。这是conda channel的配置文件，在安装conda之后并不会生成这个文件。在terminal中使用conda config指令可以创建该文件
  - `conda config`
- 查看现在的channel状态和优先级
  - `conda config --get channels`
- 添加conda-forge channel并设置为最高优先级
  - `conda config --add channels conda-forge`
- 恢复默认配置（删除家目录的配置文件）
  - `rm ~/.condarc`
- 清华源
  - `https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/`
  - `conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/`
  - `conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/`
