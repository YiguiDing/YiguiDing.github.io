import{_ as n,o as s,c as e,e as a}from"./app-b215a924.js";const i={},l=a(`<h1 id="frp配置过程记录-ipad远程登录电脑" tabindex="-1"><a class="header-anchor" href="#frp配置过程记录-ipad远程登录电脑" aria-hidden="true">#</a> frp配置过程记录(ipad远程登录电脑)</h1><h2 id="服务端配置过程" tabindex="-1"><a class="header-anchor" href="#服务端配置过程" aria-hidden="true">#</a> 服务端配置过程</h2><p><strong>准备工作</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从github下载frp的releases版本</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> https://github.com/fatedier/frp/releases/download/v0.44.0/frp_0.44.0_linux_amd64.tar.gz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ./frp_0.44.0_linux_amd64.tar.gz
<span class="token comment"># 进入目录</span>
<span class="token builtin class-name">cd</span> ./frp_0.44.0_linux_amd64
<span class="token comment"># 创建文件夹</span>
<span class="token function">mkdir</span> ~/frps/
<span class="token comment"># 移动</span>
<span class="token function">mv</span> ./frps ~/frps/
<span class="token comment"># 添加执行权限</span>
<span class="token function">chmod</span> +x ~/frps/frps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编写配置文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ~/frps/frps.ini  <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
# frps.ini
[common]
# 这里是基本配置部分
bind_port = 7000
bind_udp_port = 7000

# 这里设置鉴权方式为:token
authentication_method = token
# 随便写一段英文+数字 服务端和客户端需一致
token = swhm3elmbxnbnuqvoh5i5wlitjyymv22
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>临时启动服务测试是否配置成功</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/frps/frps <span class="token parameter variable">-c</span> ~/frps/frps.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>配置开机自启:创建并编辑 frps.service 文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># su用于提权 否则无法使用cat</span>
<span class="token function">su</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/systemd/system/frps.service  <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
# for redhat8
[Unit]
# 服务名称，可自定义
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
# 启动frps的命令，需修改为您的frps的安装路径
# /home/userName/ 为路径
ExecStart = /home/dyg/frps/frps -c /home/dyg/frps/frps.ini

[Install]
WantedBy = multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置开机自启:使用 systemd 命令，管理 frps</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动frp</span>
systemctl start frps
<span class="token comment"># 停止frp</span>
systemctl stop frps
<span class="token comment"># 重启frp</span>
systemctl restart frps
<span class="token comment"># 查看frp状态</span>
systemctl status frps
<span class="token comment"># 配置 frps 开机自启</span>
systemctl <span class="token builtin class-name">enable</span> frps
<span class="token comment"># 取消配置 frps 开机自启</span>
systemctl disable frps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置-win10电脑" tabindex="-1"><a class="header-anchor" href="#客户端配置-win10电脑" aria-hidden="true">#</a> 客户端配置（win10电脑）</h2><p><strong>frpc.ini文件</strong></p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[common]
protocol = tcp
# xx.xx.xx.xx 为服务端ip地址或域名
server_addr = xx.xx.xx.xx
server_port = 7000
authentication_method = token
# 随便写一段英文+数字 服务端和客户端需一致
token = swhm3elmbxnbnuqvoh5i5wlitjyymv22

# win10远程桌面TCP配置
[mstsc_TCP]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 11111

# win10远程桌面UDP配置
[mstsc_UDP]
type = udp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 11111
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动服务</strong><br> 将frpc.exe和frpc.ini放置到相同目录,然后执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./frpc.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="客户端配置2-ubuntu20-04" tabindex="-1"><a class="header-anchor" href="#客户端配置2-ubuntu20-04" aria-hidden="true">#</a> 客户端配置2（ubuntu20.04）</h2><p>适用于ubuntu centos</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换目录</span>
<span class="token builtin class-name">cd</span> frp_0.44.0_linux_amd64/
<span class="token comment"># frpc拷贝到/usr/local/bin/</span>
<span class="token function">sudo</span> <span class="token function">cp</span> frpc /usr/local/bin/frpc
<span class="token comment"># frpc.ini拷贝到/etc/frp/</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/frp/
<span class="token function">sudo</span> <span class="token function">cp</span> frpc.ini /etc/frp/
<span class="token comment"># 编辑配置为系统服务</span>
<span class="token function">vim</span> /usr/lib/systemd/system/frpc.service
<span class="token comment">#########################################</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>frpc
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">TimeoutStartSec</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/frpc <span class="token parameter variable">-c</span> /etc/frp/frpc.ini
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token variable">$MAINPID</span>
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
<span class="token comment">###########################################</span>

<span class="token comment"># 启动 frp 并设置开机启动</span>
systemctl <span class="token builtin class-name">enable</span> frpc
systemctl start frpc
systemctl status frpc
 
<span class="token comment"># 部分服务器上,可以需要加 .service 后缀来操作,即:</span>
systemctl <span class="token builtin class-name">enable</span> frpc.service
systemctl start frpc.service
systemctl status frpc.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),r=[l];function c(d,t){return s(),e("div",null,r)}const v=n(i,[["render",c],["__file","frp配置过程记录(ipad远程登录电脑).html.vue"]]);export{v as default};
