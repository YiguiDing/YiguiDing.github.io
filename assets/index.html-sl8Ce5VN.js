import{_ as a,r as t,o as c,c as i,a as n,b as s,f as l,e as o}from"./app-cM6bnKm8.js";const p={},d=n("h2",{id:"ubuntu23-10相关配置过程记录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ubuntu23-10相关配置过程记录","aria-hidden":"true"},"#"),s(" Ubuntu23.10相关配置过程记录")],-1),r=n("h3",{id:"通过netplan配置网络",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通过netplan配置网络","aria-hidden":"true"},"#"),s(" 通过Netplan配置网络")],-1),u={href:"https://netplan.io",target:"_blank",rel:"noopener noreferrer"},m=o(`<blockquote><p>Ubuntu 20.4 没有/etc/network/interfaces，配置网络需用Netplan</p></blockquote><blockquote><p>Netplan 是一个用于在 linux 系统上轻松配置网络的实用程序。您只需创建所需网络接口的 YAML 描述以及每个应配置的功能。根据此描述，Netplan 将为您选择的渲染器工具生成所有必要的配置。</p></blockquote><p><strong>配置网络</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建配置文件</span>
<span class="token function">sudo</span> <span class="token function">touch</span> /etc/netplan/*.yaml
<span class="token comment"># 修改权限(移除其他用户的权限)</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">600</span> main.yaml
<span class="token comment"># 查看网卡设备名</span>
<span class="token function">ip</span> addr  <span class="token comment"># 得到:enp0s3,enp0s8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置格式</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Network-Configuration</span>
<span class="token key atrule">network</span><span class="token punctuation">:</span>
    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token comment"># 把控制权转交给?</span>
    <span class="token comment"># NetworkManager默认配置为所有网卡设备dhcp</span>
    <span class="token comment"># renderer: NetworkManager / networkd</span>
    <span class="token key atrule">ethernets</span><span class="token punctuation">:</span>
    <span class="token comment"># 仅主机模式的网卡(ip地址配置为和实体机ip地址同网段)</span>
      <span class="token key atrule">enp0s8</span><span class="token punctuation">:</span>
          <span class="token key atrule">dhcp4</span><span class="token punctuation">:</span> yes
       <span class="token key atrule">enp0s3</span><span class="token punctuation">:</span>
          <span class="token key atrule">dhcp4</span><span class="token punctuation">:</span> no
        <span class="token comment">#   dhcp6: no</span>
          <span class="token key atrule">addresses</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.2.5/24<span class="token punctuation">]</span>
          <span class="token key atrule">gateway</span><span class="token punctuation">:</span> 192.168.2.1
          <span class="token key atrule">nameservers</span><span class="token punctuation">:</span>
             <span class="token key atrule">addresses</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>8.8.8.8<span class="token punctuation">]</span>
<span class="token comment"># device: Name of the interface.</span>
<span class="token comment"># dhcp4/6: yes or no depending upon dynamic or static IP addressing</span>
<span class="token comment"># addresses: IP address of the device in prefix notation. Do not use netmask.</span>
<span class="token comment"># gateway: Gateway IP address to connect to an outside network</span>
<span class="token comment"># nameservers: Address of DNS name servers</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Apply Configuration</span>
<span class="token function">sudo</span> netplan apply
<span class="token comment"># Check</span>
<span class="token function">ip</span> addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(k,b){const e=t("ExternalLinkIcon");return c(),i("div",null,[d,r,n("p",null,[n("a",u,[s("netplan.io"),l(e)])]),m])}const f=a(p,[["render",v],["__file","index.html.vue"]]);export{f as default};
