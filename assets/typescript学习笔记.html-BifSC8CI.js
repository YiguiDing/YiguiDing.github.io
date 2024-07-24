import{_ as s,c as n,o as a,b as i}from"./app-B95iU7Vh.js";const e="/assets/typescript%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0-ZfFbGJvF.png",l="/assets/2022-12-12-12-06-11-2-Syylx5.png",p="/assets/2022-12-12-12-19-18-COl3nXNn.png",d="/assets/2022-12-12-12-27-12-CJTtMn7B.png",r="/assets/2022-12-12-12-26-10-Raqypti8.png",t="/assets/2022-12-12-12-30-48-Cld6_fyS.png",c="/assets/2022-12-12-12-34-03-Dh1AZ_3H.png",v={},u=i('<h1 id="typescript学习笔记" tabindex="-1"><a class="header-anchor" href="#typescript学习笔记"><span>TypeScript学习笔记</span></a></h1><p><img src="'+e+'" alt=""></p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ul><li><a href="#typescript%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0">TypeScript学习笔记</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AFtypescript">什么是TypeScript</a></li><li><a href="#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8">基本使用</a><ul><li><a href="#%E5%AE%89%E8%A3%85typescript%E7%BC%96%E8%AF%91%E5%99%A8tsc">安装Typescript编译器tsc</a></li><li><a href="#%E7%BC%96%E5%86%99%E4%BB%A3%E7%A0%81%E7%BC%96%E8%AF%91%E6%89%A7%E8%A1%8C">编写代码、编译、执行</a></li><li><a href="#%E4%BD%BF%E7%94%A8ts-node%E7%AE%80%E5%8C%96ts%E6%89%A7%E8%A1%8C%E6%AD%A5%E9%AA%A4">使用ts-node简化ts执行步骤</a></li></ul></li><li><a href="#js%E5%8E%9F%E7%94%9F%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3">js原生类型注解</a><ul><li><a href="#%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B%E7%9A%84%E4%B8%A4%E7%A7%8D%E7%89%B9%E6%9C%89%E5%86%99%E6%B3%95"><strong>数组类型的两种特有写法</strong></a></li><li><a href="#%E5%87%BD%E6%95%B0%E5%BD%A2%E5%8F%82%E8%BF%94%E5%9B%9E%E5%80%BC%E7%9A%84%E7%B1%BB%E5%9E%8Bvoid%E7%B1%BB%E5%9E%8B"><strong>函数形参、返回值的类型、void类型</strong></a></li><li><a href="#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B"><strong>函数类型</strong></a></li><li><a href="#%E5%87%BD%E6%95%B0%E5%BD%A2%E5%8F%82%E7%9A%84%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0"><strong>函数形参的可选参数</strong></a></li><li><a href="#%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B"><strong>对象类型</strong></a></li></ul></li><li><a href="#ts%E6%96%B0%E5%A2%9E%E7%B1%BB%E5%9E%8B">ts新增类型</a><ul><li><a href="#%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B"><strong>联合类型</strong></a></li><li><a href="#%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D"><strong>类型别名</strong></a></li><li><a href="#%E6%8E%A5%E5%8F%A3"><strong>接口</strong></a></li><li><a href="#%E5%85%83%E7%BB%84"><strong>元组</strong></a></li><li><a href="#%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B"><strong>字面量类型</strong></a></li><li><a href="#%E6%9E%9A%E4%B8%BE%E7%B1%BB%E5%9E%8B"><strong>枚举类型</strong></a></li><li><a href="#%E7%B1%BB%E5%9E%8B%E6%8E%A8%E8%AE%BA"><strong>类型推论</strong></a></li><li><a href="#%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80"><strong>类型断言</strong></a></li><li><a href="#any%E7%B1%BB%E5%9E%8B"><strong>any类型</strong></a></li><li><a href="#ts%E7%9A%84typeof%E8%BF%90%E7%AE%97%E7%AC%A6"><strong>ts的typeof运算符</strong></a></li></ul></li><li><a href="#ts%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B">ts高级类型</a><ul><li><a href="#class%E7%B1%BB"><strong>class类</strong></a></li><li><a href="#%E7%B1%BB-extends%E7%BB%A7%E6%89%BF"><strong>类-extends继承</strong></a></li><li><a href="#%E7%B1%BB-implements%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3"><strong>类-implements实现接口</strong></a></li><li><a href="#%E7%B1%BB%E7%9A%84%E8%AE%BF%E9%97%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6public-protected-private"><strong>类的访问修饰符public protected private</strong></a></li><li><a href="#readonly%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7"><strong>readonly只读属性</strong></a></li><li><a href="#%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7"><strong>类型兼容性</strong></a><ul><li><a href="#%E7%B1%BB%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7"><strong>类的类型兼容性</strong></a></li><li><a href="#%E6%8E%A5%E5%8F%A3%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7"><strong>接口的类型兼容性</strong></a></li><li><a href="#%E5%87%BD%E6%95%B0%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7"><strong>函数的类型兼容性</strong></a></li></ul></li><li><a href="#%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B"><strong>交叉类型</strong></a></li><li><a href="#%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B%E5%92%8C%E7%BB%A7%E6%89%BF%E7%9A%84%E5%8C%BA%E5%88%AB"><strong>交叉类型和继承的区别</strong></a></li><li><a href="#%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0"><strong>泛型函数</strong></a></li><li><a href="#%E6%B3%9B%E5%9E%8B%E7%B1%BB%E5%9E%8B%E6%94%B6%E7%BC%A9"><strong>泛型类型收缩</strong></a></li><li><a href="#%E5%A4%9A%E4%B8%AA%E6%B3%9B%E5%9E%8B%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%94%AF%E6%8C%81%E5%92%8Ckeyof%E7%9A%84%E4%BD%BF%E7%94%A8"><strong>多个泛型类型的支持和keyof的使用</strong></a></li><li><a href="#%E6%B3%9B%E5%9E%8B%E6%8E%A5%E5%8F%A3"><strong>泛型接口</strong></a></li><li><a href="#%E7%B1%BB%E7%9A%84%E6%B3%9B%E5%9E%8B"><strong>类的泛型</strong></a></li><li><a href="#%E6%B3%9B%E5%9E%8B%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%9E%8B-partial-readonly-pick-record"><strong>泛型工具类型 <code>Partial</code> <code>Readonly</code> <code>Pick</code> <code>Record</code></strong></a></li><li><a href="#%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D%E7%B1%BB%E5%9E%8B"><strong>索引签名类型</strong></a></li><li><a href="#%E6%98%A0%E5%B0%84%E7%B1%BB%E5%9E%8B"><strong>映射类型</strong></a></li><li><a href="#%E5%88%A9%E7%94%A8%E6%98%A0%E5%B0%84%E7%B1%BB%E5%9E%8B%E5%AE%9E%E7%8E%B0partial"><strong>利用映射类型实现Partial</strong></a></li><li><a href="#%E7%B4%A2%E5%BC%95%E6%9F%A5%E8%AF%A2%E7%B1%BB%E5%9E%8B"><strong>索引查询类型</strong></a></li></ul></li><li><a href="#%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6"><strong>类型声明文件</strong></a><ul><li><a href="#%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BA%93%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8"><strong>第三方库的类型声明文件的使用</strong></a></li><li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8"><strong>自定义类型声明文件的使用</strong></a></li><li><a href="#%E7%BB%99%E5%B7%B2%E6%9C%89js%E6%96%87%E4%BB%B6%E7%BC%96%E5%86%99%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6"><strong>给已有js文件编写类型声明文件</strong></a></li></ul></li></ul></li></ul><h2 id="什么是typescript" tabindex="-1"><a class="header-anchor" href="#什么是typescript"><span>什么是TypeScript</span></a></h2><ul><li><p>TypeScript是JavaScript的超集</p></li><li><p><code>TypeScript = Type + JavaScript</code> 即在js的基础上增加了类型支持</p></li><li><p>TypeScript由微软开发，是开源的</p></li></ul><p><img src="'+l+'" alt=""></p><p><strong>为什么要为js添加类型支持</strong></p><ul><li>原生js是动态类型编程语言， <ul><li>执行期间做类型检查，</li><li>类型错误只有在代码运行时才能发现（bug晚发现），</li><li>bug难找，难改，开发效率低。</li></ul></li><li>typescript是静态类型编程语言， <ul><li>编译期间做类型检查，</li><li>类型错误在代码编写时(配合开发工具)，编译时就能发现（bug早发现），</li><li>bug好找，好改，开发效率高。</li></ul></li></ul><p><strong>ts优势</strong><br><img src="'+p+'" alt=""></p><p><strong>类型注解</strong></p><ul><li>为变量添加类型约束，约束变量age类型为number，</li><li>若赋值为非number类型则报错</li></ul><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2><h3 id="安装typescript编译器tsc" tabindex="-1"><a class="header-anchor" href="#安装typescript编译器tsc"><span>安装Typescript编译器tsc</span></a></h3><p><img src="'+d+`" alt=""></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#DCDCAA;">npm</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;"> i</span><span style="--shiki-light:#79B8FF;--shiki-dark:#CE9178;"> -g</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;"> typescript</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#DCDCAA;">tsc</span><span style="--shiki-light:#79B8FF;--shiki-dark:#CE9178;"> -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+'" alt=""></p><h3 id="编写代码、编译、执行" tabindex="-1"><a class="header-anchor" href="#编写代码、编译、执行"><span>编写代码、编译、执行</span></a></h3><p><img src="'+t+'" alt=""></p><h3 id="使用ts-node简化ts执行步骤" tabindex="-1"><a class="header-anchor" href="#使用ts-node简化ts执行步骤"><span>使用ts-node简化ts执行步骤</span></a></h3><blockquote><p>注意：需要package.json文件 否则报错</p></blockquote><p><img src="'+c+`" alt=""></p><h2 id="js原生类型注解" tabindex="-1"><a class="header-anchor" href="#js原生类型注解"><span>js原生类型注解</span></a></h2><p><strong>js原生类型:<code>number string boolean null undefined symbol</code></strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>var a:number=1;</span></span>
<span class="line"><span>var b:string=&quot;1&quot;;</span></span>
<span class="line"><span>var c:boolean=true;</span></span>
<span class="line"><span>var d:null=null;</span></span>
<span class="line"><span>var e:undefined=undefined;</span></span>
<span class="line"><span>var f:symbol=Symbol(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(a);</span></span>
<span class="line"><span>console.log(b);</span></span>
<span class="line"><span>console.log(c);</span></span>
<span class="line"><span>console.log(d);</span></span>
<span class="line"><span>console.log(e);</span></span>
<span class="line"><span>console.log(f);</span></span>
<span class="line"><span>// output:</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>1        </span></span>
<span class="line"><span>true     </span></span>
<span class="line"><span>null     </span></span>
<span class="line"><span>undefined</span></span>
<span class="line"><span>Symbol(1)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>js原生对象类型:<code>object</code></strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>var g:object=[];</span></span>
<span class="line"><span>var h:object={};</span></span>
<span class="line"><span>var i:object=function a(){};</span></span>
<span class="line"><span>var j:object=function (){};</span></span>
<span class="line"><span>var k:object=()=&gt;{};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(g);</span></span>
<span class="line"><span>console.log(h);</span></span>
<span class="line"><span>console.log(i);</span></span>
<span class="line"><span>console.log(j);</span></span>
<span class="line"><span>console.log(k);</span></span>
<span class="line"><span>// output</span></span>
<span class="line"><span>[]</span></span>
<span class="line"><span>{}</span></span>
<span class="line"><span>[Function: a]</span></span>
<span class="line"><span>[Function: j]</span></span>
<span class="line"><span>[Function: k]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组类型的两种特有写法" tabindex="-1"><a class="header-anchor" href="#数组类型的两种特有写法"><span><strong>数组类型的两种特有写法</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 数组类型的两种写法</span></span>
<span class="line"><span>var l:number[] = [1,2,3]</span></span>
<span class="line"><span>var m:Array&lt;number&gt; = [1,2,3]</span></span>
<span class="line"><span>console.log(l);</span></span>
<span class="line"><span>console.log(m);</span></span>
<span class="line"><span>// output</span></span>
<span class="line"><span>[ 1, 2, 3 ]</span></span>
<span class="line"><span>[ 1, 2, 3 ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数形参、返回值的类型、void类型" tabindex="-1"><a class="header-anchor" href="#函数形参、返回值的类型、void类型"><span><strong>函数形参、返回值的类型、void类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>function funA(a:number,b:number):number{</span></span>
<span class="line"><span>    return a+b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var funB = (a:number,b:number):number =&gt;{// 箭头函数的返回值类型的写法</span></span>
<span class="line"><span>    return a+b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var funC = (a:number,b:number):void =&gt;{//void无返回值类型</span></span>
<span class="line"><span>  console.log(a+b)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型"><span><strong>函数类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>var funC: (a:number,b:number)=&gt;number = (a,b)=&gt;a+b;</span></span>
<span class="line"><span>var funC: (a:number,b:number)=&gt;number = function fun(a,b){return a+b};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数形参的可选参数" tabindex="-1"><a class="header-anchor" href="#函数形参的可选参数"><span><strong>函数形参的可选参数</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>function mySlice(start?:number,end?:number):void{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型"><span><strong>对象类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>var obj:{</span></span>
<span class="line"><span>    name:string;  // ;号可以去掉</span></span>
<span class="line"><span>    age:number; isUser?:boolean; // 中间的分号不能去掉</span></span>
<span class="line"><span>    sayHi():void;</span></span>
<span class="line"><span>    greet?:(name:string)=&gt;void // ?号 表示可选参数</span></span>
<span class="line"><span>} = {</span></span>
<span class="line"><span>    name:&quot;hahahah&quot;,</span></span>
<span class="line"><span>    age:18,</span></span>
<span class="line"><span>    sayHi(){}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts新增类型" tabindex="-1"><a class="header-anchor" href="#ts新增类型"><span>ts新增类型</span></a></h2><p><strong>ts新增类型</strong></p><ul><li>联合类型 <code>|</code></li><li>自定义类型（类型别名）</li><li>接口</li><li>元祖</li><li>字面量类型</li><li>枚举类型</li><li>void</li><li>any</li></ul><h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型"><span><strong>联合类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 联合类型</span></span>
<span class="line"><span>var a: number|string;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名"><span><strong>类型别名</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 类型别名</span></span>
<span class="line"><span>type myType = Arrary&lt;number|string&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span><strong>接口</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 接口</span></span>
<span class="line"><span>interface IPerson {</span></span>
<span class="line"><span>    name:string;</span></span>
<span class="line"><span>    age:number;</span></span>
<span class="line"><span>    sayHi():void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var personA:IPerson;</span></span>
<span class="line"><span>// 接口继承接口</span></span>
<span class="line"><span>interface Point2D{x:number;y:number;}</span></span>
<span class="line"><span>interface Point3D extends Point2D {z:number}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元组" tabindex="-1"><a class="header-anchor" href="#元组"><span><strong>元组</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 元组</span></span>
<span class="line"><span>var position:[number,number] = [0.5,1.4];</span></span>
<span class="line"><span>var position:[number,number,string] = [0.5,1.4,&quot;2d&quot;];</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字面量类型" tabindex="-1"><a class="header-anchor" href="#字面量类型"><span><strong>字面量类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 字面量类型</span></span>
<span class="line"><span>var aaa = &quot;stringA&quot;;   // aaa 的 类型 为 string 即 字符串类型</span></span>
<span class="line"><span>const bbb = &quot;stringB&quot;; // bbb 的 类型 为 &quot;stringB&quot; 即 字面量类型</span></span>
<span class="line"><span>var ccc:&quot;stringC&quot;|&quot;stringD&quot; = &quot;stringC&quot; // ccc 的 类型为 两个字面量类型之一</span></span>
<span class="line"><span>function changeDirection(direction:&quot;up&quot;|&quot;down&quot;|&quot;left&quot;|&quot;right&quot;){ // 字面量类型的应用</span></span>
<span class="line"><span>    switch(direction){</span></span>
<span class="line"><span>        case &quot;up&quot;:</span></span>
<span class="line"><span>            ;</span></span>
<span class="line"><span>        case &quot;down&quot;:</span></span>
<span class="line"><span>            ;</span></span>
<span class="line"><span>        case &quot;left&quot;:</span></span>
<span class="line"><span>            ;</span></span>
<span class="line"><span>        case &quot;right&quot;:</span></span>
<span class="line"><span>            ;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>changeDirection(&quot;down&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型"><span><strong>枚举类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 枚举类型</span></span>
<span class="line"><span>// enum Direction{Up=&quot;up&quot;,Down=&quot;down&quot;,Left=&quot;left&quot;,Right=&quot;right&quot;};// 字符串枚举，没有自增长行为，需依次赋值</span></span>
<span class="line"><span>enum Direction{Up=0,Down,Left,Right};// 数字枚举，有自增长行为，第一个为0后续依次+1</span></span>
<span class="line"><span>function changeDirection(direction:Direction){// 作用</span></span>
<span class="line"><span>    switch(direction){</span></span>
<span class="line"><span>        case Direction.Up:</span></span>
<span class="line"><span>        case Direction.Down:</span></span>
<span class="line"><span>        case Direction.Left:</span></span>
<span class="line"><span>        case Direction.Right:</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(direction);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>changeDirection(Direction.Down);</span></span>
<span class="line"><span>// 枚举原理1</span></span>
<span class="line"><span>enum Direction{Up=0,Down,Left,Right};// 数字枚举，有自增长行为，第一个为0后续依次+1</span></span>
<span class="line"><span>// 编译后：</span></span>
<span class="line"><span>var Direction;</span></span>
<span class="line"><span>(function (Direction) {</span></span>
<span class="line"><span>    Direction[Direction[&quot;Up&quot;] = 0] = &quot;Up&quot;;</span></span>
<span class="line"><span>    Direction[Direction[&quot;Down&quot;] = 1] = &quot;Down&quot;;</span></span>
<span class="line"><span>    Direction[Direction[&quot;Left&quot;] = 2] = &quot;Left&quot;;</span></span>
<span class="line"><span>    Direction[Direction[&quot;Right&quot;] = 3] = &quot;Right&quot;;</span></span>
<span class="line"><span>})(Direction || (Direction = {}));</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>console.log(Direction);</span></span>
<span class="line"><span>// output</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &#39;0&#39;: &#39;Up&#39;,</span></span>
<span class="line"><span>    &#39;1&#39;: &#39;Down&#39;,</span></span>
<span class="line"><span>    &#39;2&#39;: &#39;Left&#39;,</span></span>
<span class="line"><span>    &#39;3&#39;: &#39;Right&#39;,</span></span>
<span class="line"><span>    Up: 0,</span></span>
<span class="line"><span>    Down: 1,</span></span>
<span class="line"><span>    Left: 2,</span></span>
<span class="line"><span>    Right: 3</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 编译原理2</span></span>
<span class="line"><span>// 编译前：</span></span>
<span class="line"><span>enum Direction{Up=&quot;up&quot;,Down=&quot;down&quot;,Left=&quot;left&quot;,Right=&quot;right&quot;};// 字符串枚举，没有自增长行为，需依次赋值</span></span>
<span class="line"><span>// 编译后：</span></span>
<span class="line"><span>var Direction;</span></span>
<span class="line"><span>(function (Direction) {</span></span>
<span class="line"><span>    Direction[&quot;Up&quot;] = &quot;up&quot;;</span></span>
<span class="line"><span>    Direction[&quot;Down&quot;] = &quot;down&quot;;</span></span>
<span class="line"><span>    Direction[&quot;Left&quot;] = &quot;left&quot;;</span></span>
<span class="line"><span>    Direction[&quot;Right&quot;] = &quot;right&quot;;</span></span>
<span class="line"><span>})(Direction || (Direction = {}));</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>console.log(Direction);</span></span>
<span class="line"><span>// output:</span></span>
<span class="line"><span>// { Up: &#39;up&#39;, Down: &#39;down&#39;, Left: &#39;left&#39;, Right: &#39;right&#39; }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型推论" tabindex="-1"><a class="header-anchor" href="#类型推论"><span><strong>类型推论</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>let a=123;//声明变量时赋初值，变量a将自带类型</span></span>
<span class="line"><span>a=&quot;123&quot;; // 报错</span></span>
<span class="line"><span>let b;b=1;</span></span>
<span class="line"><span>b=&quot;1&quot; // 不报错</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//----------------------------------------</span></span>
<span class="line"><span>function funA(a:number,b:number){</span></span>
<span class="line"><span>  return a+b; //函数返回值将自动推断为number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let c:string = funA(1,2); // 报错</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言"><span><strong>类型断言</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>var alink = document.querySelector(&quot;a&quot;) as HTMLAnchorElement // 写法1</span></span>
<span class="line"><span>var alink = &lt;HTMLAnchorElement&gt; document.querySelector(&quot;a&quot;)  // 写法2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>alink.href = &quot;https://baidu.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="any类型" tabindex="-1"><a class="header-anchor" href="#any类型"><span><strong>any类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>var a: any ={kkk:123}; // a是any类型</span></span>
<span class="line"><span>var b;              // b是any类型</span></span>
<span class="line"><span>function c(d){      // d是any类型</span></span>
<span class="line"><span>    return d;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts的typeof运算符" tabindex="-1"><a class="header-anchor" href="#ts的typeof运算符"><span><strong>ts的typeof运算符</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>    interface Person{name:string,age:number};</span></span>
<span class="line"><span>    var personA:Person;</span></span>
<span class="line"><span>    var personB: typeof personA; // typeof支持变量        personB 的 类型 和 personA 一致</span></span>
<span class="line"><span>    var age: typeof personA.age; // typeof支持对象的属性  </span></span>
<span class="line"><span>    var result: typeof funA(a,b);// typeof不支持上述两种之外的其他形式的类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts高级类型" tabindex="-1"><a class="header-anchor" href="#ts高级类型"><span>ts高级类型</span></a></h2><ul><li><p>class类</p></li><li><p>类型兼容性</p></li><li><p>交叉类型</p></li><li><p>泛型和keyof</p></li><li><p>索引签名类型和索引查询类型</p></li><li><p>映射类型</p></li></ul><h3 id="class类" tabindex="-1"><a class="header-anchor" href="#class类"><span><strong>class类</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>    name:string;  // 未初始化,有类型</span></span>
<span class="line"><span>    age=0; // 初始化，有类型</span></span>
<span class="line"><span>    gender // any类型</span></span>
<span class="line"><span>    constructor(name:string,age:number,gender){// 构造函数不需要返回值类型</span></span>
<span class="line"><span>        this.name=name;</span></span>
<span class="line"><span>        this.age=age;</span></span>
<span class="line"><span>        this.gender=gender;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    getName():string{</span></span>
<span class="line"><span>        return this.name</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    setName(name:string):void{</span></span>
<span class="line"><span>        this.name=name</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const person = new Person(&quot;dyg&quot;,18,&quot;男&quot;);</span></span>
<span class="line"><span>person.name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类-extends继承" tabindex="-1"><a class="header-anchor" href="#类-extends继承"><span><strong>类-extends继承</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    class Animal{</span></span>
<span class="line"><span>        name:string;</span></span>
<span class="line"><span>        age:number;</span></span>
<span class="line"><span>        constructor(name:string,age:number){</span></span>
<span class="line"><span>            this.name = name</span></span>
<span class="line"><span>            this.age = age</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    class Dog extends Animal{ // extends是js自带的关键字</span></span>
<span class="line"><span>        constructor(name:string,age:number){</span></span>
<span class="line"><span>            super(name,age);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        bark(){</span></span>
<span class="line"><span>            console.log(&quot;汪汪汪&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const dog = new Dog(&quot;??&quot;,12);</span></span>
<span class="line"><span>    dog.bark();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类-implements实现接口" tabindex="-1"><a class="header-anchor" href="#类-implements实现接口"><span><strong>类-implements实现接口</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface Animal{</span></span>
<span class="line"><span>        name:string</span></span>
<span class="line"><span>        age:number</span></span>
<span class="line"><span>        gender:&#39;雌&#39;|&quot;雄&quot;</span></span>
<span class="line"><span>        bark():void</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    class Dog implements Animal{</span></span>
<span class="line"><span>        name: string;</span></span>
<span class="line"><span>        age: number;</span></span>
<span class="line"><span>        gender: &quot;雌&quot; | &quot;雄&quot;;</span></span>
<span class="line"><span>        constructor(name:string,age:number,gender:&quot;雌&quot; | &quot;雄&quot;){</span></span>
<span class="line"><span>            this.name = name;</span></span>
<span class="line"><span>            this.age = age;</span></span>
<span class="line"><span>            this.gender = gender;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        bark(): void {</span></span>
<span class="line"><span>            console.log(&quot;汪汪汪&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const dog = new Dog(&quot;xxx&quot;,10,&#39;雄&#39;);</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的访问修饰符public-protected-private" tabindex="-1"><a class="header-anchor" href="#类的访问修饰符public-protected-private"><span><strong>类的访问修饰符public protected private</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    class Example{</span></span>
<span class="line"><span>        public name:string; // 在类的外部可见 （实例对象可以访问到）。此外，public是默认的 也可以省略</span></span>
<span class="line"><span>        protected age:number; // 在本类、子类的内部可见（实例对象无法访问到）</span></span>
<span class="line"><span>        private gender:string; // 在本类的内部可见 （实例对象无法访问到，子类无法访问到）</span></span>
<span class="line"><span>        constructor(name:string,age:number,gender:string){</span></span>
<span class="line"><span>            this.name=name;</span></span>
<span class="line"><span>            this.age=age;</span></span>
<span class="line"><span>            this.gender=gender;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        private __myFun__() {// 私有函数</span></span>
<span class="line"><span>            console.log(&quot;这是一个内部辅助函数&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readonly只读属性" tabindex="-1"><a class="header-anchor" href="#readonly只读属性"><span><strong>readonly只读属性</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    class Example{</span></span>
<span class="line"><span>      readonly age:number = 0; // 1. 经 readonly 修饰的属性，有注解，只能在 变量赋初始值 和 constructor中 赋值</span></span>
<span class="line"><span>        readonly height = 170; // 2. 经 readonly 修饰的属性 ，不加注解，则为字面量类型</span></span>
<span class="line"><span>        // 3. 接口 和 对象 中都可以使用readonly关键字修饰</span></span>
<span class="line"><span>        constructor(age:number) {</span></span>
<span class="line"><span>            this.age = age</span></span>
<span class="line"><span>            this.height = 171 // 报错</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        fun(){</span></span>
<span class="line"><span>            this.age = 123; // 报错</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const example = new Example(1);</span></span>
<span class="line"><span>    example.age = 1;// 报错，无法修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型兼容性" tabindex="-1"><a class="header-anchor" href="#类型兼容性"><span><strong>类型兼容性</strong></span></a></h3><p><strong>两种类型系统</strong></p><ul><li>结构化类型系统(structural type system) <ul><li>也叫鸭子类型(duck typing)</li><li>对于对象类型来说：如果y的成员至少与x相同，则x兼容y（成员多的可以赋值给成员少的）</li><li>typescript</li></ul></li><li>标明类型系统(Nominal Type System) <ul><li>c# java</li></ul></li></ul><h4 id="类的类型兼容性" tabindex="-1"><a class="header-anchor" href="#类的类型兼容性"><span><strong>类的类型兼容性</strong></span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    class Point{x:number;y:number};</span></span>
<span class="line"><span>    class Point2D{x:number;y:number};</span></span>
<span class="line"><span>    class Point3D{x:number;y:number;z:number};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const point1:Point = new Point2D(); // Point2D 向下兼容 Point</span></span>
<span class="line"><span>    const point2:Point = new Point3D(); // Point3D 向下兼容 Point</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接口的类型兼容性" tabindex="-1"><a class="header-anchor" href="#接口的类型兼容性"><span><strong>接口的类型兼容性</strong></span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface Animal{type:string;age:number;gender:string};</span></span>
<span class="line"><span>    interface Human extends Animal{name:string};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let humanA:Human = {</span></span>
<span class="line"><span>        name: &quot;&quot;,</span></span>
<span class="line"><span>        type: &quot;&quot;,</span></span>
<span class="line"><span>        age: 0,</span></span>
<span class="line"><span>        gender: &quot;&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let animalA:Animal = humanA; // Human 向下兼容 Animal</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface Point1D{x:number}</span></span>
<span class="line"><span>    interface Point2D{x:number;y:number;}</span></span>
<span class="line"><span>    interface Point3D{x:number;y:number;z:number}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let p3:Point3D = {x:1,y:2,z:3}; // </span></span>
<span class="line"><span>    let p2:Point2D = p3;            // Point3D 向下兼容 Point2D</span></span>
<span class="line"><span>    let p1:Point1D = p3;            // Point2D 向下兼容 Point1D</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数的类型兼容性" tabindex="-1"><a class="header-anchor" href="#函数的类型兼容性"><span><strong>函数的类型兼容性</strong></span></a></h4><ul><li>形式参数少的可以赋值给形式参数多的</li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    function SumA(numA:number,numB:number,numC:number){</span></span>
<span class="line"><span>        return numA+numB+numC;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function SumB(numA:number,numB:number){</span></span>
<span class="line"><span>        return numA+numB;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var funA:(numA:number,numB:number,numC:number)=&gt;number;</span></span>
<span class="line"><span>    funA=SumA;// funA 兼容 SumA</span></span>
<span class="line"><span>    funA=SumB;// funA 兼容 SumB</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数形式参数相同位置的参数类型要相同或兼容</li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 要相同</span></span>
<span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    type fun1 = (num:number)=&gt;void;   </span></span>
<span class="line"><span>    type fun2 = (num:number)=&gt;void;   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var f1:fun1;</span></span>
<span class="line"><span>    var f2:fun2;</span></span>
<span class="line"><span>    f1 = f2;        // 形式参数相同位置的参数类型要相同</span></span>
<span class="line"><span>    f2 = f1;</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 要兼容</span></span>
<span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface Point2D{x:number;y:number};</span></span>
<span class="line"><span>    interface Point3D{x:number;y:number;z:number};</span></span>
<span class="line"><span>    type fun2 = (position:Point2D)=&gt;void;   </span></span>
<span class="line"><span>    type fun3 = (position:Point3D)=&gt;void;   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var f2:fun2=(pos:Point2D)=&gt;{return};</span></span>
<span class="line"><span>    var f3:fun3=(pos:Point3D)=&gt;{return};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // f3 = f2; // fun3 兼容 fun2 类型，可理解为将对象属性展开为函数形式参数，形式参数少的可以赋值给形式参数多的</span></span>
<span class="line"><span>    f2 = f3; // 严格模式会报错，同上，理解为将对象属性拆开为函数形式参数，有3个形式参数的函数不能赋值给有2个的</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数的返回值类型：遵循一般类型的规则</li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface Point2D{x:number;y:number};</span></span>
<span class="line"><span>    interface Point3D{x:number;y:number;z:number};</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    type fun2 = (position:Point2D)=&gt;Point2D;   </span></span>
<span class="line"><span>    type fun3 = (position:Point2D)=&gt;Point3D;   </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    var f2:fun2=(pos:Point2D)=&gt;{return pos};</span></span>
<span class="line"><span>    var f3:fun3=(pos:Point2D)=&gt;{return {...pos,z:100}};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    f2 = f3; // 兼容   对象元素多的可以赋值给少的</span></span>
<span class="line"><span>    f3 = f2; // 不兼容 对象元素少的不能赋值给多的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型"><span><strong>交叉类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface Person{name:string};</span></span>
<span class="line"><span>    interface Contact{phone:string};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    type PersonDetail = Person &amp; Contact; // 交叉类型就是将两个类型复合</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var personDetail: PersonDetail = {</span></span>
<span class="line"><span>        name:&quot;dyg&quot;,</span></span>
<span class="line"><span>        phone:&quot;123&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交叉类型和继承的区别" tabindex="-1"><a class="header-anchor" href="#交叉类型和继承的区别"><span><strong>交叉类型和继承的区别</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 1.</span></span>
<span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface A{a:number};</span></span>
<span class="line"><span>    interface B extends A{</span></span>
<span class="line"><span>        a:string // 报错</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2.</span></span>
<span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface A{a:number};</span></span>
<span class="line"><span>    interface B{a:string};</span></span>
<span class="line"><span>    type C = A &amp; B; // a 将变为 never类型 表示永远不存在的值的类型</span></span>
<span class="line"><span>    var a:A = {a:1}</span></span>
<span class="line"><span>    var b:B = {a:&quot;1&quot;}</span></span>
<span class="line"><span>    var c:C = {a:1}  // 报错</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3.</span></span>
<span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface A{fun:()=&gt;void};</span></span>
<span class="line"><span>    interface B{fun:(num:number)=&gt;void};</span></span>
<span class="line"><span>    type C = A &amp; B; // fun的类型将变为： (()=&gt;void) &amp;&amp; ((num:number)=&gt;void) 类型</span></span>
<span class="line"><span>    var c:C = {fun:()=&gt;{return}}</span></span>
<span class="line"><span>    c.fun() // 方法的重载</span></span>
<span class="line"><span>    c.fun(123) // 方法的重载</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型函数" tabindex="-1"><a class="header-anchor" href="#泛型函数"><span><strong>泛型函数</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    // 泛型函数</span></span>
<span class="line"><span>    function echo&lt;voiceType&gt;(voice:voiceType):voiceType{</span></span>
<span class="line"><span>        return voice</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 泛型函数的调用</span></span>
<span class="line"><span>    echo&lt;string&gt;(&quot;你好!&quot;);</span></span>
<span class="line"><span>    echo&lt;number&gt;(12345);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 简化版的泛型函数调用</span></span>
<span class="line"><span>    echo(&quot;你好！&quot;); // 简化后 voiceType 将被自动推断为字面量类型</span></span>
<span class="line"><span>    echo(12345);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型类型收缩" tabindex="-1"><a class="header-anchor" href="#泛型类型收缩"><span><strong>泛型类型收缩</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    // 泛型类型的收缩</span></span>
<span class="line"><span>    // 1.指定更加明确的类型</span></span>
<span class="line"><span>        // function myEcho&lt;voiceType&gt;(voice:voiceType[]):voiceType[]{</span></span>
<span class="line"><span>        //     console.log(voice.length);</span></span>
<span class="line"><span>        //     return voice</span></span>
<span class="line"><span>        // }</span></span>
<span class="line"><span>    // 2.添加类型收缩约束</span></span>
<span class="line"><span>    interface LengthAble{length:number}</span></span>
<span class="line"><span>    function echo&lt;voiceType extends LengthAble&gt;(voice:voiceType):voiceType{</span></span>
<span class="line"><span>        console.log(voice.length);</span></span>
<span class="line"><span>        return voice</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 泛型函数的调用</span></span>
<span class="line"><span>    echo&lt;string&gt;(&quot;你好!&quot;);</span></span>
<span class="line"><span>    echo&lt;number[]&gt;([1,2,3,4,5]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 简化版的泛型函数调用</span></span>
<span class="line"><span>    echo(&quot;你好！&quot;); // 简化后 voiceType 将被自动推断为字面量类型</span></span>
<span class="line"><span>    echo([1,2,3,4,5]); // </span></span>
<span class="line"><span>    echo({length:1,msg:&quot;hahahah&quot;});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个泛型类型的支持和keyof的使用" tabindex="-1"><a class="header-anchor" href="#多个泛型类型的支持和keyof的使用"><span><strong>多个泛型类型的支持和keyof的使用</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    // 多个泛型类型</span></span>
<span class="line"><span>    function hash&lt;typeKey,typeValue&gt;(key:typeKey,value:typeValue):typeValue{</span></span>
<span class="line"><span>        return value</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // keyof </span></span>
<span class="line"><span>    function getValue&lt;typeObj,typeKey extends keyof typeObj&gt;(obj:typeObj,key:typeKey):any{</span></span>
<span class="line"><span>        return obj[key]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口"><span><strong>泛型接口</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    // 接口泛型,注意接口没有类型推断机制,使用泛型接口需显式指定类型</span></span>
<span class="line"><span>    interface IdFuncs&lt;IdType&gt;{</span></span>
<span class="line"><span>        id:(value:IdType)=&gt;IdType;</span></span>
<span class="line"><span>        ids:()=&gt;IdType[];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var obj:IdFuncs&lt;number&gt; = {</span></span>
<span class="line"><span>        id(value:number) {return value },</span></span>
<span class="line"><span>        ids():number[] { return [1,2,3] }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    interface MapItem&lt;keyType,ValueType&gt;{</span></span>
<span class="line"><span>        key:keyType;</span></span>
<span class="line"><span>        value:ValueType;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var item:MapItem&lt;string,number[]&gt; = {</span></span>
<span class="line"><span>        key: &quot;123&quot;,</span></span>
<span class="line"><span>        value: [1,2,3]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的泛型" tabindex="-1"><a class="header-anchor" href="#类的泛型"><span><strong>类的泛型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    class ExampleClass&lt;Type&gt;{</span></span>
<span class="line"><span>        default:Type;</span></span>
<span class="line"><span>        constructor(value:Type){</span></span>
<span class="line"><span>            this.default = value</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        set(value:Type):void{</span></span>
<span class="line"><span>            this.default = this.default</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        get(){</span></span>
<span class="line"><span>            return this.default;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var ex = new ExampleClass(123); // 类的泛型支持类型推断,在构造函数的形式参数使用了泛型类的所有类型变量的情况下可以省略类型推断</span></span>
<span class="line"><span>    ex.set(321)</span></span>
<span class="line"><span>    ex.get()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型工具类型-partial-readonly-pick-record" tabindex="-1"><a class="header-anchor" href="#泛型工具类型-partial-readonly-pick-record"><span><strong>泛型工具类型 <code>Partial</code> <code>Readonly</code> <code>Pick</code> <code>Record</code></strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 泛型工具类型 : Partial Readonly </span></span>
<span class="line"><span>    interface Props{</span></span>
<span class="line"><span>        id:string;</span></span>
<span class="line"><span>        title:string;</span></span>
<span class="line"><span>        children:number[];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    type PartialProps = Partial&lt;Props&gt;; // 创建新类型 使得所有属性变成可选类型，即不是必须的</span></span>
<span class="line"><span>    type ReadonlyProps = Readonly&lt;Props&gt;; // 创建新类型 使得所有属性变成只读类型</span></span>
<span class="line"><span>    type PickProps = Pick&lt;Props,&quot;id&quot;|&quot;title&quot;&gt; // 创建新类型 从原类型中选择一组属性构造新类型</span></span>
<span class="line"><span>    type RecordObj = Record&lt;&quot;id&quot;|&quot;hash&quot;,string[]&gt;; // 创建记录类型 键名不同，键值相同</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var p1:Props = {</span></span>
<span class="line"><span>        id: &quot;&quot;,</span></span>
<span class="line"><span>        title: &quot;&quot;,</span></span>
<span class="line"><span>        children: [],</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var p2:PartialProps = {</span></span>
<span class="line"><span>        // 可以没有</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var p3:ReadonlyProps = {</span></span>
<span class="line"><span>        id: &quot;&quot;,</span></span>
<span class="line"><span>        title: &quot;&quot;,</span></span>
<span class="line"><span>        children: [],</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // p3.id = &quot;123&quot; // 报错</span></span>
<span class="line"><span>    var  p4:PickProps = {</span></span>
<span class="line"><span>        id: &quot;&quot;,</span></span>
<span class="line"><span>        title: &quot;&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var p5:RecordObj = {</span></span>
<span class="line"><span>        id: [&quot;123&quot;,&quot;1111&quot;],</span></span>
<span class="line"><span>        hash: [&quot;12132&quot;,&quot;11211&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引签名类型" tabindex="-1"><a class="header-anchor" href="#索引签名类型"><span><strong>索引签名类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(()=&gt;{</span></span>
<span class="line"><span>    // 索引签名类型：用于无法确定对象中具体的属性名或者说属性个数任意的场景</span></span>
<span class="line"><span>    interface AnyObj {</span></span>
<span class="line"><span>        [key:string]:number;// 类型为字符串的键 的值 为number类型</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var obj1:AnyObj = {</span></span>
<span class="line"><span>        a:1,</span></span>
<span class="line"><span>        ab:12,</span></span>
<span class="line"><span>        abc:123,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    interface myArray&lt;T&gt;{</span></span>
<span class="line"><span>        [index:number]:T// 类型为number的键 的值为 T类型</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var myarry:myArray&lt;number&gt; = [1,2,3];</span></span>
<span class="line"><span>    myarry[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="映射类型" tabindex="-1"><a class="header-anchor" href="#映射类型"><span><strong>映射类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(() =&gt; {</span></span>
<span class="line"><span>    // 映射类型：</span></span>
<span class="line"><span>    // + 映射类型基于索引签名，所以也使用了[]符号</span></span>
<span class="line"><span>    // + key in PropKeys 表示 key可以是联合类型中的任意一个</span></span>
<span class="line"><span>    // + 映射类型只能在类型别名中使用，不能在接口中使用</span></span>
<span class="line"><span>    // + type1 和 type2 type3 等效</span></span>
<span class="line"><span>    type Type1 = { a: number; b: number; c: number }</span></span>
<span class="line"><span>    type PropKeys = &quot;a&quot; | &quot;b&quot; | &quot;c&quot;;</span></span>
<span class="line"><span>    type Type2 = { [key in PropKeys]: number }</span></span>
<span class="line"><span>    type Type3 = { [key in keyof Type1]: number }</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="利用映射类型实现partial" tabindex="-1"><a class="header-anchor" href="#利用映射类型实现partial"><span><strong>利用映射类型实现Partial</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(() =&gt; {</span></span>
<span class="line"><span>    // Partial实现原理</span></span>
<span class="line"><span>    type Partial&lt;T&gt; = {</span></span>
<span class="line"><span>        [Key in keyof T]?: T[Key]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引查询类型" tabindex="-1"><a class="header-anchor" href="#索引查询类型"><span><strong>索引查询类型</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>(() =&gt; {</span></span>
<span class="line"><span>    // 索引查询类型</span></span>
<span class="line"><span>    type Parps = { a: number; b: string; c: boolean };</span></span>
<span class="line"><span>    type TypeA = Parps[&quot;a&quot;] // 查询Parps中a属性的类型 即number类型</span></span>
<span class="line"><span>    type TypeAB = Parps[&quot;a&quot; | &quot;b&quot;] // 即为 number | string 类型</span></span>
<span class="line"><span>    type TypeABC = Parps[keyof Parps] // 即为 number | string | boolean 类型</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型声明文件" tabindex="-1"><a class="header-anchor" href="#类型声明文件"><span><strong>类型声明文件</strong></span></a></h2><p>TS中有两种文件类型:</p><ul><li>1.ts文件 <ul><li>1.既包含类型信息又可执行代码。</li><li>2.可以被编译为.js文件，然后，执行代码。3.用途:编写程序代码的地方。</li></ul></li><li>2.d.ts文件。 <ul><li>1．只包含类型信息的类型声明文件。</li><li>2．不会生成.js 文件，仅用于提供类型信息。3.用途:为JS提供类型信愈。</li></ul></li><li>总结: <ul><li>.ts是 implementation(代码实现文件）;</li><li>.d.ts是declaration(类型声明文件)。如果要为JS库提供类型信息，要使用.d.ts 文件。</li></ul></li></ul><h3 id="第三方库的类型声明文件的使用" tabindex="-1"><a class="header-anchor" href="#第三方库的类型声明文件的使用"><span><strong>第三方库的类型声明文件的使用</strong></span></a></h3><ul><li><p>第三方库会自带 index.d.ts 文件 文件的路径由 package.json 的typing或types字段给出</p></li><li><p>第三库如果没有自带类型声明文件，可以使用由DefinitelyTyped提供的类型声明文件，</p><ul><li>下载方式为 <code>npm i --save-dev @types/第三方库名</code></li></ul></li></ul><h3 id="自定义类型声明文件的使用" tabindex="-1"><a class="header-anchor" href="#自定义类型声明文件的使用"><span><strong>自定义类型声明文件的使用</strong></span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 文件mytypes.d.ts</span></span>
<span class="line"><span>type A = string | number;</span></span>
<span class="line"><span>export { A }//导出声明的类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 文件index.ts</span></span>
<span class="line"><span>import {A} from &quot;./myTypes&quot; // 导入声明的类型</span></span>
<span class="line"><span>var a:A = &quot;123&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给已有js文件编写类型声明文件" tabindex="-1"><a class="header-anchor" href="#给已有js文件编写类型声明文件"><span><strong>给已有js文件编写类型声明文件</strong></span></a></h3><ul><li><p>ts引入js文件时，会引入同名的.d.ts文件</p></li><li><p>declare关键字：用于类型声明，声明一个已经存在的变量的类型</p></li><li><p>对于type interface等的ts独有的类型，声明可以省略declare关键字</p></li><li><p>对于let function等的类型 声明不能省略declare关键字</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>declare let count:number;// 为已有全局变量做类型声明</span></span>
<span class="line"><span>declare function add(a:number,b:number):number;// 为已有函数做类型声明</span></span>
<span class="line"><span>declare type A = string | number</span></span>
<span class="line"><span>declare interface OBJ{};</span></span>
<span class="line"><span>export {count,OBJ,add,A}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,120),o=[u];function h(m,b){return a(),n("div",null,o)}const k=s(v,[["render",h],["__file","typescript学习笔记.html.vue"]]),E=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/typescript%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/typescript%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"TypeScript学习笔记","lang":"zh-CN","frontmatter":{"title":"TypeScript学习笔记","date":"2022-12-27T04:17:00.000Z","cover":"./cover/typescript学习笔记.png","tag":["笔记"],"category":"笔记","star":true,"description":"TypeScript学习笔记 目录 TypeScript学习笔记 目录 什么是TypeScript 基本使用 安装Typescript编译器tsc 编写代码、编译、执行 使用ts-node简化ts执行步骤 js原生类型注解 数组类型的两种特有写法 函数形参、返回值的类型、void类型 函数类型 函数形参的可选参数 对象类型 ts新增类型 联合类型 类型...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%89%8D%E7%AB%AF/typescript%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/typescript%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"TypeScript学习笔记"}],["meta",{"property":"og:description","content":"TypeScript学习笔记 目录 TypeScript学习笔记 目录 什么是TypeScript 基本使用 安装Typescript编译器tsc 编写代码、编译、执行 使用ts-node简化ts执行步骤 js原生类型注解 数组类型的两种特有写法 函数形参、返回值的类型、void类型 函数类型 函数形参的可选参数 对象类型 ts新增类型 联合类型 类型..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T11:27:55.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:published_time","content":"2022-12-27T04:17:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-28T11:27:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TypeScript学习笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-27T04:17:00.000Z\\",\\"dateModified\\":\\"2023-11-28T11:27:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"什么是TypeScript","slug":"什么是typescript","link":"#什么是typescript","children":[]},{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[{"level":3,"title":"安装Typescript编译器tsc","slug":"安装typescript编译器tsc","link":"#安装typescript编译器tsc","children":[]},{"level":3,"title":"编写代码、编译、执行","slug":"编写代码、编译、执行","link":"#编写代码、编译、执行","children":[]},{"level":3,"title":"使用ts-node简化ts执行步骤","slug":"使用ts-node简化ts执行步骤","link":"#使用ts-node简化ts执行步骤","children":[]}]},{"level":2,"title":"js原生类型注解","slug":"js原生类型注解","link":"#js原生类型注解","children":[{"level":3,"title":"数组类型的两种特有写法","slug":"数组类型的两种特有写法","link":"#数组类型的两种特有写法","children":[]},{"level":3,"title":"函数形参、返回值的类型、void类型","slug":"函数形参、返回值的类型、void类型","link":"#函数形参、返回值的类型、void类型","children":[]},{"level":3,"title":"函数类型","slug":"函数类型","link":"#函数类型","children":[]},{"level":3,"title":"函数形参的可选参数","slug":"函数形参的可选参数","link":"#函数形参的可选参数","children":[]},{"level":3,"title":"对象类型","slug":"对象类型","link":"#对象类型","children":[]}]},{"level":2,"title":"ts新增类型","slug":"ts新增类型","link":"#ts新增类型","children":[{"level":3,"title":"联合类型","slug":"联合类型","link":"#联合类型","children":[]},{"level":3,"title":"类型别名","slug":"类型别名","link":"#类型别名","children":[]},{"level":3,"title":"接口","slug":"接口","link":"#接口","children":[]},{"level":3,"title":"元组","slug":"元组","link":"#元组","children":[]},{"level":3,"title":"字面量类型","slug":"字面量类型","link":"#字面量类型","children":[]},{"level":3,"title":"枚举类型","slug":"枚举类型","link":"#枚举类型","children":[]},{"level":3,"title":"类型推论","slug":"类型推论","link":"#类型推论","children":[]},{"level":3,"title":"类型断言","slug":"类型断言","link":"#类型断言","children":[]},{"level":3,"title":"any类型","slug":"any类型","link":"#any类型","children":[]},{"level":3,"title":"ts的typeof运算符","slug":"ts的typeof运算符","link":"#ts的typeof运算符","children":[]}]},{"level":2,"title":"ts高级类型","slug":"ts高级类型","link":"#ts高级类型","children":[{"level":3,"title":"class类","slug":"class类","link":"#class类","children":[]},{"level":3,"title":"类-extends继承","slug":"类-extends继承","link":"#类-extends继承","children":[]},{"level":3,"title":"类-implements实现接口","slug":"类-implements实现接口","link":"#类-implements实现接口","children":[]},{"level":3,"title":"类的访问修饰符public protected private","slug":"类的访问修饰符public-protected-private","link":"#类的访问修饰符public-protected-private","children":[]},{"level":3,"title":"readonly只读属性","slug":"readonly只读属性","link":"#readonly只读属性","children":[]},{"level":3,"title":"类型兼容性","slug":"类型兼容性","link":"#类型兼容性","children":[]},{"level":3,"title":"交叉类型","slug":"交叉类型","link":"#交叉类型","children":[]},{"level":3,"title":"交叉类型和继承的区别","slug":"交叉类型和继承的区别","link":"#交叉类型和继承的区别","children":[]},{"level":3,"title":"泛型函数","slug":"泛型函数","link":"#泛型函数","children":[]},{"level":3,"title":"泛型类型收缩","slug":"泛型类型收缩","link":"#泛型类型收缩","children":[]},{"level":3,"title":"多个泛型类型的支持和keyof的使用","slug":"多个泛型类型的支持和keyof的使用","link":"#多个泛型类型的支持和keyof的使用","children":[]},{"level":3,"title":"泛型接口","slug":"泛型接口","link":"#泛型接口","children":[]},{"level":3,"title":"类的泛型","slug":"类的泛型","link":"#类的泛型","children":[]},{"level":3,"title":"泛型工具类型 Partial Readonly Pick Record","slug":"泛型工具类型-partial-readonly-pick-record","link":"#泛型工具类型-partial-readonly-pick-record","children":[]},{"level":3,"title":"索引签名类型","slug":"索引签名类型","link":"#索引签名类型","children":[]},{"level":3,"title":"映射类型","slug":"映射类型","link":"#映射类型","children":[]},{"level":3,"title":"利用映射类型实现Partial","slug":"利用映射类型实现partial","link":"#利用映射类型实现partial","children":[]},{"level":3,"title":"索引查询类型","slug":"索引查询类型","link":"#索引查询类型","children":[]}]},{"level":2,"title":"类型声明文件","slug":"类型声明文件","link":"#类型声明文件","children":[{"level":3,"title":"第三方库的类型声明文件的使用","slug":"第三方库的类型声明文件的使用","link":"#第三方库的类型声明文件的使用","children":[]},{"level":3,"title":"自定义类型声明文件的使用","slug":"自定义类型声明文件的使用","link":"#自定义类型声明文件的使用","children":[]},{"level":3,"title":"给已有js文件编写类型声明文件","slug":"给已有js文件编写类型声明文件","link":"#给已有js文件编写类型声明文件","children":[]}]}],"git":{"createdTime":1700226391000,"updatedTime":1701170875000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":2}]},"readingTime":{"minutes":14.94,"words":4482},"filePathRelative":"前端/typescript学习笔记/typescript学习笔记.md","localizedDate":"2022年12月27日","excerpt":"","autoDesc":true}');export{k as comp,E as data};
