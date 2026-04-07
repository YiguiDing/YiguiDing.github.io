---
title: qbit服务安装配置记录
date: 2026-02-03T03:08:57
article: false 
index: true
---

**安装qbittorrent-nox**

```bash
sudo add-apt-repository ppa:qbittorrent-team/qbittorrent-stable
sudo apt-get update && sudo apt-get install qbittorrent-nox
```

**修改配置文件~/.config/qBittorrent/qBittorrent.conf**

```bash
[Preferences]
General\Locale=zh_CN
MailNotification\req_auth=true
WebUI\CSRFProtection=false
WebUI\HostHeaderValidation=false
WebUI\Username=dyg
WebUI\Port=8082
```

**编写服务配置文件`/etc/systemd/system/qbittorrent-nox.service`**

```bash
[Unit]
Description=qBittorrent NoX Terminal Application
After=network.target

[Service]
Type=forking
User=dyg
Group=dyg
UMask=007
ExecStart=/usr/bin/qbittorrent-nox -d
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

**启动运行服务**
```bash
sudo systemctl enable qbittorrent-nox.service

sudo systemctl start qbittorrent-nox.service
```

**查看运行状态**

```bash
dyg@iZj6c0fld2g6j6iisyc6zqZ:~$ sudo systemctl status qbittorrent-nox.service
● qbittorrent-nox.service - qBittorrent NoX Terminal Application
     Loaded: loaded (/etc/systemd/system/qbittorrent-nox.service; disabled; preset: enabled)
     Active: activating (start) since Tue 2026-02-03 02:50:27 CST; 12s ago
  Cntrl PID: 17559 (qbittorrent-nox)
      Tasks: 10 (limit: 995)
     Memory: 72.3M (peak: 72.8M)
        CPU: 401ms
     CGroup: /system.slice/qbittorrent-nox.service
             └─17559 /usr/bin/qbittorrent-nox

Feb 03 02:50:27 iZj6c0fld2g6j6iisyc6zqZ systemd[1]: Starting qbittorrent-nox.service - qBittorrent NoX Terminal Application...
Feb 03 02:50:27 iZj6c0fld2g6j6iisyc6zqZ qbittorrent-nox[17559]: WebUI 将在内部准备不久后启动。请稍等…
Feb 03 02:50:28 iZj6c0fld2g6j6iisyc6zqZ qbittorrent-nox[17559]: ******** 信息 ********
Feb 03 02:50:28 iZj6c0fld2g6j6iisyc6zqZ qbittorrent-nox[17559]: 要控制 qBittorrent，请访问下列地址的 WebUI：http://localhost:8082
```


修改nginx配置`/etc/nginx/conf.d/default.conf`

```conf
# for qbit server
server{
    listen 443 ssl;
    server_name file.dingdingdang.online;

    ssl_certificate     /etc/letsencrypt/archive/qbit.dingdingdang.online/cert1.pem;
    ssl_certificate_key /etc/letsencrypt/archive/qbit.dingdingdang.online/privkey1.pem;
    ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers           HIGH:!aNULL:!MD5;
    
    location / {
        proxy_pass http://127.0.0.1:8081;
    }
}
```

申请`qbit.dingdingdang.online`证书

```bash
dyg@iZj6c0fld2g6j6iisyc6zqZ:~$ sudo certbot certonly  -d qbit.dingdingdang.online
Saving debug log to /var/log/letsencrypt/letsencrypt.log

How would you like to authenticate with the ACME CA?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: Nginx Web Server plugin (nginx)
2: Runs an HTTP server locally which serves the necessary validation files under
the /.well-known/acme-challenge/ request path. Suitable if there is no HTTP
server already running. HTTP challenge only (wildcards not supported).
(standalone)
3: Saves the necessary validation files to a .well-known/acme-challenge/
directory within the nominated webroot path. A separate HTTP server must be
running and serving files from the webroot path. HTTP challenge only (wildcards
not supported). (webroot)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-3] then [enter] (press 'c' to cancel): 1
Requesting a certificate for qbit.dingdingdang.online

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/qbit.dingdingdang.online/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/qbit.dingdingdang.online/privkey.pem
This certificate expires on 2026-05-03.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
dyg@iZj6c0fld2g6j6iisyc6zqZ:~$ ls /etc/letsencrypt/archive/
ls: cannot open directory '/etc/letsencrypt/archive/': Permission denied
dyg@iZj6c0fld2g6j6iisyc6zqZ:~$ sudo ls /etc/letsencrypt/archive/
dingdingdang.online  file.dingdingdang.online  qbit.dingdingdang.online
```

