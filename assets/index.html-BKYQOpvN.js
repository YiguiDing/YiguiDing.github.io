import{_ as n,c as a,o as s,b as t}from"./app-B5uJTUF5.js";const p={},e=t(`<h1 id="蓝桥杯-2022-年-javab-组真题刷题笔记" tabindex="-1"><a class="header-anchor" href="#蓝桥杯-2022-年-javab-组真题刷题笔记"><span>蓝桥杯 2022 年 javaB 组真题刷题笔记</span></a></h1><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ul><li><a href="#%E8%93%9D%E6%A1%A5%E6%9D%AF-2022-%E5%B9%B4-javab-%E7%BB%84%E7%9C%9F%E9%A2%98%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0">蓝桥杯 2022 年 javaB 组真题刷题笔记</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E5%AD%97%E7%AC%A6%E7%BB%9F%E8%AE%A1">字符统计</a></li><li><a href="#%E6%9C%80%E5%B0%91%E5%88%B7%E9%A2%98%E6%95%B0">最少刷题数</a></li></ul></li></ul><h2 id="字符统计" tabindex="-1"><a class="header-anchor" href="#字符统计"><span>字符统计</span></a></h2><pre><code>题目 2672: 蓝桥杯2022年第十三届省赛真题-字符统计
时间限制: 1s 内存限制: 512MB 提交: 1242 解决: 933
题目描述
给定一个只包含大写字母的字符串 S，请你输出其中出现次数最多的字母。

如果有多个字母均出现了最多次，按字母表顺序依次输出所有这些字母。

输入格式
一个只包含大写字母的字符串 S .
输出格式
若干个大写字母，代表答案。
样例输入
BABBACAC
样例输出
AB
提示
对于 100% 的评测用例，1 ≤ |S | ≤ 106 .
</code></pre><p><strong>通过测试的代码</strong></p><pre><code class="language-java"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _01_字符统计 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> str <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">256</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token operator">++</span>counter<span class="token punctuation">[</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    max <span class="token operator">=</span> k<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> counter<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>counter<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="最少刷题数" tabindex="-1"><a class="header-anchor" href="#最少刷题数"><span>最少刷题数</span></a></h2><pre><code>题目描述
小蓝老师教的编程课有 N 名学生，编号依次是 1 . . . N。第 i 号学生这学期刷题的数量是 Ai。

对于每一名学生，请你计算他至少还要再刷多少道题，才能使得全班刷题比他多的学生数不超过刷题比他少的学生数。

输入格式
第一行包含一个正整数 N。

第二行包含 N 个整数：A1, A2, A3, . . . , AN.

输出格式
输出 N 个整数，依次表示第 1 . . . N 号学生分别至少还要再刷多少道题。
样例输入
5
12 10 15 20 6
样例输出
0 3 0 0 7
提示
对于 30% 的数据，1 ≤ N ≤ 1000, 0 ≤ Ai ≤ 1000. 

对于 100% 的数据，1 ≤ N ≤ 100000, 0 ≤ Ai ≤ 100000.
</code></pre>`,9),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95/%E8%93%9D%E6%A1%A5%E6%9D%AF%E7%9C%9F%E9%A2%982022_java_B%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0/","title":"蓝桥杯 2022 年 javaB 组真题刷题笔记","lang":"zh-CN","frontmatter":{"date":"2023-03-04T05:25:00.000Z","title":"蓝桥杯 2022 年 javaB 组真题刷题笔记","cover":"./cover/蓝桥杯历年真题刷题笔记.png","tag":["蓝桥杯","JAVA","算法","刷题笔记"],"category":"算法","description":"蓝桥杯 2022 年 javaB 组真题刷题笔记 目录 蓝桥杯 2022 年 javaB 组真题刷题笔记 目录 字符统计 最少刷题数 字符统计 通过测试的代码 最少刷题数","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E7%AE%97%E6%B3%95/%E8%93%9D%E6%A1%A5%E6%9D%AF%E7%9C%9F%E9%A2%982022_java_B%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"蓝桥杯 2022 年 javaB 组真题刷题笔记"}],["meta",{"property":"og:description","content":"蓝桥杯 2022 年 javaB 组真题刷题笔记 目录 蓝桥杯 2022 年 javaB 组真题刷题笔记 目录 字符统计 最少刷题数 字符统计 通过测试的代码 最少刷题数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-22T16:53:14.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"蓝桥杯"}],["meta",{"property":"article:tag","content":"JAVA"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:tag","content":"刷题笔记"}],["meta",{"property":"article:published_time","content":"2023-03-04T05:25:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-22T16:53:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"蓝桥杯 2022 年 javaB 组真题刷题笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-04T05:25:00.000Z\\",\\"dateModified\\":\\"2024-07-22T16:53:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"字符统计","slug":"字符统计","link":"#字符统计","children":[]},{"level":2,"title":"最少刷题数","slug":"最少刷题数","link":"#最少刷题数","children":[]}],"git":{"createdTime":1700226391000,"updatedTime":1721667194000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":1.88,"words":563},"filePathRelative":"算法/蓝桥杯真题2022_java_B刷题笔记/index.md","localizedDate":"2023年3月4日","excerpt":"","autoDesc":true}');export{r as comp,k as data};
