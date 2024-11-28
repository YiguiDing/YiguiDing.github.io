---
title: 便携式U盘
date: 2024-11-25T22:41:00+08:00
---



## git-bash配置


```bash
$ vi /etc/profile
##############################
ROOT=/d
export PATH=${PATH}:${ROOT}/app/Miniconda/Scripts/:${ROOT}/app/VSCode-win32-x64-1.95.3/bin/
```


```bash
$ source /etc/profile
```