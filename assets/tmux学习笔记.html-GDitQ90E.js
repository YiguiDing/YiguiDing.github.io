import{_ as e,o as n,c as s,b as a}from"./app-D2mB63nj.js";const i={},t=a(`<h1 id="tmux学习笔记" tabindex="-1"><a class="header-anchor" href="#tmux学习笔记"><span>tmux学习笔记</span></a></h1><h2 id="安装tmux" tabindex="-1"><a class="header-anchor" href="#安装tmux"><span>安装tmux</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> tmux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建、列出、连接、删除会话" tabindex="-1"><a class="header-anchor" href="#创建、列出、连接、删除会话"><span>创建、列出、连接、删除会话</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建 tmux会话session</span>
tmux new <span class="token parameter variable">-s</span> your_session_name
<span class="token comment"># 列出 tmux维持到会话 tmux list-session</span>
tmux <span class="token function">ls</span>
<span class="token comment"># 连接 到一个tmux维持会话 t表示target_session 此外，使用该命令可以支持多个用户同时连接到一个tmux回话上，效果类似屏幕共享，两方都能操作终端，两方都能实时看到操作过程</span>
tmux attach <span class="token parameter variable">-t</span> your_session_name

<span class="token comment"># 删除会话</span>
tmux kill-session <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于会话session" tabindex="-1"><a class="header-anchor" href="#关于会话session"><span>关于会话Session</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 切换会话session</span>
ctrl+b s
<span class="token comment"># 分离detached会话和终端 （此时session的会话会被tmux维持，即使断开ssh连接，在该session启动的服务也不会停止）</span>
ctrl+b d
<span class="token comment"># 会话重命名</span>
ctrl+b $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于窗口window" tabindex="-1"><a class="header-anchor" href="#关于窗口window"><span>关于窗口Window</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 在当前 会话 中 创建create 新窗口</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于面板pane" tabindex="-1"><a class="header-anchor" href="#关于面板pane"><span>关于面板Pane</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 在当前窗口中创建 竖 分屏面板
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[t];function d(c,r){return n(),s("div",null,l)}const o=e(i,[["render",d],["__file","tmux学习笔记.html.vue"]]),u=JSON.parse('{"path":"/%E5%B7%A5%E5%85%B7/tmux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/tmux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"tmux学习笔记","lang":"zh-CN","frontmatter":{"title":"tmux学习笔记","date":"2022-11-22T19:17:00.000Z","cover":"./cover/default_cover.jpg","tag":["tmux"],"category":"工具","star":true,"description":"tmux学习笔记 安装tmux 创建、列出、连接、删除会话 关于会话Session 关于窗口Window 关于面板Pane","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%B7%A5%E5%85%B7/tmux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/tmux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"Yigui-Ding的Blog小站"}],["meta",{"property":"og:title","content":"tmux学习笔记"}],["meta",{"property":"og:description","content":"tmux学习笔记 安装tmux 创建、列出、连接、删除会话 关于会话Session 关于窗口Window 关于面板Pane"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T11:27:55.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"tmux"}],["meta",{"property":"article:published_time","content":"2022-11-22T19:17:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-28T11:27:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tmux学习笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-22T19:17:00.000Z\\",\\"dateModified\\":\\"2023-11-28T11:27:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"安装tmux","slug":"安装tmux","link":"#安装tmux","children":[]},{"level":2,"title":"创建、列出、连接、删除会话","slug":"创建、列出、连接、删除会话","link":"#创建、列出、连接、删除会话","children":[]},{"level":2,"title":"关于会话Session","slug":"关于会话session","link":"#关于会话session","children":[]},{"level":2,"title":"关于窗口Window","slug":"关于窗口window","link":"#关于窗口window","children":[]},{"level":2,"title":"关于面板Pane","slug":"关于面板pane","link":"#关于面板pane","children":[]}],"git":{"createdTime":1700226391000,"updatedTime":1701170875000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":2}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"工具/tmux学习笔记/tmux学习笔记.md","localizedDate":"2022年11月22日","excerpt":"","autoDesc":true}');export{o as comp,u as data};
