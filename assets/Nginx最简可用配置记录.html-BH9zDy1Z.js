import{_ as n,c as s,o as a,b as i}from"./app-DhVIxAwx.js";const e={},l=i(`<h1 id="nginx最简可用配置记录" tabindex="-1"><a class="header-anchor" href="#nginx最简可用配置记录"><span>Nginx最简可用配置记录</span></a></h1><blockquote><p>nginx version: nginx/1.22.1</p></blockquote><p><code>/etc/nginx/nginx.conf</code></p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code><span class="line"><span># 什么都没改，默认配置</span></span>
<span class="line"><span>user  nginx;</span></span>
<span class="line"><span>worker_processes  auto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error_log  /var/log/nginx/error.log notice;</span></span>
<span class="line"><span>pid        /var/run/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on; # gzip 其实可以启用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    include /etc/nginx/conf.d/*.conf;# 这里就是引入default.conf配置文件</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/etc/nginx/conf.d/default.conf</code></p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code><span class="line"><span># 所有http协议的请求全部重定向为https请求</span></span>
<span class="line"><span>server{</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    #（第一种）把http的域名请求转成https</span></span>
<span class="line"><span>    #return 301 https://$host$request_uri;</span></span>
<span class="line"><span>    #（第二种）强制将http://\${server_name配置}的URL重写成https</span></span>
<span class="line"><span>    # server_name ???.???.???;</span></span>
<span class="line"><span>    # rewrite ^(.*) https://\${server_name}$1 permanent;</span></span>
<span class="line"><span>    #（第三种）强制将http://\${请求的host}的URL重写成https</span></span>
<span class="line"><span>    rewrite ^(.*) https://$host$1 permanent; </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># for blog</span></span>
<span class="line"><span>server{</span></span>
<span class="line"><span>    # # listen 80; #  监听80端口 默认http协议</span></span>
<span class="line"><span>    listen 443 ssl; # 监听443端口 ssl表示https协议</span></span>
<span class="line"><span>    server_name dingdingdang.online www.dingdingdang.online; # 域名，可填写多个</span></span>
<span class="line"><span>    ssl_certificate     ssl/dingdingdang.online.pem;# 证书，表示放在/etc/nginx/ssl/ 目录下</span></span>
<span class="line"><span>    ssl_certificate_key ssl/dingdingdang.online.key;</span></span>
<span class="line"><span>    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_ciphers         HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root /var/www/blog;// 网站根目录，要注意目录的权限</span></span>
<span class="line"><span>        index index index.html index.htm;// 主页</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># for file server</span></span>
<span class="line"><span>server{</span></span>
<span class="line"><span>    # listen 80;</span></span>
<span class="line"><span>    listen 443 ssl;</span></span>
<span class="line"><span>    server_name file.dingdingdang.online; </span></span>
<span class="line"><span>    ssl_certificate     ssl/file.dingdingdang.online.pem;</span></span>
<span class="line"><span>    ssl_certificate_key ssl/file.dingdingdang.online.key;</span></span>
<span class="line"><span>    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_ciphers         HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8081;// 单纯重定向</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># -----------------------------start:for vscode and vscode&#39;s wss--------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 因为 code-server 不仅需要代理 http://127.0.0.1:8080 还需要 代理ws://127.0.0.1:8080</span></span>
<span class="line"><span>map $http_upgrade $connection_upgrade {# map</span></span>
<span class="line"><span>    default upgrade;</span></span>
<span class="line"><span>    &#39;&#39; close;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>server{</span></span>
<span class="line"><span>    # listen 80;</span></span>
<span class="line"><span>    listen 443 ssl;</span></span>
<span class="line"><span>    server_name code.dingdingdang.online; </span></span>
<span class="line"><span>    ssl_certificate     ssl/code.dingdingdang.online.pem;</span></span>
<span class="line"><span>    ssl_certificate_key ssl/code.dingdingdang.online.key;</span></span>
<span class="line"><span>    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_ciphers         HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8080;</span></span>
<span class="line"><span>        # 下面的部分就是使其支持wss://127.0.0.1:8080</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_pass_header Server;</span></span>
<span class="line"><span>        proxy_set_header Host $http_host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>        proxy_set_header Connection $connection_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># -----------------------------end:for vscode and vscode&#39;s wss--------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 代理</span></span>
<span class="line"><span># for google</span></span>
<span class="line"><span>server{</span></span>
<span class="line"><span>    # listen 80;</span></span>
<span class="line"><span>    listen 443 ssl;</span></span>
<span class="line"><span>    server_name google.dingdingdang.online; </span></span>
<span class="line"><span>    ssl_certificate     ssl/dingdingdang.online.pem;</span></span>
<span class="line"><span>    ssl_certificate_key ssl/dingdingdang.online.key;</span></span>
<span class="line"><span>    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_ciphers         HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass https://www.google.com/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># for github</span></span>
<span class="line"><span>server{</span></span>
<span class="line"><span>    # listen 80;</span></span>
<span class="line"><span>    listen 443 ssl;</span></span>
<span class="line"><span>    server_name github.dingdingdang.online; </span></span>
<span class="line"><span>    ssl_certificate     ssl/dingdingdang.online.pem;</span></span>
<span class="line"><span>    ssl_certificate_key ssl/dingdingdang.online.key;</span></span>
<span class="line"><span>    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_ciphers         HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass https://github.com/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 以下为默认配置</span></span>
<span class="line"><span># server {</span></span>
<span class="line"><span>#     listen       80;</span></span>
<span class="line"><span>#     server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#     #access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#     location / {</span></span>
<span class="line"><span>#         root   /usr/share/nginx/html;</span></span>
<span class="line"><span>#         index  index.html index.htm;</span></span>
<span class="line"><span>#     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#     #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#     # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>#     #</span></span>
<span class="line"><span>#     error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>#     location = /50x.html {</span></span>
<span class="line"><span>#         root   /usr/share/nginx/html;</span></span>
<span class="line"><span>#     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#     # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span>#     #</span></span>
<span class="line"><span>#     #location ~ \\.php$ {</span></span>
<span class="line"><span>#     #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span>#     #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#     # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span>#     #</span></span>
<span class="line"><span>#     #location ~ \\.php$ {</span></span>
<span class="line"><span>#     #    root           html;</span></span>
<span class="line"><span>#     #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>#     #    fastcgi_index  index.php;</span></span>
<span class="line"><span>#     #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span>#     #    include        fastcgi_params;</span></span>
<span class="line"><span>#     #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#     # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span>#     # concurs with nginx&#39;s one</span></span>
<span class="line"><span>#     #</span></span>
<span class="line"><span>#     #location ~ /\\.ht {</span></span>
<span class="line"><span>#     #    deny  all;</span></span>
<span class="line"><span>#     #}</span></span>
<span class="line"><span># }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[l];function c(d,r){return a(),s("div",null,p)}const t=n(e,[["render",c],["__file","Nginx最简可用配置记录.html.vue"]]),o=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/Nginx%E6%9C%80%E7%AE%80%E5%8F%AF%E7%94%A8%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95/Nginx%E6%9C%80%E7%AE%80%E5%8F%AF%E7%94%A8%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95.html","title":"Nginx最简可用配置记录","lang":"zh-CN","frontmatter":{"date":"2023-04-04T04:33:00.000Z","title":"Nginx最简可用配置记录","cover":"./cover/default_cover.jpg","tag":["express"],"category":"后端","description":"Nginx最简可用配置记录 nginx version: nginx/1.22.1 /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%90%8E%E7%AB%AF/Nginx%E6%9C%80%E7%AE%80%E5%8F%AF%E7%94%A8%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95/Nginx%E6%9C%80%E7%AE%80%E5%8F%AF%E7%94%A8%E9%85%8D%E7%BD%AE%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"Nginx最简可用配置记录"}],["meta",{"property":"og:description","content":"Nginx最简可用配置记录 nginx version: nginx/1.22.1 /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T13:06:31.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"express"}],["meta",{"property":"article:published_time","content":"2023-04-04T04:33:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T13:06:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx最简可用配置记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-04T04:33:00.000Z\\",\\"dateModified\\":\\"2023-11-17T13:06:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[],"git":{"createdTime":1700226391000,"updatedTime":1700226391000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":1.99,"words":597},"filePathRelative":"后端/Nginx最简可用配置记录/Nginx最简可用配置记录.md","localizedDate":"2023年4月4日","excerpt":"","autoDesc":true}');export{t as comp,o as data};
