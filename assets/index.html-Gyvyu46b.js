import{_ as n,o as s,c as a,e}from"./app-o00Oe8Fi.js";const t="/assets/image-YFofyBO1.png",i="/assets/image2-XKs88J1y.png",p={},l=e(`<h1 id="使用workflows实现对vuepress的一键部署" tabindex="-1"><a class="header-anchor" href="#使用workflows实现对vuepress的一键部署" aria-hidden="true">#</a> 使用workflows实现对vuepress的一键部署</h1><p><strong>服务端配置记录</strong></p><p><strong>创建git用户</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个用户</span>
adduser <span class="token function">git</span>
<span class="token comment"># 切换到git用户</span>
<span class="token function">su</span> <span class="token function">git</span>

<span class="token comment"># 初始化仓库</span>
<span class="token builtin class-name">cd</span> /var/www/vuepress2-blog-root/
<span class="token function">git</span> init
<span class="token comment"># 创建分支</span>
<span class="token function">git</span> branch static-pages
<span class="token comment"># 允许提交代码到该目录</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--add</span> safe.directory /var/www/vuepress2-blog-root/
<span class="token comment"># 允许提交代码到当前分支</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--add</span> receive.denyCurrentBranch ignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为github的主机生成私钥和公钥</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 为github的主机生成私钥</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa
<span class="token comment"># Generating public/private rsa key pair.</span>
<span class="token comment"># Enter file in which to save the key (/home/git/.ssh/id_rsa): ./github-action</span>
<span class="token comment"># Enter passphrase (empty for no passphrase): </span>
<span class="token comment"># Enter same passphrase again: </span>
<span class="token comment"># Your identification has been saved in ./github-action</span>
<span class="token comment"># Your public key has been saved in ./github-action.pub</span>
<span class="token function">ls</span>
<span class="token comment"># github-action  github-action.pub</span>
<span class="token comment"># 查看私钥</span>
<span class="token function">cat</span> github-action

<span class="token comment"># 查看公钥</span>
<span class="token function">cat</span> github-action.pub

<span class="token comment"># 将公钥内容附加到已授权的主机列表</span>
<span class="token function">cat</span> github-action.pub <span class="token operator">&gt;&gt;</span> ~/.ssh/authorized_keys

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在github的仓库创建私钥变量</strong></p><p>变量 名为 <code>SSH_PRIVATE_KEY</code> 值为 刚刚生成的私钥内容</p><p><img src="`+t+`" alt="Alt text"></p><p><strong>编写workflows配置文件</strong></p><blockquote><ul><li>此时在该配置文件中就能通过，<code>\${{ secrets.SSH_PRIVATE_KEY }}</code> 获取到配置的私钥地址，</li><li>然后由于已经将其公钥添加到了自己的服务器中，所以github的服务器就能和自己的服务器建立免密链接</li></ul></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy blog

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write
  <span class="token key atrule">pages</span><span class="token punctuation">:</span> write
  <span class="token key atrule">id-token</span><span class="token punctuation">:</span> write

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-static-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">submodules</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> npm

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Blog
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          npm install
          npm run build</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 将目录下代码推送到某个分支</span>
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> blog/.vuepress/dist
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>pages

  <span class="token key atrule">deploy-to-github-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>static<span class="token punctuation">-</span>pages
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> github<span class="token punctuation">-</span>pages
      <span class="token comment"># https://YiguiDing.github.io/</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.deployment.outputs.page_url <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ref</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>pages
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/configure<span class="token punctuation">-</span>pages@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload artifact
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>artifact@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># Upload entire repository</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&#39;./&#39;</span>
          
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">id</span><span class="token punctuation">:</span> deployment
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/deploy<span class="token punctuation">-</span>pages@v2

  <span class="token key atrule">deploy-to-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>static<span class="token punctuation">-</span>pages
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ref</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>pages
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configuration environment
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> webfactory/ssh<span class="token punctuation">-</span>agent@v0.8.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ssh-private-key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SSH_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ssh-keyscan dingdingdang.online &gt;&gt; ~/.ssh/known_hosts
          git config --global user.name &#39;YiguiDing&#39;
          git config --global user.email &#39;2449695354@qq.com&#39;
          ssh git@dingdingdang.online &quot;git config --global --add safe.directory /var/www/vuepress2-blog-root/&quot;
          ssh git@dingdingdang.online &quot;git config --global --add receive.denyCurrentBranch ignore&quot;
          git push -f git@dingdingdang.online:/var/www/vuepress2-blog-root/ static-pages
          ssh git@dingdingdang.online &quot;cd /var/www/vuepress2-blog-root/  &amp;&amp; git reset --hard HEAD&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将本地分支提交到github仓库</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加远程地址</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token parameter variable">--master</span> master origin git@github.com:YiguiDing/YiguiDing.github.io.git
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;update&quot;</span>
<span class="token comment"># 强制推送</span>
<span class="token function">git</span> push <span class="token parameter variable">--force</span> origin master 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现效果</strong></p><p><img src="`+i+'" alt="Alt text"></p>',16),c=[l];function o(u,r){return s(),a("div",null,c)}const v=n(p,[["render",o],["__file","index.html.vue"]]);export{v as default};
