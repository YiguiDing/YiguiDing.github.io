import{_ as l,r as d,o as r,c as t,d as o,a as n,b as e,f as a,e as i}from"./app-e370b872.js";const c={},u=i(`<h1 id="ubuntu下配置xrdp过程记录" tabindex="-1"><a class="header-anchor" href="#ubuntu下配置xrdp过程记录" aria-hidden="true">#</a> ubuntu下配置xRDP过程记录</h1><h2 id="xrdp" tabindex="-1"><a class="header-anchor" href="#xrdp" aria-hidden="true">#</a> xRDP</h2><ul><li>RDP是windows系统下默认的远程桌面协议 默认端口3389</li><li>VNC是linux系统下默认的远程桌面协议 默认端口5900</li><li><strong>xRDP</strong>是RDP的开源版本 <ul><li>安装xRDP的linux可以通过windows原生的远程桌面连接程序MSTSC建立远程连接，</li><li>于是市面上一系列用于远程登录windows的手机端app和PC端应用程序也可用于登陆linux</li></ul></li></ul><h2 id="通过命令安装" tabindex="-1"><a class="header-anchor" href="#通过命令安装" aria-hidden="true">#</a> 通过命令安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span>  xrdp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="添加用户到组" tabindex="-1"><a class="header-anchor" href="#添加用户到组" aria-hidden="true">#</a> 添加用户到组</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>默认情况下，Xrdp 使用 /etc/ssl/private/ssl-cert-snakeoil.key 仅“ssl-cert” 用户组可读
<span class="token function">sudo</span> adduser 用户名 ssl-cert
或
<span class="token function">sudo</span> <span class="token function">usermod</span> 用户名 <span class="token parameter variable">-G</span> ssl-cert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置服务" tabindex="-1"><a class="header-anchor" href="#配置服务" aria-hidden="true">#</a> 配置服务</h2><p><strong>配置文档/etc/xrdp/xrdp.ini</strong><br> xrdp.ini 关键部分在globals</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[globals]
bitmap_cache=yes       #位图缓存
bitmap_compression=yes #位图压缩
port=3389              #监听端口
crypt_level=low        #加密程度（none为不加密 low为40位，默认为high 128位，medium为双40位）
channel_code=1         #????
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置文档/etc/xrdp/sesman.ini</strong></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[Globals]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> xrdp
<span class="token function">sudo</span> <span class="token function">service</span> xrdp start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=n("h2",{id:"构建、编译、安装-pulseaudio-模块-实现音频重定向",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构建、编译、安装-pulseaudio-模块-实现音频重定向","aria-hidden":"true"},"#"),e(" 构建、编译、安装 pulseaudio 模块 实现音频重定向")],-1),v=n("br",null,null,-1),b=n("strong",null,"获得的构建文件",-1),m=n("br",null,null,-1),h={href:"https://github.com/neutrinolabs/pulseaudio-module-xrdp/wiki/Build-on-Debian-or-Ubuntu",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"获得的文件构建",-1),x=n("strong",null,"两种方式",-1),_=n("li",null,"一种是从 pulseaudio 服务器构建中提取内部开发文件，或执行脚本 『暂不使用这种方式』",-1),k={href:"https://github.com/lnee94/pulseaudio-headers-xrdb/releases/tag/v1.0",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"pkg -i pulseaudio-headers-xrdb.deb",-1),w=n("code",null,"/opt/pulseaudio-headers-xrdb/",-1),D=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">wget</span> https://github.com/lnee94/pulseaudio-headers-xrdb/releases/download/v1.0/pulseaudio-headers-xrdb.deb
pkg <span class="token parameter variable">-i</span> pulseaudio-headers-xrdb.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译 xrdp pulseaudio 模块</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译构建 pulseaudio 模块本身需要一些构建工具和包开发工具</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential dpkg-dev libpulse-dev <span class="token function">git</span> autoconf libtool

<span class="token builtin class-name">cd</span> ~
<span class="token function">git</span> clone https://github.com/neutrinolabs/pulseaudio-module-xrdp.git
<span class="token builtin class-name">cd</span> pulseaudio-module-xrdp

./bootstrap <span class="token operator">&amp;&amp;</span> ./configure <span class="token assign-left variable">PULSE_DIR</span><span class="token operator">=</span>/opt/pulseaudio-headers-xrdb/
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装 xrdp pulseaudio 模块</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> pulseaudio-module-xrdp
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># 该命令执行后，</span>
<span class="token comment"># 构建的模块将被安装在正确的目录</span>
<span class="token comment"># 同时：a script load_pa_modules.sh to load the modules when a session is started. On many systems this script is installed by default in /usr/libexec/pulseaudio-module-xrdp/</span>
<span class="token comment"># 同时：Install a desktop file pulseaudio-xrdp.desktop which will call the load_pa_modules.sh script when a desktop is loaded. On many systems this script is installed by default in /etc/xdg/autostart</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>确认是否安装成功</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls $(pkg-config --variable=modlibexecdir libpulse) | grep xrdp
# 输出结果中应当包含
# module-xrdp-sink.so
# module-xrdp-source.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(L,S){const s=d("ExternalLinkIcon");return r(),t("div",null,[u,o(` 

## 通过源码编译安装安装
\`\`\`shell
# 在github上下载
wget https://github.com/neutrinolabs/xrdp/releases/download/v0.9.19/xrdp-0.9.19.tar.gz
# 解压
tar -xvf xrdp-0.9.19.tar.gz
# 
cd ./xrdp-0.9.19

# 略： 刚发现详细安装过程github的wiki上都有
\`\`\` 

`),p,n("p",null,[e("data：2022-08-15"),v,b,m,e(" 根据官方wiki文章"),n("a",h,[e("《Build-on-Debian-or-Ubuntu（在 Debian 或 Ubuntu 上构建）》"),a(s)]),e("可知，"),g,e("有"),x,e("，")]),n("ul",null,[_,n("li",null,[e("另一方种方式是直接下载已经构建好的文件"),n("a",k,[e("pulseaudio-headers-xrdb"),a(s)]),e("并通过命令安装"),f,e(",将会解压到目录"),w])]),D])}const R=l(c,[["render",y],["__file","ubuntu下配置xRDP过程记录.html.vue"]]);export{R as default};
