import{_ as s,o as n,c as e,e as a}from"./app-p5jI74J7.js";const i={},l=a(`<h1 id="ubuntu配置code-server过程记录" tabindex="-1"><a class="header-anchor" href="#ubuntu配置code-server过程记录" aria-hidden="true">#</a> ubuntu配置code-server过程记录</h1><p><strong>完整过程</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">wget</span> https://github.com/coder/code-server/releases/download/v4.5.1/code-server-4.5.1-linux-amd64.tar.gz
<span class="token comment">## 或者在pc端下载好了之后通过sftp传输</span>
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> ./code-server-4.5.1-linux-amd64.tar.gz
<span class="token comment"># 递归创建文件夹</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.local/lib ~/.local/bin
<span class="token comment"># 移动并改名</span>
<span class="token function">mv</span> ./code-server-4.5.1-linux-amd64 ~/.local/lib/code-server-4.5.1/
<span class="token comment"># 建立软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> ~/.local/lib/code-server-4.5.1/bin/code-server ~/.local/bin/code-server
<span class="token comment"># 添加到环境变量</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;~/.local/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token comment"># 运行</span>
code-server 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编辑配置文件修改密码</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ~/.config/code-server/config.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
bind-addr: 0.0.0.0:8080
auth: password
password: *****数字加英文*****
cert: false
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置自动添加环境变量</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span>  .profile
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;~/.local/bin:<span class="token environment constant">$PATH</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置服务</strong><br><strong>若是通过<code>dpkg -i code-server-4.5.1-linux-amd64.deb</code> 这种安装方式安装的,服务配置文件<code>code-server.service</code>会被自动配置好,只需要执行:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
systemctl start code-server@用户名.service
<span class="token comment"># 添加到开机自启动</span>
systemctl <span class="token builtin class-name">enable</span> code-server@用户名.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[l];function r(o,t){return n(),e("div",null,c)}const v=s(i,[["render",r],["__file","ubuntu配置code-server过程记录.html.vue"]]);export{v as default};
