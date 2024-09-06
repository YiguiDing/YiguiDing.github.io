import{_ as n,c as s,o as a,b as t}from"./app-BSX0n7Vp.js";const p={},o=t(`<p><strong>思路</strong></p><pre><code class="language-text">A = [a_1 a_2 a_3 .... a_n]

a_i ∈ {-1,1}

∑{a_i} &gt;= 1
∏{a_i} == 1


-1 * -1 = 1
1 * 1 =  1

-1 * 1 =  -1
1 * -1 =  -1


1的个数是无所谓的，其个数不会影响乘积的结果 
-1的个数应当是偶数个或0个 这样才能保证-1相乘抵消得1

1的个数应当至少比-1的个数多1 这样和才能&gt;=1

设
1的个数是x
-1的个数是y
则
y%2==0 || y==0
x+1 &gt;= y

cnt = 0
dfs(x,y){
    if(x+1&lt;y){
        cnt++;
        dfs(x+1,y-1)
    }else if(y%2==1){
        cnt++
        dfs(x+1,y-1)
    }
}
</code></pre><p><strong>代码</strong></p><pre><code class="language-java"><span class="token comment">// package _A_Unit_Array;</span>
<span class="token comment">// 提交状态：AC 通过</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedWriter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStreamReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStreamWriter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">PrintWriter</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
     * A = [a_1 a_2 a_3 .... a_n]
     * 
     * a_i ∈ {-1,1}
     * 
     * ∑{a_i} &gt;= 1
     * ∏{a_i} == 1
     * 
     * 
     * -1 * -1 = 1
     * 1 * 1 = 1
     * 
     * -1 * 1 = -1
     * 1 * -1 = -1
     * 乘积得1：
     * 1的个数是无所谓的，其个数不会影响乘积的结果
     * -1的个数应当是偶数个 这样才能保证-1相乘抵消得1
     * 
     * 和&gt;=0：
     * 1的个数应当&gt;=-1的个数 这样和才能&gt;=0
     * 
     * 设
     * 1的个数是x
     * -1的个数是y
     * 则
     * y%2==0
     * x&gt;=y
     */</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token constant">MAX_VAL</span> <span class="token operator">=</span> <span class="token number">0x3f3f3f3f</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">&gt;=</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> k1<span class="token punctuation">,</span> k2<span class="token punctuation">;</span>
            <span class="token comment">// 把-1变成1 但是要保证当前1的个数不能是0</span>
            k1 <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">dfs</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token constant">MAX_VAL</span><span class="token punctuation">;</span>
            <span class="token comment">// 把1变成-1 但是要保证当前1的个数不是0，且：要保证变化后1的数量&gt;=-1的数量（剪枝，否则超时）</span>
            k2 <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">dfs</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token constant">MAX_VAL</span><span class="token punctuation">;</span> 
            <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>k1<span class="token punctuation">,</span> k2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> x<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">// 统计1和-1的数量</span>
                <span class="token keyword">else</span> y<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
            printer<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        printer<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">BufferedWriter</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">PrintWriter</span> printer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrintWriter</span><span class="token punctuation">(</span>writer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tokens <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">nextToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>tokens<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">nextToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        idx<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tokens <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> idx <span class="token operator">==</span> tokens<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                tokens <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// TODO Auto-generated catch block</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>`,4),e=[o];function c(l,k){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","codeforce897_A_Unit_Array单位数组.html.vue"]]),i=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/CodeForce%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0/codeforce897_A_Unit_Array%E5%8D%95%E4%BD%8D%E6%95%B0%E7%BB%84.html","title":"codeforce897_A_Unit_Array单位数组","lang":"zh-CN","frontmatter":{"title":"codeforce897_A_Unit_Array单位数组","date":"2023-06-18T16:25:00.000Z","cover":"/cover/default_cover.jpg","tag":["codeforce","JAVA","算法","刷题笔记"],"category":"算法","description":"思路 代码","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E7%AE%97%E6%B3%95/CodeForce%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0/codeforce897_A_Unit_Array%E5%8D%95%E4%BD%8D%E6%95%B0%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"codeforce897_A_Unit_Array单位数组"}],["meta",{"property":"og:description","content":"思路 代码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://dingdingdang.online/cover/default_cover.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-18T16:42:47.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://dingdingdang.online/cover/default_cover.jpg"}],["meta",{"name":"twitter:image:alt","content":"codeforce897_A_Unit_Array单位数组"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"codeforce"}],["meta",{"property":"article:tag","content":"JAVA"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:tag","content":"刷题笔记"}],["meta",{"property":"article:published_time","content":"2023-06-18T16:25:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-18T16:42:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"codeforce897_A_Unit_Array单位数组\\",\\"image\\":[\\"https://dingdingdang.online/cover/default_cover.jpg\\"],\\"datePublished\\":\\"2023-06-18T16:25:00.000Z\\",\\"dateModified\\":\\"2023-11-18T16:42:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[],"git":{"createdTime":1700226391000,"updatedTime":1700325767000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":1.8,"words":541},"filePathRelative":"算法/CodeForce刷题笔记/codeforce897_A_Unit_Array单位数组.md","localizedDate":"2023年6月18日","excerpt":"","autoDesc":true}');export{r as comp,i as data};
