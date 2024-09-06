import{_ as e,c as a,o as n,b as t}from"./app-B5uJTUF5.js";const s={},p=t(`<p><strong>一、安装mediamtx和ffmpeg到linux</strong></p><p>这里的方法是先下载到window电脑然后使用scp命令拷贝到linux,<br> 实际上，如果网络和墙对树莓派不是问题的话，可以直接用wget命令下载。</p><p>下载</p><pre><code class="language-bash">$ <span class="token function">scp</span> <span class="token string">&#39;c:/Users/YiguiDing/Downloads/mediamtx_v1.8.2_linux_armv6.tar.gz&#39;</span> pi@192.168.2.2:/home/pi/
pi@192.168.2.2<span class="token string">&#39;s password:
mediamtx_v1.8.2_linux_armv6.tar.gz                                                                            100%   14MB   9.5MB/s   00:01

$ scp &#39;</span>c:/Users/YiguiDing/Downloads/ffmpeg-release-armhf-static.tar.xz<span class="token string">&#39; pi@192.168.2.2:/home/pi/
pi@192.168.2.2&#39;</span>s password:
ffmpeg-release-armhf-static.tar.xz                                                                            <span class="token number">100</span>%   15MB   <span class="token number">9</span>.4MB/s   00:01
</code></pre><p>解压</p><pre><code class="language-bash">pi@raspberrypi:~ <span class="token function">mkdir</span> ffmpeg
pi@raspberrypi:~ $ <span class="token function">mv</span> ffmpeg-release-armhf-static.tar.xz ffmpeg
pi@raspberrypi:~ $ <span class="token builtin class-name">cd</span> ffmpeg
pi@raspberrypi:~/ffmpeg $ <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ./ffmpeg-release-armhf-static.tar.xz

pi@raspberrypi:~ <span class="token function">mkdir</span> mediamtx
pi@raspberrypi:~ <span class="token function">mv</span> mediamtx_v1.8.2_linux_armv6.tar.gz mediamtx
pi@raspberrypi:~ $ <span class="token builtin class-name">cd</span> mediamtx
pi@raspberrypi:~/mediamtx $ <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ./mediamtx_v1.8.2_linux_armv6.tar.gz
</code></pre><p><strong>二、改写mediamtx.yml配置文件</strong></p><pre><code class="language-bash">pi@raspberrypi:~ $ <span class="token builtin class-name">cd</span> mediamtx
pi@raspberrypi:~/mediamtx $ <span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> mediamtx.yml
paths:
  <span class="token comment"># example:</span>
  camera:
  <span class="token comment"># for window</span>
    <span class="token comment"># runOnInit: ffmpeg -f dshow -i video=&quot;USB Camera&quot; -vcodec libx264 -preset:v ultrafast -tune:v zerolatency -f rtsp rtsp://localhost:$RTSP_PORT/$MTX_PATH</span>
  <span class="token comment"># for window</span>
    <span class="token comment"># runOnInit: ffmpeg -f dshow -i video=&quot;USB Camera&quot; -vcodec copy -f rtsp rtsp://localhost:$RTSP_PORT/$MTX_PATH</span>
  <span class="token comment"># for linux</span>
    runOnInit: /home/pi/ffmpeg/ffmpeg-7.0.1-armhf-static/ffmpeg <span class="token parameter variable">-f</span> v4l2 <span class="token parameter variable">-i</span> /dev/video1 <span class="token parameter variable">-vcodec</span> copy <span class="token parameter variable">-f</span> rtsp rtsp://localhost:<span class="token variable">$RTSP_PORT</span>/<span class="token variable">$MTX_PATH</span>
    runOnInitRestart: <span class="token function">yes</span>
  all_others:
</code></pre><p><strong>三、移动配置文件到etc</strong></p><pre><code class="language-bash">pi@raspberrypi:~ $ <span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/mediamtx
pi@raspberrypi:~ $ <span class="token function">sudo</span> <span class="token function">cp</span> ./mediamtx/mediamtx.yml /etc/mediamtx/mediamtx.yml
</code></pre><p><strong>四、实现开机自动执行</strong></p><pre><code class="language-bash">pi@raspberrypi:~ $ <span class="token function">sudo</span> <span class="token function">vi</span> /etc/rc.local
<span class="token comment"># 添加代码：</span>
/home/pi/mediamtx/mediamtx <span class="token operator">&amp;</span>
</code></pre><p><strong>四、在浏览器测试</strong></p><pre><code>http://192.168.2.2:8889/camera
http://192.168.2.2:8889/camera/whep
</code></pre>`,14),i=[p];function r(o,c){return n(),a("div",null,i)}const l=e(s,[["render",r],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/%E8%AE%B0%E5%BD%95%E5%9C%A8%E6%A0%91%E8%8E%93%E6%B4%BElinux%E9%83%A8%E7%BD%B2mediamtx%E6%9C%8D%E5%8A%A1%E5%AE%9E%E7%8E%B0%E8%B6%85%E4%BD%8E%E5%BB%B6%E8%BF%9F%E7%9A%84webrtc%E8%A7%86%E9%A2%91%E5%9B%BE%E4%BC%A0/","title":"记录在树莓派linux部署mediamtx服务实现超低延迟的webrtc视频图传","lang":"zh-CN","frontmatter":{"title":"记录在树莓派linux部署mediamtx服务实现超低延迟的webrtc视频图传","date":"2024-07-29T16:01:00.000Z","article":false,"description":"一、安装mediamtx和ffmpeg到linux 这里的方法是先下载到window电脑然后使用scp命令拷贝到linux, 实际上，如果网络和墙对树莓派不是问题的话，可以直接用wget命令下载。 下载 解压 二、改写mediamtx.yml配置文件 三、移动配置文件到etc 四、实现开机自动执行 四、在浏览器测试","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%90%8E%E7%AB%AF/%E8%AE%B0%E5%BD%95%E5%9C%A8%E6%A0%91%E8%8E%93%E6%B4%BElinux%E9%83%A8%E7%BD%B2mediamtx%E6%9C%8D%E5%8A%A1%E5%AE%9E%E7%8E%B0%E8%B6%85%E4%BD%8E%E5%BB%B6%E8%BF%9F%E7%9A%84webrtc%E8%A7%86%E9%A2%91%E5%9B%BE%E4%BC%A0/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"记录在树莓派linux部署mediamtx服务实现超低延迟的webrtc视频图传"}],["meta",{"property":"og:description","content":"一、安装mediamtx和ffmpeg到linux 这里的方法是先下载到window电脑然后使用scp命令拷贝到linux, 实际上，如果网络和墙对树莓派不是问题的话，可以直接用wget命令下载。 下载 解压 二、改写mediamtx.yml配置文件 三、移动配置文件到etc 四、实现开机自动执行 四、在浏览器测试"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-29T08:07:01.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:published_time","content":"2024-07-29T16:01:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-29T08:07:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"记录在树莓派linux部署mediamtx服务实现超低延迟的webrtc视频图传\\",\\"description\\":\\"一、安装mediamtx和ffmpeg到linux 这里的方法是先下载到window电脑然后使用scp命令拷贝到linux, 实际上，如果网络和墙对树莓派不是问题的话，可以直接用wget命令下载。 下载 解压 二、改写mediamtx.yml配置文件 三、移动配置文件到etc 四、实现开机自动执行 四、在浏览器测试\\"}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[],"git":{"createdTime":1722240421000,"updatedTime":1722240421000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"后端/记录在树莓派linux部署mediamtx服务实现超低延迟的webrtc视频图传/index.md","localizedDate":"2024年7月29日","excerpt":"","autoDesc":true}');export{l as comp,d as data};
