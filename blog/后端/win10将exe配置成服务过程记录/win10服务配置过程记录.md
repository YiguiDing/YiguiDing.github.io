---
title: win10将exe配置成服务过程记录
date: 2022-08-04 21:13:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [win10,服务]
# ---article: false---
category: 笔记
---


# win10将exe配置成服务过程记录

**instsrv 和 srvany**

- instsrv(install service)是用来安装服务
- srvany(service anything)包装任何服务的外壳
- [下载instsrv](/uploads/instsrv.exe)
- [下载srvany](/uploads/srvany.exe)

## 一、主要步骤

**1.安装服务**

```bash
# cmd
instsrv.exe  XXXXXX（服务名）  d:\path\to\srvany.exe（必须是完整的绝对路径）
```

**2.编辑注册表**

1. win+r 输入：regedit
2. 找到[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\XXXXXX(服务名)]
3. 选择“新建”下的“项”，将其命名为Parameters。
4. 单击选定Parameters，
    - 新建名为 `Application` 的字符串值 将其数值数据设置为 XXXXXX（服务名）服务对应的应用程序的绝对路径，比如:E:\temp\clean_day\nginx-1.4.7\nginx.exe；
    - 新建名为 `AppDirectory` 的字符串值 将其数值数据设置为指定程序所在的目录,如：E:\temp\clean_day\nginx-1.4.7
    - 新建名为 `AppParameters` 的字符串值 AppParameters指明程序运行的参数，如果没有可以不用设值；

**3.启动服务**
完毕你就可以用`net`命令启动/停止，或者sc命令配置服务了。

```bash
net start XXXXXX（服务名）
net stop XXXXXX（服务名）
```

## 二、其他

### 删除服务

可以使用instsrv的remove选项来删除服务，当然也可以用sc命令

### 配置服务

win+R 输入 `msconfig` 配置服务的开机启动启动或关闭

win+R 输入 `services.msc` 配置服务的临时启动和关闭
