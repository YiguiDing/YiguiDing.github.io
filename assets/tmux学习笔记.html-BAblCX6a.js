import{_ as s,c as n,o as e,b as a}from"./app-DjDtDPYL.js";const i={},l=a(`<h1 id="tmux学习笔记" tabindex="-1"><a class="header-anchor" href="#tmux学习笔记"><span>tmux学习笔记</span></a></h1><h2 id="安装tmux" tabindex="-1"><a class="header-anchor" href="#安装tmux"><span>安装tmux</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">apt-get</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> tmux</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建、列出、连接、删除会话" tabindex="-1"><a class="header-anchor" href="#创建、列出、连接、删除会话"><span>创建、列出、连接、删除会话</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建 tmux会话session</span></span>
<span class="line">tmux new <span class="token parameter variable">-s</span> your_session_name</span>
<span class="line"><span class="token comment"># 列出 tmux维持到会话 tmux list-session</span></span>
<span class="line">tmux <span class="token function">ls</span></span>
<span class="line"><span class="token comment"># 连接 到一个tmux维持会话 t表示target_session 此外，使用该命令可以支持多个用户同时连接到一个tmux回话上，效果类似屏幕共享，两方都能操作终端，两方都能实时看到操作过程</span></span>
<span class="line">tmux attach <span class="token parameter variable">-t</span> your_session_name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除会话</span></span>
<span class="line">tmux kill-session <span class="token parameter variable">-t</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于会话session" tabindex="-1"><a class="header-anchor" href="#关于会话session"><span>关于会话Session</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 切换会话session</span></span>
<span class="line">ctrl+b s</span>
<span class="line"><span class="token comment"># 分离detached会话和终端 （此时session的会话会被tmux维持，即使断开ssh连接，在该session启动的服务也不会停止）</span></span>
<span class="line">ctrl+b d</span>
<span class="line"><span class="token comment"># 会话重命名</span></span>
<span class="line">ctrl+b $</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于窗口window" tabindex="-1"><a class="header-anchor" href="#关于窗口window"><span>关于窗口Window</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment">## 在当前 会话 中 创建create 新窗口</span></span>
<span class="line">ctrl+b c</span>
<span class="line"><span class="token comment">## 切换到下next一个窗口</span></span>
<span class="line">ctrl+b n</span>
<span class="line"><span class="token comment">## 切换到前previous一个窗口</span></span>
<span class="line">ctrl+b p</span>
<span class="line"><span class="token comment">## 切换到指定序号的窗口</span></span>
<span class="line">ctrl+b <span class="token operator">&lt;</span>number<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment">## 在列表中选择窗口</span></span>
<span class="line">ctrl+b w</span>
<span class="line"><span class="token comment">## 窗口重命名</span></span>
<span class="line">ctrl+b ,</span>
<span class="line"><span class="token comment">## 窗口关闭</span></span>
<span class="line">ctrl+d</span>
<span class="line"><span class="token builtin class-name">exit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于面板pane" tabindex="-1"><a class="header-anchor" href="#关于面板pane"><span>关于面板Pane</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 在当前窗口中创建 竖 分屏面板</span>
<span class="line">ctrl+b %</span>
<span class="line"># 在当前窗口中创建 横 分屏面板</span>
<span class="line">ctrl+b “</span>
<span class="line"># 将当前面板pane拆分为独立窗口window</span>
<span class="line">ctrl+b !</span>
<span class="line"># 关闭当前面板</span>
<span class="line">ctrl+b x</span>
<span class="line"># 全屏/非全屏 切换 当前面板</span>
<span class="line">ctrl+b z</span>
<span class="line"># 查看query当前窗格编号</span>
<span class="line">ctrl+b q</span>
<span class="line"></span>
<span class="line"># 切换面板</span>
<span class="line">## 按方向键切换面板</span>
<span class="line">ctrl+b ⬆️</span>
<span class="line">ctrl+b ⬇️</span>
<span class="line">ctrl+b ⬅️</span>
<span class="line">ctrl+b ➡️</span>
<span class="line"></span>
<span class="line">## 上一个面板</span>
<span class="line">ctrl+b ;</span>
<span class="line">## 下一个面板</span>
<span class="line">ctrl+b o</span>
<span class="line">## 光标切换面板</span>
<span class="line">ctrl+b &lt;arrow number&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[l];function c(p,d){return e(),n("div",null,t)}const m=s(i,[["render",c],["__file","tmux学习笔记.html.vue"]]),o=JSON.parse('{"path":"/%E5%B7%A5%E5%85%B7/tmux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/tmux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"tmux学习笔记","lang":"zh-CN","frontmatter":{"title":"tmux学习笔记","date":"2022-11-22T19:17:00.000Z","cover":"./cover/default_cover.jpg","tag":["tmux"],"category":"工具","star":true,"description":"tmux学习笔记 安装tmux 创建、列出、连接、删除会话 关于会话Session 关于窗口Window 关于面板Pane","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%B7%A5%E5%85%B7/tmux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/tmux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"tmux学习笔记"}],["meta",{"property":"og:description","content":"tmux学习笔记 安装tmux 创建、列出、连接、删除会话 关于会话Session 关于窗口Window 关于面板Pane"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T11:27:55.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"tmux"}],["meta",{"property":"article:published_time","content":"2022-11-22T19:17:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-28T11:27:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tmux学习笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-22T19:17:00.000Z\\",\\"dateModified\\":\\"2023-11-28T11:27:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"安装tmux","slug":"安装tmux","link":"#安装tmux","children":[]},{"level":2,"title":"创建、列出、连接、删除会话","slug":"创建、列出、连接、删除会话","link":"#创建、列出、连接、删除会话","children":[]},{"level":2,"title":"关于会话Session","slug":"关于会话session","link":"#关于会话session","children":[]},{"level":2,"title":"关于窗口Window","slug":"关于窗口window","link":"#关于窗口window","children":[]},{"level":2,"title":"关于面板Pane","slug":"关于面板pane","link":"#关于面板pane","children":[]}],"git":{"createdTime":1700226391000,"updatedTime":1701170875000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":2}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"工具/tmux学习笔记/tmux学习笔记.md","localizedDate":"2022年11月22日","excerpt":"","autoDesc":true}');export{m as comp,o as data};
