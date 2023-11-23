import{_ as n,o as s,c as e,e as a}from"./app-78ebd969.js";const i={},l=a(`<h1 id="tmux学习笔记" tabindex="-1"><a class="header-anchor" href="#tmux学习笔记" aria-hidden="true">#</a> tmux学习笔记</h1><h2 id="安装tmux" tabindex="-1"><a class="header-anchor" href="#安装tmux" aria-hidden="true">#</a> 安装tmux</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> tmux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建、列出、连接、删除会话" tabindex="-1"><a class="header-anchor" href="#创建、列出、连接、删除会话" aria-hidden="true">#</a> 创建、列出、连接、删除会话</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 tmux会话session</span>
tmux new <span class="token parameter variable">-s</span> your_session_name
<span class="token comment"># 列出 tmux维持到会话 tmux list-session</span>
tmux <span class="token function">ls</span>
<span class="token comment"># 连接 到一个tmux维持会话 t表示target_session 此外，使用该命令可以支持多个用户同时连接到一个tmux回话上，效果类似屏幕共享，两方都能操作终端，两方都能实时看到操作过程</span>
tmux attach <span class="token parameter variable">-t</span> your_session_name

<span class="token comment"># 删除会话</span>
tmux kill-session <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于会话session" tabindex="-1"><a class="header-anchor" href="#关于会话session" aria-hidden="true">#</a> 关于会话Session</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换会话session</span>
ctrl+b s
<span class="token comment"># 分离detached会话和终端 （此时session的会话会被tmux维持，即使断开ssh连接，在该session启动的服务也不会停止）</span>
ctrl+b d
<span class="token comment"># 会话重命名</span>
ctrl+b $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于窗口window" tabindex="-1"><a class="header-anchor" href="#关于窗口window" aria-hidden="true">#</a> 关于窗口Window</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 在当前 会话 中 创建create 新窗口</span>
ctrl+b c
<span class="token comment">## 切换到下next一个窗口</span>
ctrl+b n
<span class="token comment">## 切换到前previous一个窗口</span>
ctrl+b p
<span class="token comment">## 切换到指定序号的窗口</span>
ctrl+b <span class="token operator">&lt;</span>number<span class="token operator">&gt;</span>
<span class="token comment">## 在列表中选择窗口</span>
ctrl+b w
<span class="token comment">## 窗口重命名</span>
ctrl+b ,
<span class="token comment">## 窗口关闭</span>
ctrl+d
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于面板pane" tabindex="-1"><a class="header-anchor" href="#关于面板pane" aria-hidden="true">#</a> 关于面板Pane</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在当前窗口中创建 竖 分屏面板
ctrl+b %
# 在当前窗口中创建 横 分屏面板
ctrl+b “
# 将当前面板pane拆分为独立窗口window
ctrl+b !
# 关闭当前面板
ctrl+b x
# 全屏/非全屏 切换 当前面板
ctrl+b z
# 查看query当前窗格编号
ctrl+b q

# 切换面板
## 按方向键切换面板
ctrl+b ⬆️
ctrl+b ⬇️
ctrl+b ⬅️
ctrl+b ➡️

## 上一个面板
ctrl+b ;
## 下一个面板
ctrl+b o
## 光标切换面板
ctrl+b &lt;arrow number&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[l];function c(r,t){return s(),e("div",null,d)}const m=n(i,[["render",c],["__file","tmux学习笔记.html.vue"]]);export{m as default};
