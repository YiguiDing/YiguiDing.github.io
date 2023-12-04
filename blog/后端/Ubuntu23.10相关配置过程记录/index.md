---
title: Ubuntu23.10相关配置过程记录
date: 2023-11-21T19:27:00+08:00
---

## Ubuntu23.10相关配置过程记录

### 通过Netplan配置网络

[netplan.io](https://netplan.io)

> Ubuntu 20.4 没有/etc/network/interfaces，配置网络需用Netplan

> Netplan 是一个用于在 linux 系统上轻松配置网络的实用程序。您只需创建所需网络接口的 YAML 描述以及每个应配置的功能。根据此描述，Netplan 将为您选择的渲染器工具生成所有必要的配置。

**配置网络**

```bash
# 创建配置文件
sudo touch /etc/netplan/*.yaml
# 修改权限(移除其他用户的权限)
sudo chmod 600 main.yaml
# 查看网卡设备名
ip addr  # 得到:enp0s3,enp0s8
```

**配置格式**

```yaml
# Network-Configuration
network:
    version: 2
    # 把控制权转交给?
    # NetworkManager默认配置为所有网卡设备dhcp
    # renderer: NetworkManager / networkd
    ethernets:
    # 仅主机模式的网卡(ip地址配置为和实体机ip地址同网段)
      enp0s8:
          dhcp4: yes
       enp0s3:
          dhcp4: no
        #   dhcp6: no
          addresses: [192.168.2.5/24]
          gateway: 192.168.2.1
          nameservers:
             addresses: [8.8.8.8]
# device: Name of the interface.
# dhcp4/6: yes or no depending upon dynamic or static IP addressing
# addresses: IP address of the device in prefix notation. Do not use netmask.
# gateway: Gateway IP address to connect to an outside network
# nameservers: Address of DNS name servers
```

```bash
# Apply Configuration
sudo netplan apply
# Check
ip addr
```
