import{_ as n,o as e,c as s,e as i}from"./app-26398a0b.js";const l={},d=i(`<h1 id="nginx实现反向代理并启用ssl的最简配置" tabindex="-1"><a class="header-anchor" href="#nginx实现反向代理并启用ssl的最简配置" aria-hidden="true">#</a> nginx实现反向代理并启用ssl的最简配置</h1><div class="language-confg line-numbers-mode" data-ext="confg"><pre class="language-confg"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="将http请求转成https" tabindex="-1"><a class="header-anchor" href="#将http请求转成https" aria-hidden="true">#</a> 将http请求转成https</h1><p><strong>案例:将http:80请求转成https:443</strong><br><strong>仅适用于默认端口</strong></p><div class="language-confg line-numbers-mode" data-ext="confg"><pre class="language-confg"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[d];function r(c,v){return e(),s("div",null,a)}const m=n(l,[["render",r],["__file","nginx实现反向代理并启用ssl的最简配置.html.vue"]]);export{m as default};
