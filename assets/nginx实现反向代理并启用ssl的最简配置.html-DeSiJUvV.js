import{_ as e,o as n,c as i,b as s}from"./app-D2mB63nj.js";const t={},l=s(`<h1 id="nginx实现反向代理并启用ssl的最简配置" tabindex="-1"><a class="header-anchor" href="#nginx实现反向代理并启用ssl的最简配置"><span>nginx实现反向代理并启用ssl的最简配置</span></a></h1><div class="language-confg line-numbers-mode" data-ext="confg" data-title="confg"><pre class="language-confg"><code>server {
    listen       8082; 
    server_name  localhost;

    #启用ssl
    ssl on;
    #ssl证书
    ssl_certificate  /home/dyg/.ssl/cert.crt;
    #ssl证书私钥
    ssl_certificate_key /home/dyg/.ssl/cert-key.key;

    location / {
        #反向代理
        proxy_pass http://localhost:8081;
        #默认页面
        index  index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="将http请求转成https" tabindex="-1"><a class="header-anchor" href="#将http请求转成https"><span>将http请求转成https</span></a></h1><p><strong>案例:将http:80请求转成https:443</strong><br><strong>仅适用于默认端口</strong></p><div class="language-confg line-numbers-mode" data-ext="confg" data-title="confg"><pre class="language-confg"><code>server {
    listen       443; 
    server_name  localhost;

    #启用ssl
    ssl on;
    #ssl证书
    ssl_certificate  /home/dyg/.ssl/cert.crt;
    #ssl证书私钥
    ssl_certificate_key /home/dyg/.ssl/cert-key.key;

    location / {
        #反向代理
        proxy_pass http://localhost:8081;
        #默认页面
        index  index.html index.htm;
    }
}
server {
    listen 80;
    server_name localhost;
    #将http请求转成https
    rewrite ^(.*)$ https://$host$1 permanent;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[l];function d(r,c){return n(),i("div",null,a)}const v=e(t,[["render",d],["__file","nginx实现反向代理并启用ssl的最简配置.html.vue"]]),m=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/nginx%E5%AE%9E%E7%8E%B0%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%E5%B9%B6%E5%90%AF%E7%94%A8ssl%E7%9A%84%E6%9C%80%E7%AE%80%E9%85%8D%E7%BD%AE/nginx%E5%AE%9E%E7%8E%B0%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%E5%B9%B6%E5%90%AF%E7%94%A8ssl%E7%9A%84%E6%9C%80%E7%AE%80%E9%85%8D%E7%BD%AE.html","title":"nginx实现反向代理并启用ssl的最简配置","lang":"zh-CN","frontmatter":{"title":"nginx实现反向代理并启用ssl的最简配置","date":"2022-08-23T09:36:00.000Z","cover":"./cover/default_cover.jpg","tag":["nginx","反向代理"],"category":"笔记","description":"nginx实现反向代理并启用ssl的最简配置 将http请求转成https 案例:将http:80请求转成https:443 仅适用于默认端口","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%90%8E%E7%AB%AF/nginx%E5%AE%9E%E7%8E%B0%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%E5%B9%B6%E5%90%AF%E7%94%A8ssl%E7%9A%84%E6%9C%80%E7%AE%80%E9%85%8D%E7%BD%AE/nginx%E5%AE%9E%E7%8E%B0%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%E5%B9%B6%E5%90%AF%E7%94%A8ssl%E7%9A%84%E6%9C%80%E7%AE%80%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"Yigui-Ding的Blog小站"}],["meta",{"property":"og:title","content":"nginx实现反向代理并启用ssl的最简配置"}],["meta",{"property":"og:description","content":"nginx实现反向代理并启用ssl的最简配置 将http请求转成https 案例:将http:80请求转成https:443 仅适用于默认端口"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T13:06:31.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:tag","content":"反向代理"}],["meta",{"property":"article:published_time","content":"2022-08-23T09:36:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T13:06:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx实现反向代理并启用ssl的最简配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-23T09:36:00.000Z\\",\\"dateModified\\":\\"2023-11-17T13:06:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[],"git":{"createdTime":1700226391000,"updatedTime":1700226391000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":0.63,"words":188},"filePathRelative":"后端/nginx实现反向代理并启用ssl的最简配置/nginx实现反向代理并启用ssl的最简配置.md","localizedDate":"2022年8月23日","excerpt":"","autoDesc":true}');export{v as comp,m as data};
