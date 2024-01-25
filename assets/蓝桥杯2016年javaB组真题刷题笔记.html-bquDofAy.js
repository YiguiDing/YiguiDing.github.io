import{_ as n,o as s,c as a,e as p}from"./app-2zYJndy_.js";const t="/assets/2023-03-06-18-46-28-nttFtP_E.png",e="/assets/2023-03-06-19-31-09-Rtt11KFm.png",o="/assets/2023-03-07-14-50-11-XJCCjsEJ.png",c="/assets/2023-03-07-14-50-19-eNdRj3wK.png",l="/assets/2023-03-07-14-50-26-3tn-kGG5.png",i={},u=p('<h1 id="蓝桥杯-2016-年-javab-组真题刷题笔记" tabindex="-1"><a class="header-anchor" href="#蓝桥杯-2016-年-javab-组真题刷题笔记" aria-hidden="true">#</a> 蓝桥杯 2016 年 javaB 组真题刷题笔记</h1><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><a href="#%E8%93%9D%E6%A1%A5%E6%9D%AF-2016-%E5%B9%B4-javab-%E7%BB%84%E7%9C%9F%E9%A2%98%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0">蓝桥杯 2016 年 javaB 组真题刷题笔记</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#01%E7%85%A4%E7%90%83%E6%95%B0%E7%9B%AE">[01]煤球数目</a></li><li><a href="#02%E7%94%9F%E6%97%A5%E8%9C%A1%E7%83%9B">[02]生日蜡烛</a><ul><li><a href="#%E6%96%B9%E6%B3%95-1%E6%9E%9A%E4%B8%BE%E5%BC%80%E5%A7%8B%E8%BF%87%E7%94%9F%E6%97%A5%E7%9A%84%E5%B2%81%E6%95%B0%E5%92%8C%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B2%81%E6%95%B0">方法 1：枚举开始过生日的岁数和现在的岁数</a></li><li><a href="#%E6%96%B9%E6%B3%95-2%E6%9E%9A%E4%B8%BE%E8%BF%87%E7%94%9F%E6%97%A5%E7%9A%84%E6%AC%A1%E6%95%B0">方法 2：枚举过生日的次数</a></li></ul></li><li><a href="#03%E6%90%AD%E7%A7%AF%E6%9C%A8">[03]搭积木</a><ul><li><a href="#%E9%80%92%E5%BD%92%E4%B8%80%E7%BB%B4%E6%95%B0%E7%BB%84%E5%85%A8%E6%8E%92%E5%88%97">递归：一维数组全排列</a></li><li><a href="#%E9%80%92%E5%BD%92%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E5%85%A8%E6%8E%92%E5%88%97%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E7%AC%A6%E5%90%88%E6%9D%A1%E4%BB%B6">递归：二维数组全排列+判断是否符合条件</a></li><li><a href="#%E9%80%92%E5%BD%92%E6%95%88%E7%8E%87%E8%BE%83%E9%AB%98%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E5%85%A8%E6%8E%92%E5%88%97%E5%9C%A8%E9%80%89%E6%8B%A9%E5%85%83%E7%B4%A0%E7%9A%84%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%89%AA%E6%9E%9D">递归【效率较高】：二维数组全排列+在选择元素的过程中剪枝</a></li><li><a href="#%E9%94%99%E8%AF%AF%E5%86%99%E6%B3%95%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E7%9A%84%E9%80%92%E5%BD%92%E5%85%A8%E6%8E%92%E5%88%97%E9%94%99%E8%AF%AF%E5%86%99%E6%B3%95">错误写法：二维数组的递归全排列错误写法</a></li></ul></li><li><a href="#04%E5%88%86%E5%B0%8F%E7%BB%84">[04]分小组</a></li><li><a href="#05%E6%8A%BD%E7%AD%BE">[05]抽签</a></li><li><a href="#06%E5%AF%92%E5%81%87%E4%BD%9C%E4%B8%9A">[06]寒假作业</a><ul><li><a href="#%E6%9C%80%E4%BC%98%E8%A7%A3%E6%B3%95%E9%80%92%E5%BD%92%E8%B0%83%E7%94%A8%E5%85%A8%E6%8E%92%E5%88%97%E4%BD%86%E6%AF%8F%E6%AC%A1%E7%A1%AE%E5%AE%9A%E4%B8%89%E4%B8%AA%E6%95%B0">最优解法：递归调用，全排列，但每次确定三个数</a></li><li><a href="#%E9%94%99%E8%AF%AF%E8%A7%A3%E6%B3%95%E9%80%92%E5%BD%92%E8%B0%83%E7%94%A813-%E4%B8%AA%E6%95%B0%E7%9A%84%E5%85%A8%E6%8E%92%E5%88%97-%E7%AE%97%E6%B3%95%E6%98%AF%E6%AD%A3%E7%A1%AE%E7%9A%84%E4%BD%86%E6%9E%81%E5%85%B6%E8%80%97%E6%97%B6">错误解法：递归调用，13 个数的全排列, 算法是正确的，但极其耗时</a></li></ul></li><li><a href="#07%E5%89%AA%E9%82%AE%E7%A5%A8">[07]剪邮票</a><ul><li><a href="#%E5%86%99%E6%B3%95-1%E9%80%92%E5%BD%92%E6%96%B9%E5%BC%8F%E7%9A%84-12-%E9%80%89-5-%E6%9E%9A%E4%B8%BE%E7%BB%84%E5%90%88--%E9%9D%9E%E9%80%92%E5%BD%92%E6%96%B9%E5%BC%8F%E6%A3%80%E6%9F%A5%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%BF%9E%E9%80%9A">写法 1：递归方式的 12 选 5 枚举组合 + 非递归方式检查节点是否连通</a></li><li><a href="#%E5%86%99%E6%B3%95-2%E9%80%92%E5%BD%92%E6%96%B9%E5%BC%8F%E7%9A%84-12-%E9%80%89-5-%E6%9E%9A%E4%B8%BE%E7%BB%84%E5%90%88--%E9%80%92%E5%BD%92%E6%96%B9%E5%BC%8F%E6%A3%80%E6%9F%A5%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%BF%9E%E9%80%9A">写法 2：递归方式的 12 选 5 枚举组合 + 递归方式检查节点是否连通</a></li><li><a href="#%E4%B9%8B%E5%89%8D%E7%9A%84%E9%94%99%E8%AF%AF%E5%86%99%E6%B3%95%E4%B8%8D%E6%98%AF%E6%8E%92%E5%88%97%E9%97%AE%E9%A2%98%E8%80%8C%E6%98%AF%E7%BB%84%E5%90%88%E9%97%AE%E9%A2%98">之前的错误写法：不是排列问题而是组合问题</a><ul><li><a href="#%E5%86%99%E6%B3%95-1%E9%80%92%E5%BD%92%E6%96%B9%E5%BC%8F%E7%9A%84-12-%E9%80%89-5-%E6%9E%9A%E4%B8%BE%E6%8E%92%E5%88%97%E9%9D%9E%E9%80%92%E5%BD%92%E6%96%B9%E5%BC%8F%E6%A3%80%E6%9F%A5%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%BF%9E%E9%80%9A">写法 1：递归方式的 12 选 5 枚举排列+非递归方式检查节点是否连通</a></li><li><a href="#%E5%86%99%E6%B3%95-2%E9%80%92%E5%BD%92%E6%96%B9%E5%BC%8F%E7%9A%84-12-%E9%80%89-5-%E6%9E%9A%E4%B8%BE%E6%8E%92%E5%88%97%E9%80%92%E5%BD%92%E6%96%B9%E5%BC%8F%E6%A3%80%E6%9F%A5%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%BF%9E%E9%80%9A">写法 2：递归方式的 12 选 5 枚举排列+递归方式检查节点是否连通</a></li></ul></li></ul></li><li><a href="#08%E5%8F%96%E7%90%83%E5%8D%9A%E5%BC%88">[08]取球博弈</a><ul><li><a href="#%E8%A7%A3%E6%B3%95-1%E9%80%92%E5%BD%92">解法 1:递归</a></li><li><a href="#%E8%A7%A3%E6%B3%95-2%E9%80%92%E5%BD%92%E7%8A%B6%E6%80%81%E7%BC%93%E5%AD%98">解法 2:递归+状态缓存</a></li></ul></li><li><a href="#09%E4%BA%A4%E6%8D%A2%E7%93%B6%E5%AD%90">[09]交换瓶子</a><ul><li><a href="#%E9%80%92%E5%BD%92%E7%89%88">递归版</a></li><li><a href="#%E9%9D%9E%E9%80%92%E5%BD%92%E7%89%88">非递归版</a></li></ul></li><li><a href="#10%E5%8E%8B%E7%BC%A9%E5%8F%98%E6%8D%A2">[10]压缩变换</a><ul><li><a href="#%E7%9B%B4%E8%A7%89%E8%A7%A3%E6%B3%95">直觉解法</a></li><li><a href="#%E5%88%A9%E7%94%A8%E7%BA%BF%E6%AE%B5%E6%A0%91%E4%BC%98%E5%8C%96%E7%9A%84%E8%A7%A3%E6%B3%95">利用线段树优化的解法</a></li></ul></li></ul></li></ul><h2 id="_01-煤球数目" tabindex="-1"><a class="header-anchor" href="#_01-煤球数目" aria-hidden="true">#</a> [01]煤球数目</h2><p><img src="'+t+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> _01_煤球数目 <span class="token punctuation">{</span>
 <span class="token comment">// 题意：</span>
 <span class="token comment">// 1----------*</span>
 <span class="token comment">// 2--------* * *</span>
 <span class="token comment">// 3-----* * * * * *</span>
 <span class="token comment">// 4-* * * * * * * * * *</span>
 <span class="token comment">// 注意求的是100层总共的值,不是第100层的值</span>

 <span class="token comment">// 规律:</span>
 <span class="token comment">//</span>
 <span class="token comment">// *-------------------------- (0)+1</span>
 <span class="token comment">// * * *---------------------- (0 + 1) + 2</span>
 <span class="token comment">// * * * * * *---------------- ((0 + 1) + 2) + 3</span>
 <span class="token comment">// * * * * * * * * * *-------- (((0 + 1) + 2) + 3) + 4</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Long</span> sum <span class="token operator">=</span> <span class="token number">0l</span><span class="token punctuation">;</span>
  <span class="token class-name">Long</span> k <span class="token operator">=</span> <span class="token number">0l</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Long</span> i <span class="token operator">=</span> <span class="token number">1l</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   k <span class="token operator">+=</span> i<span class="token punctuation">;</span>
   sum <span class="token operator">+=</span> k<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//结果： 171700</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-生日蜡烛" tabindex="-1"><a class="header-anchor" href="#_02-生日蜡烛" aria-hidden="true">#</a> [02]生日蜡烛</h2><p><img src="`+e+`" alt=""></p><h3 id="方法-1-枚举开始过生日的岁数和现在的岁数" tabindex="-1"><a class="header-anchor" href="#方法-1-枚举开始过生日的岁数和现在的岁数" aria-hidden="true">#</a> 方法 1：枚举开始过生日的岁数和现在的岁数</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> _02_生日蜡烛 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> start <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> start<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> end <span class="token operator">=</span> start<span class="token punctuation">;</span> end <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> end<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 求和公式：（首项+末项）乘 项数 除 二</span>
    <span class="token comment">//</span>
    <span class="token comment">// end-start+1 = 年数</span>
    <span class="token comment">// 2岁 - 1岁 = 相差1年 所以要知道项数还要加1</span>
    <span class="token comment">// 如：</span>
    <span class="token comment">// 10 - 5 + 1 = 6</span>
    <span class="token comment">// 5 6 7 8 9 109️九个数</span>
    <span class="token keyword">double</span> k <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">236</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// 输出：</span>
     <span class="token comment">// 26  &lt;------要提交的答案</span>
     <span class="token comment">// 33</span>
     <span class="token comment">// 236.0</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法-2-枚举过生日的次数" tabindex="-1"><a class="header-anchor" href="#方法-2-枚举过生日的次数" aria-hidden="true">#</a> 方法 2：枚举过生日的次数</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> _02_生日蜡烛 <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> _02_生日蜡烛 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 解法2：</span>
  <span class="token comment">// 等差数列求和公式 == (首项+末项)*项数÷2</span>
  <span class="token comment">// 因为： 末项 = 首项+(项数-1)*公差</span>
  <span class="token comment">// 所以：(首项+首项+(项数-1)*公差)*项数÷2</span>
  <span class="token comment">// 所以：== ( a_0 + a_0 + (n-1) * d ) * n / 2</span>
  <span class="token comment">// 因为：d==1</span>
  <span class="token comment">// 所以：== ( a_0 + a_0 + (n-1) ) * n / 2</span>
  <span class="token comment">// 所以：== ( 2*a_0 + (n-1) ) * n / 2</span>
  <span class="token comment">// 因为：sum==236</span>
  <span class="token comment">// 所以：236 == ( 2*a_0 + (n-1) ) * n / 2</span>
  <span class="token comment">// 所以：236*2/n-(n-1) == 2 * a_0</span>
  <span class="token comment">// 设 k == 236*2/n-(n-1)</span>
  <span class="token comment">// 因为 a_0 是整数，</span>
  <span class="token comment">// 所以 k%2 == 0</span>
  <span class="token comment">// 所以：a_0 == k/2</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">double</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">double</span> k <span class="token operator">=</span> <span class="token number">236</span> <span class="token operator">*</span> <span class="token number">2.0</span> <span class="token operator">/</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">%</span> <span class="token number">2.0</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> a_0 <span class="token operator">=</span> k <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a_0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出：</span>
    <span class="token comment">// 236.0</span>
    <span class="token comment">// 26  &lt;------要提交的答案</span>
    <span class="token comment">// -25.0</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-搭积木" tabindex="-1"><a class="header-anchor" href="#_03-搭积木" aria-hidden="true">#</a> [03]搭积木</h2><p>问题说明：</p><p>小明最近喜欢搭数字积木，一共有 10 块积木，每个积木上有一个数字，0~9。</p><p>搭积木规则：每个积木放到其它两个积木的上面，并且一定比下面的两个积木数字小。最后搭成 4 层的金字塔形，必须用完所有的积木。</p><p>下面是两种合格的搭法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   0
  1 2
 3 4 5
6 7 8 9

   0
  3 1
 7 5 2
9 8 6 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请你计算这样的搭法一共有多少种？</p><p>请填表示总数目的数字。注意：你提交的应该是一个整数，不要填写任何多余的内容或说明性文字。</p><p><strong>思路</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用二维数组存储，全排列，
条件是 k = data[i][j]   k&lt;data[i+1][j] &amp;&amp; k&lt;data[i+1][j+1]

0
3 1
7 5 2
9 8 6 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归-一维数组全排列" tabindex="-1"><a class="header-anchor" href="#递归-一维数组全排列" aria-hidden="true">#</a> 递归：一维数组全排列</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _03_搭积木 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _03_搭积木 handle <span class="token operator">=</span> <span class="token keyword">new</span> _03_搭积木<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出：768</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> num <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> step<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    counter<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> step<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">exchange</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> step<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">process</span><span class="token punctuation">(</span>step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exchange</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> step<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 题意中的金字塔结构</span>
  <span class="token comment">// ------0</span>
  <span class="token comment">// -----3 1</span>
  <span class="token comment">// ----7 5 2</span>
  <span class="token comment">// ---9 8 6 4</span>

  <span class="token comment">// 抽象成二维数组：</span>
  <span class="token comment">// 0</span>
  <span class="token comment">// 3 1</span>
  <span class="token comment">// 7 5 2</span>
  <span class="token comment">// 9 8 6 4</span>

  <span class="token comment">// 用一维数组对应： [0,3,1,7,5,2,9,8,6,4]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> increasement <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 初始在0行，下一行的位置在+1 再下一行是+2</span>
    increasement <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 最多加3</span>
    i <span class="token operator">+=</span> increasement<span class="token punctuation">,</span> increasement<span class="token operator">++</span><span class="token comment">// 定位到下一行</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
     j <span class="token operator">&lt;</span> increasement<span class="token punctuation">;</span> <span class="token comment">// incureasement 某种程度上代表了当前所在的行，</span>
     j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> currentLine <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">int</span> nextLine <span class="token operator">=</span> i <span class="token operator">+</span> increasement<span class="token punctuation">;</span><span class="token comment">// 下一行</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> arr<span class="token punctuation">[</span>currentLine <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n1 <span class="token operator">=</span> arr<span class="token punctuation">[</span>nextLine <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n2 <span class="token operator">=</span> arr<span class="token punctuation">[</span>nextLine <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> n1 <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">void</span> <span class="token function">exchange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归-二维数组全排列-判断是否符合条件" tabindex="-1"><a class="header-anchor" href="#递归-二维数组全排列-判断是否符合条件" aria-hidden="true">#</a> 递归：二维数组全排列+判断是否符合条件</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _03_搭积木 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _03_搭积木 handle <span class="token operator">=</span> <span class="token keyword">new</span> _03_搭积木<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出 768</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> selected <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span> <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token comment">// 全排列</span>
 <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> curI<span class="token punctuation">,</span> <span class="token keyword">int</span> curJ<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curI <span class="token operator">==</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> curJ <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// System.out.println(Arrays.toString(result[0]));</span>
    <span class="token comment">// System.out.println(Arrays.toString(result[1]));</span>
    <span class="token comment">// System.out.println(Arrays.toString(result[2]));</span>
    <span class="token comment">// System.out.println(Arrays.toString(result[3]));</span>
    <span class="token comment">// System.out.println(&quot;&quot;);</span>

    counter<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token comment">// 这一步操作是把行坐标和列坐标调整到正确的位置</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>curJ <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token comment">// 列坐标达到当前行最大值</span>
   <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curI <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 行指针指向下一行</span>
    curJ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 列坐标指向0</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 从当前位置及后续位置中挑选一个元素放到当前位置</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

      result<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token function">process</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 递归，确定下一个位置的元素</span>

      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n1 <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n2 <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> n1 <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归【效率较高】-二维数组全排列-在选择元素的过程中剪枝" tabindex="-1"><a class="header-anchor" href="#递归【效率较高】-二维数组全排列-在选择元素的过程中剪枝" aria-hidden="true">#</a> 递归【效率较高】：二维数组全排列+在选择元素的过程中剪枝</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _03_搭积木 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _03_搭积木 handle <span class="token operator">=</span> <span class="token keyword">new</span> _03_搭积木<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出 768</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> selected <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span> <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token comment">// 全排列</span>
 <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> curI<span class="token punctuation">,</span> <span class="token keyword">int</span> curJ<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curI <span class="token operator">==</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> curJ <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// System.out.println(Arrays.toString(result[0]));</span>
   <span class="token comment">// System.out.println(Arrays.toString(result[1]));</span>
   <span class="token comment">// System.out.println(Arrays.toString(result[2]));</span>
   <span class="token comment">// System.out.println(Arrays.toString(result[3]));</span>
   <span class="token comment">// System.out.println(&quot;&quot;);</span>
   counter<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

   <span class="token comment">// 这一步操作是把行坐标和列坐标调整到正确的位置</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>curJ <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token comment">// 列坐标达到当前行最大值</span>
   <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curI <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 行指针指向下一行</span>
    curJ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 列坐标指向0</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 从当前位置及后续位置中挑选一个元素放到当前位置</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

      result<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>curI <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">[</span>curI <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> result<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token punctuation">(</span>curI <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> curJ <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">[</span>curI <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>curJ <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> result<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">// 回溯</span>
       <span class="token keyword">continue</span><span class="token punctuation">;</span><span class="token comment">// 剪枝</span>
      <span class="token punctuation">}</span>

      <span class="token function">process</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 递归，确定下一个位置的元素</span>

      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误写法-二维数组的递归全排列错误写法" tabindex="-1"><a class="header-anchor" href="#错误写法-二维数组的递归全排列错误写法" aria-hidden="true">#</a> 错误写法：二维数组的递归全排列错误写法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _03_搭积木 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _03_搭积木 handle <span class="token operator">=</span> <span class="token keyword">new</span> _03_搭积木<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出 27648</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span> <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> curI<span class="token punctuation">,</span> <span class="token keyword">int</span> curJ<span class="token punctuation">,</span> <span class="token keyword">int</span> step<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    counter<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>curJ <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token comment">// 列坐标达到当前行最大值</span>
   <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这一步操作是把行坐标和列坐标调整到正确的位置</span>
    curI <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 行指针指向下一行</span>
    curJ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 列坐标指向0</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> curI<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 错误之处就在于：\`int j = curJ\`</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> curJ<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">exchange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> curI<span class="token punctuation">,</span> curJ<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token function">process</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 行坐标不变，列坐标+1 表示进入下一个位置，实际坐标</span>
     <span class="token function">exchange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> curI<span class="token punctuation">,</span> curJ<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 回溯</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n1 <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n2 <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> n1 <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">void</span> <span class="token function">exchange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> a_i<span class="token punctuation">,</span> <span class="token keyword">int</span> a_j<span class="token punctuation">,</span> <span class="token keyword">int</span> b_i<span class="token punctuation">,</span> <span class="token keyword">int</span> b_j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a_i <span class="token operator">!=</span> b_i <span class="token operator">&amp;&amp;</span> a_j <span class="token operator">!=</span> b_j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   arr<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">[</span>a_j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">[</span>a_j<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>b_i<span class="token punctuation">]</span><span class="token punctuation">[</span>b_j<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>b_i<span class="token punctuation">]</span><span class="token punctuation">[</span>b_j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">[</span>a_j<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>b_i<span class="token punctuation">]</span><span class="token punctuation">[</span>b_j<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">[</span>a_j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">[</span>a_j<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>b_i<span class="token punctuation">]</span><span class="token punctuation">[</span>b_j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-分小组" tabindex="-1"><a class="header-anchor" href="#_04-分小组" aria-hidden="true">#</a> [04]分小组</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
分小组

9名运动员参加比赛，需要分3组进行预赛。
有哪些分组的方案呢？

我们标记运动员为 A,B,C,... I
下面的程序列出了所有的分组方法。

该程序的正常输出为：
ABC DEF GHI
ABC DEG FHI
ABC DEH FGI
ABC DEI FGH
ABC DFG EHI
ABC DFH EGI
ABC DFI EGH
ABC DGH EFI
ABC DGI EFH
ABC DHI EFG
ABC EFG DHI
ABC EFH DGI
ABC EFI DGH
ABC EGH DFI
ABC EGI DFH
ABC EHI DFG
ABC FGH DEI
ABC FGI DEH
ABC FHI DEG
ABC GHI DEF
ABD CEF GHI
ABD CEG FHI
ABD CEH FGI
ABD CEI FGH
ABD CFG EHI
ABD CFH EGI
ABD CFI EGH
ABD CGH EFI
ABD CGI EFH
ABD CHI EFG
ABD EFG CHI
..... (以下省略，总共560行)。

public class A
{
    public static String remain(int[] a)
    {
        String s = &quot;&quot;;
        for(int i=0; i&lt;a.length; i++){
            if(a[i] == 0) s += (char)(i+&#39;A&#39;);
        }
        return s;
    }

    public static void f(String s, int[] a)
    {
        for(int i=0; i&lt;a.length; i++){
            if(a[i]==1) continue;
            a[i] = 1;
            for(int j=i+1; j&lt;a.length; j++){
                if(a[j]==1) continue;
                a[j]=1;
                for(int k=j+1; k&lt;a.length; k++){
                    if(a[k]==1) continue;
                    a[k]=1;
                    System.out.println(__________________________________);  //填空位置
                    a[k]=0;
                }
                a[j]=0;
            }
            a[i] = 0;
        }
    }

    public static void main(String[] args)
    {
        int[] a = new int[9];
        a[0] = 1;

        for(int b=1; b&lt;a.length; b++){
            a[b] = 1;
            for(int c=b+1; c&lt;a.length; c++){
                a[c] = 1;
                String s = &quot;A&quot; + (char)(b+&#39;A&#39;) + (char)(c+&#39;A&#39;);
                f(s,a);
                a[c] = 0;
            }
            a[b] = 0;
        }
    }
}

仔细阅读代码，填写划线部分缺少的内容。

注意：不要填写任何已有内容或说明性文字。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>填写内容：<span class="token function">remain</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

答案：s <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">(</span>j<span class="token operator">+</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">(</span>k<span class="token operator">+</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token function">remain</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>做题思路</strong>，</p><p>不要盯着代码看，直接执行它，然后调试出结果。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * _04_分小组
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> _04_分小组 <span class="token punctuation">{</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">remain</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    s <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> s<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">continue</span><span class="token punctuation">;</span>
   a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
     <span class="token keyword">continue</span><span class="token punctuation">;</span>
    a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
     a<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

     <span class="token comment">// 测试</span>
     <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> s2 <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token function">remain</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/**
      * 输出：
      * ABC DEF GHI
      * ABC DEG FHI
      * ABC DEH FGI
      * ABC DEI FGH
      */</span>

     <span class="token comment">// 填空位置</span>
     <span class="token comment">// System.out.println(____________________________________);</span>

     a<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> b<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   a<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> c <span class="token operator">=</span> b <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>b <span class="token operator">+</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>c <span class="token operator">+</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">f</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   a<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-抽签" tabindex="-1"><a class="header-anchor" href="#_05-抽签" aria-hidden="true">#</a> [05]抽签</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
抽签

X星球要派出一个5人组成的观察团前往W星。
其中：
A国最多可以派出4人。
B国最多可以派出2人。
C国最多可以派出2人。
....

那么最终派往W星的观察团会有多少种国别的不同组合呢？

下面的程序解决了这个问题。
数组a[] 中既是每个国家可以派出的最多的名额。
程序执行结果为：
DEFFF
CEFFF
CDFFF
CDEFF
CCFFF
CCEFF
CCDFF
CCDEF
BEFFF
BDFFF
BDEFF
BCFFF
BCEFF
BCDFF
BCDEF
....
(以下省略，总共101行)


public class A
{
    public static void f(int[] a, int k, int n, String s)
    {
        if(k==a.length){
            if(n==0) System.out.println(s);
            return;
        }

        String s2 = s;
        for(int i=0; i&lt;=a[k]; i++){
            _____________________________;   //填空位置
            s2 += (char)(k+&#39;A&#39;);
        }
    }

    public static void main(String[] args)
    {
        int[] a = {4,2,2,1,1,3};

        f(a,0,5,&quot;&quot;);
    }
}


仔细阅读代码，填写划线部分缺少的内容。

注意：不要填写任何已有内容或说明性文字。
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>答案
f<span class="token punctuation">(</span>a,k+1,n-i,s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> _05_抽签 <span class="token punctuation">{</span>
 <span class="token comment">/*
  * 抽签
  *
  * X星球要派出一个5人组成的观察团前往W星。
  * 其中：
  * A国最多可以派出4人。
  * B国最多可以派出2人。
  * C国最多可以派出2人。
  * ....
  *
  * 那么最终派往W星的观察团会有多少种国别的不同组合呢？
  *
  * 下面的程序解决了这个问题。
  * 数组a[] 中既是每个国家可以派出的最多的名额。
  * 程序执行结果为：
  * DEFFF
  * CEFFF
  * CDFFF
  * CDEFF
  * CCFFF
  * CCEFF
  * CCDFF
  * CCDEF
  * BEFFF
  * BDFFF
  * BDEFF
  * BCFFF
  * BCEFF
  * BCDFF
  * BCDEF
  * ....
  * (以下省略，总共101行)
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> a<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">String</span> s2 <span class="token operator">=</span> s<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> a<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// i表示，枚举去(&#39;A&#39;+k)国的观察者人数，从0~a[k]</span>
   <span class="token comment">// 递归，</span>
   <span class="token comment">// k+1，表示决定下一个国家观察团人数，</span>
   <span class="token comment">// n-i,表示还有多少个观察者剩余没有被分配。</span>
   <span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">-</span> i<span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 填空位置</span>

   s2 <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// A</span>
    <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// B</span>
    <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// C</span>
    <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// D</span>
    <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// E</span>
    <span class="token number">3</span> <span class="token comment">// F</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-寒假作业" tabindex="-1"><a class="header-anchor" href="#_06-寒假作业" aria-hidden="true">#</a> [06]寒假作业</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
题目描述
本题为填空题，只需要算出结果后，在代码中使用输出语句将所填结果输出即可。

现在小学的数学题目也不是那么好玩的。 看看这个寒假作业：

   □ + □ = □
   □ - □ = □
   □ × □ = □
   □ ÷ □ = □
每个方块代表 1~13 中的某一个数字，但不能重复。

比如：

 6  + 7 = 13
 9  - 8 = 1
 3  * 4 = 12
 10 / 2 = 5
以及：

 7  + 6 = 13
 9  - 8 = 1
 3  * 4 = 12
 10 / 2 = 5
就算两种解法。（加法，乘法交换律后算不同的方案）

你一共找到了多少种方案？

运行限制
最大运行时间：1s

最大运行内存: 128M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最优解法-递归调用-全排列-但每次确定三个数" tabindex="-1"><a class="header-anchor" href="#最优解法-递归调用-全排列-但每次确定三个数" aria-hidden="true">#</a> 最优解法：递归调用，全排列，但每次确定三个数</h3><p>递归调用，全排列，但每次确定三个数，满足要求再进入下一层递归调用</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>另外要注意，判断 a/b==c 的表达式应该写成：

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">java</span>
<span class="token code-block language-java language-java language-java"><span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">%</span> b <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">/</span> b <span class="token operator">==</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">// ...</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _06_寒假作业 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _06_寒假作业 handle <span class="token operator">=</span> <span class="token keyword">new</span> _06_寒假作业<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token char">&#39;+&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出：64</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> selected <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

 <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> step<span class="token punctuation">,</span> <span class="token keyword">char</span> op<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   counter<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token comment">// System.out.printf(&quot;%d+%d=%d\\n&quot;, result[0][0], result[0][1], result[0][2]);</span>
   <span class="token comment">// System.out.printf(&quot;%d-%d=%d\\n&quot;, result[1][0], result[1][1], result[1][2]);</span>
   <span class="token comment">// System.out.printf(&quot;%d*%d=%d\\n&quot;, result[2][0], result[2][1], result[2][2]);</span>
   <span class="token comment">// System.out.printf(&quot;%d/%d=%d\\n&quot;, result[3][0], result[3][1], result[3][2]);</span>
   <span class="token comment">// System.out.println(&quot;&quot;);</span>
   <span class="token comment">// System.out.println(count);</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> a_i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a_i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> a_i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> a_j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a_j <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> a_j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selected<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">[</span>a_j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      selected<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">[</span>a_j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> b_i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b_i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> b_i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> b_j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> b_j <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>b_i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> b_j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selected<span class="token punctuation">[</span>b_i<span class="token punctuation">]</span><span class="token punctuation">[</span>b_j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         selected<span class="token punctuation">[</span>b_i<span class="token punctuation">]</span><span class="token punctuation">[</span>b_j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> c_i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c_i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> c_i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> c_j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c_j <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>c_i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> c_j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selected<span class="token punctuation">[</span>c_i<span class="token punctuation">]</span><span class="token punctuation">[</span>c_j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            selected<span class="token punctuation">[</span>c_i<span class="token punctuation">]</span><span class="token punctuation">[</span>c_j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

            <span class="token comment">// 每次挑选三个数，这三个数满足等式要求才进入下一层递归调用。</span>
            <span class="token keyword">int</span> a <span class="token operator">=</span> data<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">[</span>a_j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> b <span class="token operator">=</span> data<span class="token punctuation">[</span>b_i<span class="token punctuation">]</span><span class="token punctuation">[</span>b_j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> c <span class="token operator">=</span> data<span class="token punctuation">[</span>c_i<span class="token punctuation">]</span><span class="token punctuation">[</span>c_j<span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token keyword">switch</span> <span class="token punctuation">(</span>op<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">case</span> <span class="token char">&#39;+&#39;</span><span class="token operator">:</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">==</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>
               result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">;</span>
               result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
               <span class="token function">dfs</span><span class="token punctuation">(</span>step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
              <span class="token keyword">break</span><span class="token punctuation">;</span>
             <span class="token keyword">case</span> <span class="token char">&#39;-&#39;</span><span class="token operator">:</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">-</span> b <span class="token operator">==</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>
               result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">;</span>
               result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
               <span class="token function">dfs</span><span class="token punctuation">(</span>step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token char">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
             <span class="token keyword">case</span> <span class="token char">&#39;*&#39;</span><span class="token operator">:</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">*</span> b <span class="token operator">==</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>
               result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">;</span>
               result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
               <span class="token function">dfs</span><span class="token punctuation">(</span>step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token char">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
             <span class="token keyword">case</span> <span class="token char">&#39;/&#39;</span><span class="token operator">:</span>
              <span class="token comment">// 注意b!=0 a%b==0</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">%</span> b <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">/</span> b <span class="token operator">==</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               result<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>
               result<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">;</span>
               result<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
               <span class="token function">dfs</span><span class="token punctuation">(</span>step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
             <span class="token keyword">default</span><span class="token operator">:</span>
              <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            selected<span class="token punctuation">[</span>c_i<span class="token punctuation">]</span><span class="token punctuation">[</span>c_j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
         selected<span class="token punctuation">[</span>b_i<span class="token punctuation">]</span><span class="token punctuation">[</span>b_j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      selected<span class="token punctuation">[</span>a_i<span class="token punctuation">]</span><span class="token punctuation">[</span>a_j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误解法-递归调用-13-个数的全排列-算法是正确的-但极其耗时" tabindex="-1"><a class="header-anchor" href="#错误解法-递归调用-13-个数的全排列-算法是正确的-但极其耗时" aria-hidden="true">#</a> 错误解法：递归调用，13 个数的全排列, 算法是正确的，但极其耗时</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _06_寒假作业 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _06_寒假作业 handle <span class="token operator">=</span> <span class="token keyword">new</span> _06_寒假作业<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

 <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> selected <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

 <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> curI<span class="token punctuation">,</span> <span class="token keyword">int</span> curJ<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curJ <span class="token operator">&gt;=</span> data<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   curI <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   curJ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curI <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    counter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d+%d=%d\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d-%d=%d\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d*%d=%d\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d/%d=%d\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      result<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token function">dfs</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    matrix<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> matrix<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> matrix<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    matrix<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> matrix<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> matrix<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
      matrix<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">%</span> matrix<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
      matrix<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">/</span> matrix<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> matrix<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_07-剪邮票" tabindex="-1"><a class="header-anchor" href="#_07-剪邮票" aria-hidden="true">#</a> [07]剪邮票</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>剪邮票

如【图1.jpg】, 有12张连在一起的12生肖的邮票。

现在你要从中剪下5张来，要求必须是连着的。

(仅仅连接一个角不算相连)

比如，【图2.jpg】，【图3.jpg】中，粉红色所示部分就是合格的剪取。

请你计算，一共有多少种不同的剪取方法。

请填写表示方案数目的整数。

注意：你提交的应该是一个整数，不要填写任何多余的内容或说明性文字。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt=""></p><p><img src="'+c+'" alt=""></p><p><img src="'+l+`" alt=""></p><blockquote><p>思路 12 选 5，然后检查选出的 5 张中是否连通。</p></blockquote><blockquote><p>注意这是组合问题不是排列问题，</p></blockquote><h3 id="写法-1-递归方式的-12-选-5-枚举组合-非递归方式检查节点是否连通" tabindex="-1"><a class="header-anchor" href="#写法-1-递归方式的-12-选-5-枚举组合-非递归方式检查节点是否连通" aria-hidden="true">#</a> 写法 1：递归方式的 12 选 5 枚举组合 + 非递归方式检查节点是否连通</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _07_剪邮票 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _07_剪邮票 handle <span class="token operator">=</span> <span class="token keyword">new</span> _07_剪邮票<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出： 116,答案就是116</span>

 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> selected<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

 <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> curI<span class="token punctuation">,</span> <span class="token keyword">int</span> curJ<span class="token punctuation">,</span> <span class="token keyword">int</span> getter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 手中拿到的数目是5，</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    counter<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>selected<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>selected<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>selected<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

   <span class="token comment">// 调整到正确坐标</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>curJ <span class="token operator">&gt;=</span> selected<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curI <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 跳转到下一行</span>
    curJ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 跳转到第一列</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 行越界直接结束搜索</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>curI <span class="token operator">==</span> selected<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 这里是组合问题，不是排列问题，因此</span>
   <span class="token comment">// 对于每张邮票只有选或不选两种选择，</span>

   <span class="token comment">// 选，然后进入下一个位置,</span>
   selected<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token function">process</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> getter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// 不选，然后进入下一个位置,</span>
   selected<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token function">process</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> getter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 找到一个坐标作为起始坐标</span>
  <span class="token keyword">int</span> start_I <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> start_J <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  outerFor<span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> selected<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     start_I <span class="token operator">=</span> i<span class="token punctuation">;</span>
     start_J <span class="token operator">=</span> j<span class="token punctuation">;</span>
     <span class="token keyword">break</span> outerFor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// 非递归先根遍历。</span>
  <span class="token comment">// 从这个坐标开始，往选中的且相连的节点扩散，</span>
  <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Position</span><span class="token punctuation">&gt;</span></span> unprocessed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Position</span><span class="token punctuation">&gt;</span></span> processed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>start_I<span class="token punctuation">,</span> start_J<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>unprocessed<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token class-name">Position</span> curPos <span class="token operator">=</span> unprocessed<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 拿出该节点</span>

   <span class="token comment">// 处理当前节点</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span> curPos<span class="token punctuation">.</span><span class="token function">isCorrectPosAt</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// 要求坐标是合法的</span>
     selected<span class="token punctuation">[</span>curPos<span class="token punctuation">.</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>curPos<span class="token punctuation">.</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// 要求是被选中的</span>
     <span class="token operator">!</span>processed<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>curPos<span class="token punctuation">)</span><span class="token comment">// 要求是未处理的节点</span>
   <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里就找到一个符合要求的节点。</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">// 统计</span>

    <span class="token keyword">int</span> curI <span class="token operator">=</span> curPos<span class="token punctuation">.</span>i<span class="token punctuation">;</span>
    <span class="token keyword">int</span> curJ <span class="token operator">=</span> curPos<span class="token punctuation">.</span>j<span class="token punctuation">;</span>
    <span class="token comment">// ---a1</span>
    <span class="token comment">// a2 aa a3</span>
    <span class="token comment">// ---a4</span>
    <span class="token comment">// aa的周围4个数，要检查他们是否被选中，然后放入栈中。</span>
    unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curI <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> curJ<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curI <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curJ<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    processed<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>curPos<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 表示该节点已经处理,防止进入死循环</span>
   <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> count <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">class</span> <span class="token class-name">Position</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">Position</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>i <span class="token operator">=</span> i<span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>j <span class="token operator">=</span> j<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">boolean</span> <span class="token function">isCorrectPosAt</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> i <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> map<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
     <span class="token number">0</span> <span class="token operator">&lt;=</span> j <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> map<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">final</span> <span class="token keyword">int</span> prime <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>
   <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> i<span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> j<span class="token punctuation">;</span>
   <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token class-name">Position</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Position</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span><span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> other<span class="token punctuation">.</span>i<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">!=</span> other<span class="token punctuation">.</span>j<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> _07_剪邮票 <span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> _07_剪邮票<span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写法-2-递归方式的-12-选-5-枚举组合-递归方式检查节点是否连通" tabindex="-1"><a class="header-anchor" href="#写法-2-递归方式的-12-选-5-枚举组合-递归方式检查节点是否连通" aria-hidden="true">#</a> 写法 2：递归方式的 12 选 5 枚举组合 + 递归方式检查节点是否连通</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>swing<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Position</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _07_剪邮票 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _07_剪邮票 handle <span class="token operator">=</span> <span class="token keyword">new</span> _07_剪邮票<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出： 13920</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> selected<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

 <span class="token comment">// 全排列</span>
 <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> curI<span class="token punctuation">,</span> <span class="token keyword">int</span> curJ<span class="token punctuation">,</span> <span class="token keyword">int</span> getter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    counter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">// System.out.println(Arrays.toString(selected[0]));</span>
    <span class="token comment">// System.out.println(Arrays.toString(selected[1]));</span>
    <span class="token comment">// System.out.println(Arrays.toString(selected[2]));</span>
    <span class="token comment">// System.out.println(&quot;&quot;);</span>
    <span class="token comment">// System.out.println(counter);</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token comment">// 计算正确坐标</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>curJ <span class="token operator">&gt;=</span> selected<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curI <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    curJ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 行坐标越界直接终止递归</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>curI <span class="token operator">&gt;=</span> selected<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 选中当前元素</span>
   selected<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token function">process</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> getter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// 不选当前元素</span>
   selected<span class="token punctuation">[</span>curI<span class="token punctuation">]</span><span class="token punctuation">[</span>curJ<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token function">process</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> getter <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 找到一个坐标作为起始坐标</span>
  <span class="token keyword">int</span> start_I <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> start_J <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  outerFor<span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> selected<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     start_I <span class="token operator">=</span> i<span class="token punctuation">;</span>
     start_J <span class="token operator">=</span> j<span class="token punctuation">;</span>
     <span class="token keyword">break</span> outerFor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>start_I<span class="token punctuation">,</span> start_J<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> count <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token class-name">Position</span> curPos<span class="token punctuation">,</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Position</span><span class="token punctuation">&gt;</span></span> processed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curPos<span class="token punctuation">.</span><span class="token function">isCorrectPosAt</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    selected<span class="token punctuation">[</span>curPos<span class="token punctuation">.</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>curPos<span class="token punctuation">.</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span>processed<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>curPos<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   count<span class="token operator">++</span><span class="token punctuation">;</span>
   processed<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>curPos<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// ---a1</span>
   <span class="token comment">// a2 aa a3</span>
   <span class="token comment">// ---a4</span>
   count <span class="token operator">+=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curPos<span class="token punctuation">.</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> curPos<span class="token punctuation">.</span>j<span class="token punctuation">)</span><span class="token punctuation">,</span> processed<span class="token punctuation">)</span><span class="token punctuation">;</span>
   count <span class="token operator">+=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curPos<span class="token punctuation">.</span>i<span class="token punctuation">,</span> curPos<span class="token punctuation">.</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> processed<span class="token punctuation">)</span><span class="token punctuation">;</span>
   count <span class="token operator">+=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curPos<span class="token punctuation">.</span>i<span class="token punctuation">,</span> curPos<span class="token punctuation">.</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> processed<span class="token punctuation">)</span><span class="token punctuation">;</span>
   count <span class="token operator">+=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curPos<span class="token punctuation">.</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curPos<span class="token punctuation">.</span>j<span class="token punctuation">)</span><span class="token punctuation">,</span> processed<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> count<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">class</span> <span class="token class-name">Position</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">Position</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>i <span class="token operator">=</span> i<span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>j <span class="token operator">=</span> j<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">boolean</span> <span class="token function">isCorrectPosAt</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> i <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> map<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
     <span class="token number">0</span> <span class="token operator">&lt;=</span> j <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> map<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">final</span> <span class="token keyword">int</span> prime <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>
   <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> i<span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> j<span class="token punctuation">;</span>
   <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token class-name">Position</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Position</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span><span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> other<span class="token punctuation">.</span>i<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">!=</span> other<span class="token punctuation">.</span>j<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> _07_剪邮票 <span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> _07_剪邮票<span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="之前的错误写法-不是排列问题而是组合问题" tabindex="-1"><a class="header-anchor" href="#之前的错误写法-不是排列问题而是组合问题" aria-hidden="true">#</a> 之前的错误写法：不是排列问题而是组合问题</h3><h4 id="写法-1-递归方式的-12-选-5-枚举排列-非递归方式检查节点是否连通" tabindex="-1"><a class="header-anchor" href="#写法-1-递归方式的-12-选-5-枚举排列-非递归方式检查节点是否连通" aria-hidden="true">#</a> 写法 1：递归方式的 12 选 5 枚举排列+非递归方式检查节点是否连通</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _07_剪邮票 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _07_剪邮票 handle <span class="token operator">=</span> <span class="token keyword">new</span> _07_剪邮票<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出： 13920</span>

 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> selected<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

 <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> step<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    counter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">// System.out.println(Arrays.toString(selected[0]));</span>
    <span class="token comment">// System.out.println(Arrays.toString(selected[1]));</span>
    <span class="token comment">// System.out.println(Arrays.toString(selected[2]));</span>
    <span class="token comment">// System.out.println(&quot;&quot;);</span>
    <span class="token comment">// System.out.println(counter);</span>

   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> selected<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token function">process</span><span class="token punctuation">(</span>step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 找到一个坐标作为起始坐标</span>
  <span class="token keyword">int</span> start_I <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> start_J <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  outerFor<span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> selected<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     start_I <span class="token operator">=</span> i<span class="token punctuation">;</span>
     start_J <span class="token operator">=</span> j<span class="token punctuation">;</span>
     <span class="token keyword">break</span> outerFor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// 非递归先根遍历。</span>
  <span class="token comment">// 从这个坐标开始，往选中的且相连的节点扩散，</span>
  <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Position</span><span class="token punctuation">&gt;</span></span> unprocessed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Position</span><span class="token punctuation">&gt;</span></span> processed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>start_I<span class="token punctuation">,</span> start_J<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>unprocessed<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">Position</span> curPos <span class="token operator">=</span> unprocessed<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 拿出该节点</span>

   <span class="token comment">// 处理当前节点</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>curPos<span class="token punctuation">.</span><span class="token function">isCorrectPosAt</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// 要求坐标是合法的</span>
     selected<span class="token punctuation">[</span>curPos<span class="token punctuation">.</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>curPos<span class="token punctuation">.</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// 要求是被选中的</span>
     <span class="token operator">!</span>processed<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>curPos<span class="token punctuation">)</span><span class="token comment">// 要求是未处理的节点</span>
   <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里就找到一个符合要求的节点。</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">// 统计</span>

    <span class="token keyword">int</span> curI <span class="token operator">=</span> curPos<span class="token punctuation">.</span>i<span class="token punctuation">;</span>
    <span class="token keyword">int</span> curJ <span class="token operator">=</span> curPos<span class="token punctuation">.</span>j<span class="token punctuation">;</span>
    <span class="token comment">// ---a1</span>
    <span class="token comment">// a2 aa a3</span>
    <span class="token comment">// ---a4</span>
    <span class="token comment">// aa的周围4个数，要检查他们是否被选中，然后放入栈中。</span>
    unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curI <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> curJ<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curI<span class="token punctuation">,</span> curJ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    unprocessed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curI <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curJ<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    processed<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>curPos<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 表示该节点已经处理,防止进入死循环</span>
   <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> count <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">class</span> <span class="token class-name">Position</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">Position</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>i <span class="token operator">=</span> i<span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>j <span class="token operator">=</span> j<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">boolean</span> <span class="token function">isCorrectPosAt</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> i <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> map<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
     <span class="token number">0</span> <span class="token operator">&lt;=</span> j <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> map<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">final</span> <span class="token keyword">int</span> prime <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>
   <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> i<span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> j<span class="token punctuation">;</span>
   <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token class-name">Position</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Position</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span><span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> other<span class="token punctuation">.</span>i<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">!=</span> other<span class="token punctuation">.</span>j<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> _07_剪邮票 <span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> _07_剪邮票<span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="写法-2-递归方式的-12-选-5-枚举排列-递归方式检查节点是否连通" tabindex="-1"><a class="header-anchor" href="#写法-2-递归方式的-12-选-5-枚举排列-递归方式检查节点是否连通" aria-hidden="true">#</a> 写法 2：递归方式的 12 选 5 枚举排列+递归方式检查节点是否连通</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>swing<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">Position</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _07_剪邮票 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  _07_剪邮票 handle <span class="token operator">=</span> <span class="token keyword">new</span> _07_剪邮票<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  handle<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>handle<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出： 13920</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> selected<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

 <span class="token comment">// 全排列</span>
 <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> step<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    counter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">// System.out.println(Arrays.toString(selected[0]));</span>
    <span class="token comment">// System.out.println(Arrays.toString(selected[1]));</span>
    <span class="token comment">// System.out.println(Arrays.toString(selected[2]));</span>
    <span class="token comment">// System.out.println(&quot;&quot;);</span>
    <span class="token comment">// System.out.println(counter);</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> selected<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token function">process</span><span class="token punctuation">(</span>step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 找到一个坐标作为起始坐标</span>
  <span class="token keyword">int</span> start_I <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> start_J <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  outerFor<span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> selected<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>selected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     start_I <span class="token operator">=</span> i<span class="token punctuation">;</span>
     start_J <span class="token operator">=</span> j<span class="token punctuation">;</span>
     <span class="token keyword">break</span> outerFor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>start_I<span class="token punctuation">,</span> start_J<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> count <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token class-name">Position</span> curPos<span class="token punctuation">,</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Position</span><span class="token punctuation">&gt;</span></span> processed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curPos<span class="token punctuation">.</span><span class="token function">isCorrectPosAt</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    selected<span class="token punctuation">[</span>curPos<span class="token punctuation">.</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>curPos<span class="token punctuation">.</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span>processed<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>curPos<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   count<span class="token operator">++</span><span class="token punctuation">;</span>
   processed<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>curPos<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// ---a1</span>
   <span class="token comment">// a2 aa a3</span>
   <span class="token comment">// ---a4</span>
   count <span class="token operator">+=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curPos<span class="token punctuation">.</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> curPos<span class="token punctuation">.</span>j<span class="token punctuation">)</span><span class="token punctuation">,</span> processed<span class="token punctuation">)</span><span class="token punctuation">;</span>
   count <span class="token operator">+=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curPos<span class="token punctuation">.</span>i<span class="token punctuation">,</span> curPos<span class="token punctuation">.</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> processed<span class="token punctuation">)</span><span class="token punctuation">;</span>
   count <span class="token operator">+=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curPos<span class="token punctuation">.</span>i<span class="token punctuation">,</span> curPos<span class="token punctuation">.</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> processed<span class="token punctuation">)</span><span class="token punctuation">;</span>
   count <span class="token operator">+=</span> <span class="token function">check_process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span>curPos<span class="token punctuation">.</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curPos<span class="token punctuation">.</span>j<span class="token punctuation">)</span><span class="token punctuation">,</span> processed<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> count<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">class</span> <span class="token class-name">Position</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">Position</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>i <span class="token operator">=</span> i<span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>j <span class="token operator">=</span> j<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">boolean</span> <span class="token function">isCorrectPosAt</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> i <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> map<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
     <span class="token number">0</span> <span class="token operator">&lt;=</span> j <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> map<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">final</span> <span class="token keyword">int</span> prime <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>
   <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> i<span class="token punctuation">;</span>
   result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> j<span class="token punctuation">;</span>
   <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token class-name">Position</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Position</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span><span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> other<span class="token punctuation">.</span>i<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">!=</span> other<span class="token punctuation">.</span>j<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> _07_剪邮票 <span class="token function">getEnclosingInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> _07_剪邮票<span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08-取球博弈" tabindex="-1"><a class="header-anchor" href="#_08-取球博弈" aria-hidden="true">#</a> [08]取球博弈</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两个人玩取球的游戏。

一共有N个球，每人轮流取球，每次可取集合{n1,n2,n3}中的任何一个数目。

如果无法继续取球，则游戏结束。

此时，持有奇数个球的一方获胜。

如果两人都是奇数，则为平局。

假设双方都采用最聪明的取法，

第一个取球的人一定能赢吗？

试编程解决这个问题。

输入格式：

第一行3个正整数n1 n2 n3，空格分开，表示每次可取的数目 (0&lt;n1,n2,n3&lt;100)

第二行5个正整数x1 x2 ... x5，空格分开，表示5局的初始球数(0&lt;xi&lt;1000);

输出格式：

一行5个字符，空格分开。分别表示每局先取球的人能否获胜。

能获胜则输出+，

次之，如有办法逼平对手，输出0，

无论如何都会输，则输出-

输入样例：

1 2 3

1 2 3 4 5

样例输出：

+ 0 + 0 -

输入样例：

1 4 5

10 11 12 13 15

样例输出：

0 - 0 + +

输入样例：

2 3 5

7 8 9 10 11

样例输出：

+ 0 0 0 0

请严格按要求输出，不要画蛇添足地打印类似：“请您输入...” 的多余内容。

所有代码放在同一个源文件中，调试通过后，拷贝提交该源码。

注意：不要使用package语句。不要使用jdk1.7及以上版本的特性。

注意：主类的名字必须是：Main，否则按无效代码处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解法-1-递归" tabindex="-1"><a class="header-anchor" href="#解法-1-递归" aria-hidden="true">#</a> 解法 1:递归</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _08_取球博弈 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> choices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   choices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> init<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   init<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  sc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> init<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token function">process</span><span class="token punctuation">(</span>init<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;+&#39;</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> init<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ch <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>

 <span class="token comment">// 选择</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> choices <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token comment">// 初始值</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> init <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

 <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> rest<span class="token punctuation">,</span> <span class="token keyword">int</span> userA<span class="token punctuation">,</span> <span class="token keyword">int</span> userB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 剩余无球可以拿（取任何一个球都会导致剩余球变负数）</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rest <span class="token operator">-</span> choices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    rest <span class="token operator">-</span> choices<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    rest <span class="token operator">-</span> choices<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 我是基数，对手偶数，我赢，得分最高</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>userA <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>userB <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token comment">// &#39;+&#39;;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 我是偶数，对手基数，他赢，得分最低</span>
   <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>userA <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>userB <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// &#39;-&#39;;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 都是偶数 或 都是基数，平局，得分最中等</span>
   <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">// &#39;0&#39;;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token comment">// 找到让对手得分最低的策略</span>
   <span class="token class-name">Integer</span> worstScore <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> choices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rest <span class="token operator">-</span> choices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token comment">/* 可以取 */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 将局势交给对手 得到对手的得分</span>
     <span class="token keyword">int</span> otherScore <span class="token operator">=</span> <span class="token function">process</span><span class="token punctuation">(</span>rest <span class="token operator">-</span> choices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> userB<span class="token punctuation">,</span> userA <span class="token operator">+</span> choices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>worstScore <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> otherScore <span class="token operator">&lt;</span> worstScore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      worstScore <span class="token operator">=</span> otherScore<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 可以找到一种让对手输的策略,则我会赢</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>worstScore <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span>
   <span class="token comment">// 无法赢，但可以找到一种让对手平局的策略,则我会平</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>worstScore <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
   <span class="token comment">// 找不到赢的策略也找不到平局的策略,则我会输</span>
   <span class="token keyword">else</span><span class="token comment">// if (worstScore == 3)</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解法-2-递归-状态缓存" tabindex="-1"><a class="header-anchor" href="#解法-2-递归-状态缓存" aria-hidden="true">#</a> 解法 2:递归+状态缓存</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _08_取球博弈 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> choices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   choices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> init<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   init<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  sc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> init<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token function">process</span><span class="token punctuation">(</span>init<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;+&#39;</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> init<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ch <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>

 <span class="token comment">// 选择</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> choices <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token comment">// 初始值</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> init <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

 <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span> rest<span class="token punctuation">,</span> <span class="token keyword">int</span> userA<span class="token punctuation">,</span> <span class="token keyword">int</span> userB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 以剩余球数以及自己和对手球的奇偶性做状态特征即可</span>
  <span class="token keyword">int</span> result <span class="token operator">=</span> cache<span class="token punctuation">[</span>rest<span class="token punctuation">]</span><span class="token punctuation">[</span>userA <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>userB <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">// 为0说明这个状态没有被缓存过,因为缓存的值只会是1、2、3</span>
   <span class="token keyword">return</span> result<span class="token punctuation">;</span>

  <span class="token comment">// 剩余无球可以拿（取任何一个球都会导致剩余球变负数）</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rest <span class="token operator">-</span> choices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    rest <span class="token operator">-</span> choices<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    rest <span class="token operator">-</span> choices<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token comment">// 我是基数，对手偶数，我赢，得分最高</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>userA <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>userB <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token comment">// return 3;// &#39;+&#39;;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 我是偶数，对手基数，他赢，得分最低</span>
   <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>userA <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>userB <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// return 1;// &#39;-&#39;;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 都是偶数 或 都是基数，平局，得分最中等</span>
   <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment">// return 2;// &#39;0&#39;;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token comment">// 找到让对手得分最低的策略</span>
   <span class="token class-name">Integer</span> worstScore <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> choices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rest <span class="token operator">-</span> choices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token comment">/* 可以取 */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 将局势交给对手 得到对手的得分</span>
     <span class="token keyword">int</span> otherScore <span class="token operator">=</span> <span class="token function">process</span><span class="token punctuation">(</span>rest <span class="token operator">-</span> choices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> userB<span class="token punctuation">,</span> userA <span class="token operator">+</span> choices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>worstScore <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> otherScore <span class="token operator">&lt;</span> worstScore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      worstScore <span class="token operator">=</span> otherScore<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 可以找到一种让对手输的策略,则我会赢</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>worstScore <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    result <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
   <span class="token comment">// return 3;</span>
   <span class="token comment">// 无法赢，但可以找到一种让对手平局的策略,则我会平</span>
   <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>worstScore <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
    result <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
   <span class="token comment">// return 2;</span>
   <span class="token comment">// 找不到赢的策略也找不到平局的策略,则我会输</span>
   <span class="token keyword">else</span><span class="token comment">// if (worstScore == 3)</span>
    result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token comment">// return 1;</span>
  <span class="token punctuation">}</span>
  cache<span class="token punctuation">[</span>rest<span class="token punctuation">]</span><span class="token punctuation">[</span>userA <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>userB <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_09-交换瓶子" tabindex="-1"><a class="header-anchor" href="#_09-交换瓶子" aria-hidden="true">#</a> [09]交换瓶子</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**问题描述**

有N个瓶子，编号 1 ~ N，放在架子上。
比如有5个编号瓶子：2 1 3 5 4。
要求每次拿起2个瓶子，交换它们的位置。
经过若干次后，使得瓶子的序号为：1 2 3 4 5。
对于这么简单的情况，显然，至少需要交换2次就可以复位。如果瓶子更多呢？

【输入】 输入格式为两行：
第一行: 一个正整数N（N&lt;10000）, 表示瓶子的数目。
第二行：N个正整数，用空格分开，表示瓶子目前的排列情况。

【输出】输出数据为一行一个正整数，表示至少交换多少次，才能完成排序。

5
5 4 3 2 1
-------------
1 4 3 2 5
1 2 3 4 5

5
5 4 3 1 2
-------------
1 4 3 5 2
1 2 3 5 4
1 2 3 4 5

5
4 5 3 1 2
-------------
1 5 3 4 2
1 2 3 4 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归版" tabindex="-1"><a class="header-anchor" href="#递归版" aria-hidden="true">#</a> 递归版</h3><blockquote><p><strong>思路</strong></p><p>遍历数组，第 i 为数的值应当为 i,</p><p>如果不是,则找到 i 在数组中的实际位置，然后和当前位置的值交换，然后去下一个位置。</p><p>一开始以为要用递归，所以写成了递归，其实直接 for 循环就好了</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _09_交换瓶子 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">N</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  sc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">order</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token class-name">N</span><span class="token punctuation">;</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">;</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token keyword">int</span> curIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curIdx <span class="token operator">==</span> <span class="token class-name">N</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>curIdx<span class="token punctuation">]</span> <span class="token operator">!=</span> curIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> realIdx <span class="token operator">=</span> <span class="token function">findIndex</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> curIdx<span class="token punctuation">,</span> curIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exchange</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> realIdx<span class="token punctuation">,</span> curIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    counter<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token function">order</span><span class="token punctuation">(</span>curIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 从当前位置开始去搜索一个数的坐标</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> from<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> from<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exchange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非递归版" tabindex="-1"><a class="header-anchor" href="#非递归版" aria-hidden="true">#</a> 非递归版</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _09_交换瓶子 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">N</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  sc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token class-name">N</span><span class="token punctuation">;</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">;</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> curIdx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> curIdx <span class="token operator">&lt;=</span> <span class="token class-name">N</span><span class="token punctuation">;</span> curIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>curIdx<span class="token punctuation">]</span> <span class="token operator">!=</span> curIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> realIdx <span class="token operator">=</span> <span class="token function">findIndex</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> curIdx<span class="token punctuation">,</span> curIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exchange</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> realIdx<span class="token punctuation">,</span> curIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    counter<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 从当前位置开始去搜索一个数的坐标</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> from<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> from<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exchange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-压缩变换" tabindex="-1"><a class="header-anchor" href="#_10-压缩变换" aria-hidden="true">#</a> [10]压缩变换</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>压缩变换（16JavaB9）
小明最近在研究压缩算法。

他知道，压缩的时候如果能够使得数值很小，就能通过熵编码得到较高的压缩比。

然而，要使数值很小是一个挑战。

最近，小明需要压缩一些正整数的序列，这些序列的特点是，后面出现的数字很大可能是刚出现过不久的数字。对于这种特殊的序列，小明准备对序列做一个变换来减小数字的值。


变换的过程如下：

 从左到右枚举序列，每枚举到一个数字，如果这个数字没有出现过，刚将数字变换成它的相反数，

 如果数字出现过，则看它在原序列中最后的一次出现后面（且在当前数前面）出现了几种数字，用这个种类数替换原来的数字。

比如，序列(a1, a2, a3, a4, a5)=(1, 2, 2, 1, 2)在变换过程为：

a1: 1未出现过，所以a1变为-1；

a2: 2未出现过，所以a2变为-2；

a3: 2出现过，最后一次为原序列的a2，在a2后、a3前有0种数字，所以a3变为0；

a4: 1出现过，最后一次为原序列的a1，在a1后、a4前有1种数字，所以a4变为1；

a5: 2出现过，最后一次为原序列的a3，在a3后、a5前有1种数字，所以a5变为1。

现在，给出原序列，请问，按这种变换规则变换后的序列是什么。

原序列 1 2 2 1 2

变换后 -1 -2 0 1 1

输入格式：

输入第一行包含一个整数n，表示序列的长度。

第二行包含n个正整数，表示输入序列。

输出格式：

输出一行，包含n个数，表示变换后的序列。

例如，输入：

5

1 2 2 1 2

程序应该输出：

-1 -2 0 1 1

再例如，输入：

12

1 1 2 3 2 3 1 2 2 2 3 1

程序应该输出：

-1 0 -2 -3 1 1 2 2 0 0 2 2

数据规模与约定

对于30%的数据，n&lt;=1000；

对于50%的数据，n&lt;=30000；

对于100%的数据，1 &lt;=n&lt;=100000，1&lt;=ai&lt;=10^9

资源约定：

峰值内存消耗（含虚拟机）&lt; 256M

CPU消耗&lt; 3000ms

请严格按要求输出，不要画蛇添足地打印类似：“请您输入...” 的多余内容。

所有代码放在同一个源文件中，调试通过后，拷贝提交该源码。

注意：不要使用package语句。不要使用jdk1.7及以上版本的特性。

注意：主类的名字必须是：Main，否则按无效代码处理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直觉解法" tabindex="-1"><a class="header-anchor" href="#直觉解法" aria-hidden="true">#</a> 直觉解法</h3><blockquote><p>这种解法的耗时之处就在于，当在对类似于数组 [1 2 3 4 5 6 7 7 6 5 4 3 2 1] 统计两个1之间的、</p><p>两个2之间的、两个3之间的不同元素个数时，会做很多重复计算。时间复杂度达到O(N),</p><p>这样整个算法的时间复杂度就达到了O(N^2)</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _10_压缩变换 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">N</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  raw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   raw<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> raw<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  sc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token class-name">N</span><span class="token punctuation">;</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> raw<span class="token punctuation">;</span><span class="token comment">// 存原数组</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res<span class="token punctuation">;</span><span class="token comment">// 存结果</span>

 <span class="token keyword">static</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> lastIdxMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> idx <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> idx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">int</span> val <span class="token operator">=</span> raw<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 记录这个位置数的原始值</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>lastIdxMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对于新出现的数，改为相反数</span>
    res<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>val<span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对于曾出现的数</span>
    <span class="token comment">// 替换为，从这个数曾经最后一次出现的位置到当前位置(不包含这两个位置)之间的独立的数的个数</span>
    res<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">differCount</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> lastIdxMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> idx <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   lastIdxMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> idx<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 记录这个数的最后出现位置</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 统计两个位置之间（包含这两个位置）的数字的种类数</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">differCount</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> from<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token keyword">to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> idx <span class="token operator">=</span> from<span class="token punctuation">;</span> idx <span class="token operator">&lt;=</span> <span class="token keyword">to</span><span class="token punctuation">;</span> idx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> set<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="利用线段树优化的解法" tabindex="-1"><a class="header-anchor" href="#利用线段树优化的解法" aria-hidden="true">#</a> 利用线段树优化的解法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>management<span class="token punctuation">.</span></span><span class="token class-name">Query</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> _10_压缩变换 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">test0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 解题</span>
  <span class="token comment">// test1();</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test0</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">N</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  seg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SegmentTree</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  sc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 模拟题目的数据规模测试</span>
 <span class="token comment">// 模拟数据规模测试算法速度 // 耗时：1337 ms</span>
 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  data <span class="token operator">=</span> <span class="token class-name">Generator</span><span class="token punctuation">.</span><span class="token function">getRandomArray</span><span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  seg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SegmentTree</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">long</span> t1 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">long</span> t2 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;耗时：%d ms&quot;</span><span class="token punctuation">,</span> t2 <span class="token operator">-</span> t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>



 <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token class-name">N</span><span class="token punctuation">;</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">;</span><span class="token comment">// 存原数组</span>
 <span class="token keyword">static</span> <span class="token class-name">SegmentTree</span> seg<span class="token punctuation">;</span><span class="token comment">// 线段树，统计区间中独立元素个数</span>
 <span class="token keyword">static</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> lastIdxMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">// 处理</span>
 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> curIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> curIdx <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> curIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">int</span> val <span class="token operator">=</span> data<span class="token punctuation">[</span>curIdx<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 记录这个位置数的原始值</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>lastIdxMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对于新出现的数，改为相反数</span>
    data<span class="token punctuation">[</span>curIdx<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>val<span class="token punctuation">;</span>
    seg<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>curIdx<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对于曾出现的数</span>
    <span class="token comment">// 替换为，从这个数曾经最后一次出现的位置到当前位置(不包含这两个位置)之间的独立的数的个数</span>
    <span class="token keyword">int</span> preIdx <span class="token operator">=</span> lastIdxMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

    data<span class="token punctuation">[</span>curIdx<span class="token punctuation">]</span> <span class="token operator">=</span> seg<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>preIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curIdx <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 移除旧位置的元素,因为只需要统计一个数上一次出现和这一次出现之间的数的种类数</span>
    <span class="token comment">// 而在下一次统计时的“上次出现的位置”就是当前这个数出现的位置，只需要统计这两个数之间的数</span>
    seg<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>preIdx<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    seg<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>curIdx<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 在新位置记录元素</span>
   <span class="token punctuation">}</span>
   lastIdxMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> curIdx<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 记录这个数的最后出现位置</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SegmentTree</span> <span class="token punctuation">{</span>
 <span class="token keyword">int</span> data<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> arrLength<span class="token punctuation">;</span>
 <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>

 <span class="token class-name">SegmentTree</span><span class="token punctuation">(</span><span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 层数就是 1 + ceil( log_2(end-start+1) )</span>
  <span class="token keyword">double</span> layer <span class="token operator">=</span> <span class="token number">1d</span> <span class="token operator">+</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token function">log_2</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span> length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 满二叉树元素个数,个层元素数的和，等比数列求和：S_n = a1*((1-q^n)/(1-q)) 公比：q = 2</span>
  <span class="token keyword">double</span> capacity <span class="token operator">=</span> <span class="token number">1d</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1d</span> <span class="token operator">-</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2d</span><span class="token punctuation">,</span> layer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1d</span> <span class="token operator">-</span> <span class="token number">2d</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>arrLength <span class="token operator">=</span> length<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>capacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> targetIdx<span class="token punctuation">,</span> <span class="token keyword">int</span> increasement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> targetIdx <span class="token operator">&amp;&amp;</span> targetIdx <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arrLength<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> right <span class="token operator">=</span> arrLength <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> curIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   data<span class="token punctuation">[</span>curIdx<span class="token punctuation">]</span> <span class="token operator">+=</span> increasement<span class="token punctuation">;</span><span class="token comment">// 统计</span>
   <span class="token comment">// System.out.printf(&quot;debug:[[left,mid,right],value]:[[%d,%d,%d],%s]\\n&quot;, left,</span>
   <span class="token comment">// mid, right, data[curIdx]);</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">==</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 到达叶节点</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 计算下一轮的位置信息。</span>
   <span class="token comment">// 第i个节点的左子树的是2i+1 右子树是2i+2</span>
   <span class="token comment">// ----------------------0:[0,4]</span>
   <span class="token comment">// -------------1:[0,2]-----------2:[3,4]</span>
   <span class="token comment">// -------3:[0,1]----4:[2,2]---5:[3,3]-----6:[4,4]</span>
   <span class="token comment">// ---7:[0,0]-7:[1,1]</span>
   <span class="token comment">// 计算中间位置</span>
   mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
   <span class="token comment">// 注意第一个是小于等于</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>targetIdx <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
    curIdx <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> curIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 进入左子树</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>targetIdx <span class="token operator">&gt;</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    curIdx <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> curIdx <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">// 进入右子树</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> targetLeft<span class="token punctuation">,</span> <span class="token keyword">int</span> targetRight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arrLength <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> targetLeft<span class="token punctuation">,</span> targetRight<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> curIdx<span class="token punctuation">,</span> <span class="token keyword">int</span> curLeft<span class="token punctuation">,</span> <span class="token keyword">int</span> curRight<span class="token punctuation">,</span> <span class="token keyword">int</span> targetLeft<span class="token punctuation">,</span> <span class="token keyword">int</span> targetRight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curLeft <span class="token operator">&lt;=</span> curRight <span class="token operator">&amp;&amp;</span> <span class="token comment">// 过滤非法的当前区间</span>
    targetLeft <span class="token operator">&lt;=</span> targetRight<span class="token comment">// 过滤非法的目标区间</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// System.out.printf(&quot;debug:[[left,mid,right],value]:[[%d,%d,%d],%s]\\n&quot;, left,</span>
   <span class="token comment">// mid, right, data[curIdx]);</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>curLeft <span class="token operator">==</span> targetLeft <span class="token operator">&amp;&amp;</span> targetRight <span class="token operator">==</span> curRight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 所查找的区间和当前所在区间完全匹配,直接返回其统计结果</span>
    <span class="token keyword">return</span> data<span class="token punctuation">[</span>curIdx<span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> mid <span class="token operator">=</span> curLeft <span class="token operator">+</span> <span class="token punctuation">(</span>curRight <span class="token operator">-</span> curLeft<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>targetRight <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 查找的区间在左子树</span>
     k <span class="token operator">+=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> curIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curLeft<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> targetLeft<span class="token punctuation">,</span> targetRight<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 左子树查询</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">&lt;</span> targetLeft<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 查找的区间在右子树</span>
     k <span class="token operator">+=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> curIdx <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curRight<span class="token punctuation">,</span> targetLeft<span class="token punctuation">,</span> targetRight<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 右子树查询</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token comment">// 查找的区间横跨左右子树,则分别去查找</span>
     k <span class="token operator">+=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> curIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curLeft<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> targetLeft<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 左子树查询</span>
     k <span class="token operator">+=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> curIdx <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curRight<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> targetRight<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 右子树查询</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> k<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">log_2</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// &gt; 需要使用换底公式：log_A{B} = log_n{B}/log_n{A}</span>
  <span class="token comment">// &gt; 即log_2{B} = log_n{B}/log_n{2}</span>
  <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;SegmentTree [data=&quot;</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, arrLength=&quot;</span> <span class="token operator">+</span> arrLength <span class="token operator">+</span> <span class="token string">&quot;, capacity=&quot;</span> <span class="token operator">+</span> capacity
    <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Generator</span> <span class="token punctuation">{</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getRandomArray</span><span class="token punctuation">(</span><span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token function">randomRange</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1e9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">randomRange</span><span class="token punctuation">(</span><span class="token keyword">double</span> from<span class="token punctuation">,</span> <span class="token keyword">double</span> <span class="token keyword">to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> from <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">to</span> <span class="token operator">-</span> from<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,83),k=[u];function r(d,v){return s(),a("div",null,k)}const b=n(i,[["render",r],["__file","蓝桥杯2016年javaB组真题刷题笔记.html.vue"]]);export{b as default};
