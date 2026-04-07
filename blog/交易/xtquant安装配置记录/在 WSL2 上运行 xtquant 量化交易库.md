---
title: 在WSL环境下安装xtquant量化交易库存在问题的解决方法
date: 2026-03-14T00:23:33
# article: true 
# index: false
---

# 在 WSL2 上运行 xtquant 量化交易库的完整指南(xtquant linux 版本获取)

> **发布日期：** 2026-03-14  
> **标签：** WSL2, xtquant, 量化交易, Python, Linux

---

## 问题背景

[xtquant](http://dict.thinktrader.net/nativeApi/start_now.html) 是国金证券 QMT 交易系统的 Python SDK，广泛用于量化交易。但官方存在一个"坑"：

- **pip 安装的版本** 和 **官方文档提供的下载** 都是 Windows 版本
- 官方声称 Linux 版本仅对 **投研专业版用户**（9780 元/年）开放
- 核心动态库是 `.pyd` 文件（Windows 专属），Linux 无法直接运行

```
xtdata.py -> xtconn.py -> xtdatacenter.py -> datacenter.cp311-win_amd64.pyd
xttrader.py -> xtpythonclient.cp311-win_amd64.pyd
```

---

## 解决方案对比

### 方法零：Windows 代理服务 

在 Windows 上启动代理服务供 Linux 调用。

**缺点：** 太麻烦，需要维护额外的服务层。

---

### 方法一：WSL 调用 Windows Python 

利用 WSL2 与 Windows 的互操作特性，直接调用 Windows 上的 Python 执行。

#### 配置步骤

```bash
# 1. 配置 WSL 互操作
cat /etc/wsl.conf
[boot]
systemd=true

[interop]
enabled=true
appendWindowsPath=false

[automount]
enabled=false
mountFsTab=true

# 2. 挂载 Windows 的 Conda 环境
mkdir ~/miniconda-win
mount -t drvfs D:/Applications/miniconda3 ~/miniconda-win/

# 3. 测试调用
~/miniconda-win/envs/trade311/python.exe --version
# Python 3.11.13
```

#### 缺点

- 本质上还是在 Windows 上执行
- 可能通过 Python 访问 C 盘文件
- **隔离失效，存在潜在安全问题**

---

### 方法二：直接获取 Linux 版本 （推荐）

#### 发现过程

官方网站下载中心的普通版下载链接：
```
https://download.thinkfunds.cn/XtItClient_x64_rzrk_itclient_1709_sp3_gaodun_1.0.1.10889.zip
```

尝试访问根目录发现 **NGINX 静态文件服务器存在目录遍历漏洞**（无需鉴权）：

```
https://download.thinkfunds.cn/
```

目录内容显示存在 Linux 版本：
```
xtquant_240920_cp36m-37m-38-39-310-311_linux-gnu_x86_64.zip
```

#### 安装步骤

```bash
# 1. 下载 Linux 版本
wget https://download.thinkfunds.cn/xtquant_240920_cp36m-37m-38-39-310-311_linux-gnu_x86_64.zip

# 2. 解压到项目目录
mkdir -p ~/projects/pybroker/lib/xtquant/
unzip xtquant_240920_cp36m-37m-38-39-310-311_linux-gnu_x86_64.zip -d lib/xtquant/

# 3. 测试运行（需要指定库路径）
LD_LIBRARY_PATH=lib/xtquant/.libs/ python lib/data.py
```

#### 解决依赖问题

首次运行报错：
```
ImportError: libaprutil-1.so.0: cannot open shared object file: No such file or directory
```

xtquant 包内自带 `.libs` 目录包含所需动态库，通过 `LD_LIBRARY_PATH` 指定即可。

#### 永久配置

```bash
# 1. 移动到 site-packages
mv lib/xtquant/ $(python -c "import site; print(site.getsitepackages()[0])")

# 2. 添加到 ~/.bashrc
echo 'export LD_LIBRARY_PATH=/home/openclaw/.local/miniconda3/envs/trade311/lib/python3.11/site-packages/xtquant/.libs/:$LD_LIBRARY_PATH' >> ~/.bashrc

# 3. 重新加载
source ~/.bashrc
```

#### 验证

```bash
conda activate trade311
python lib/data.py
```

输出：
```
***** xtdata 连接成功 *****
服务信息：{'tag': 'sp3', 'version': '1.0'}
服务地址：127.0.0.1:58610
数据路径：D:\Applications\国金 QMT 交易端模拟\bin.x64/../userdata_mini/datadir

已完成:1/3 - 000001.SH
Loaded bar data: 0:00:00 

   date          symbol    open    high     low   close    volume
0  2024-01-01  000001.SH  2972.77  2976.26  2962.27  2962.27  304141793
1  2024-01-01  000300.SH  3426.26  3426.26  3386.35  3386.35  116180726
...
```

---

## 注意事项

### 交易功能限制

- **数据接口 (xtdata)**：Linux 版本可用 
- **交易接口 (xttrade)**：Linux 版本**不支持** 
- 如需交易功能，仍需使用 Windows 版本或付费投研专业版

### 安全提示

- 此方法利用了官方服务器的配置疏漏
- 仅供学习研究使用
- 生产环境建议通过正规渠道获取授权

### 版本兼容性

- 下载的 Linux 版本较旧（2024-09-20）
- 如需最新版本，需定期检查下载服务器更新

---

## 总结

| 方案 | 优点 | 缺点 |
|------|------|------|
| Windows 代理服务 | 功能完整 | 复杂，维护成本高 |
| WSL 调用 Windows | 简单直接 | 安全隔离失效 |
| 直接获取 Linux 版 | 原生运行，性能好 | 不支持交易接口 |

对于**仅需数据接口**的量化研究场景，方法二（Linux 版本）是最佳选择。

---

## 参考资料

- [xtquant 官方文档](http://dict.thinktrader.net/nativeApi/start_now.html)
- [WSL2 官方文档](https://learn.microsoft.com/zh-cn/windows/wsl/)
- 国金 QMT 交易端模拟环境

---

*本文记录于 2026-03-14，基于实际测试验证。*
