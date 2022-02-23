
---
layout: post
title: "jupyter备忘笔记"
date: 2022-01-29 20:09:00 +0800
cover: /images/article/jupyter.png
tags: [笔记,jupyter]
categories: 笔记
---
# jupyter备忘笔记

## c++ jupyter环境的安装
1. 关闭系统代理否则可能无法创建环境
1. 用conda创建环境 `conda create --name cPlusPlus`
1. 查看现有环境 `conda env list`
1. 激活 cPlusPlus 环境`conda activate cPlusPlus`
1. 先安装jupyter(再安装C++解析器)`conda install jupyter`
1. 安装C++ 解析器xeus-cling(现仅支持mac linux)
    `conda install -c conda-forge xeus-cling`
    * 如果在ubuntu20中安装时报错提示缺失zlib（zconf.h zlib.h libz.a zlib.pc）
        * 安装缺失zlib
        `conda install zlib` 
    * 如果在jupyter中提示内核无法启动，查询xeus-cling的github文档得知需安装如下依赖
        * xeus-cling的依赖：
            `xeus xtl cling pugixml cxxopts nlohmann_json`
        * 安装当前版本xeus-cling要求依赖的指定版本：
            `conda install cmake "xeus>=2.0,<3.0" cling=0.8 clangdev=5.0.0 llvmdev=5 "nlohmann_json>=3.9.1,<3.10" "cppzmq>=4.6.0,<5" "xtl>=0.7,<0.8" pugixml "cxxopts>=2.1.1,<2.2" -c conda-forge`
1. 启动jupyter:
    `jupyter notebook`

## 允许远程访问
1. 生成配置文件 `~/.jupyter/jupyter_notebook_config.py `
    * `jupyter notebook --generate-config`
1. 生成密码hash值
    * 方法1
        * 用命令生成密码hash值`jupyter notebook password`
        * 打开 jupyter_notebook_config.json提取生成的sha1值
    * 方法2
        * 在pythonShell中输入`from notebook.auth import passwd; passwd();`按提示输入两次密码后将返回密码hash值
1. 修改jupyter_notebook_config.py
    * c.NotebookApp.password=由密码生成的sha1值 
    * c.NotebookApp.ip='*'       #在所有的网卡接口上开启服务。同"0.0.0.0"
    * c.NotebookApp.port =8888 #可自行指定一个端口, 访问时使用该端口7777
    * c.NotebookApp.allow_remote_access = True  #允许远程

## jupyter无法导出其他格式的问题
* pip uninstall nbconvert
* pip install nbconvert

##### tips:
* conda-forge是可以安装软件包的附加渠道
* -c或--channel表示切换频道
* conda install -c some-channel packagename
