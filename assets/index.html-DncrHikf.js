import{_ as s,c as n,o as e,b as a}from"./app-DHDb7rGx.js";const i={},l=a(`<h2 id="alpine安装code-server过程记录" tabindex="-1"><a class="header-anchor" href="#alpine安装code-server过程记录"><span>alpine安装code-server过程记录</span></a></h2><h2 id="尝试1-在ish中尝试通过npm安装-配置失败" tabindex="-1"><a class="header-anchor" href="#尝试1-在ish中尝试通过npm安装-配置失败"><span>尝试1：在iSH中尝试通过npm安装（配置失败）</span></a></h2><p><strong>先要安装<code>npm</code>和<code>nodejs</code></strong><br> 但由于npm软件最新版使用了一些ish没有实现的指令 导致运行npm会提示非法指令 所以只能安装低版本</p><p><strong>1.修改 /etc/apk/repositories 将版本改为3.12版本</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 修改</span></span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> .profile <span class="token operator">&lt;&lt;</span> <span class="token string">EOF</span>
<span class="line">echo &#39;http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/main&#39; &gt; /etc/apk/repositories</span>
<span class="line">echo &#39;http://mirrors.tuna.tsinghua.edu.cn/alpine/v3.12/community&#39; &gt;&gt; /etc/apk/repositories</span>
<span class="line">EOF</span></span>
<span class="line"><span class="token comment"># 更新</span></span>
<span class="line">apk update</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.安装</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">apk <span class="token function">add</span> <span class="token assign-left variable">nodejs</span><span class="token operator">=</span><span class="token number">12.22</span>.12-r0 <span class="token assign-left variable">npm</span><span class="token operator">=</span><span class="token number">12.22</span>.12-r0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>3.npm换为国内源</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"><span class="token comment"># 或者安装yarn: npm install -g yarn</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.然后安装code-server</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> code-server --unsafe-perm</span>
<span class="line"><span class="token comment"># 然后在这一步卡死了</span></span>
<span class="line"><span class="token comment"># ish1.2.3（build298） 卡在了yarn</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尝试2-在ish中尝试通过docker安装-配置失败" tabindex="-1"><a class="header-anchor" href="#尝试2-在ish中尝试通过docker安装-配置失败"><span>尝试2：在iSH中尝试通过docker安装（配置失败）</span></a></h2><p><strong>1.安装docker和compose</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">apk <span class="token function">add</span> <span class="token function">docker</span></span>
<span class="line">apk <span class="token function">add</span> <span class="token function">docker-compose</span></span>
<span class="line"><span class="token comment"># compose可以根据yml文件中的配置来启动docker</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.下载coder</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://github.com/coder/coder.git <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>3.临时启动守护进程测试</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">rc-service <span class="token function">docker</span> start</span>
<span class="line"><span class="token comment"># 报错并卡死：</span></span>
<span class="line"><span class="token comment"># 原因：ish没有实现filesystems文件</span></span>
<span class="line"><span class="token comment"># 报错提示：grep: /proc/filesystems: No such file</span></span>
<span class="line"><span class="token comment"># 如果直接执行： rc-update add sshd 会导致卡死</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.启动</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token assign-left variable">CODER_ACCESS_URL</span><span class="token operator">=</span>http://localhost:7080</span>
<span class="line"><span class="token function">docker-compose</span> up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尝试3-在utm中安装alpine3-16-1再尝试使用npm安装-配置失败" tabindex="-1"><a class="header-anchor" href="#尝试3-在utm中安装alpine3-16-1再尝试使用npm安装-配置失败"><span>尝试3：在UTM中安装Alpine3.16.1再尝试使用npm安装（配置失败）</span></a></h2><p>安装UTM 在UTM中安装Alpine3.16.1</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装时最好设置好密码</span></span>
<span class="line"><span class="token comment"># 并且在提示：# PermitRootLogin prohibit-password ？</span></span>
<span class="line"><span class="token comment"># 输入yes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装nodejs npm</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装过程依赖python</span></span>
<span class="line">apk <span class="token function">add</span> python3</span>
<span class="line"><span class="token comment"># code-server要求node16 ： code-server@4.5.1: wanted: {&quot;node&quot;:&quot;16&quot;} (current: {&quot;node&quot;:&quot;12.22.12&quot;,&quot;npm&quot;:&quot;6.14.16&quot;})</span></span>
<span class="line">apk <span class="token function">add</span> <span class="token assign-left variable">nodejs</span><span class="token operator">=</span><span class="token number">16.16</span>.0-r0 <span class="token function">npm</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> code-server --unsafe-perm</span>
<span class="line"><span class="token comment"># 依旧报错 ：  gyp: Undefined variable module_name in binding.gyp while trying to load binding.gyp</span></span>
<span class="line"><span class="token comment"># 还是argon2的问题</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尝试1、3出错原因和这个类似：<a href="https://github.com/coder/code-server/issues/5184" target="_blank" rel="noopener noreferrer">#5184</a></p><h2 id="尝试4-在utm中安装alpine3-16-1再尝试使用yarn安装-配置失败" tabindex="-1"><a class="header-anchor" href="#尝试4-在utm中安装alpine3-16-1再尝试使用yarn安装-配置失败"><span>尝试4：在UTM中安装Alpine3.16.1再尝试使用yarn安装（配置失败）</span></a></h2><p>该方法根据自issue：<a href="https://github.com/coder/code-server/issues/5174" target="_blank" rel="noopener noreferrer">#5174</a></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">yarn</span> global <span class="token function">add</span> code-server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>绷不住了！！！ 报错超时，好像是虚拟机的问题！！！</strong></p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt" data-title="txt"><pre><code><span class="line">ipad:~# npm install yarn -g</span>
<span class="line">added 1 package in 1m</span>
<span class="line">ipad:~# sudo yarn global add code-server</span>
<span class="line">-ash: sudo: not found</span>
<span class="line">ipad:~# yarn global add code-server</span>
<span class="line">yarn global v1.22.19</span>
<span class="line">[1/4] Resolving packages...</span>
<span class="line">[2/4] Fetching packages...</span>
<span class="line">[3/4] Linking dependencies...</span>
<span class="line">warning &quot;code-server &gt; @coder/logger@1.1.16&quot; has unmet peer dependency &quot;@google-cloud/logging@^4.5.2&quot;.</span>
<span class="line">[4/4] Building fresh packages...</span>
<span class="line">success Installed &quot;code-server@4.5.1&quot; with binaries:</span>
<span class="line">      - code-server</span>
<span class="line">Done in 893.96s.</span>
<span class="line">ipad:~# code-server </span>
<span class="line">[2022-08-06T18:56:50.068Z] info  Wrote default config file to ~/.config/code-server/config.yaml</span>
<span class="line">[2022-08-06T18:57:00.929Z] error timed out</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尝试5-在utm中安装alpine3-16-1再尝试使用release版本安装-配置失败" tabindex="-1"><a class="header-anchor" href="#尝试5-在utm中安装alpine3-16-1再尝试使用release版本安装-配置失败"><span>尝试5：在UTM中安装Alpine3.16.1再尝试使用release版本安装（配置失败）</span></a></h2><p>既然在UTM安装的是64bit版本的系统 为什么不直接使用release版本？？？</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 下载</span></span>
<span class="line"><span class="token function">wget</span> https://github.com/coder/code-server/releases/download/v4.5.1/code-server-4.5.1-linux-amd64.tar.gz</span>
<span class="line"><span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ./code-server-4.5.1-linux-amd64</span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> ./code-server-4.5.1-linux-amd64</span>
<span class="line"><span class="token comment"># 执行，报错：./lib/node not fond</span></span>
<span class="line">./code-server</span>
<span class="line"><span class="token comment"># 安装node</span></span>
<span class="line">apk <span class="token function">add</span> <span class="token function">node</span> </span>
<span class="line"><span class="token comment"># 查看安装目录</span></span>
<span class="line"><span class="token function">which</span> <span class="token function">node</span></span>
<span class="line"><span class="token comment"># 建立软连接</span></span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/node ./lib/node</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 再次执行</span></span>
<span class="line">./code-server</span>
<span class="line"><span class="token comment"># 依旧报错</span></span>
<span class="line"><span class="token comment"># [2022-08-06T18:57:00.929Z] error timed out</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查文档得知要求：glibc &gt;= 2.17 and glibcxx &gt;= v3.4.18</span></span>
<span class="line"><span class="token comment"># 而</span></span>
<span class="line"><span class="token comment">#alpine linux追求系统小，默认使用了uclibc，但用glibc编译的程序无法直接在上面运行了。</span></span>
<span class="line"><span class="token comment">#需要自行安装第三方的alpine glibc，然后就可以无障碍运行其他机器编译的依赖glibc的程序了。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查了issue #1706 发现code-server 对于glibc glibcxx已经静态编译了 不需要系统自带静态链接库了</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尝试6-在utm中安装alpine3-16-1并开启jit再尝试使用release版本安装-成功" tabindex="-1"><a class="header-anchor" href="#尝试6-在utm中安装alpine3-16-1并开启jit再尝试使用release版本安装-成功"><span>尝试6：在UTM中安装Alpine3.16.1并开启JIT再尝试使用release版本安装（成功）</span></a></h2><p>方法同上，UTM使用JIT（jitterbug）启动，终于可以了！！！原来是运行速度的问题</p><p>完整过程：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 下载</span></span>
<span class="line"><span class="token function">wget</span> https://github.com/coder/code-server/releases/download/v4.5.1/code-server-4.5.1-linux-amd64.tar.gz</span>
<span class="line"><span class="token comment">## 或者在pc端下载好了之后通过sftp传输</span></span>
<span class="line"><span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ./code-server-4.5.1-linux-amd64.tar.gz</span>
<span class="line"><span class="token comment"># 递归创建文件夹</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.local/lib ~/.local/bin</span>
<span class="line"><span class="token comment"># 移动并改名</span></span>
<span class="line"><span class="token function">mv</span> ./code-server-4.5.1-linux-amd64 ~/.local/lib/code-server-4.5.1/</span>
<span class="line"><span class="token comment"># 建立软连接</span></span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> ~/.local/lib/code-server-4.5.1/bin/code-server ~/.local/bin/code-server</span>
<span class="line"><span class="token comment"># 添加到环境变量</span></span>
<span class="line"><span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/root/.local/bin:<span class="token environment constant">$PATH</span>&quot;</span></span>
<span class="line"><span class="token comment"># 运行</span></span>
<span class="line">code-server </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果提示-ash: node: not found 则为node添加软连接</span></span>
<span class="line"><span class="token comment"># ln -s /usr/bin/node ~/.local/lib/code-server-4.5.1/lib/node</span></span>
<span class="line"><span class="token comment"># 原因：</span></span>
<span class="line"><span class="token comment"># 使用命令：ldd ~/.local/lib/code-server-4.5.1/lib/node</span></span>
<span class="line"><span class="token comment"># 可以发现缺少一些动态链接库，因为alpine是阉割版的linux</span></span>
<span class="line"><span class="token comment"># 所以直接</span></span>
<span class="line">apk <span class="token function">add</span> nodejs</span>
<span class="line"><span class="token comment"># 然后删除原文件</span></span>
<span class="line"><span class="token function">rm</span> ~/.local/lib/code-server-4.5.1/lib/node</span>
<span class="line"><span class="token comment"># which node 查看刚安装的node的所在目录</span></span>
<span class="line"><span class="token comment"># 然后添加软连接</span></span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/node ~/.local/lib/code-server-4.5.1/lib/node</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编辑配置文件修改密码</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> ~/.config/code-server/config.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF</span>
<span class="line">bind-addr: 0.0.0.0:80</span>
<span class="line">auth: password</span>
<span class="line">password: *****数字加英文*****</span>
<span class="line">cert: false</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置自动添加环境变量</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">vi .profile</span>
<span class="line">PATH=&quot;/root/.local/bin:$PATH&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置开机自启服务（暂时没有解决输出重定向的问题）</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">vim</span> /etc/init.d/vscode</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/sbin/openrc-run</span></span>
<span class="line"><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;vscode&quot;</span></span>
<span class="line"><span class="token assign-left variable">command</span><span class="token operator">=</span><span class="token string">&quot;/root/.local/bin/code-server &gt; /dev/null &amp; &quot;</span></span>
<span class="line"><span class="token comment">#command_background=&quot;yes&quot;</span></span>
<span class="line"><span class="token function-name function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        need net</span>
<span class="line">        after sshd</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 修改权限 否则提示* rc-service: Permission denied</span></span>
<span class="line"><span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/vscode</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">管理服务</span>
<span class="line">列出所有可用服务</span>
<span class="line">rc-service <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> vscode</span>
<span class="line"></span>
<span class="line">启动/停止/重启 已有服务</span>
<span class="line">rc-service 服务名 start/stop/restart</span>
<span class="line">或</span>
<span class="line">/etc/init.d/服务名 start/stop/restart</span>
<span class="line"></span>
<span class="line">添加到开机自启动</span>
<span class="line">rc-update <span class="token function">add</span> vscode</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),p=[l];function c(t,r){return e(),n("div",null,p)}const o=s(i,[["render",c],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/alpine%E5%AE%89%E8%A3%85code-server%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95/","title":"alpine安装code-server过程记录","lang":"zh-CN","frontmatter":{"title":"alpine安装code-server过程记录","date":"2022-08-07T16:12:00.000Z","cover":"./cover/default_cover.jpg","tag":["code-server","alpine"],"category":"笔记","description":"alpine安装code-server过程记录 尝试1：在iSH中尝试通过npm安装（配置失败） 先要安装npm和nodejs 但由于npm软件最新版使用了一些ish没有实现的指令 导致运行npm会提示非法指令 所以只能安装低版本 1.修改 /etc/apk/repositories 将版本改为3.12版本 2.安装 3.npm换为国内源 4.然后安装...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%90%8E%E7%AB%AF/alpine%E5%AE%89%E8%A3%85code-server%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"alpine安装code-server过程记录"}],["meta",{"property":"og:description","content":"alpine安装code-server过程记录 尝试1：在iSH中尝试通过npm安装（配置失败） 先要安装npm和nodejs 但由于npm软件最新版使用了一些ish没有实现的指令 导致运行npm会提示非法指令 所以只能安装低版本 1.修改 /etc/apk/repositories 将版本改为3.12版本 2.安装 3.npm换为国内源 4.然后安装..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T13:06:31.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"code-server"}],["meta",{"property":"article:tag","content":"alpine"}],["meta",{"property":"article:published_time","content":"2022-08-07T16:12:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T13:06:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"alpine安装code-server过程记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-07T16:12:00.000Z\\",\\"dateModified\\":\\"2023-11-17T13:06:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"alpine安装code-server过程记录","slug":"alpine安装code-server过程记录","link":"#alpine安装code-server过程记录","children":[]},{"level":2,"title":"尝试1：在iSH中尝试通过npm安装（配置失败）","slug":"尝试1-在ish中尝试通过npm安装-配置失败","link":"#尝试1-在ish中尝试通过npm安装-配置失败","children":[]},{"level":2,"title":"尝试2：在iSH中尝试通过docker安装（配置失败）","slug":"尝试2-在ish中尝试通过docker安装-配置失败","link":"#尝试2-在ish中尝试通过docker安装-配置失败","children":[]},{"level":2,"title":"尝试3：在UTM中安装Alpine3.16.1再尝试使用npm安装（配置失败）","slug":"尝试3-在utm中安装alpine3-16-1再尝试使用npm安装-配置失败","link":"#尝试3-在utm中安装alpine3-16-1再尝试使用npm安装-配置失败","children":[]},{"level":2,"title":"尝试4：在UTM中安装Alpine3.16.1再尝试使用yarn安装（配置失败）","slug":"尝试4-在utm中安装alpine3-16-1再尝试使用yarn安装-配置失败","link":"#尝试4-在utm中安装alpine3-16-1再尝试使用yarn安装-配置失败","children":[]},{"level":2,"title":"尝试5：在UTM中安装Alpine3.16.1再尝试使用release版本安装（配置失败）","slug":"尝试5-在utm中安装alpine3-16-1再尝试使用release版本安装-配置失败","link":"#尝试5-在utm中安装alpine3-16-1再尝试使用release版本安装-配置失败","children":[]},{"level":2,"title":"尝试6：在UTM中安装Alpine3.16.1并开启JIT再尝试使用release版本安装（成功）","slug":"尝试6-在utm中安装alpine3-16-1并开启jit再尝试使用release版本安装-成功","link":"#尝试6-在utm中安装alpine3-16-1并开启jit再尝试使用release版本安装-成功","children":[]}],"git":{"createdTime":1700226391000,"updatedTime":1700226391000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":4.16,"words":1248},"filePathRelative":"后端/alpine安装code-server过程记录/index.md","localizedDate":"2022年8月7日","excerpt":"","autoDesc":true}');export{o as comp,m as data};
