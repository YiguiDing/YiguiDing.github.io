import{_ as l,r as d,o as r,c,a as n,b as s,f as a,e as i}from"./app-9bfad6cb.js";const t={},o=i(`<h1 id="alpine-linux-ish-and-utm-配置过程记录" tabindex="-1"><a class="header-anchor" href="#alpine-linux-ish-and-utm-配置过程记录" aria-hidden="true">#</a> Alpine Linux(iSH and UTM)配置过程记录</h1><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><a href="#alpine-linuxish-and-utm%E9%85%8D%E7%BD%AE%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95">Alpine Linux(iSH and UTM)配置过程记录</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E4%B8%80%E6%8D%A2%E6%BA%90%E9%85%8D%E7%BD%AE">一、换源配置</a></li><li><a href="#%E4%BA%8C%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6">二、安装软件</a></li><li><a href="#%E4%B8%89%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E7%AE%A1%E7%90%86openrc">三、配置服务管理openrc</a></li><li><a href="#%E9%85%8D%E7%BD%AE%E5%BC%80%E5%90%AFssh%E6%9C%8D%E5%8A%A1">配置开启ssh服务</a></li><li><a href="#%E5%AE%9E%E7%8E%B0ish%E5%90%8E%E5%8F%B0%E8%BF%90%E8%A1%8C%E9%85%8D%E7%BD%AE">实现ish后台运行配置</a></li><li><a href="#%E5%B0%9D%E8%AF%95%E5%AE%89%E8%A3%85vscode%E7%BD%91%E9%A1%B5%E7%89%88">尝试安装vsCode网页版</a><ul><li><a href="#%E5%B0%9D%E8%AF%951%E5%9C%A8ish%E4%B8%AD%E5%B0%9D%E8%AF%95%E9%80%9A%E8%BF%87npm%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE%E5%A4%B1%E8%B4%A5">尝试1：在iSH中尝试通过npm安装（配置失败）</a></li><li><a href="#%E5%B0%9D%E8%AF%952%E5%9C%A8ish%E4%B8%AD%E5%B0%9D%E8%AF%95%E9%80%9A%E8%BF%87docker%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE%E5%A4%B1%E8%B4%A5">尝试2：在iSH中尝试通过docker安装（配置失败）</a></li><li><a href="#%E5%B0%9D%E8%AF%953%E5%9C%A8utm%E4%B8%AD%E5%AE%89%E8%A3%85alpine3161%E5%86%8D%E5%B0%9D%E8%AF%95%E4%BD%BF%E7%94%A8npm%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE%E5%A4%B1%E8%B4%A5">尝试3：在UTM中安装Alpine3.16.1再尝试使用npm安装（配置失败）</a></li><li><a href="#%E5%B0%9D%E8%AF%954%E5%9C%A8utm%E4%B8%AD%E5%AE%89%E8%A3%85alpine3161%E5%86%8D%E5%B0%9D%E8%AF%95%E4%BD%BF%E7%94%A8yarn%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE%E5%A4%B1%E8%B4%A5">尝试4：在UTM中安装Alpine3.16.1再尝试使用yarn安装（配置失败）</a></li><li><a href="#%E5%B0%9D%E8%AF%955%E5%9C%A8utm%E4%B8%AD%E5%AE%89%E8%A3%85alpine3161%E5%86%8D%E5%B0%9D%E8%AF%95%E4%BD%BF%E7%94%A8release%E7%89%88%E6%9C%AC%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE%E5%A4%B1%E8%B4%A5">尝试5：在UTM中安装Alpine3.16.1再尝试使用release版本安装（配置失败）</a></li><li><a href="#%E5%B0%9D%E8%AF%956%E5%9C%A8utm%E4%B8%AD%E5%AE%89%E8%A3%85alpine3161%E5%B9%B6%E5%BC%80%E5%90%AFjit%E5%86%8D%E5%B0%9D%E8%AF%95%E4%BD%BF%E7%94%A8release%E7%89%88%E6%9C%AC%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F">尝试6：在UTM中安装Alpine3.16.1并开启JIT再尝试使用release版本安装（成功）</a></li></ul></li></ul></li></ul><h2 id="一、换源配置" tabindex="-1"><a class="header-anchor" href="#一、换源配置" aria-hidden="true">#</a> 一、换源配置</h2><p><strong>1.编辑文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/apk/repositories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.添加内容 注意版本号要和原来的一致</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 任选一组</span>
<span class="token comment"># 阿里云源 实测可以使用</span>
http://mirrors.aliyun.com/alpine/v3.12/main
http://mirrors.aliyun.com/alpine/v3.12/community
<span class="token comment"># 中科大源 实测可以使用</span>
http://mirrors.ustc.edu.cn/alpine/v3.12/main
http://mirrors.ustc.edu.cn/alpine/v3.12/community
<span class="token comment"># 清华源 实测可以使用</span>
http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/main
http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/community
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.更新</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apk update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4.另一种一步到位的方法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> .profile <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
echo &#39;http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.14/main&#39; &gt; /etc/apk/repositories
echo &#39;http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.14/community&#39; &gt;&gt; /etc/apk/repositories
EOF</span>
<span class="token comment"># 执行</span>
<span class="token builtin class-name">source</span> .profile
<span class="token comment"># 应用修改</span>
apk update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、安装软件" tabindex="-1"><a class="header-anchor" href="#二、安装软件" aria-hidden="true">#</a> 二、安装软件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apk <span class="token function">add</span> openrc
apk <span class="token function">add</span> <span class="token function">curl</span>
apk <span class="token function">add</span> <span class="token function">npm</span>
apk <span class="token function">add</span> <span class="token function">git</span>
apk <span class="token function">add</span> nss <span class="token comment">#for https</span>
apk <span class="token function">add</span> openssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、配置服务管理openrc" tabindex="-1"><a class="header-anchor" href="#三、配置服务管理openrc" aria-hidden="true">#</a> 三、配置服务管理openrc</h2><p><strong>1.安装openrc</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apk <span class="token function">add</span> openrc
<span class="token comment"># 注意 要先安装openrc 再安装要启动的服务比如docker 否则提示服务不存在</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.编辑/etc/inittab 将<code>::sysinit:/sbin/openrc sysinit</code>中的<code>sysinit</code>删除</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/inittab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3.重启ish</strong></p><p><strong>4.添加服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rc-update <span class="token function">add</span> sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5.删除服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rc-update del sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>6.启动服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rc-service sshd start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>7.暂停服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rc-service sshd stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>8.查询服务状态</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rc-status <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置开启ssh服务" tabindex="-1"><a class="header-anchor" href="#配置开启ssh服务" aria-hidden="true">#</a> 配置开启ssh服务</h2><p><strong>1. 安装ssh</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apk <span class="token function">add</span> openssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.为本机生成SSH主机秘钥</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3.临时启动守护进程</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/sbin/sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4.将守护进程添加到开机启动</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rc-update <span class="token function">add</span> sshd
<span class="token comment"># 移除开机自启服务：rc-update del sshd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.启动服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rc-service sshd start
<span class="token comment"># 暂停服务：rc-service sshd stop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6.配置sshd</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/ssh/sshd_config  <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
# 允许root登录 禁止密码登录
# PermitRootLogin prohibit-password
# 允许root登录
PermitRootLogin yes
# 允许公钥登录
PubkeyAuthentication yes
# 允许密码登录
PasswordAuthentication yes                                       
# 不允许空密码
PermitEmptyPasswords no
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现ish后台运行配置" tabindex="-1"><a class="header-anchor" href="#实现ish后台运行配置" aria-hidden="true">#</a> 实现ish后台运行配置</h2><p><strong>1.关键代码</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 说明：ish是ios系统上的应用程序，为使iSH进程能够支持长期后台运行而不被杀死，需要不断获取手机位置信息</span>
<span class="token function">cat</span> /dev/location <span class="token operator">&gt;</span> /dev/null <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.配置</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;cat /dev/location &gt; /dev/null &amp;&#39;</span> <span class="token operator">&gt;&gt;</span> .profile
<span class="token function">cat</span> .profile <span class="token comment"># 检查配置是否成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尝试安装vscode网页版" tabindex="-1"><a class="header-anchor" href="#尝试安装vscode网页版" aria-hidden="true">#</a> 尝试安装vsCode网页版</h2><h3 id="尝试1-在ish中尝试通过npm安装-配置失败" tabindex="-1"><a class="header-anchor" href="#尝试1-在ish中尝试通过npm安装-配置失败" aria-hidden="true">#</a> 尝试1：在iSH中尝试通过npm安装（配置失败）</h3><p><strong>先要安装<code>npm</code>和<code>nodejs</code></strong><br> 但由于npm软件最新版使用了一些ish没有实现的指令 导致运行npm会提示非法指令 所以只能安装低版本</p><p><strong>1.修改 /etc/apk/repositories 将版本改为3.12版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> .profile <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
echo &#39;http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/main&#39; &gt; /etc/apk/repositories
echo &#39;http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/community&#39; &gt;&gt; /etc/apk/repositories
EOF</span>
<span class="token comment"># 更新</span>
apk update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.安装</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apk <span class="token function">add</span> <span class="token assign-left variable">nodejs</span><span class="token operator">=</span><span class="token number">12.22</span>.12-r0 <span class="token assign-left variable">npm</span><span class="token operator">=</span><span class="token number">12.22</span>.12-r0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3.npm换为国内源</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com
<span class="token comment"># 或者安装yarn: npm install -g yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.然后安装code-server</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> code-server --unsafe-perm
<span class="token comment"># 然后在这一步卡死了</span>
<span class="token comment"># ish1.2.3（build298） 卡在了yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尝试2-在ish中尝试通过docker安装-配置失败" tabindex="-1"><a class="header-anchor" href="#尝试2-在ish中尝试通过docker安装-配置失败" aria-hidden="true">#</a> 尝试2：在iSH中尝试通过docker安装（配置失败）</h3><p><strong>1.安装docker和compose</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apk <span class="token function">add</span> <span class="token function">docker</span>
apk <span class="token function">add</span> <span class="token function">docker-compose</span>
<span class="token comment"># compose可以根据yml文件中的配置来启动docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.下载coder</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/coder/coder.git <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3.临时启动守护进程测试</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rc-service <span class="token function">docker</span> start
<span class="token comment"># 报错并卡死：</span>
<span class="token comment"># 原因：ish没有实现filesystems文件</span>
<span class="token comment"># 报错提示：grep: /proc/filesystems: No such file</span>
<span class="token comment"># 如果直接执行： rc-update add sshd 会导致卡死</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.启动</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">CODER_ACCESS_URL</span><span class="token operator">=</span>http://localhost:7080
<span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尝试3-在utm中安装alpine3-16-1再尝试使用npm安装-配置失败" tabindex="-1"><a class="header-anchor" href="#尝试3-在utm中安装alpine3-16-1再尝试使用npm安装-配置失败" aria-hidden="true">#</a> 尝试3：在UTM中安装Alpine3.16.1再尝试使用npm安装（配置失败）</h3><p>安装UTM 在UTM中安装Alpine3.16.1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装时最好设置好密码</span>
<span class="token comment"># 并且在提示：# PermitRootLogin prohibit-password ？</span>
<span class="token comment"># 输入yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装nodejs npm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装过程依赖python</span>
apk <span class="token function">add</span> python3
<span class="token comment"># code-server要求node16 ： code-server@4.5.1: wanted: {&quot;node&quot;:&quot;16&quot;} (current: {&quot;node&quot;:&quot;12.22.12&quot;,&quot;npm&quot;:&quot;6.14.16&quot;})</span>
apk <span class="token function">add</span> <span class="token assign-left variable">nodejs</span><span class="token operator">=</span><span class="token number">16.16</span>.0-r0 <span class="token function">npm</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> code-server --unsafe-perm
<span class="token comment"># 依旧报错 ：  gyp: Undefined variable module_name in binding.gyp while trying to load binding.gyp</span>
<span class="token comment"># 还是argon2的问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,73),p={href:"https://github.com/coder/code-server/issues/5184",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"尝试4-在utm中安装alpine3-16-1再尝试使用yarn安装-配置失败",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#尝试4-在utm中安装alpine3-16-1再尝试使用yarn安装-配置失败","aria-hidden":"true"},"#"),s(" 尝试4：在UTM中安装Alpine3.16.1再尝试使用yarn安装（配置失败）")],-1),u={href:"https://github.com/coder/code-server/issues/5174",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
<span class="token function">sudo</span> <span class="token function">yarn</span> global <span class="token function">add</span> code-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>绷不住了！！！ 报错超时，好像是虚拟机的问题！！！</strong></p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>ipad:~# npm install yarn -g
added 1 package in 1m
ipad:~# sudo yarn global add code-server
-ash: sudo: not found
ipad:~# yarn global add code-server
yarn global v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning &quot;code-server &gt; @coder/logger@1.1.16&quot; has unmet peer dependency &quot;@google-cloud/logging@^4.5.2&quot;.
[4/4] Building fresh packages...
success Installed &quot;code-server@4.5.1&quot; with binaries:
      - code-server
Done in 893.96s.
ipad:~# code-server 
[2022-08-06T18:56:50.068Z] info  Wrote default config file to ~/.config/code-server/config.yaml
[2022-08-06T18:57:00.929Z] error timed out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尝试5-在utm中安装alpine3-16-1再尝试使用release版本安装-配置失败" tabindex="-1"><a class="header-anchor" href="#尝试5-在utm中安装alpine3-16-1再尝试使用release版本安装-配置失败" aria-hidden="true">#</a> 尝试5：在UTM中安装Alpine3.16.1再尝试使用release版本安装（配置失败）</h3><p>既然在UTM安装的是64bit版本的系统 为什么不直接使用release版本？？？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">wget</span> https://github.com/coder/code-server/releases/download/v4.5.1/code-server-4.5.1-linux-amd64.tar.gz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ./code-server-4.5.1-linux-amd64

<span class="token builtin class-name">cd</span> ./code-server-4.5.1-linux-amd64
<span class="token comment"># 执行，报错：./lib/node not fond</span>
./code-server
<span class="token comment"># 安装node</span>
apk <span class="token function">add</span> <span class="token function">node</span> 
<span class="token comment"># 查看安装目录</span>
<span class="token function">which</span> <span class="token function">node</span>
<span class="token comment"># 建立软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/node ./lib/node

<span class="token comment"># 再次执行</span>
./code-server
<span class="token comment"># 依旧报错</span>
<span class="token comment"># [2022-08-06T18:57:00.929Z] error timed out</span>

<span class="token comment"># 查文档得知要求：glibc &gt;= 2.17 and glibcxx &gt;= v3.4.18</span>
<span class="token comment"># 而</span>
<span class="token comment">#alpine linux追求系统小，默认使用了uclibc，但用glibc编译的程序无法直接在上面运行了。</span>
<span class="token comment">#需要自行安装第三方的alpine glibc，然后就可以无障碍运行其他机器编译的依赖glibc的程序了。</span>


<span class="token comment"># 查了issue #1706 发现code-server 对于glibc glibcxx已经静态编译了 不需要系统自带静态链接库了</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尝试6-在utm中安装alpine3-16-1并开启jit再尝试使用release版本安装-成功" tabindex="-1"><a class="header-anchor" href="#尝试6-在utm中安装alpine3-16-1并开启jit再尝试使用release版本安装-成功" aria-hidden="true">#</a> 尝试6：在UTM中安装Alpine3.16.1并开启JIT再尝试使用release版本安装（成功）</h3><p>方法同上，UTM使用JIT（jitterbug）启动，终于可以了！！！原来是运行速度的问题</p><p>完整过程：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">wget</span> https://github.com/coder/code-server/releases/download/v4.5.1/code-server-4.5.1-linux-amd64.tar.gz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ./code-server-4.5.1-linux-amd64
<span class="token comment"># 递归创建文件夹</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.local/lib ~/.local/bin
<span class="token comment"># 移动并改名</span>
<span class="token function">mv</span> ./code-server-4.5.1-linux-amd64 ~/.local/lib/code-server-4.5.1/
<span class="token comment"># 建立软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> ~/.local/lib/code-server-4.5.1/bin/code-server ~/.local/bin/code-server
<span class="token comment"># 添加到环境变量</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/root/.local/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token comment"># 运行</span>
code-server 



<span class="token comment"># 如果提示-ash: node: not found 则为node添加软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/node ~/.local/lib/code-server-4.5.1/lib/node
<span class="token comment"># 原因：</span>
<span class="token comment"># 使用命令：ldd ~/.local/lib/code-server-4.5.1/lib/node</span>
<span class="token comment"># 可以发现缺少一些动态链接库，因为alpine是阉割版的linux</span>
<span class="token comment"># 所以直接apk add nodejs</span>
<span class="token comment"># 然后删除原文件</span>
<span class="token comment"># rm ~/.local/lib/code-server-4.5.1/lib/node</span>
<span class="token comment"># which node 查看刚安装的node的所在目录</span>
<span class="token comment"># 然后添加软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/node ~/.local/lib/code-server-4.5.1/lib/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编辑配置文件修改密码</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ~/.config/code-server/config.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
bind-addr: 0.0.0.0:80
auth: password
password: *****数字加英文*****
cert: false
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置自动添加环境变量</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi .profile
PATH=&quot;/root/.local/bin:$PATH&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置开机自启服务（暂时没有解决输出重定向的问题）</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/init.d/vscode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/sbin/openrc-run</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;vscode&quot;</span>
<span class="token assign-left variable">command</span><span class="token operator">=</span><span class="token string">&quot;/root/.local/bin/code-server &gt; /dev/null &amp; &quot;</span>
<span class="token comment">#command_background=&quot;yes&quot;</span>
<span class="token function-name function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        need net
        after sshd
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改权限 否则提示* rc-service: Permission denied</span>
<span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/vscode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>管理服务
列出所有可用服务
rc-service <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> vscode

启动/停止/重启 已有服务
rc-service 服务名 start/stop/restart
或
/etc/init.d/服务名 start/stop/restart

添加到开机自启动
rc-update <span class="token function">add</span> vscode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function b(h,g){const e=d("ExternalLinkIcon");return r(),c("div",null,[o,n("p",null,[s("尝试1、3出错原因和这个类似："),n("a",p,[s("#5184"),a(e)])]),v,n("p",null,[s("该方法根据自issue："),n("a",u,[s("#5174"),a(e)])]),m])}const E=l(t,[["render",b],["__file","index.html.vue"]]);export{E as default};
