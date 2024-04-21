---
title: 使用letsencrypt自动更新https证书
date: 2024-04-10T23:03:00+08:00
article: false
---

# 使用letsencrypt自动更新https证书

**Let’s Encrypt**

为了在您的网站上启用 HTTPS，您需要从证书颁发机构（CA）获取证书（一种文件）。 Let’s Encrypt 正是其中一家证书颁发机构。

**CertbotACME客户端**

- 建议大多数具有命令行访问权限的人使用
- 可以在不下线您的服务器的前提下自动执行证书颁发和安装。
- <https://certbot.eff.org/>

```bash
# remove certbot
sudo apt-get remove certbot
# Install snapd
sudo apt update
sudo apt install snapd
# Install Certbot using snapd
sudo snap install --classic certbot
# Prepare the Certbot command
sudo ln -s /snap/bin/certbot /usr/bin/certbot
# Choose how you'd like to run Certbot
sudo certbot --nginx
```

**坑1：可能默认证书的权限太高，需要改成640**

```bash
cd ../../archive/dingdingdang.online/privkey1.pem
chmod 640 ./*.pem
```
