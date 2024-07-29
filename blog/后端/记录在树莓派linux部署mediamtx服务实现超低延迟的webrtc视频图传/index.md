---
title: 记录在树莓派linux部署mediamtx服务实现超低延迟的webrtc视频图传
date: 2024-07-29T16:01:00
article: false
---

**一、安装mediamtx和ffmpeg到linux**

这里的方法是先下载到window电脑然后使用scp命令拷贝到linux,  
实际上，如果网络和墙对树莓派不是问题的话，可以直接用wget命令下载。

下载
```bash
$ scp 'c:/Users/YiguiDing/Downloads/mediamtx_v1.8.2_linux_armv6.tar.gz' pi@192.168.2.2:/home/pi/
pi@192.168.2.2's password:
mediamtx_v1.8.2_linux_armv6.tar.gz                                                                            100%   14MB   9.5MB/s   00:01

$ scp 'c:/Users/YiguiDing/Downloads/ffmpeg-release-armhf-static.tar.xz' pi@192.168.2.2:/home/pi/
pi@192.168.2.2's password:
ffmpeg-release-armhf-static.tar.xz                                                                            100%   15MB   9.4MB/s   00:01
```
解压
```bash
pi@raspberrypi:~ mkdir ffmpeg
pi@raspberrypi:~ $ mv ffmpeg-release-armhf-static.tar.xz ffmpeg
pi@raspberrypi:~ $ cd ffmpeg
pi@raspberrypi:~/ffmpeg $ tar -xvf ./ffmpeg-release-armhf-static.tar.xz

pi@raspberrypi:~ mkdir mediamtx
pi@raspberrypi:~ mv mediamtx_v1.8.2_linux_armv6.tar.gz mediamtx
pi@raspberrypi:~ $ cd mediamtx
pi@raspberrypi:~/mediamtx $ tar -xvf ./mediamtx_v1.8.2_linux_armv6.tar.gz
```

**二、改写mediamtx.yml配置文件**

```bash
pi@raspberrypi:~ $ cd mediamtx
pi@raspberrypi:~/mediamtx $ cat >> mediamtx.yml
paths:
  # example:
  camera:
  # for window
    # runOnInit: ffmpeg -f dshow -i video="USB Camera" -vcodec libx264 -preset:v ultrafast -tune:v zerolatency -f rtsp rtsp://localhost:$RTSP_PORT/$MTX_PATH
  # for window
    # runOnInit: ffmpeg -f dshow -i video="USB Camera" -vcodec copy -f rtsp rtsp://localhost:$RTSP_PORT/$MTX_PATH
  # for linux
    runOnInit: /home/pi/ffmpeg/ffmpeg-7.0.1-armhf-static/ffmpeg -f v4l2 -i /dev/video1 -vcodec copy -f rtsp rtsp://localhost:$RTSP_PORT/$MTX_PATH
    runOnInitRestart: yes
  all_others:
```

**三、移动配置文件到etc**

```bash
pi@raspberrypi:~ $ sudo mkdir /etc/mediamtx
pi@raspberrypi:~ $ sudo cp ./mediamtx/mediamtx.yml /etc/mediamtx/mediamtx.yml
```

**四、实现开机自动执行**

```bash
pi@raspberrypi:~ $ sudo vi /etc/rc.local
# 添加代码：
/home/pi/mediamtx/mediamtx &
```

**四、在浏览器测试**

```
http://192.168.2.2:8889/camera
http://192.168.2.2:8889/camera/whep
```
