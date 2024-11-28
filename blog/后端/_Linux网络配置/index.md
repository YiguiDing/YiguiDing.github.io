---
title: Linux网络配置
date: 2024-11-24T15:08:00+08:00
---

### 网络管理

#### ifconfig命令

> - ifconfig 是一个用于配置和控制网络接口的传统 Unix 命令。
> - 在现代 Linux 发行版中，ifconfig 通常已经被更现代和强大的 ip 命令所取代。

**安装ifconfig**
```bash
sudo apt-get install net-tools  # 适用于 Debian/Ubuntu 系统
```

**配置ip**
```bash
# 配置eth0 ip
ifconfig eth0 192.168.1.11 netmask 255.255.255.0
ifconfig eth0 up # 命令将启用eth0网络设备
ifconfig eth0 down # 命令则将关闭eth0网络设备
```

**配置虚拟接口ip**
```bash
# 在 eth0 上添加一个新的虚拟接口 eth0:0，并为其分配 IP 地址 192.168.1.12
sudo ifconfig eth0:0 192.168.1.12 up
ifconfig eth0:0 down # 命令则将关闭eth0:0网络设备
```

**配置DNS**

> - 有可能文件不允许修改，
> - 重启后会被其他网络管理服务覆盖（如systemd-resolved）

```bash
vi /etc/resolv.conf
# www.alidns.com
nameserver 223.5.5.5
# google
nameserver 8.8.8.8

# 重启 resolvconf 服务
sudo systemctl restart resolvconf.service
# 或者
# sudo reboot
# 查看 /etc/resolv.conf 文件
cat /etc/resolv.conf
```

**配置默认网关**

```bash
# gw gateway
route add default gw 192.168.1.1
```

#### ifup、ifdown命令

> ‌ifup命令用于激活指定的网络接口。‌  
> 它通过读取`/etc/sysconfig/network-scripts/`目录下的相关网络接口配置文件来激活网络接口。

**软件安装**
```bash
apt install ifupdown       # version 0.8.35ubuntu1, or
apt install netscript-2.4  # version 5.5.3
```


**命令语法**

```bash
ifup [interface]
ifdown [interface]
```

**示例**
```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
TYPE=Ethernet
DEVICE=eth0

ONBOOT=yes
# BOOTPROTO=none|static|bootp|dhcp
BOOTPROTO=static
IPADDR=192.168.1.2
PREFIX=24
GATEWAY=192.168.1.1
DNS1=223.5.5.5
DNS2=8.8.8.8

# BROADCAST=192.168.1.255
# NETMASK=255.255.255.0
# NETWORK=192.168.1.0
# HWADDR=00:01:02:03:04:05

ifup eth0
ifdown eth0
```



#### ip命令

> - ifconfig命令可以用于配置和管理网络接口，但是它的功能有限，不能管理路由表，因此IP命令应运而生。
> - 随着网络技术的不断发展，IP命令也不断进行更新和扩展，成为了一个功能强大的网络工具。
> - 在许多Linux和Unix系统中，IP命令已经取代了ifconfig命令，成为管理网络接口和路由表的主要工具。



**语法**

1. 查看网络接口信息的操作：
    - `ip addr`：显示所有网络接口的详细信息，包括接口名称、MAC地址、IPv4地址、IPv6地址等。
    - `ip link`：显示所有网络接口的名称和状态信息。
2. 设置IP地址的操作：
    - `ip addr add IP地址/掩码 dev 网络接口名`：给指定网络接口添加IP地址。
    - `ip addr del IP地址/掩码 dev 网络接口名`：删除指定网络接口的IP地址。
    - `ip -4 addr add IP地址/掩码 dev 网络接口名`：给指定网络接口添加IPv4地址。
    - `ip -6 addr add IPv6地址/掩码 dev 网络接口名`：给指定网络接口添加IPv6地址。
3. 设置网络接口的操作：
    - `ip link set 网络接口名 up/down`：设置指定网络接口的状态为up或down。
    - `ip link set 网络接口名 name 新名称`：给指定网络接口修改名称。
    - `ip link set 网络接口名 mtu MTU值`：设置指定网络接口的最大传输单元大小。
    - `ip route add 目标地址/掩码 via 网关 dev 网络接口名`：添加路由规则，指定目标地址走指定的网关。
4. 其他常用操作：
    - `ip neigh`：显示ARP缓存表。
    - `ip route`：显示和管理路由表。
    - `ip rule`：显示和管理路由策略。


**显示当前网络接口信息**
```bash
ip addr show 
#简写 
ip a

root@ubuntu2204:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff
    inet 172.19.52.118/18 metric 100 brd 172.19.63.255 scope global dynamic eth0
       valid_lft 315350166sec preferred_lft 315350166sec
    inet6 fe80::216:3eff:fe02:682/64 scope link 
       valid_lft forever preferred_lft forever
```

**显示网络设备运行状态**

```bash
root@ubuntu2204:~# ip link list
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff
```

**显示详细设备信息**
```bash
root@ubuntu2204:~# ip -stats  link  list
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    RX: bytes  packets  errors  dropped overrun mcast   
    150965482  1535609  0       0       0       0       
    TX: bytes  packets  errors  dropped carrier collsns 
    150965482  1535609  0       0       0       0       
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast   
    85271110033 102613357 0       0       0       0       
    TX: bytes  packets  errors  dropped carrier collsns 
    119630346767 84382641 0       0       0       0  
```

**查看路由表**
```bash
root@ubuntu2204:~# ip route show
root@ubuntu2204:~# ip route list
default via 172.19.63.253 dev eth0 proto dhcp src 172.19.52.118 metric 100 
172.19.0.0/18 dev eth0 proto kernel scope link src 172.19.52.118 metric 100 
172.19.63.253 dev eth0 proto dhcp scope link src 172.19.52.118 metric 100 
```


**查看ARP缓存**
```bash
root@ubuntu2204:~# ip neighbour show
172.19.63.253 dev eth0 lladdr ee:ff:ff:ff:ff:ff REACHABLE
```


**启用或停止网卡**
```bash
root@ubuntu2204:~# ip link set lo down
root@ubuntu2204:~# ip link list
1: lo: <LOOPBACK> mtu 65536 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff

root@ubuntu2204:~# ip link set lo up
root@ubuntu2204:~# ip link list
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff
```


**为网卡新增地址**

```bash
# 在网口eth0上添加一个名为demo1的网络接口 类型为wlan id为2
# 添加
# ip link add link eth0 demo1 type vlan id 2
# 删除
# ip link del dev demo1

root@ubuntu2204:~# ip link add link eth0 demo1 type vlan id 2
root@ubuntu2204:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff
    inet 172.19.52.118/18 metric 100 brd 172.19.63.255 scope global dynamic eth0
       valid_lft 315349488sec preferred_lft 315349488sec
    inet6 fe80::216:3eff:fe02:682/64 scope link 
       valid_lft forever preferred_lft forever
3: demo1@eth0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff

# 配置新demo1接口的ip
# 添加
# ip addr add 192.168.1.1/24  broadcast 192.168.2.255 dev demo1
# 删除
# ip addr del 192.168.1.1/24  dev demo1

root@ubuntu2204:~# ip addr add 192.168.1.1/24  broadcast 192.168.2.255 dev demo1
root@ubuntu2204:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff
    inet 172.19.52.118/18 metric 100 brd 172.19.63.255 scope global dynamic eth0
       valid_lft 315349382sec preferred_lft 315349382sec
    inet6 fe80::216:3eff:fe02:682/64 scope link 
       valid_lft forever preferred_lft forever
3: demo1@eth0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.1/24 brd 192.168.2.255 scope global demo1
       valid_lft forever preferred_lft forever

root@ubuntu2204:~# ip addr del 192.168.1.1/24  dev demo1
root@ubuntu2204:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff
    inet 172.19.52.118/18 metric 100 brd 172.19.63.255 scope global dynamic eth0
       valid_lft 315349355sec preferred_lft 315349355sec
    inet6 fe80::216:3eff:fe02:682/64 scope link 
       valid_lft forever preferred_lft forever
3: demo1@eth0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff


root@ubuntu2204:~# ip link del dev demo1
root@ubuntu2204:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:16:3e:02:06:82 brd ff:ff:ff:ff:ff:ff
    inet 172.19.52.118/18 metric 100 brd 172.19.63.255 scope global dynamic eth0
       valid_lft 315349262sec preferred_lft 315349262sec
    inet6 fe80::216:3eff:fe02:682/64 scope link 
       valid_lft forever preferred_lft forever
```

**设置默认网关**

```bash
# 添加
root@ubuntu2204:~# ip route add default via 192.168.1.1 dev eth0
# 删除
root@ubuntu2204:~# ip route del default via 192.168.1.1 dev eth0
```


**配置路由表**

```bash
# 添加
ip route add 192.168.80.0/24 via 192.168.2.254  dev eth0 
# 删除
ip route del 192.168.80.0/24 via 192.168.2.254  dev eth0 
```

**永久配置静态路由**

```bash
# 编辑 /etc/network/interfaces 或 /etc/sysconfig/network-scripts/ifcfg-eth0 文件

root@ubuntu2204:~# cat /etc/network/interfaces 
auto lo
iface lo inet loopback

# 添加内容：
172.16.10.0/24 via 192.168.3.254

# 重启network(可能network已经不存在了，改名为NetworkManager)
service network restart 
# 查看路由表
ip route
```


 


#### NetworkManager

**简介**
- 是一个为系统提供检测和配置功能以便自动连接到网络的程序。
- 支持无线和有线网络
- 支持调制解调器和VPN
- 最初由 Red Hat 开发，现在由 GNOME 管理。
- 官网<https://networkmanager.dev/>


[NetworkManager](https://archlinux.org/packages/?name=networkmanager)软件包内容
- 守护程序
- 命令行界面（nmcli）
- 基于 curses 的界面（nmtui）

**安装**



