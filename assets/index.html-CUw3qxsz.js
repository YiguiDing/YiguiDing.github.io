import{_ as e,o as i,c as n,b as a}from"./app-Cfj8KYFD.js";const l="/assets/C__实现连连看小游戏及寻路算法演示-CY17vlS0.gif",s="/assets/2022-10-18-16-56-24-B_1XCuNK.png",t={},r=a('<h1 id="实现连连看小游戏及寻路算法演示" tabindex="-1"><a class="header-anchor" href="#实现连连看小游戏及寻路算法演示"><span>实现连连看小游戏及寻路算法演示</span></a></h1><p><img src="'+l+'" alt=""></p><h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span><a href="./uploads/%E8%BF%9E%E8%BF%9E%E7%9C%8B/Linkup.exe">--&gt;下载&lt;--</a></span></a></h1><h2 id="映射彩虹色" tabindex="-1"><a class="header-anchor" href="#映射彩虹色"><span>映射彩虹色</span></a></h2><p><strong>原理</strong><br><img src="'+s+`" alt=""></p><p><strong>代码</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>    int preocess_color(double rate)//[0.0 ~ 1.0]  -&gt; struct rgb[char red,char green,char blue]
    {
        int R=0;
        int G=0;
        int B=0;
        if(rate&lt;=1/6.0)
        {
            R=255;
            G=152/(1/6.0)*rate;
            B=0;
        }
        else
        if(rate&lt;=2/6.0)
        {
            R=255;
            G=255/(2/6.0)*rate;
            B=0;
        }
        else
        if(rate&lt;=3/6.0)
        {
            R=255/(0-(1/6.0))*(rate-2/6.0)+255;
            G=255;
            B=0;
        }
        else
        if(rate&lt;=4/6.0)
        {
            R=0;
            G=255;
            B=255/(1/6.0)*(rate-3/6.0);
        }
        else
        if(rate&lt;=5/6.0)
        {
            R=0;
            G=255/(0-(1/6.0))*(rate-4/6.0)+255;
            B=255;
        }
        else
        //if(rate&lt;=1)
        {
            R=150/(1/6.0)*(rate-5/6.0);
            G=0;
            B=255;
        }
        return EGERGB(R,G,B);

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算互补色" tabindex="-1"><a class="header-anchor" href="#计算互补色"><span>计算互补色</span></a></h2><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>    //计算互补色180°
    int process_another_color(int in_color)
    {

        int B=GetRValue(in_color);
        int G=GetGValue(in_color);
        int R=GetBValue(in_color);


        return EGERGB(255-R,255-G,255-B);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[r];function c(v,m){return i(),n("div",null,d)}const u=e(t,[["render",c],["__file","index.html.vue"]]),E=JSON.parse('{"path":"/%E9%A1%B9%E7%9B%AE/zip%E5%BD%92%E6%A1%A3/%E4%B8%8D%E5%80%BC%E4%B8%80%E6%8F%90%E7%9A%84%E5%B0%8F%E6%B8%B8%E6%88%8F/C__%E5%AE%9E%E7%8E%B0%E8%BF%9E%E8%BF%9E%E7%9C%8B%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%8F%8A%E5%AF%BB%E8%B7%AF%E7%AE%97%E6%B3%95%E6%BC%94%E7%A4%BA/","title":"C++实现连连看小游戏及寻路算法演示","lang":"zh-CN","frontmatter":{"title":"C++实现连连看小游戏及寻路算法演示","date":"2021-04-02T22:03:00.000Z","cover":"./cover/C++实现连连看小游戏及寻路算法演示.gif","tag":["连连看","C++","demo","game"],"category":"笔记","imageMin":true,"description":"实现连连看小游戏及寻路算法演示 -->下载<-- 映射彩虹色 原理 代码 计算互补色","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E9%A1%B9%E7%9B%AE/zip%E5%BD%92%E6%A1%A3/%E4%B8%8D%E5%80%BC%E4%B8%80%E6%8F%90%E7%9A%84%E5%B0%8F%E6%B8%B8%E6%88%8F/C__%E5%AE%9E%E7%8E%B0%E8%BF%9E%E8%BF%9E%E7%9C%8B%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%8F%8A%E5%AF%BB%E8%B7%AF%E7%AE%97%E6%B3%95%E6%BC%94%E7%A4%BA/"}],["meta",{"property":"og:site_name","content":"Yigui-Ding的Blog小站"}],["meta",{"property":"og:title","content":"C++实现连连看小游戏及寻路算法演示"}],["meta",{"property":"og:description","content":"实现连连看小游戏及寻路算法演示 -->下载<-- 映射彩虹色 原理 代码 计算互补色"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T08:31:16.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"连连看"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"demo"}],["meta",{"property":"article:tag","content":"game"}],["meta",{"property":"article:published_time","content":"2021-04-02T22:03:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T08:31:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++实现连连看小游戏及寻路算法演示\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-02T22:03:00.000Z\\",\\"dateModified\\":\\"2024-03-18T08:31:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"映射彩虹色","slug":"映射彩虹色","link":"#映射彩虹色","children":[]},{"level":2,"title":"计算互补色","slug":"计算互补色","link":"#计算互补色","children":[]}],"git":{"createdTime":1710750676000,"updatedTime":1710750676000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":0.93,"words":279},"filePathRelative":"项目/zip归档/不值一提的小游戏/C++实现连连看小游戏及寻路算法演示/index.md","localizedDate":"2021年4月2日","excerpt":"","autoDesc":true}');export{u as comp,E as data};
