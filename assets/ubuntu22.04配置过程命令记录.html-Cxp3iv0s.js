import{_ as n,c as s,o as e,b as a}from"./app-BGPrURZl.js";const t={},o=a(`<h1 id="ubuntu22-04配置过程命令记录" tabindex="-1"><a class="header-anchor" href="#ubuntu22-04配置过程命令记录"><span>ubuntu22.04配置过程命令记录</span></a></h1><p>win10关了开机自启的应用 什么程序都没运行 内存竟然吃了近5G CPU吹出来的风热的要死 卸了一堆应用关了一堆系统服务和应用服务内存仍然要吃2.4G 反观最新版的ubuntu22.04 启动至图形界面 只吃了1.5g内存 决定安装使用 在此记录下配置过程 以备不时之需</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ul><li><a href="#ubuntu2204%E9%85%8D%E7%BD%AE%E8%BF%87%E7%A8%8B%E5%91%BD%E4%BB%A4%E8%AE%B0%E5%BD%95">ubuntu22.04配置过程命令记录</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E5%AE%89%E8%A3%85%E7%B3%BB%E7%BB%9F">安装系统</a><ul><li><a href="#%E7%A9%BA%E9%97%B4%E5%88%86%E9%85%8D">空间分配</a></li></ul></li><li><a href="#%E6%8D%A2%E6%BA%90">换源</a></li><li><a href="#%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6">安装软件</a><ul><li><a href="#apt-get%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4">apt-get常用命令</a></li><li><a href="#dpkg%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4">dpkg常用命令</a></li></ul></li><li><a href="#%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1">配置服务</a></li><li><a href="#%E9%98%B2%E7%81%AB%E5%A2%99">防火墙</a></li><li><a href="#%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86">权限管理</a><ul><li><a href="#sudo%E5%91%BD%E4%BB%A4%E6%8F%90%E7%A4%BA%E7%94%A8%E6%88%B7%E4%B8%8D%E5%9C%A8sudoers%E4%B8%AD%E7%9A%84%E9%97%AE%E9%A2%98%E7%9A%84%E8%A7%A3%E5%86%B3">sudo命令提示用户不在sudoers中的问题的解决</a></li></ul></li><li><a href="#%E6%8C%82%E8%BD%BDntfs%E5%88%86%E5%8C%BA">挂载NTFS分区</a><ul><li><a href="#%E8%A7%A3%E5%86%B3%E4%B8%8D%E8%83%BD%E5%86%99%E5%85%A5%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E7%9A%84%E9%97%AE%E9%A2%98">解决不能写入文件系统的问题</a></li></ul></li><li><a href="#%E9%85%8D%E7%BD%AEsshd">配置sshd</a></li><li><a href="#%E9%85%8D%E7%BD%AE%E5%90%88%E4%B8%8A%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%90%8E%E4%B8%8D%E4%BC%91%E7%9C%A0">配置合上笔记本后不休眠</a></li><li><a href="#%E4%BD%BF%E7%94%A8configure%E7%BC%96%E8%AF%91%E6%96%87%E4%BB%B6%E6%97%B6%E4%BE%9D%E8%B5%96%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95">使用<code>./configure</code>编译文件时依赖报错问题的解决方法</a></li><li><a href="#ubuntu%E5%AE%89%E8%A3%85xfce4%E5%B9%B6%E9%85%8D%E7%BD%AExrdp%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95">ubuntu安装xfce4并配置xrdp过程记录</a><ul><li><a href="#%E5%AE%89%E8%A3%85%E5%8F%8A%E9%85%8D%E7%BD%AE">安装及配置</a></li><li><a href="#%E5%9C%A8xfce%E4%B8%AD%E4%B8%8D%E8%83%BD%E6%89%93%E5%BC%80%E7%BB%88%E7%AB%AF%E7%9A%84%E8%A7%A3%E5%86%B3">在xfce中不能打开终端的解决</a></li></ul></li><li><a href="#ubuntu%E5%AE%89%E8%A3%85gnome%E5%B9%B6%E9%85%8D%E7%BD%AExrdp%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95">ubuntu安装gnome并配置xrdp过程记录</a><ul><li><a href="#%E5%AE%89%E8%A3%85%E5%8F%8A%E9%85%8D%E7%BD%AE-1">安装及配置</a></li><li><a href="#%E8%A7%A3%E5%86%B3%E8%89%B2%E5%BD%A9%E7%AE%A1%E7%90%86%E8%AE%BE%E5%A4%87-%E5%BC%B9%E7%AA%97">解决“色彩管理设备” 弹窗</a></li><li><a href="#%E8%A7%A3%E5%86%B3%E5%88%B7%E6%96%B0%E7%B3%BB%E7%BB%9F%E8%BD%AF%E4%BB%B6%E6%BA%90%E9%9C%80%E8%A6%81%E8%AE%A4%E8%AF%81--refresh-the-system-repositories-%E5%BC%B9%E7%AA%97">解决“刷新系统软件源需要认证” / “refresh the system repositories” 弹窗</a></li><li><a href="#xrdp%E8%BF%9C%E7%A8%8B%E6%A1%8C%E9%9D%A2%E8%BF%9E%E6%8E%A5ubuntu%E5%90%8E%E6%B2%A1%E6%9C%89-dock%E6%A1%8C%E9%9D%A2%E5%9B%BE%E6%A0%87-%E8%83%8C%E5%90%8E%E7%9A%84%E7%A8%8B%E5%BA%8F%E4%BB%AC">XRDP远程桌面连接Ubuntu后没有 Dock、桌面图标 背后的程序们</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E9%BB%98%E8%AE%A4%E6%A1%8C%E9%9D%A2%E9%85%8D%E7%BD%AE">使用默认桌面配置</a></li></ul></li></ul></li></ul><h2 id="安装系统" tabindex="-1"><a class="header-anchor" href="#安装系统"><span>安装系统</span></a></h2><h3 id="空间分配" tabindex="-1"><a class="header-anchor" href="#空间分配"><span>空间分配</span></a></h3><ul><li><code>/</code> <strong>根目录</strong> 10-15-20g 足以 此处分配剩余的所有空间 <ul><li><code>/home</code> <strong>家目录</strong> 应当分配剩余的所有空间 此处未单独分配</li><li><code>/var</code> <strong>存放数据库或程序输出日志的目录</strong> 应当视情况而定 此处未单独分配</li><li><code>/boot</code> <strong>引导分区</strong> 512MB 可有可无 但最好单独分区 否则系统无法引导就只能重装系统了</li></ul></li><li><code>swap</code> <strong>交换分区</strong> 一倍内存大小足矣</li><li><code>efi</code> <strong>efi系统分区</strong> 512MB</li></ul><h2 id="换源" tabindex="-1"><a class="header-anchor" href="#换源"><span>换源</span></a></h2><p><strong>备份</strong></p><pre><code class="language-bash"><span class="token function">sudo</span> <span class="token function">cp</span> /etc/apt/sources.list /etc/apt/sources.list.bak
</code></pre><p><strong>编辑创建新文件</strong></p><pre><code class="language-bash"><span class="token function">sudo</span> gedit /etc/apt/sources.list
</code></pre><p><strong>写入文件</strong></p><pre><code class="language-bash"><span class="token comment"># 清华源</span>
<span class="token comment"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span>
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse</span>
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse</span>
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse</span>
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse</span>
<span class="token comment"># 预发布软件源，不建议启用</span>
<span class="token comment"># deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse</span>
<span class="token comment"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse</span>
</code></pre><p><strong>更新软件包列表（Source）</strong></p><pre><code class="language-bash"><span class="token function">apt-get</span> update
    <span class="token comment"># 其他操作：</span>
    <span class="token comment"># 更新已安装的软件包 (谨慎使用，会导致linux内核升级到最新版本)</span>
    <span class="token comment"># apt-get upgrade</span>
    <span class="token comment"># 更新已安装的软件包（识别并处理依赖关系的改变）</span>
    <span class="token comment"># apt-get dist-upgrade</span>
</code></pre><h2 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件"><span>安装软件</span></a></h2><p><strong>常用软件包名称</strong></p><ul><li>python3.10</li><li>python3-pip</li></ul><h3 id="apt-get常用命令" tabindex="-1"><a class="header-anchor" href="#apt-get常用命令"><span>apt-get常用命令</span></a></h3><pre><code class="language-bash"><span class="token comment"># 普通安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> PackageName
<span class="token comment"># 安装指定包的指定版本</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token assign-left variable">PackageName</span><span class="token operator">=</span>VersionName
<span class="token comment"># 重新安装</span>
<span class="token function">apt-get</span> <span class="token parameter variable">--reinstall</span> <span class="token function">install</span> PackageName
</code></pre><pre><code class="language-bash"><span class="token comment"># 修复依赖关系</span>
<span class="token function">apt-get</span> <span class="token parameter variable">-f</span> <span class="token function">install</span>
</code></pre><pre><code class="language-bash"><span class="token comment"># 下载软件包的源码</span>
<span class="token function">apt-get</span> <span class="token builtin class-name">source</span> PackageName
<span class="token comment"># 安装源码包所需要的编译环境</span>
<span class="token function">apt-get</span> build-dep PackageName
</code></pre><pre><code class="language-bash"><span class="token comment"># 删除软件包, 保留配置文件</span>
<span class="token function">apt-get</span> remove PackageName
<span class="token comment"># 删除软件包, 同时删除配置文件</span>
<span class="token function">apt-get</span> <span class="token parameter variable">--purge</span> remove PackageName
</code></pre><pre><code class="language-bash"><span class="token comment"># 清除 已下载的软件包 和 旧软件包</span>
<span class="token function">apt-get</span> clean <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> autoclean
</code></pre><pre><code class="language-bash"><span class="token comment"># 搜索软件包</span>
<span class="token function">apt-cache</span> search PackageName
</code></pre><pre><code class="language-bash"><span class="token comment"># 获取软件包的相关信息, 如说明、大小、版本等</span>
<span class="token function">apt-cache</span> show PackageName
</code></pre><pre><code class="language-bash"><span class="token comment"># 查看该软件包需要哪些依赖包</span>
<span class="token function">apt-cache</span> depends PackageName
<span class="token comment"># 查看该软件包被哪些包依赖</span>
<span class="token function">apt-cache</span> rdepends PackageName
</code></pre><pre><code class="language-bash"><span class="token comment"># 检查是否有损坏的依赖</span>
<span class="token function">apt-get</span> check PackageName
</code></pre><h3 id="dpkg常用命令" tabindex="-1"><a class="header-anchor" href="#dpkg常用命令"><span>dpkg常用命令</span></a></h3><ul><li>dpkg 是Debian Package的简写，是为Debian 专门开发的套件管理系统，方便软件的安装、更新及移除。</li><li>所有源自Debian的Linux发行版都使用dpkg，如Ubuntu</li></ul><pre><code class="language-bash"><span class="token comment"># 安装本地Debian软件包</span>
dpkg <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>package.deb<span class="token operator">&gt;</span>
<span class="token comment"># 列出包内容</span>
dpkg <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>package.deb<span class="token operator">&gt;</span>
<span class="token comment"># 提取包裹信息(可以查看包的正式名称，用于卸载)</span>
dpkg <span class="token parameter variable">-I</span> <span class="token operator">&lt;</span>package.deb<span class="token operator">&gt;</span>
</code></pre><pre><code class="language-bash"><span class="token comment"># 列出已安装的所有软件包</span>
dpkg <span class="token parameter variable">-l</span>
<span class="token comment"># 列出安装的所有文件清单</span>
dpkg <span class="token parameter variable">-L</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
</code></pre><pre><code class="language-bash"><span class="token comment"># 移除一个已安装的包裹 并删掉数据和可执行文件</span>
dpkg <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
<span class="token comment"># 完全清除一个已安装的包裹 并删掉数据和可执行文件 并删除所有的配置文件</span>
dpkg <span class="token parameter variable">-P</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
</code></pre><pre><code class="language-bash"><span class="token comment"># 显示已安装包裹的信息</span>
dpkg <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
<span class="token comment"># 重新配制一个已经安装的包裹，如果它使用的是 debconf (debconf 为包裹安装提供了一个统一的配制界面)</span>
dpkg-reconfigure <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
</code></pre><h2 id="配置服务" tabindex="-1"><a class="header-anchor" href="#配置服务"><span>配置服务</span></a></h2><pre><code class="language-bash"><span class="token comment"># 编辑配置为系统服务</span>
<span class="token function">vim</span> /usr/lib/systemd/system/XXXX.service
<span class="token comment">#########################################</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>XXXX
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">TimeoutStartSec</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/XXXX <span class="token parameter variable">-c</span> /etc/frp/XXXX.ini
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token variable">$MAINPID</span>
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
<span class="token comment">###########################################</span>

<span class="token comment"># 启动 frp 并设置开机启动</span>
systemctl <span class="token builtin class-name">enable</span> XXXX
systemctl start XXXX
systemctl status XXXX
 
<span class="token comment"># 部分服务器上,可以需要加 .service 后缀来操作,即:</span>
systemctl <span class="token builtin class-name">enable</span> XXXX.service
systemctl start XXXX.service
systemctl status XXXX.service
</code></pre><h2 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙"><span>防火墙</span></a></h2><pre><code class="language-bash"><span class="token comment"># 查看防火墙状态</span>
<span class="token function">sudo</span> ufw status
<span class="token comment"># 开启防火墙</span>
<span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
<span class="token comment"># 关闭防火墙</span>
<span class="token function">sudo</span> ufw disable
</code></pre><h2 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理"><span>权限管理</span></a></h2><h3 id="sudo命令提示用户不在sudoers中的问题的解决" tabindex="-1"><a class="header-anchor" href="#sudo命令提示用户不在sudoers中的问题的解决"><span>sudo命令提示用户不在sudoers中的问题的解决</span></a></h3><p>根据文件<code>/etc/sudoers</code>内容可知,只需要将指定用户添加到sudo组,指定的用户就能得到执行sudo命令的权限</p><pre><code class="language-txt"># root 用户拥有所有权限 可在此添加一行给某个用户root权限
root    ALL=(ALL:ALL) ALL

# admin 组的成员拥有root权限
%admin ALL=(ALL) ALL

# sudo 组的成员拥有执行任何命令的权限
%sudo   ALL=(ALL:ALL) ALL
</code></pre><p>只需要将用户添加到sudo组(添加为附加组)</p><pre><code class="language-bash"><span class="token function">usermod</span> 你的用户名 <span class="token parameter variable">-G</span> <span class="token function">sudo</span>
<span class="token comment"># 修改用户组后可能需重启生效</span>
</code></pre><h2 id="挂载ntfs分区" tabindex="-1"><a class="header-anchor" href="#挂载ntfs分区"><span>挂载NTFS分区</span></a></h2><p><strong>查看所有磁盘分区情况</strong></p><pre><code class="language-bash"><span class="token function">fdisk</span> <span class="token parameter variable">-l</span>
</code></pre><p><strong>查看磁盘分区挂载情况</strong></p><pre><code class="language-bash"><span class="token function">df</span> <span class="token parameter variable">-h</span>
</code></pre><p><strong>查看目标分区的UUID</strong></p><pre><code class="language-bash"><span class="token function">sudo</span> blkid <span class="token operator">|</span><span class="token function">grep</span> sdb2
</code></pre><p><strong>查看ubuntu是否安装了ntfs-3g软件包</strong></p><pre><code class="language-bash">dpkg <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> ntfs
<span class="token comment"># 没有则安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> ntfs-3g
</code></pre><p><strong>临时挂载磁盘</strong></p><pre><code class="language-bash"><span class="token function">mount</span> <span class="token parameter variable">-t</span> ntfs-3g <span class="token parameter variable">-o</span> <span class="token assign-left variable">umask</span><span class="token operator">=</span>022 /dev/sdc5 /mnt/E/
</code></pre><p><strong>卸载挂载的磁盘</strong></p><pre><code class="language-bash"><span class="token function">umount</span> /mnt/E/
</code></pre><p><strong>配置开机自动挂载磁盘</strong></p><pre><code class="language-bash"><span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab
</code></pre><p><strong>配置方法1：</strong></p><pre><code class="language-bash"><span class="token comment"># 挂载的分区使用默认的权限，也就是属于用户root 属于root组</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>EA06BA3106B9FF1F /mnt/E/ ntfs-3g defaults <span class="token number">0</span> <span class="token number">2</span>
</code></pre><p><strong>配置方法2：</strong></p><ul><li>使用<code>UUID</code>的好处是可以保证在重新分区后仍然能够唯一定位一个分区 若使用<code>/dev/sdb3</code>的方式则会在分区数量改变后发生错误</li><li><code>rw</code>表示读写 <code>dmask</code> 是目录权限掩码 <code>fmask</code> 是文件权限掩码 <code>uid</code> 和 <code>gid</code> 可分别通过 <code>id -u</code> <code>id -g</code>获取</li><li><code>&lt;dump&gt;</code> 为0时 <code>dump</code> 工具不会对其备份,为 1 时则会</li><li><code>&lt;pass&gt;</code> 为0时 <code>fsck</code> 工具不会对其检查,为 1 2 时则会,根目录应当获得最高的优先权 1, 其它所有需要被检查的设备设置为 2</li></ul><pre><code class="language-bash"><span class="token comment"># &lt;file system&gt; &lt;mount point&gt;   &lt;type&gt;  &lt;options&gt;       &lt;dump&gt;  &lt;pass&gt;</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>EA06BA3106B9FF1F /mnt/E/ ntfs-3g rw,uid<span class="token operator">=</span><span class="token number">1000</span>,gid<span class="token operator">=</span><span class="token number">1000</span>,dmask<span class="token operator">=</span>022,fmask<span class="token operator">=</span><span class="token number">111</span> <span class="token number">0</span> <span class="token number">2</span>
</code></pre><p><strong>挂载测试：检查fstab有无错误</strong></p><pre><code class="language-bash"><span class="token function">mount</span> <span class="token parameter variable">-a</span>
</code></pre><p><strong>创建软连接到桌面</strong></p><pre><code class="language-bash"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /mnt/D ~/Desktop/D
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /mnt/E ~/Desktop/E
</code></pre><h3 id="解决不能写入文件系统的问题" tabindex="-1"><a class="header-anchor" href="#解决不能写入文件系统的问题"><span>解决不能写入文件系统的问题</span></a></h3><p><strong>问题:</strong> 无法写入文件系统,且umount后,重新执行<code>mount -a</code>时,报错 <code>Could not mount read-write, trying read-only</code></p><p><strong>解决:</strong> 该报错可能是由于文件系统错误导致的,须用ntfsfix命令修复之(ntfsfix包含在ntfs-3g中)</p><pre><code>sudo ntfsfix /dev/sda4
sudo umount /mnt/D/
sudo umount /mnt/E/
</code></pre><h2 id="配置sshd" tabindex="-1"><a class="header-anchor" href="#配置sshd"><span>配置sshd</span></a></h2><p><strong>安装</strong></p><pre><code>apt install openssh-server
</code></pre><p><strong>配置启动服务</strong></p><pre><code># 一条命令启动ssh和sshd
systemctl enable ssh
</code></pre><h2 id="配置合上笔记本后不休眠" tabindex="-1"><a class="header-anchor" href="#配置合上笔记本后不休眠"><span>配置合上笔记本后不休眠</span></a></h2><p><strong>编辑文件/etc/systemd/logind.conf</strong></p><pre><code>HandlePowerKey: 按下电源键后的行为，默认poweroff
HandleSleepKey: 按下挂起键后的行为，默认suspend
HandleHibernateKey: 按下休眠键后的行为，默认hibernate
HandleLidSwitch: 合上笔记本盖后的行为，默认suspend（改为ignore即可）
</code></pre><p><strong>配置完毕后需重启服务</strong></p><pre><code># 如果执行下列代码后黑屏则需重启电脑
sudo service systemd-logind restart
</code></pre><h2 id="使用-configure编译文件时依赖报错问题的解决方法" tabindex="-1"><a class="header-anchor" href="#使用-configure编译文件时依赖报错问题的解决方法"><span>使用<code>./configure</code>编译文件时依赖报错问题的解决方法</span></a></h2><p><strong>故障重现</strong></p><pre><code class="language-bash">./configure
<span class="token comment"># 报错信息</span>
<span class="token comment"># checking for Qt5Svg &gt;= 5.15.2... no</span>
<span class="token comment"># configure: error: Package requirements (Qt5Svg &gt;= 5.15.2) were not met:</span>
<span class="token comment"># you may set the environment variables Qt5Svg_CFLAGS</span>
<span class="token comment"># and Qt5Svg_LIBS to avoid the need to call pkg-config.</span>
</code></pre><pre><code>大概意思就是:提示缺少依赖Qt5Svg,并提示应当指定环境变量 Qt5Svg_CFLAGS Qt5Svg_LIBS
</code></pre><p><strong>查找相关库所在的包的包名</strong></p><pre><code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt-cache</span> search Qt5Svg
<span class="token comment"># 输出: </span>
<span class="token comment"># libqt5svg5 - Qt 5 SVG module</span>
<span class="token comment"># libqt5svg5-dev - Qt 5 SVG module development files</span>
</code></pre><p><strong>安装包名</strong></p><pre><code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libqt5svg5-dev
</code></pre><p><strong>查找包的安装路径</strong></p><pre><code class="language-bash">dpkg <span class="token parameter variable">-L</span> libqt5svg5-dev
<span class="token comment"># 输出信息</span>
<span class="token comment"># /.</span>
<span class="token comment"># /usr</span>
<span class="token comment"># /usr/include</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/QGraphicsSvgItem</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/QSvgGenerator</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/QSvgRenderer</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/QSvgWidget</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/QtSvg</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/QtSvgDepends</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/QtSvgVersion</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/qgraphicssvgitem.h</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/qsvggenerator.h</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/qsvgrenderer.h</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/qsvgwidget.h</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/qtsvgglobal.h</span>
<span class="token comment"># /usr/include/x86_64-linux-gnu/qt5/QtSvg/qtsvgversion.h</span>
<span class="token comment"># /usr/lib</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/cmake</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/cmake/Qt5Gui</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/cmake/Qt5Gui/Qt5Gui_QSvgIconPlugin.cmake</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/cmake/Qt5Gui/Qt5Gui_QSvgPlugin.cmake</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/cmake/Qt5Svg</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/cmake/Qt5Svg/Qt5SvgConfig.cmake</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/cmake/Qt5Svg/Qt5SvgConfigVersion.cmake</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/libQt5Svg.prl</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/pkgconfig</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/pkgconfig/Qt5Svg.pc</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/qt5</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/qt5/mkspecs</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/qt5/mkspecs/modules</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/qt5/mkspecs/modules/qt_lib_svg.pri</span>
<span class="token comment"># /usr/share</span>
<span class="token comment"># /usr/share/doc</span>
<span class="token comment"># /usr/share/doc/libqt5svg5-dev</span>
<span class="token comment"># /usr/share/doc/libqt5svg5-dev/copyright</span>
<span class="token comment"># /usr/lib/x86_64-linux-gnu/libQt5Svg.so </span>
<span class="token comment"># /usr/share/doc/libqt5svg5-dev/changelog.Debian.gz</span>
</code></pre><p><strong>设定环境变量</strong><br> 根据上一步的输出可以推测出</p><ul><li><strong>头文件所在目录(XXX.h所在目录)</strong> 和</li><li><strong>库文件所在目录(XXX.so所在目录)</strong></li></ul><pre><code class="language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">Qt5Svg_CFLAGS</span><span class="token operator">=</span>/usr/include/x86_64-linux-gnu/qt5/QtSvg
<span class="token builtin class-name">export</span> <span class="token assign-left variable">Qt5Svg_LIBS</span><span class="token operator">=</span>/usr/lib/x86_64-linux-gnu
</code></pre><p><strong>重新执行</strong></p><pre><code class="language-bash">./configure
</code></pre><h2 id="ubuntu安装xfce4并配置xrdp过程记录" tabindex="-1"><a class="header-anchor" href="#ubuntu安装xfce4并配置xrdp过程记录"><span>ubuntu安装xfce4并配置xrdp过程记录</span></a></h2><p>当前ubuntu22.04的图像界面是gnome 而xrdp对gnome支持并不好 所以安装xfce4的图像界面</p><h3 id="安装及配置" tabindex="-1"><a class="header-anchor" href="#安装及配置"><span>安装及配置</span></a></h3><p><strong>安装xrdp</strong></p><pre><code>sudo apt-get install xrdp
</code></pre><p><strong>安装xfce4</strong></p><pre><code>sudo apt-get install xfce4
</code></pre><p><strong>配置xrdp开机自启动</strong></p><pre><code># xrdp xrdp的守护进程
sudo service xrdp restart
sudo systemctl enable xrdp
# xrdp-sesman 会话管理的守护进程
sudo service xrdp-sesman restart
sudo systemctl enable xrdp-sesman
</code></pre><p><strong>配置 <code>xrdp</code> 的 <code>/etc/xrdp/startwm.sh</code></strong></p><pre><code># 注释掉原先配置
# test -x /etc/X11/Xsession &amp;&amp; exec /etc/X11/Xsession
# exec /bin/sh /etc/X11/Xsession

# 添加新配置用于启动xfce4
startxfce4
</code></pre><p><strong>由于xrdp远程连接创建后，对登录使用的账户不知道该启动哪个桌面Session会话导致闪退,需手动创建</strong></p><pre><code># vi ~/.xsession
# xfce4桌面
echo xfce4-session &gt; ~/.xsession
</code></pre><h3 id="在xfce中不能打开终端的解决" tabindex="-1"><a class="header-anchor" href="#在xfce中不能打开终端的解决"><span>在xfce中不能打开终端的解决</span></a></h3><p><strong>安装xfce4-terminal</strong></p><pre><code>sudo apt install xfce4-terminal
</code></pre><p><strong>修改默认xfce4的默认terminal</strong><br> 鼠标右键-&gt;<code>applications</code>-&gt;运行程序-&gt;输入：<code>xfce4-settings-manager</code>-&gt; 找到:<code>默认应用程序</code> -&gt; 工具 -&gt; 修改默认terminal为<strong>xfce终端</strong></p><h2 id="ubuntu安装gnome并配置xrdp过程记录" tabindex="-1"><a class="header-anchor" href="#ubuntu安装gnome并配置xrdp过程记录"><span>ubuntu安装gnome并配置xrdp过程记录</span></a></h2><h3 id="安装及配置-1" tabindex="-1"><a class="header-anchor" href="#安装及配置-1"><span>安装及配置</span></a></h3><p><strong>重新安装gnome使其自动解决依赖问题自动安装未安装的工具插件</strong></p><pre><code>sudo apt-get install gnome
</code></pre><p><strong>安装xrdp</strong></p><pre><code>sudo apt-get install xrdp
</code></pre><p><strong>配置xrdp开机自启动</strong></p><pre><code># xrdp xrdp的守护进程
sudo service xrdp restart
sudo systemctl enable xrdp
# xrdp-sesman 会话管理的守护进程
sudo service xrdp-sesman restart
sudo systemctl enable xrdp-sesman
</code></pre><p><strong>配置 <code>xrdp</code> 的 <code>/etc/xrdp/startwm.sh</code></strong></p><pre><code># 维持原先配置
test -x /etc/X11/Xsession &amp;&amp; exec /etc/X11/Xsession
exec /bin/sh /etc/X11/Xsession

</code></pre><p><strong>由于xrdp远程连接创建后，对登录使用的账户不知道该启动哪个桌面Session会话导致闪退,需手动创建</strong></p><pre><code># vi ~/.xsession
# Unity 桌面(老版本)
echo unity&gt; ~/.xsession
 
# ubuntu-desktop 原始桌面
echo gnome-session &gt; ~/.xsession
</code></pre><h3 id="解决-色彩管理设备-弹窗" tabindex="-1"><a class="header-anchor" href="#解决-色彩管理设备-弹窗"><span>解决“色彩管理设备” 弹窗</span></a></h3><p><strong>创建文件 <code>/etc/polkit-1/localauthority/50-local.d/45-allow-colord.pkla</code></strong></p><p><strong>并写入内容：</strong></p><pre><code>[Allow Colord all Users]
Identity=unix-user:*
Action=org.freedesktop.color-manager.create-device;org.freedesktop.color-manager.create-profile;org.freedesktop.color-manager.delete-device;org.freedesktop.color-manager.delete-profile;org.freedesktop.color-manager.modify-device;org.freedesktop.color-manager.modify-profile
ResultAny=no
ResultInactive=no
ResultActive=yes
</code></pre><h3 id="解决-刷新系统软件源需要认证-refresh-the-system-repositories-弹窗" tabindex="-1"><a class="header-anchor" href="#解决-刷新系统软件源需要认证-refresh-the-system-repositories-弹窗"><span>解决“刷新系统软件源需要认证” / “refresh the system repositories” 弹窗</span></a></h3><p><strong>创建文件 <code>/etc/polkit-1/localauthority/50-local.d/46-allow-packagekit.pkla</code></strong></p><p><strong>并写入内容：</strong></p><pre><code>[Allow Refresh Repository all Users]
Identity=unix-user:*
Action=org.freedesktop.packagekit.system-sources-refresh
ResultAny=no
ResultInactive=no
ResultActive=yes
</code></pre><h3 id="xrdp远程桌面连接ubuntu后没有-dock、桌面图标-背后的程序们" tabindex="-1"><a class="header-anchor" href="#xrdp远程桌面连接ubuntu后没有-dock、桌面图标-背后的程序们"><span>XRDP远程桌面连接Ubuntu后没有 Dock、桌面图标 背后的程序们</span></a></h3><p>各个扩展程序可在如下目录中看到<br> cd /usr/share/gnome-shell/extensions/</p><p><strong>安装并执行</strong></p><pre><code>sudo apt-get install gnome-extensions-app 
gnome-extensions-app 
# 然后弹出的窗口中开启dock
</code></pre><h3 id="使用默认桌面配置" tabindex="-1"><a class="header-anchor" href="#使用默认桌面配置"><span>使用默认桌面配置</span></a></h3><p><strong>添加配置文件<code>~/.xsessionrc</code></strong></p><pre><code class="language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GNOME_SHELL_SESSION_MODE</span><span class="token operator">=</span>ubuntu
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">XDG_CURRENT_DESKTOP</span></span><span class="token operator">=</span>ubuntu:GNOME
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">XDG_CONFIG_DIRS</span></span><span class="token operator">=</span>/etc/xdg/xdg-ubuntu:/etc/xdg
</code></pre>`,142),p=[o];function c(r,l){return e(),s("div",null,p)}const u=n(t,[["render",c],["__file","ubuntu22.04配置过程命令记录.html.vue"]]),d=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/ubuntu22.04%E9%85%8D%E7%BD%AE%E8%BF%87%E7%A8%8B%E5%91%BD%E4%BB%A4%E8%AE%B0%E5%BD%95/ubuntu22.04%E9%85%8D%E7%BD%AE%E8%BF%87%E7%A8%8B%E5%91%BD%E4%BB%A4%E8%AE%B0%E5%BD%95.html","title":"ubuntu22.04配置过程命令记录","lang":"zh-CN","frontmatter":{"title":"ubuntu22.04配置过程命令记录","date":"2022-08-12T03:54:00.000Z","cover":"./cover/default_cover.jpg","tag":["ubuntu22"],"category":"笔记","description":"ubuntu22.04配置过程命令记录 win10关了开机自启的应用 什么程序都没运行 内存竟然吃了近5G CPU吹出来的风热的要死 卸了一堆应用关了一堆系统服务和应用服务内存仍然要吃2.4G 反观最新版的ubuntu22.04 启动至图形界面 只吃了1.5g内存 决定安装使用 在此记录下配置过程 以备不时之需 目录 ubuntu22.04配置过程命令...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%90%8E%E7%AB%AF/ubuntu22.04%E9%85%8D%E7%BD%AE%E8%BF%87%E7%A8%8B%E5%91%BD%E4%BB%A4%E8%AE%B0%E5%BD%95/ubuntu22.04%E9%85%8D%E7%BD%AE%E8%BF%87%E7%A8%8B%E5%91%BD%E4%BB%A4%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"ubuntu22.04配置过程命令记录"}],["meta",{"property":"og:description","content":"ubuntu22.04配置过程命令记录 win10关了开机自启的应用 什么程序都没运行 内存竟然吃了近5G CPU吹出来的风热的要死 卸了一堆应用关了一堆系统服务和应用服务内存仍然要吃2.4G 反观最新版的ubuntu22.04 启动至图形界面 只吃了1.5g内存 决定安装使用 在此记录下配置过程 以备不时之需 目录 ubuntu22.04配置过程命令..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T13:06:31.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"ubuntu22"}],["meta",{"property":"article:published_time","content":"2022-08-12T03:54:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T13:06:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ubuntu22.04配置过程命令记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-12T03:54:00.000Z\\",\\"dateModified\\":\\"2023-11-17T13:06:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"安装系统","slug":"安装系统","link":"#安装系统","children":[{"level":3,"title":"空间分配","slug":"空间分配","link":"#空间分配","children":[]}]},{"level":2,"title":"换源","slug":"换源","link":"#换源","children":[]},{"level":2,"title":"安装软件","slug":"安装软件","link":"#安装软件","children":[{"level":3,"title":"apt-get常用命令","slug":"apt-get常用命令","link":"#apt-get常用命令","children":[]},{"level":3,"title":"dpkg常用命令","slug":"dpkg常用命令","link":"#dpkg常用命令","children":[]}]},{"level":2,"title":"配置服务","slug":"配置服务","link":"#配置服务","children":[]},{"level":2,"title":"防火墙","slug":"防火墙","link":"#防火墙","children":[]},{"level":2,"title":"权限管理","slug":"权限管理","link":"#权限管理","children":[{"level":3,"title":"sudo命令提示用户不在sudoers中的问题的解决","slug":"sudo命令提示用户不在sudoers中的问题的解决","link":"#sudo命令提示用户不在sudoers中的问题的解决","children":[]}]},{"level":2,"title":"挂载NTFS分区","slug":"挂载ntfs分区","link":"#挂载ntfs分区","children":[{"level":3,"title":"解决不能写入文件系统的问题","slug":"解决不能写入文件系统的问题","link":"#解决不能写入文件系统的问题","children":[]}]},{"level":2,"title":"配置sshd","slug":"配置sshd","link":"#配置sshd","children":[]},{"level":2,"title":"配置合上笔记本后不休眠","slug":"配置合上笔记本后不休眠","link":"#配置合上笔记本后不休眠","children":[]},{"level":2,"title":"使用./configure编译文件时依赖报错问题的解决方法","slug":"使用-configure编译文件时依赖报错问题的解决方法","link":"#使用-configure编译文件时依赖报错问题的解决方法","children":[]},{"level":2,"title":"ubuntu安装xfce4并配置xrdp过程记录","slug":"ubuntu安装xfce4并配置xrdp过程记录","link":"#ubuntu安装xfce4并配置xrdp过程记录","children":[{"level":3,"title":"安装及配置","slug":"安装及配置","link":"#安装及配置","children":[]},{"level":3,"title":"在xfce中不能打开终端的解决","slug":"在xfce中不能打开终端的解决","link":"#在xfce中不能打开终端的解决","children":[]}]},{"level":2,"title":"ubuntu安装gnome并配置xrdp过程记录","slug":"ubuntu安装gnome并配置xrdp过程记录","link":"#ubuntu安装gnome并配置xrdp过程记录","children":[{"level":3,"title":"安装及配置","slug":"安装及配置-1","link":"#安装及配置-1","children":[]},{"level":3,"title":"解决“色彩管理设备” 弹窗","slug":"解决-色彩管理设备-弹窗","link":"#解决-色彩管理设备-弹窗","children":[]},{"level":3,"title":"解决“刷新系统软件源需要认证” / “refresh the system repositories” 弹窗","slug":"解决-刷新系统软件源需要认证-refresh-the-system-repositories-弹窗","link":"#解决-刷新系统软件源需要认证-refresh-the-system-repositories-弹窗","children":[]},{"level":3,"title":"XRDP远程桌面连接Ubuntu后没有 Dock、桌面图标 背后的程序们","slug":"xrdp远程桌面连接ubuntu后没有-dock、桌面图标-背后的程序们","link":"#xrdp远程桌面连接ubuntu后没有-dock、桌面图标-背后的程序们","children":[]},{"level":3,"title":"使用默认桌面配置","slug":"使用默认桌面配置","link":"#使用默认桌面配置","children":[]}]}],"git":{"createdTime":1700226391000,"updatedTime":1700226391000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":10.77,"words":3231},"filePathRelative":"后端/ubuntu22.04配置过程命令记录/ubuntu22.04配置过程命令记录.md","localizedDate":"2022年8月12日","excerpt":"","autoDesc":true}');export{u as comp,d as data};
