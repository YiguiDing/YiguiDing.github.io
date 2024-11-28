---
title: 树莓派网络配置
date: 2024-11-25T14:23:00+08:00
index: true
article: false
---

## dhcpcd管理网络

**编辑**

```bash
sudo vi /etc/dhcpcd.conf

# interface wlan0 # 无线
interface eth0 # 有线
static ip_address=192.168.1.2/24
static routers=192.168.1.1 #网关
static domain_name_servers=223.5.5.5 8.8.8.8
# static ip6_address=
```

**重启**

```bash
reboot
```

## NetworkManager管理网络

**配置静态ip**

```bash
sudo nmcli connection modify ipv4.addresses 192.168.1.2/24 ipv4.method manual
```

**设置自动获取ip(DHCP)**

```bash
sudo nmcli connection modify ipv4.method auto
```

**设置网关**：

```bash
sudo nmcli connection modify ipv4.gateway 192.168.1.1
```

## dhcpcd和NetworkManager的切换

```bash
sudo systemctl stop dhcpcd/Network-Manager
sudo disable dhcpcd/Network-Manager
sudo enable Network-Manager/dhcpcd
reboot
```

## network管理网络

```bash
# 安装
sudo apt install ifupdown net-tools
```

```bash
sudo nano /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback
 
auto eth0
iface eth0 inet dhcp
auto wlan0
allow-hotplug wlan0
iface wlan0 inet static//静态地址
address 192.168.1.65
netmask 255.255.255.0
gateway 192.168.1.1
network 192.168.1.1
 
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf //wifi帐号密码文件
```

```bash
reboot
```
