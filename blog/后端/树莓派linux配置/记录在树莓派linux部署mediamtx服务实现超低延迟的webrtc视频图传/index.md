---
title: 记录在树莓派linux部署mediamtx服务实现超低延迟的webrtc视频图传
date: 2024-07-29T16:01:00
index: true
article: false
---

**一、安装mediamtx和ffmpeg到linux**

这里的方法是先下载到window电脑然后使用scp命令拷贝到linux,  
实际上，如果网络和墙对树莓派不是问题的话，可以直接用wget命令下载。

下载
```bash
$ scp 'c:/Users/24496/Downloads/mediamtx_v1.8.2_linux_armv6.tar.gz' pi@192.168.2.2:/home/pi/
pi@192.168.2.2's password:
mediamtx_v1.8.2_linux_armv6.tar.gz                                                                            100%   14MB   9.5MB/s   00:01

$ scp 'c:/Users/24496/Downloads/ffmpeg-release-armhf-static.tar.xz' pi@192.168.2.2:/home/pi/
pi@192.168.2.2's password:
ffmpeg-release-armhf-static.tar.xz                                                                            100%   15MB   9.4MB/s   00:01
```
解压
```bash
mkdir ffmpeg
mv ffmpeg-release-armhf-static.tar.xz ffmpeg
cd ffmpeg
tar -xvf ./ffmpeg-release-armhf-static.tar.xz
cd ..
mkdir mediamtx
mv mediamtx_v1.8.2_linux_armv6.tar.gz mediamtx
cd mediamtx
tar -xvf ./mediamtx_v1.8.2_linux_armv6.tar.gz
```

**二、改写mediamtx.yml配置文件**


**Windows**

```bash
ffmpeg -list_devices true -f dshow -i dummy
```

**linux**

```bash
cd mediamtx
# list-devices for linux
pi@raspberrypi:~ $ v4l2-ctl --list-devices
# H264 USB Camera: USB Camera (usb-0000:01:00.0-1.4):
#         /dev/video0
#         /dev/video1
#         /dev/video2
#         /dev/video3
pi@raspberrypi:~/mediamtx $ cat >> mediamtx.yml
paths:
  # example:
  camera:
  # for window
    # runOnInit: ffmpeg -f dshow -i video="USB Camera" -vcodec libx264 -preset:v ultrafast -tune:v zerolatency -f rtsp rtsp://localhost:$RTSP_PORT/$MTX_PATH
  # for window
    # runOnInit: ffmpeg -f dshow -i video="USB Camera" -vcodec copy -f rtsp rtsp://localhost:$RTSP_PORT/$MTX_PATH
  # for linux
  # ffmpeg -f v4l2 -i /dev/video0 -vcodec libx264 -preset:v ultrafast -tune:v zerolatency -f mp4  1.mp4
    runOnInit: /home/pi/ffmpeg/ffmpeg-7.0.1-armhf-static/ffmpeg -f v4l2 -i /dev/video2 -vcodec copy -f rtsp rtsp://localhost:$RTSP_PORT/$MTX_PATH
    runOnInitRestart: yes
  all_others:
```

**三、移动配置文件到etc**

```bash
sudo mkdir /etc/mediamtx
sudo cp ./mediamtx/mediamtx.yml /etc/mediamtx/mediamtx.yml
```

**四、实现开机自动执行**

```bash
sudo vi /etc/rc.local
# 添加代码：
/home/pi/mediamtx/mediamtx &
```

**四、在浏览器测试**

```
http://192.168.2.2:8889/camera
http://192.168.2.2:8889/camera/whep
```


允许任何用户的任何ip拥有api权限

```
- user: any
  pass:
  # ips: ['127.0.0.1', '::1']
  ips: []
  permissions:
  - action: api
  - action: metrics
  - action: pprof

# 开启api
api: yes
```

**五、配置servers**

```bash
sudo mv mediamtx /usr/local/bin/
sudo mv mediamtx.yml /usr/local/etc/
```
```
sudo tee /etc/systemd/system/mediamtx.service >/dev/null << EOF
[Unit]
Wants=network.target
[Service]
ExecStart=/usr/local/bin/mediamtx /usr/local/etc/mediamtx.yml
[Install]
WantedBy=multi-user.target
EOF
```

```
sudo systemctl daemon-reload
sudo systemctl enable mediamtx
sudo systemctl start mediamtx
```