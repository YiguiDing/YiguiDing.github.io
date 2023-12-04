import{_ as i,o as n,c as e,e as s}from"./app--ObTWJ7T.js";const l="/assets/C__实现连连看小游戏及寻路算法演示-mNe75UtM.gif",d="/assets/2022-10-18-16-56-24-f9VwrjSh.png",a={},r=s('<h1 id="实现连连看小游戏及寻路算法演示" tabindex="-1"><a class="header-anchor" href="#实现连连看小游戏及寻路算法演示" aria-hidden="true">#</a> 实现连连看小游戏及寻路算法演示</h1><p><img src="'+l+'" alt=""></p><h1 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> <a href="./uploads/%E8%BF%9E%E8%BF%9E%E7%9C%8B/Linkup.exe">--&gt;下载&lt;--</a></h1><h2 id="映射彩虹色" tabindex="-1"><a class="header-anchor" href="#映射彩虹色" aria-hidden="true">#</a> 映射彩虹色</h2><p><strong>原理</strong><br><img src="'+d+`" alt=""></p><p><strong>代码</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>    int preocess_color(double rate)//[0.0 ~ 1.0]  -&gt; struct rgb[char red,char green,char blue]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算互补色" tabindex="-1"><a class="header-anchor" href="#计算互补色" aria-hidden="true">#</a> 计算互补色</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>    //计算互补色180°
    int process_another_color(int in_color)
    {

        int B=GetRValue(in_color);
        int G=GetGValue(in_color);
        int R=GetBValue(in_color);


        return EGERGB(255-R,255-G,255-B);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=[r];function c(u,t){return n(),e("div",null,v)}const b=i(a,[["render",c],["__file","index.html.vue"]]);export{b as default};
