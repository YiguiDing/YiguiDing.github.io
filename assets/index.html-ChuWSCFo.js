import{_ as i,c as s,o as a,b as t}from"./app-2ZAYnBk3.js";const n="/assets/image-B0n7t15J.png",h="/assets/image-1-B159COlc.png",l="/assets/image-2-BM5ptRSD.png",e={},k=t('<h2 id="配置windows" tabindex="-1"><a class="header-anchor" href="#配置windows"><span>配置windows</span></a></h2><p>网络共享</p><blockquote><p>将以太网（可访问internet）共享给以太网2（不可访问internet）</p></blockquote><p><img src="'+n+'" alt="alt text"></p><p>点击确认后会弹出窗口提示本机以太网2的ip被修改成<code>192.168.137.1</code>, 后续需要手动修改成所需的ip.</p><p><img src="'+h+'" alt="alt text"></p><p>修改以太网2的ip为实际所需的ip</p><p><img src="'+l+`" alt="alt text"></p><h2 id="配置树莓派linux" tabindex="-1"><a class="header-anchor" href="#配置树莓派linux"><span>配置树莓派linux</span></a></h2><p>查看树莓派当前网口ip</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">pi@raspberrypi:~</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;"> $ </span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;">ip</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> addr</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">1:</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> lo:</span><span style="--shiki-light:#179299;--shiki-dark:#D4D4D4;"> &lt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;">LOOPBACK,UP,LOWER_U</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;">P</span><span style="--shiki-light:#179299;--shiki-dark:#D4D4D4;">&gt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> mtu</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 65536</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> qdisc</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> noqueue</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> state</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> UNKNOWN</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> group</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> default</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> qlen</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 1</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    link/loopback</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 00:00:00:00:00:00</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> brd</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 00:00:00:00:00:00</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    inet</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 127.0.0.1/8</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> scope</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> host</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> lo</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">       valid_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> preferred_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    inet6</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ::1/128</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> scope</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> host</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">       valid_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> preferred_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">2:</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> eth0:</span><span style="--shiki-light:#179299;--shiki-dark:#D4D4D4;"> &lt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;">BROADCAST,MULTICAST,UP,LOWER_U</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;">P</span><span style="--shiki-light:#179299;--shiki-dark:#D4D4D4;">&gt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> mtu</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 1500</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> qdisc</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> pfifo_fast</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> state</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> UP</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> group</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> default</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> qlen</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 1000</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    link/ether</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> b8:27:eb:03:30:04</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> brd</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    inet</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 192.168.2.2/24</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> brd</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 192.168.2.255</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> scope</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> global</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> eth0</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">       valid_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> preferred_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    inet</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 169.254.196.116/16</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> brd</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 169.254.255.255</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> scope</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> global</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> eth0</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">       valid_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> preferred_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    inet6</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> fe80::f004:372:8df7:13c8/64</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> scope</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> link</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">       valid_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> preferred_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">3:</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> wlan0:</span><span style="--shiki-light:#179299;--shiki-dark:#D4D4D4;"> &lt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;">NO-CARRIER,BROADCAST,MULTICAST,U</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;">P</span><span style="--shiki-light:#179299;--shiki-dark:#D4D4D4;">&gt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> mtu</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 1500</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> qdisc</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> pfifo_fast</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> state</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> DOWN</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> group</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> default</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> qlen</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 1000</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    link/ether</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> b8:27:eb:56:65:51</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> brd</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    inet6</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> fe80::c4a0:903b:b3d1:9797/64</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> scope</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> link</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> tentative</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">       valid_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> preferred_lft</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> forever</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加给<code>dev eth0</code>添加默认路由<code>default via</code> 地址为 <code>192.168.2.1</code></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">pi@raspberrypi:~</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;"> $ </span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;">sudo</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ip</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> route</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> add</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> default</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> via</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 192.168.2.1</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> dev</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> eth0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>测试公网连接</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">pi@raspberrypi:~</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;"> $ </span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;">ping</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 223.5.5.5</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">PING</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 223.5.5.5</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;"> (223.5.5.5) 56(</span><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">84</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;">) bytes of data.</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">64</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> bytes</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 223.5.5.5:</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> icmp_seq=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ttl=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">119</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> time=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">13.9</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ms</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">64</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> bytes</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 223.5.5.5:</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> icmp_seq=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">2</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ttl=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">119</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> time=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">11.7</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ms</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">64</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> bytes</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 223.5.5.5:</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> icmp_seq=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">3</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ttl=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">119</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> time=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">20.1</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ms</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置阿里云DNS(223.5.5.5)</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">pi@raspberrypi:~</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;"> $ </span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;">sudo</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> vi</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> /etc/resolv.conf</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">pi@raspberrypi:~</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;"> $ </span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;">cat</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> /etc/resolv.conf</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"># Generated by resolvconf</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">nameserver</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 223.5.5.5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试DNS</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">pi@raspberrypi:~</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;"> $ </span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;">ping</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> baidu.com</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">PING</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> baidu.com</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;"> (110.242.68.66) 56(</span><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">84</span><span style="--shiki-light:#4C4F69;--shiki-dark:#E6E6E6;">) bytes of data.</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">64</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> bytes</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 110.242.68.66:</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> icmp_seq=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ttl=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">49</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> time=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">65.8</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ms</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">64</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> bytes</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> from</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 110.242.68.66:</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> icmp_seq=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">2</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ttl=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">49</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> time=</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;">53.1</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ms</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">^C</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">---</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> baidu.com</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ping</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> statistics</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ---</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">2</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> packets</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> transmitted,</span><span style="--shiki-light:#FE640B;--shiki-dark:#B5CEA8;"> 2</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> received,</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 0%</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> packet</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> loss,</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> time</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 1000ms</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#DCDCAA;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">rtt</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> min/avg/max/mdev</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> =</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> 53.133/59.474/65.816/6.346</span><span style="--shiki-light:#40A02B;--shiki-dark:#CE9178;"> ms</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[k];function r(d,g){return a(),s("div",null,p)}const E=i(e,[["render",r],["__file","index.html.vue"]]),C=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF/%E8%AE%B0%E5%BD%95%E5%AE%9E%E7%8E%B0%E5%B0%86window%E7%BD%91%E7%BB%9C%E5%85%B1%E4%BA%AB%E7%BB%99%E6%A0%91%E8%8E%93%E6%B4%BElinux/","title":"记录实现将window网络共享给树莓派linux","lang":"zh-CN","frontmatter":{"title":"记录实现将window网络共享给树莓派linux","date":"2024-07-29T15:18:00.000Z","article":false,"description":"配置windows 网络共享 将以太网（可访问internet）共享给以太网2（不可访问internet） alt text 点击确认后会弹出窗口提示本机以太网2的ip被修改成192.168.137.1, 后续需要手动修改成所需的ip. alt text 修改以太网2的ip为实际所需的ip alt text 配置树莓派linux 查看树莓派当前网口ip...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%90%8E%E7%AB%AF/%E8%AE%B0%E5%BD%95%E5%AE%9E%E7%8E%B0%E5%B0%86window%E7%BD%91%E7%BB%9C%E5%85%B1%E4%BA%AB%E7%BB%99%E6%A0%91%E8%8E%93%E6%B4%BElinux/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"记录实现将window网络共享给树莓派linux"}],["meta",{"property":"og:description","content":"配置windows 网络共享 将以太网（可访问internet）共享给以太网2（不可访问internet） alt text 点击确认后会弹出窗口提示本机以太网2的ip被修改成192.168.137.1, 后续需要手动修改成所需的ip. alt text 修改以太网2的ip为实际所需的ip alt text 配置树莓派linux 查看树莓派当前网口ip..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-29T07:57:36.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:published_time","content":"2024-07-29T15:18:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-29T07:57:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"记录实现将window网络共享给树莓派linux\\",\\"description\\":\\"配置windows 网络共享 将以太网（可访问internet）共享给以太网2（不可访问internet） alt text 点击确认后会弹出窗口提示本机以太网2的ip被修改成192.168.137.1, 后续需要手动修改成所需的ip. alt text 修改以太网2的ip为实际所需的ip alt text 配置树莓派linux 查看树莓派当前网口ip...\\"}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"配置windows","slug":"配置windows","link":"#配置windows","children":[]},{"level":2,"title":"配置树莓派linux","slug":"配置树莓派linux","link":"#配置树莓派linux","children":[]}],"git":{"createdTime":1722239856000,"updatedTime":1722239856000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":1.48,"words":443},"filePathRelative":"后端/记录实现将window网络共享给树莓派linux/index.md","localizedDate":"2024年7月29日","excerpt":"","autoDesc":true}');export{E as comp,C as data};