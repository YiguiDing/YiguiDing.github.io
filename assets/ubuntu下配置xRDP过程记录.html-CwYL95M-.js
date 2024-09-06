import{_ as e,c as n,o as s,b as a}from"./app-BSX0n7Vp.js";const t={},o=a(`<h1 id="ubuntu下配置xrdp过程记录" tabindex="-1"><a class="header-anchor" href="#ubuntu下配置xrdp过程记录"><span>ubuntu下配置xRDP过程记录</span></a></h1><h2 id="xrdp" tabindex="-1"><a class="header-anchor" href="#xrdp"><span>xRDP</span></a></h2><ul><li>RDP是windows系统下默认的远程桌面协议 默认端口3389</li><li>VNC是linux系统下默认的远程桌面协议 默认端口5900</li><li><strong>xRDP</strong>是RDP的开源版本 <ul><li>安装xRDP的linux可以通过windows原生的远程桌面连接程序MSTSC建立远程连接，</li><li>于是市面上一系列用于远程登录windows的手机端app和PC端应用程序也可用于登陆linux</li></ul></li></ul><h2 id="通过命令安装" tabindex="-1"><a class="header-anchor" href="#通过命令安装"><span>通过命令安装</span></a></h2><pre><code class="language-shell"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span>  xrdp
</code></pre><h2 id="添加用户到组" tabindex="-1"><a class="header-anchor" href="#添加用户到组"><span>添加用户到组</span></a></h2><pre><code class="language-shell">默认情况下，Xrdp 使用 /etc/ssl/private/ssl-cert-snakeoil.key 仅“ssl-cert” 用户组可读
<span class="token function">sudo</span> adduser 用户名 ssl-cert
或
<span class="token function">sudo</span> <span class="token function">usermod</span> 用户名 <span class="token parameter variable">-G</span> ssl-cert
</code></pre><h2 id="配置服务" tabindex="-1"><a class="header-anchor" href="#配置服务"><span>配置服务</span></a></h2><p><strong>配置文档/etc/xrdp/xrdp.ini</strong><br> xrdp.ini 关键部分在globals</p><pre><code class="language-conf">[globals]
bitmap_cache=yes       #位图缓存
bitmap_compression=yes #位图压缩
port=3389              #监听端口
crypt_level=low        #加密程度（none为不加密 low为40位，默认为high 128位，medium为双40位）
channel_code=1         #????
</code></pre><p><strong>配置文档/etc/xrdp/sesman.ini</strong></p><pre><code class="language-conf">[Globals]
ListenAddress=127.0.0.1      #监听ip地址(默认即可)
ListenPort=3350              #监听端口(默认即可)
EnableUserWindowManager=1    #1为开启,可让用户自定义自己的启动脚本
UserWindowManager=startwm.sh
DefaultWindowManager=startwm.sh
 
[Security]
AllowRootLogin=1              #允许root登陆
MaxLoginRetry=4               #最大重试次数
TerminalServerUsers=tSUSErs   #允许连接的用户组(如果不存在则默认全部用户允许连接)
TerminalServerAdmins=tsadmins #允许连接的超级用户(如果不存在则默认全部用户允许连接)
 
[Sessions]
MaxSessions=10           #最大会话数
KillDisconnected=0       #是否立即关闭断开的连接(如果为1,则断开连接后会自动注销)
IdleTimeLimit=0          #空闲会话时间限制(0为没有限制)
DisconnectedTimeLimit=0  #断开连接的存活时间(0为没有限制)
 
[Logging]
LogFile=./sesman.log     #登陆日志文件
LogLevel=DEBUG           #登陆日志记录等级(级别分别为,core,error,warn,info,debug)
EnableSyslog=0           #是否开启日志
SyslogLevel=DEBUG        #系统日志记录等级
</code></pre><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h2><pre><code class="language-shell"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> xrdp
<span class="token function">sudo</span> <span class="token function">service</span> xrdp start
</code></pre><h2 id="构建、编译、安装-pulseaudio-模块-实现音频重定向" tabindex="-1"><a class="header-anchor" href="#构建、编译、安装-pulseaudio-模块-实现音频重定向"><span>构建、编译、安装 pulseaudio 模块 实现音频重定向</span></a></h2><p>data：2022-08-15<br><strong>获得的构建文件</strong><br> 根据官方wiki文章<a href="https://github.com/neutrinolabs/pulseaudio-module-xrdp/wiki/Build-on-Debian-or-Ubuntu" target="_blank" rel="noopener noreferrer">《Build-on-Debian-or-Ubuntu（在 Debian 或 Ubuntu 上构建）》</a>可知，<strong>获得的文件构建</strong>有<strong>两种方式</strong>，</p><ul><li>一种是从 pulseaudio 服务器构建中提取内部开发文件，或执行脚本 『暂不使用这种方式』</li><li>另一方种方式是直接下载已经构建好的文件<a href="https://github.com/lnee94/pulseaudio-headers-xrdb/releases/tag/v1.0" target="_blank" rel="noopener noreferrer">pulseaudio-headers-xrdb</a>并通过命令安装<code>pkg -i pulseaudio-headers-xrdb.deb</code>,将会解压到目录<code>/opt/pulseaudio-headers-xrdb/</code></li></ul><pre><code class="language-bash"><span class="token builtin class-name">cd</span> ~
<span class="token function">wget</span> https://github.com/lnee94/pulseaudio-headers-xrdb/releases/download/v1.0/pulseaudio-headers-xrdb.deb
pkg <span class="token parameter variable">-i</span> pulseaudio-headers-xrdb.deb
</code></pre><p><strong>编译 xrdp pulseaudio 模块</strong></p><pre><code class="language-bash"><span class="token comment"># 编译构建 pulseaudio 模块本身需要一些构建工具和包开发工具</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential dpkg-dev libpulse-dev <span class="token function">git</span> autoconf libtool

<span class="token builtin class-name">cd</span> ~
<span class="token function">git</span> clone https://github.com/neutrinolabs/pulseaudio-module-xrdp.git
<span class="token builtin class-name">cd</span> pulseaudio-module-xrdp

./bootstrap <span class="token operator">&amp;&amp;</span> ./configure <span class="token assign-left variable">PULSE_DIR</span><span class="token operator">=</span>/opt/pulseaudio-headers-xrdb/
<span class="token function">make</span>
</code></pre><p><strong>安装 xrdp pulseaudio 模块</strong></p><pre><code class="language-bash"><span class="token builtin class-name">cd</span> pulseaudio-module-xrdp
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># 该命令执行后，</span>
<span class="token comment"># 构建的模块将被安装在正确的目录</span>
<span class="token comment"># 同时：a script load_pa_modules.sh to load the modules when a session is started. On many systems this script is installed by default in /usr/libexec/pulseaudio-module-xrdp/</span>
<span class="token comment"># 同时：Install a desktop file pulseaudio-xrdp.desktop which will call the load_pa_modules.sh script when a desktop is loaded. On many systems this script is installed by default in /etc/xdg/autostart</span>
</code></pre><p><strong>确认是否安装成功</strong></p><pre><code>ls $(pkg-config --variable=modlibexecdir libpulse) | grep xrdp
# 输出结果中应当包含
# module-xrdp-sink.so
# module-xrdp-source.so
</code></pre>`,24),l=[o];function i(r,p){return s(),n("div",null,l)}const u=e(t,[["render",i],["__file","ubuntu下配置xRDP过程记录.html.vue"]]),c=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/ubuntu%E4%B8%8B%E9%85%8D%E7%BD%AExRDP%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95/ubuntu%E4%B8%8B%E9%85%8D%E7%BD%AExRDP%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95.html","title":"ubuntu下配置xRDP过程记录","lang":"zh-CN","frontmatter":{"title":"ubuntu下配置xRDP过程记录","date":"2022-08-11T22:55:00.000Z","cover":"./cover/default_cover.jpg","tag":["ubuntu","xRDP"],"category":"笔记","description":"ubuntu下配置xRDP过程记录 xRDP RDP是windows系统下默认的远程桌面协议 默认端口3389 VNC是linux系统下默认的远程桌面协议 默认端口5900 xRDP是RDP的开源版本 安装xRDP的linux可以通过windows原生的远程桌面连接程序MSTSC建立远程连接， 于是市面上一系列用于远程登录windows的手机端app和...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%90%8E%E7%AB%AF/ubuntu%E4%B8%8B%E9%85%8D%E7%BD%AExRDP%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95/ubuntu%E4%B8%8B%E9%85%8D%E7%BD%AExRDP%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"ubuntu下配置xRDP过程记录"}],["meta",{"property":"og:description","content":"ubuntu下配置xRDP过程记录 xRDP RDP是windows系统下默认的远程桌面协议 默认端口3389 VNC是linux系统下默认的远程桌面协议 默认端口5900 xRDP是RDP的开源版本 安装xRDP的linux可以通过windows原生的远程桌面连接程序MSTSC建立远程连接， 于是市面上一系列用于远程登录windows的手机端app和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T13:06:31.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"ubuntu"}],["meta",{"property":"article:tag","content":"xRDP"}],["meta",{"property":"article:published_time","content":"2022-08-11T22:55:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T13:06:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ubuntu下配置xRDP过程记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-11T22:55:00.000Z\\",\\"dateModified\\":\\"2023-11-17T13:06:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"xRDP","slug":"xrdp","link":"#xrdp","children":[]},{"level":2,"title":"通过命令安装","slug":"通过命令安装","link":"#通过命令安装","children":[]},{"level":2,"title":"添加用户到组","slug":"添加用户到组","link":"#添加用户到组","children":[]},{"level":2,"title":"配置服务","slug":"配置服务","link":"#配置服务","children":[]},{"level":2,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]},{"level":2,"title":"构建、编译、安装 pulseaudio 模块 实现音频重定向","slug":"构建、编译、安装-pulseaudio-模块-实现音频重定向","link":"#构建、编译、安装-pulseaudio-模块-实现音频重定向","children":[]}],"git":{"createdTime":1700226391000,"updatedTime":1700226391000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":3.04,"words":912},"filePathRelative":"后端/ubuntu下配置xRDP过程记录/ubuntu下配置xRDP过程记录.md","localizedDate":"2022年8月11日","excerpt":"","autoDesc":true}');export{u as comp,c as data};
