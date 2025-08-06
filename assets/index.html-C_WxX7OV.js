import{_ as s,c as n,o as a,b as e}from"./app-DjDtDPYL.js";const p="/assets/image-BgWh_IE7.png",l="/assets/image2-BcqzzwnX.png",i={},t=e(`<h1 id="使用workflows实现对vuepress的一键部署" tabindex="-1"><a class="header-anchor" href="#使用workflows实现对vuepress的一键部署"><span>使用workflows实现对vuepress的一键部署</span></a></h1><p><strong>服务端配置记录</strong></p><p><strong>创建git用户</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建一个用户</span></span>
<span class="line">adduser <span class="token function">git</span></span>
<span class="line"><span class="token comment"># 切换到git用户</span></span>
<span class="line"><span class="token function">su</span> <span class="token function">git</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化仓库</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /var/www/vuepress2-blog-root/</span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"><span class="token comment"># 创建分支</span></span>
<span class="line"><span class="token function">git</span> branch static-pages</span>
<span class="line"><span class="token comment"># 允许提交代码到该目录</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--add</span> safe.directory /var/www/vuepress2-blog-root/</span>
<span class="line"><span class="token comment"># 允许提交代码到当前分支</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--add</span> receive.denyCurrentBranch ignore</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为github的主机生成私钥和公钥</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 为github的主机生成私钥</span></span>
<span class="line">ssh-keygen <span class="token parameter variable">-t</span> rsa</span>
<span class="line"><span class="token comment"># Generating public/private rsa key pair.</span></span>
<span class="line"><span class="token comment"># Enter file in which to save the key (/home/git/.ssh/id_rsa): ./github-action</span></span>
<span class="line"><span class="token comment"># Enter passphrase (empty for no passphrase): </span></span>
<span class="line"><span class="token comment"># Enter same passphrase again: </span></span>
<span class="line"><span class="token comment"># Your identification has been saved in ./github-action</span></span>
<span class="line"><span class="token comment"># Your public key has been saved in ./github-action.pub</span></span>
<span class="line"><span class="token function">ls</span></span>
<span class="line"><span class="token comment"># github-action  github-action.pub</span></span>
<span class="line"><span class="token comment"># 查看私钥</span></span>
<span class="line"><span class="token function">cat</span> github-action</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看公钥</span></span>
<span class="line"><span class="token function">cat</span> github-action.pub</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将公钥内容附加到已授权的主机列表</span></span>
<span class="line"><span class="token function">cat</span> github-action.pub <span class="token operator">&gt;&gt;</span> ~/.ssh/authorized_keys</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在github的仓库创建私钥变量</strong></p><p>变量 名为 <code>SSH_PRIVATE_KEY</code> 值为 刚刚生成的私钥内容</p><p><img src="`+p+`" alt="Alt text"></p><p><strong>编写workflows配置文件</strong></p><blockquote><ul><li>此时在该配置文件中就能通过，<code>\${{ secrets.SSH_PRIVATE_KEY }}</code> 获取到配置的私钥地址，</li><li>然后由于已经将其公钥添加到了自己的服务器中，所以github的服务器就能和自己的服务器建立免密链接</li></ul></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy blog</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> master</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">permissions</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write</span>
<span class="line">  <span class="token key atrule">pages</span><span class="token punctuation">:</span> write</span>
<span class="line">  <span class="token key atrule">id-token</span><span class="token punctuation">:</span> write</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build-static-pages</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">submodules</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> npm</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Blog</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          npm install</span>
<span class="line">          npm run build</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 将目录下代码推送到某个分支</span></span>
<span class="line">          <span class="token key atrule">folder</span><span class="token punctuation">:</span> blog/.vuepress/dist</span>
<span class="line">          <span class="token key atrule">branch</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>pages</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">deploy-to-github-pages</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>static<span class="token punctuation">-</span>pages</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">name</span><span class="token punctuation">:</span> github<span class="token punctuation">-</span>pages</span>
<span class="line">      <span class="token comment"># https://YiguiDing.github.io/</span></span>
<span class="line">      <span class="token key atrule">url</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.deployment.outputs.page_url <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">ref</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>pages</span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Pages</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/configure<span class="token punctuation">-</span>pages@v3</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload artifact</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>artifact@v2</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># Upload entire repository</span></span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&#39;./&#39;</span></span>
<span class="line">          </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages</span>
<span class="line">        <span class="token key atrule">id</span><span class="token punctuation">:</span> deployment</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/deploy<span class="token punctuation">-</span>pages@v2</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">deploy-to-server</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>static<span class="token punctuation">-</span>pages</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">ref</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>pages</span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configuration environment</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> webfactory/ssh<span class="token punctuation">-</span>agent@v0.8.0</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">ssh-private-key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SSH_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          ssh-keyscan dingdingdang.online &gt;&gt; ~/.ssh/known_hosts</span>
<span class="line">          git config --global user.name &#39;YiguiDing&#39;</span>
<span class="line">          git config --global user.email &#39;2449695354@qq.com&#39;</span>
<span class="line">          ssh git@dingdingdang.online &quot;git config --global --add safe.directory /var/www/vuepress2-blog-root/&quot;</span>
<span class="line">          ssh git@dingdingdang.online &quot;git config --global --add receive.denyCurrentBranch ignore&quot;</span>
<span class="line">          git push -f git@dingdingdang.online:/var/www/vuepress2-blog-root/ static-pages</span>
<span class="line">          ssh git@dingdingdang.online &quot;cd /var/www/vuepress2-blog-root/  &amp;&amp; git reset --hard HEAD&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将本地分支提交到github仓库</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加远程地址</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> <span class="token parameter variable">--master</span> master origin git@github.com:YiguiDing/YiguiDing.github.io.git</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;update&quot;</span></span>
<span class="line"><span class="token comment"># 强制推送</span></span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">--force</span> origin master </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现效果</strong></p><p><img src="`+l+'" alt="Alt text"></p>',16),c=[t];function o(u,r){return a(),n("div",null,c)}const v=s(i,[["render",o],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/%E5%B7%A5%E5%85%B7/%E4%BD%BF%E7%94%A8workflows%E5%AE%9E%E7%8E%B0%E5%AF%B9vuepress%E7%9A%84%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2/","title":"使用workflows实现对vuepress的一键部署","lang":"zh-CN","frontmatter":{"title":"使用workflows实现对vuepress的一键部署","date":"2023-11-17T13:21:00.000Z","description":"使用workflows实现对vuepress的一键部署 服务端配置记录 创建git用户 为github的主机生成私钥和公钥 在github的仓库创建私钥变量 变量 名为 SSH_PRIVATE_KEY 值为 刚刚生成的私钥内容 Alt text 编写workflows配置文件 此时在该配置文件中就能通过，${{ secrets.SSH_PRIVATE_...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%B7%A5%E5%85%B7/%E4%BD%BF%E7%94%A8workflows%E5%AE%9E%E7%8E%B0%E5%AF%B9vuepress%E7%9A%84%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"使用workflows实现对vuepress的一键部署"}],["meta",{"property":"og:description","content":"使用workflows实现对vuepress的一键部署 服务端配置记录 创建git用户 为github的主机生成私钥和公钥 在github的仓库创建私钥变量 变量 名为 SSH_PRIVATE_KEY 值为 刚刚生成的私钥内容 Alt text 编写workflows配置文件 此时在该配置文件中就能通过，${{ secrets.SSH_PRIVATE_..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T08:31:16.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:published_time","content":"2023-11-17T13:21:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T08:31:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用workflows实现对vuepress的一键部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-17T13:21:00.000Z\\",\\"dateModified\\":\\"2024-03-18T08:31:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[],"git":{"createdTime":1700325767000,"updatedTime":1710750676000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":2.03,"words":608},"filePathRelative":"工具/使用workflows实现对vuepress的一键部署/index.md","localizedDate":"2023年11月17日","excerpt":"","autoDesc":true}');export{v as comp,k as data};
