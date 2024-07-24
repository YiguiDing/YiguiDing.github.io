import{_ as c,r as d,c as r,d as v,w as a,b as i,o as t,e as s,a as n}from"./app-B95iU7Vh.js";const u="/assets/%E4%BD%BF%E7%94%A8%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0%E7%AE%80%E6%98%93%E8%A7%A3%E9%87%8A%E5%99%A8-DC6iFKlG.png",m={},b=i('<h1 id="尝试使用递归下降算法实现简易词法分析器和文法分析器以及解释器" tabindex="-1"><a class="header-anchor" href="#尝试使用递归下降算法实现简易词法分析器和文法分析器以及解释器"><span>尝试使用递归下降算法实现简易词法分析器和文法分析器以及解释器</span></a></h1><p><img src="'+u+'" alt=""></p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ul><li><a href="#%E5%B0%9D%E8%AF%95%E4%BD%BF%E7%94%A8%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0%E7%AE%80%E6%98%93%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%99%A8%E5%92%8C%E6%96%87%E6%B3%95%E5%88%86%E6%9E%90%E5%99%A8%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%87%8A%E5%99%A8">尝试使用递归下降算法实现简易词法分析器和文法分析器以及解释器</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E7%BC%98%E7%94%B1">缘由</a></li><li><a href="#%E7%9B%AE%E5%89%8D%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%AD%E6%B3%95">目前支持的语法</a></li><li><a href="#%E5%AE%9E%E7%8E%B0%E6%95%88%E6%9E%9C">实现效果</a><ul><li><a href="#%E8%A7%A3%E9%87%8A%E5%99%A8%E6%B5%8B%E8%AF%95">解释器测试</a></li></ul></li><li><a href="#%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E7%9A%84%E5%AE%9E%E7%8E%B0">词法分析的实现</a></li><li><a href="#%E6%96%87%E6%B3%95%E5%AE%9A%E4%B9%89">文法定义</a></li><li><a href="#%E6%96%87%E6%B3%95%E5%88%86%E6%9E%90%E7%9A%84%E5%AE%9E%E7%8E%B0">文法分析的实现</a></li><li><a href="#%E8%A7%A3%E9%87%8A%E5%99%A8%E7%9A%84%E5%AE%9E%E7%8E%B0">解释器的实现</a></li></ul></li></ul><h2 id="缘由" tabindex="-1"><a class="header-anchor" href="#缘由"><span>缘由</span></a></h2><p>2021年08月的时候，在bilibili上看到过一个讲解如何用700行手写实现一个编译器的<a href="https://www.bilibili.com/video/BV1Kf4y1V783" target="_blank" rel="noopener noreferrer">视频</a>，<br> 源代码在这里，<a href="https://github.com/archeryue/cpc" target="_blank" rel="noopener noreferrer">cpc</a></p><p>当时虽然调侃的评论了一句<code>c--</code>,但其实内心对写出这种东西的人还是感到由衷的钦佩的，</p><p>视频的内容我那时只大概的浏览过一些，当时没有时间仔细去看。</p><p>再那后来不久的时间里，我又看到过另外一个编译器项目，<a href="https://github.com/jamiebuilds/the-super-tiny-compiler" target="_blank" rel="noopener noreferrer"><code>the-super-tiny-compiler</code></a>,</p><p>这个项目仅用几百行的代码用比较贴近真实编译器的流程实现了将某种作者定义的代码翻译成为类似于c语言的代码，</p><p>这个项目的代码我大概看过，并用ts尝试着将它重新实现了一遍，最近，就是上周的时候，我另外尝试着为其实现了一个解释器，使得可以将其生成的抽象语法树翻译执行。</p><p>还有一个项目，<a href="https://github.com/AttackOnMorty/rdp" target="_blank" rel="noopener noreferrer">Recursive Descent Parser</a> 一个递归下降Parser的实现，用的是js实现的。</p><p>这个项目中的代码提供了一种比较完美编程范式，但是在文法的定义部分有些让人感到难以理解，我那时刚看到这个项目的时候，完全看不懂，过于沮丧，放弃了。</p><p>后来还看到过一个项目，名字忘了，大概就是在前端中实现了一个虚拟机，使得可以加载并执行那种语言编写的游戏，</p><p>还有iPhone上的iSH,也是开源项目,32bit虚拟机，解释执行字节码，可以运行Linux。</p><p>还有就是UTM,一款可以在手机上运行的开源的虚拟机，能在平板电脑上运行win7系统。</p><p>总之，这些都是我之前接触过、看过、用过、让我感到Amazing的项目,这些项目或多或少都影响了我，使我产生了也要写一个类似东西的想法。</p><p>然后，最近在学游戏设计模式，其中作者在讲解行为模式的部分时，提到了解释器模式和如何实现一个虚拟机并执行字节码的内容，用于使得玩家可以用另外一种和游戏本身的编程语言无关的语言来二次开发游戏角色的行为。</p><p>这部分内容中作者虽然讲了很多这种解释器模式的缺点和实现虚拟机执行字节码的优点，但却没有提及如何生成字节码，作者只给了一种通过图形界面拖拽生成指令序列的方式来生成字节码，优点自然是对用户友好，但缺点也是显然的，图形化的界面感觉就不如直接编写程序那样能对游戏做到非常精细化的控制。</p><p>总之，但这让我回想起了这之前看到过的上述几个项目，让我突然也想完整的实现一个编译器，编译出字节码，另外再实现一个虚拟机，用来执行字节码。有这个想法后我便抑制不住内心的想要实现它的冲动。</p><p>这几天我重新阅读了上面几个项目的源代码，甚至去读了js的标准文档，去看了它的文法定义，另外还大概看了另一个项目 <a href="https://github.com/gfwilliams/tiny-js" target="_blank" rel="noopener noreferrer">tiny-js</a>,这个项目用大概2000行的代码实现了一款可嵌入至c++程序的js解释器，虽然没有完全看完，但给我的感觉还是挺震撼的，就是太牛了。</p><p>最近几天，终于尝试着把词法分析和文法分析的内容搞懂了，特别是如何定义文法的那部分。</p><p>昨天下午(2023/12/20)五点的时候，感觉已经差不多完整理解了，然后通宵敲了一晚上的代码，一直到今天早上，完整的从头实现了Tokenizer Parser 以及，解释器，支持的语法包括：变量、函数的定义和调用，循环语句，块作用域变量和全局作用域变量，甚至可以注入预定义函数，某种程度上讲，我认为这已经图灵完备了。感觉就像是玩游戏终于通过了某一关 Exciting!</p><h2 id="目前支持的语法" tabindex="-1"><a class="header-anchor" href="#目前支持的语法"><span>目前支持的语法</span></a></h2><ul><li>语句： <ul><li>空语句 <code>;</code></li><li>块语句 <code>{}</code></li><li>if语句 <code>if(){}else{}</code></li><li>where语句 <code>where(){}</code></li><li>标识符定义语句 <ul><li>变量定义 <code>def a=1,b=2,c;</code></li><li>函数定义 <code>def main(def a){};</code></li></ul></li></ul></li><li>表达式： <ul><li>逗号表达式 <code>,</code></li><li>赋值表达式： <ul><li>基本赋值表达式 <code>=</code></li><li>复合赋值表达式 <code>+= -= *= /=</code></li></ul></li><li>逻辑或表达式 <code>||</code></li><li>逻辑与表达试 <code>&amp;&amp;</code></li><li>等值判断表达式 <code>== !=</code></li><li>条件表达式 <code>&lt; &gt; &lt;= &gt;=</code></li><li>加减运算表达式 <code>+ -</code></li><li>乘除取余运算表达式 <code>* / %</code></li><li>括号表达式: <code>(表达式)</code></li><li>标识符表达式 <code>a</code></li><li>函数调用表达式 <code>main(1,2,3);</code></li></ul></li></ul><h2 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果"><span>实现效果</span></a></h2><h3 id="解释器测试" tabindex="-1"><a class="header-anchor" href="#解释器测试"><span>解释器测试</span></a></h3>',27),o=n("code",null,"test/index.ts",-1),h=n("code",null,"output.txt",-1),E=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"import { Interpreater } from '../Interpreater';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { Parser } from '../Parser';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { Tokenizer } from '../Tokenizer';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { regFuncs } from '../functions';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function testForInterpreater(code: string) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let tokenizer = new Tokenizer();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let parser = new Parser();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let interpreater = new Interpreater();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  regFuncs(interpreater);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let tokens = tokenizer.getTokens(code);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let ast = parser.parse(tokens);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log('源代码:');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log(code);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log('解释器执行结果:');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  interpreater.exec(ast);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log('源代码词法分析结果:');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log(tokens);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log('源代码文法分析结果:');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.dir(ast, { depth: null });")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function main() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // 测试解释器")]),s(`
`),n("span",{class:"line"},[n("span",null,"  testForInterpreater(")]),s(`
`),n("span",{class:"line"},[n("span",null,"    `")]),s(`
`),n("span",{class:"line"},[n("span",null,"      def fbnq(def max){")]),s(`
`),n("span",{class:"line"},[n("span",null,"        def a=1,b=1,c;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while(a<max){")]),s(`
`),n("span",{class:"line"},[n("span",null,"          print(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"          c = b;")]),s(`
`),n("span",{class:"line"},[n("span",null,"          b = a + b;")]),s(`
`),n("span",{class:"line"},[n("span",null,"          a = c;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      };")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      def main(){")]),s(`
`),n("span",{class:"line"},[n("span",null,"        fbnq(200); // 输出200以内斐波那契数列")]),s(`
`),n("span",{class:"line"},[n("span",null,"      };")]),s(`
`),n("span",{class:"line"},[n("span",null,"      main();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    `")]),s(`
`),n("span",{class:"line"},[n("span",null,"  );")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"main();")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"源代码:")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      def fbnq(def max){")]),s(`
`),n("span",{class:"line"},[n("span",null,"        def a=1,b=1,c;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        while(a<max){")]),s(`
`),n("span",{class:"line"},[n("span",null,"          print(a);")]),s(`
`),n("span",{class:"line"},[n("span",null,"          c = b;")]),s(`
`),n("span",{class:"line"},[n("span",null,"          b = a + b;")]),s(`
`),n("span",{class:"line"},[n("span",null,"          a = c;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      };")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      def main(){")]),s(`
`),n("span",{class:"line"},[n("span",null,"        fbnq(200); // 输出200以内斐波那契数列")]),s(`
`),n("span",{class:"line"},[n("span",null,"      };")]),s(`
`),n("span",{class:"line"},[n("span",null,"      main();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ")]),s(`
`),n("span",{class:"line"},[n("span",null,"解释器执行结果:")]),s(`
`),n("span",{class:"line"},[n("span",null,"1")]),s(`
`),n("span",{class:"line"},[n("span",null,"1")]),s(`
`),n("span",{class:"line"},[n("span",null,"2")]),s(`
`),n("span",{class:"line"},[n("span",null,"3")]),s(`
`),n("span",{class:"line"},[n("span",null,"5")]),s(`
`),n("span",{class:"line"},[n("span",null,"8")]),s(`
`),n("span",{class:"line"},[n("span",null,"13")]),s(`
`),n("span",{class:"line"},[n("span",null,"21")]),s(`
`),n("span",{class:"line"},[n("span",null,"34")]),s(`
`),n("span",{class:"line"},[n("span",null,"55")]),s(`
`),n("span",{class:"line"},[n("span",null,"89")]),s(`
`),n("span",{class:"line"},[n("span",null,"144")]),s(`
`),n("span",{class:"line"},[n("span",null,"源代码词法分析结果:")]),s(`
`),n("span",{class:"line"},[n("span",null,"[")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'def', value: 'def' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'fbnq' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '(', value: '(' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'def', value: 'def' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'max' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ')', value: ')' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '{', value: '{' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'def', value: 'def' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'a' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'AssignOpSimple', value: '=' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Number', value: '1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ',', value: ',' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'b' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'AssignOpSimple', value: '=' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Number', value: '1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ',', value: ',' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'c' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ';', value: ';' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'while', value: 'while' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '(', value: '(' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'a' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'EqualityOp', value: '<' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'max' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ')', value: ')' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '{', value: '{' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'print' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '(', value: '(' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'a' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ')', value: ')' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ';', value: ';' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'c' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'AssignOpSimple', value: '=' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'b' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ';', value: ';' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'b' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'AssignOpSimple', value: '=' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'a' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'AddOp', value: '+' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'b' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ';', value: ';' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'a' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'AssignOpSimple', value: '=' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'c' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ';', value: ';' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '}', value: '}' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '}', value: '}' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ';', value: ';' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'def', value: 'def' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'main' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '(', value: '(' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ')', value: ')' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '{', value: '{' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'fbnq' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '(', value: '(' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Number', value: '200' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ')', value: ')' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ';', value: ';' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '}', value: '}' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ';', value: ';' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: 'Identifier', value: 'main' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: '(', value: '(' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ')', value: ')' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { type: ';', value: ';' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]")]),s(`
`),n("span",{class:"line"},[n("span",null,"源代码文法分析结果:")]),s(`
`),n("span",{class:"line"},[n("span",null,"{")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: 'Program',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  statements: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'IdentifierDeclarationsStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      declarations: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          type: 'FunctionDeclaration',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          name: 'fbnq',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          FormedArguments: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              type: 'VariableDeclaration',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              name: 'max',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              value: undefined")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"          statements: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            type: 'BlockStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            statements: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"              {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                type: 'IdentifierDeclarationsStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                declarations: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    type: 'VariableDeclaration',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    name: 'a',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    value: { type: 'NumberLiteral', value: '1' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    type: 'VariableDeclaration',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    name: 'b',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    value: { type: 'NumberLiteral', value: '1' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    type: 'VariableDeclaration',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    name: 'c',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    value: undefined")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"              },")]),s(`
`),n("span",{class:"line"},[n("span",null,"              {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                type: 'WhileStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                condition: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  type: 'BineryExpression',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  operator: '<',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  left: { type: 'Identifier', name: 'a' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  right: { type: 'Identifier', name: 'max' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                statement: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  type: 'BlockStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  statements: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      type: 'ExpressionStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      expression: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        type: 'FunctionCall',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        calee: { type: 'Identifier', name: 'print' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        args: [ { type: 'Identifier', name: 'a' } ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      type: 'ExpressionStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      expression: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        type: 'AssignExpression',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        operator: '=',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        left: { type: 'Identifier', name: 'c' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        right: { type: 'Identifier', name: 'b' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      type: 'ExpressionStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      expression: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        type: 'AssignExpression',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        operator: '=',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        left: { type: 'Identifier', name: 'b' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        right: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                          type: 'BineryExpression',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                          operator: '+',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                          left: { type: 'Identifier', name: 'a' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                          right: { type: 'Identifier', name: 'b' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      type: 'ExpressionStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      expression: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        type: 'AssignExpression',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        operator: '=',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        left: { type: 'Identifier', name: 'a' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                        right: { type: 'Identifier', name: 'c' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"              }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"          }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'IdentifierDeclarationsStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      declarations: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          type: 'FunctionDeclaration',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          name: 'main',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          FormedArguments: [],")]),s(`
`),n("span",{class:"line"},[n("span",null,"          statements: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            type: 'BlockStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            statements: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"              {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                type: 'ExpressionStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                expression: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  type: 'FunctionCall',")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  calee: { type: 'Identifier', name: 'fbnq' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"                  args: [ { type: 'NumberLiteral', value: '200' } ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"                }")]),s(`
`),n("span",{class:"line"},[n("span",null,"              }")]),s(`
`),n("span",{class:"line"},[n("span",null,"            ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"          }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'ExpressionStatement',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      expression: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        type: 'FunctionCall',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        calee: { type: 'Identifier', name: 'main' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        args: []")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=i(`<h2 id="词法分析的实现" tabindex="-1"><a class="header-anchor" href="#词法分析的实现"><span>词法分析的实现</span></a></h2><p><code>Tokenizer.ts</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>export type TokenType =</span></span>
<span class="line"><span>  | &#39;Space&#39; //空白符</span></span>
<span class="line"><span>  | &#39;Comment&#39; // 注释</span></span>
<span class="line"><span>  | &#39;;&#39; // 分号</span></span>
<span class="line"><span>  | &#39;if&#39; // if语句</span></span>
<span class="line"><span>  | &#39;else&#39; // else语句</span></span>
<span class="line"><span>  | &#39;while&#39;</span></span>
<span class="line"><span>  | &#39;do&#39;</span></span>
<span class="line"><span>  | &#39;def&#39; // 声明</span></span>
<span class="line"><span>  | &#39;AssignOpSimple&#39; // 简单赋值操作符</span></span>
<span class="line"><span>  | &#39;AssignOpComplex&#39; // 复杂赋值操作符</span></span>
<span class="line"><span>  | &#39;TernaryOp?&#39; // 三目运算符</span></span>
<span class="line"><span>  | &#39;TernaryOp:&#39; // 三目运算符</span></span>
<span class="line"><span>  | &#39;LogicalOr&#39; // 逻辑或运算符</span></span>
<span class="line"><span>  | &#39;LogicalAnd&#39; // 逻辑与运算符</span></span>
<span class="line"><span>  | &#39;EqualityOp&#39; // 等值运算符</span></span>
<span class="line"><span>  | &#39;RelationalOp&#39; // 关系运算符</span></span>
<span class="line"><span>  | &#39;AddOp&#39; // 算数加减运算符</span></span>
<span class="line"><span>  | &#39;MutOp&#39; // 算数乘除取余运算符</span></span>
<span class="line"><span>  | &#39;Number&#39; // 字面量</span></span>
<span class="line"><span>  | &#39;Boolean&#39; // 字面量</span></span>
<span class="line"><span>  | &#39;String&#39; // 字面量</span></span>
<span class="line"><span>  | &#39;null&#39; // 字面量</span></span>
<span class="line"><span>  | &#39;(&#39;</span></span>
<span class="line"><span>  | &#39;)&#39;</span></span>
<span class="line"><span>  | &#39;[&#39;</span></span>
<span class="line"><span>  | &#39;]&#39;</span></span>
<span class="line"><span>  | &#39;{&#39;</span></span>
<span class="line"><span>  | &#39;}&#39;</span></span>
<span class="line"><span>  | &#39;.&#39;</span></span>
<span class="line"><span>  | &#39;,&#39;</span></span>
<span class="line"><span>  | &#39;this&#39;</span></span>
<span class="line"><span>  | &#39;super&#39;</span></span>
<span class="line"><span>  | &#39;Identifier&#39;;</span></span>
<span class="line"><span>export type TokenDef = [TokenType, RegExp];</span></span>
<span class="line"><span>export type Token = { type: TokenType; value: string };</span></span>
<span class="line"><span>export const TokenDefs: Array&lt;TokenDef&gt; = [</span></span>
<span class="line"><span>  [&#39;Space&#39;, /^\\s+/],</span></span>
<span class="line"><span>  [&#39;Comment&#39;, /^\\/\\/[^\\n]*/],</span></span>
<span class="line"><span>  [&#39;Comment&#39;, /^\\/\\*(\\s|.)*?\\*\\//],</span></span>
<span class="line"><span>  [&#39;;&#39;, /^;/],</span></span>
<span class="line"><span>  [&#39;if&#39;, /^\\bif\\b/],</span></span>
<span class="line"><span>  [&#39;else&#39;, /^\\belse\\b/],</span></span>
<span class="line"><span>  [&#39;while&#39;, /^\\bwhile\\b/],</span></span>
<span class="line"><span>  [&#39;do&#39;, /^\\bdo\\b/],</span></span>
<span class="line"><span>  [&#39;def&#39;, /^\\bdef\\b/],</span></span>
<span class="line"><span>  [&#39;EqualityOp&#39;, /^[&gt;&lt;][=]?/],</span></span>
<span class="line"><span>  [&#39;RelationalOp&#39;, /^[=!]=/],</span></span>
<span class="line"><span>  [&#39;AssignOpSimple&#39;, /^=/],</span></span>
<span class="line"><span>  [&#39;AssignOpComplex&#39;, /^[\\+\\-\\*\\/\\%]=/],</span></span>
<span class="line"><span>  [&#39;TernaryOp?&#39;, /^\\?/],</span></span>
<span class="line"><span>  [&#39;TernaryOp:&#39;, /^[:]/],</span></span>
<span class="line"><span>  [&#39;LogicalOr&#39;, /^\\|\\|/],</span></span>
<span class="line"><span>  [&#39;LogicalAnd&#39;, /^&amp;&amp;/],</span></span>
<span class="line"><span>  [&#39;AddOp&#39;, /^[+-]/],</span></span>
<span class="line"><span>  [&#39;MutOp&#39;, /^[\\*\\/\\%]/],</span></span>
<span class="line"><span>  [&#39;Number&#39;, /^\\d+\\.\\d+/], // 0.123</span></span>
<span class="line"><span>  [&#39;Number&#39;, /^\\d+/], // 123</span></span>
<span class="line"><span>  [&#39;Boolean&#39;, /^\\btrue\\b/],</span></span>
<span class="line"><span>  [&#39;Boolean&#39;, /^\\bfalse\\b/],</span></span>
<span class="line"><span>  [&#39;null&#39;, /^\\bnull\\b/],</span></span>
<span class="line"><span>  [&#39;String&#39;, /^\\&#39;[^\\&#39;]*\\&#39;/],</span></span>
<span class="line"><span>  [&#39;String&#39;, /^\\&quot;[^\\&quot;]*\\&quot;/],</span></span>
<span class="line"><span>  [&#39;(&#39;, /^\\(/],</span></span>
<span class="line"><span>  [&#39;)&#39;, /^\\)/],</span></span>
<span class="line"><span>  [&#39;[&#39;, /^\\[/],</span></span>
<span class="line"><span>  [&#39;]&#39;, /^\\]/],</span></span>
<span class="line"><span>  [&#39;{&#39;, /^\\{/],</span></span>
<span class="line"><span>  [&#39;}&#39;, /^\\}/],</span></span>
<span class="line"><span>  [&#39;.&#39;, /^\\./],</span></span>
<span class="line"><span>  [&#39;,&#39;, /^\\,/],</span></span>
<span class="line"><span>  [&#39;this&#39;, /^\\bthis\\b/],</span></span>
<span class="line"><span>  [&#39;super&#39;, /^\\bsuper\\b/],</span></span>
<span class="line"><span>  [&#39;Identifier&#39;, /^\\w+/],</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>export class Tokenizer {</span></span>
<span class="line"><span>  idx!: number;</span></span>
<span class="line"><span>  code!: string;</span></span>
<span class="line"><span>  tokens!: Array&lt;Token&gt;;</span></span>
<span class="line"><span>  init(code: string) {</span></span>
<span class="line"><span>    this.idx = 0;</span></span>
<span class="line"><span>    this.code = code;</span></span>
<span class="line"><span>    this.tokens = [];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  getTokens(code: string) {</span></span>
<span class="line"><span>    this.init(code);</span></span>
<span class="line"><span>    while (this.hasMore()) {</span></span>
<span class="line"><span>      let token = this.getNextToken();</span></span>
<span class="line"><span>      if (token.type == &#39;Space&#39;) continue;</span></span>
<span class="line"><span>      if (token.type == &#39;Comment&#39;) continue;</span></span>
<span class="line"><span>      this.tokens.push(token);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return this.tokens;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  private hasMore() {</span></span>
<span class="line"><span>    return this.idx &lt; this.code.length;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  private getNextToken(): Token {</span></span>
<span class="line"><span>    if (!this.hasMore()) throw new SyntaxError(&#39;no more token.&#39;);</span></span>
<span class="line"><span>    const rest = this.code.slice(this.idx);</span></span>
<span class="line"><span>    for (const [tokenType, reg] of TokenDefs) {</span></span>
<span class="line"><span>      let tokenValue = this.match(reg, rest);</span></span>
<span class="line"><span>      if (tokenValue == null) continue;</span></span>
<span class="line"><span>      else return { type: tokenType, value: tokenValue };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    throw new SyntaxError(\`unknow token: \${rest[0]}\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  private match(reg: RegExp, str: string) {</span></span>
<span class="line"><span>    let matchs = reg.exec(str);</span></span>
<span class="line"><span>    if (matchs == null) return null; // 没有匹配到</span></span>
<span class="line"><span>    let matched = matchs[0]; // 匹配到了</span></span>
<span class="line"><span>    this.idx += matched.length; // 移动指针</span></span>
<span class="line"><span>    return matched;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文法定义" tabindex="-1"><a class="header-anchor" href="#文法定义"><span>文法定义</span></a></h2><p><code>ast.ts</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { TokenType } from &#39;./Tokenizer&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Program</span></span>
<span class="line"><span> * : Statements</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface Program extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;Program&#39;;</span></span>
<span class="line"><span>  statements: Statements;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Statements</span></span>
<span class="line"><span> * : Statement</span></span>
<span class="line"><span> * | Statements Statement</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type Statements = Array&lt;Statement&gt;;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 语句</span></span>
<span class="line"><span> * Statement</span></span>
<span class="line"><span> * : EmptyStatement</span></span>
<span class="line"><span> * | IdentifierDeclarationsStatement</span></span>
<span class="line"><span> * | ExpressionStatement</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type Statement =</span></span>
<span class="line"><span>  | EmptyStatement</span></span>
<span class="line"><span>  | BlockStatement</span></span>
<span class="line"><span>  | IfStatement</span></span>
<span class="line"><span>  | WhileStatement</span></span>
<span class="line"><span>  | IdentifierDeclarationsStatement</span></span>
<span class="line"><span>  | ExpressionStatement;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 空语句</span></span>
<span class="line"><span> * EmptyStatement</span></span>
<span class="line"><span> * : &#39;;&#39;</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface EmptyStatement extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;EmptyStatement&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 代码块</span></span>
<span class="line"><span> * BlockStatement</span></span>
<span class="line"><span> * | &#39;{&#39; Statements &#39;}&#39;</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface BlockStatement extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;BlockStatement&#39;;</span></span>
<span class="line"><span>  statements: Statements;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * if语句：</span></span>
<span class="line"><span> * IfStatement</span></span>
<span class="line"><span> * : if(Expression) [空语句,块语句]</span></span>
<span class="line"><span> * | IfStatement [&#39;else&#39; [空语句,块语句,if语句]]*</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * 简化</span></span>
<span class="line"><span> * 由于 \`Statement:=空语句|块语句|if语句|...;\` 所以可以直接简化：</span></span>
<span class="line"><span> * IfStatement</span></span>
<span class="line"><span> * : if(Expression) Statement</span></span>
<span class="line"><span> * | IfStatement [else Statement]?</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface IfStatement extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;IfStatement&#39;;</span></span>
<span class="line"><span>  condition: Expression;</span></span>
<span class="line"><span>  case1: Statement;</span></span>
<span class="line"><span>  case2?: Statement;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * WhileStatement</span></span>
<span class="line"><span> * : while(表达式) 空语句|单语句|块语句|....</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * 简化</span></span>
<span class="line"><span> * WhileStatement</span></span>
<span class="line"><span> * : while(表达式) 语句</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface WhileStatement extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;WhileStatement&#39;;</span></span>
<span class="line"><span>  condition: Expression;</span></span>
<span class="line"><span>  statement: Statement;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 标识符声明语句可以用来声明多个变量或函数</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * 标识符声明语句</span></span>
<span class="line"><span> * | &#39;def&#39; [变量或函数声明]+ &#39;;&#39;</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface IdentifierDeclarationsStatement extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;IdentifierDeclarationsStatement&#39;;</span></span>
<span class="line"><span>  declarations: Array&lt;VariableOrFunctionDeclaration&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 变量或函数声明，</span></span>
<span class="line"><span> * 函数声明的写法是 ：标识符 + [(]</span></span>
<span class="line"><span> * 变量声明的写法是 ：标识符 + [= 表达式]?</span></span>
<span class="line"><span> * 区别就在于有没有括号</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * 变量或函数声明:</span></span>
<span class="line"><span> * | 函数声明</span></span>
<span class="line"><span> * : 变量声明</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type VariableOrFunctionDeclaration =</span></span>
<span class="line"><span>  | VariableDeclaration</span></span>
<span class="line"><span>  | FunctionDeclaration;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 变量声明由一个标识符和一个可选的初始化语句组成，初始化语句由&#39;=&#39;符号开头。</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * 变量声明</span></span>
<span class="line"><span> * : 标识符 [&#39;=&#39; 逻辑或表达式]?</span></span>
<span class="line"><span> * : 标识符 变量声明初始化?</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface VariableDeclaration extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;VariableDeclaration&#39;;</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  value?: VariableDeclarationInit;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 变量声明初始化</span></span>
<span class="line"><span> * : [&#39;=&#39; 逻辑或表达式]?</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type VariableDeclarationInit = LogicalOrExpression | undefined;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 函数声明</span></span>
<span class="line"><span> * : 标识符 函数形式参数列表 块语句组成</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * FunctionDeclaration</span></span>
<span class="line"><span> * | Identifier FormedArguments  BlockStatement</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface FunctionDeclaration extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;FunctionDeclaration&#39;;</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  FormedArguments: FormedArguments;</span></span>
<span class="line"><span>  statements: BlockStatement;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 函数形式参数列表</span></span>
<span class="line"><span> * : (   [    [def 变量或函数声明]    [,def 变量或函数声明]*    ]*    )</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * FormedArguments</span></span>
<span class="line"><span> * : (   [    [def VariableOrFunctionDeclaration]    [,def VariableOrFunctionDeclaration]*    ]*    )</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type FormedArguments = Array&lt;VariableOrFunctionDeclaration&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 表达式语句</span></span>
<span class="line"><span> * ExpressionStatement</span></span>
<span class="line"><span> * : Expression &#39;;&#39;</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface ExpressionStatement extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;ExpressionStatement&#39;;</span></span>
<span class="line"><span>  expression: Expression;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 表达式</span></span>
<span class="line"><span> * Expression</span></span>
<span class="line"><span> * : CommaExpression</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type Expression = CommaExpression;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 逗号表达式</span></span>
<span class="line"><span> * CommaExpression</span></span>
<span class="line"><span> * | AssignExpression [CommaOp AssignExpression]*</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type CommaExpression = AssignExpression | _CommaExpression;</span></span>
<span class="line"><span>export interface _CommaExpression extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;CommaExpression&#39;;</span></span>
<span class="line"><span>  expressions: Array&lt;AssignExpression&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 赋值表达式</span></span>
<span class="line"><span> * AssignExpression</span></span>
<span class="line"><span> * : TernaryExpression</span></span>
<span class="line"><span> * | MumberAccessExpression [AssignOp AssignExpression]*</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type AssignExpression = TernaryExpression | _AssignExpression;</span></span>
<span class="line"><span>export interface _AssignExpression extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;AssignExpression&#39;;</span></span>
<span class="line"><span>  operator: string;</span></span>
<span class="line"><span>  left: MumberAccessExpression | Identifier;</span></span>
<span class="line"><span>  right: AssignExpression;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 三目表达式</span></span>
<span class="line"><span> * TernaryExpression</span></span>
<span class="line"><span> * : LogicalOrExpression [? TernaryExpression : TernaryExpression]</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type TernaryExpression = LogicalOrExpression | _TernaryExpression;</span></span>
<span class="line"><span>export interface _TernaryExpression extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;TernaryExpression&#39;;</span></span>
<span class="line"><span>  condition: LogicalOrExpression;</span></span>
<span class="line"><span>  case1: TernaryExpression;</span></span>
<span class="line"><span>  case2: TernaryExpression;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 双目运算表达式</span></span>
<span class="line"><span> * BineryExpression&lt;Child,OpType&gt;</span></span>
<span class="line"><span> * | Child OpType Child</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface BineryExpression&lt;Child, OpType extends TokenType&gt;</span></span>
<span class="line"><span>  extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;BineryExpression&#39;;</span></span>
<span class="line"><span>  operatorType: Extract&lt;TokenType, OpType&gt;;</span></span>
<span class="line"><span>  operator: string;</span></span>
<span class="line"><span>  left: Child;</span></span>
<span class="line"><span>  right: Child;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 逻辑或表达式</span></span>
<span class="line"><span> * LogicalOrExpression</span></span>
<span class="line"><span> * : LogicalAndExpression [LogicalOr LogicalAndExpression]*</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type LogicalOrExpression =</span></span>
<span class="line"><span>  | LogicalAndExpression</span></span>
<span class="line"><span>  | BineryExpression&lt;LogicalAndExpression, &#39;LogicalOr&#39;&gt;;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 逻辑或表达式</span></span>
<span class="line"><span> * LogicalAndExpression</span></span>
<span class="line"><span> * : EqualityExpression [LogicalAnd EqualityExpression]*</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type LogicalAndExpression =</span></span>
<span class="line"><span>  | EqualityExpression</span></span>
<span class="line"><span>  | BineryExpression&lt;EqualityExpression, &#39;LogicalAnd&#39;&gt;;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 等值表达式</span></span>
<span class="line"><span> * EqualityExpression</span></span>
<span class="line"><span> * : RelationalExpression [EqualityOp RelationalExpression]*</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type EqualityExpression =</span></span>
<span class="line"><span>  | RelationalExpression</span></span>
<span class="line"><span>  | BineryExpression&lt;RelationalExpression, &#39;EqualityOp&#39;&gt;;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 关系表达式</span></span>
<span class="line"><span> * EqualityExpression</span></span>
<span class="line"><span> * : AdditiveExpression [RelationalOp AdditiveExpression]*</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type RelationalExpression =</span></span>
<span class="line"><span>  | AdditiveExpression</span></span>
<span class="line"><span>  | BineryExpression&lt;AdditiveExpression, &#39;RelationalOp&#39;&gt;;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 加减表达式</span></span>
<span class="line"><span> * AdditiveExpression</span></span>
<span class="line"><span> * : MultiplicativeExpression</span></span>
<span class="line"><span> * | AdditiveExpression AddOp MultiplicativeExpression</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type AdditiveExpression =</span></span>
<span class="line"><span>  | MultiplicativeExpression</span></span>
<span class="line"><span>  | BineryExpression&lt;MultiplicativeExpression, &#39;AddOp&#39;&gt;;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 乘除取余表达式</span></span>
<span class="line"><span> * MultiplicativeExpression</span></span>
<span class="line"><span> * : PrimaryExpression</span></span>
<span class="line"><span> * | PrimaryExpression MutOp PrimaryExpression</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type MultiplicativeExpression =</span></span>
<span class="line"><span>  | PrimaryExpression</span></span>
<span class="line"><span>  | BineryExpression&lt;PrimaryExpression, &#39;MutOp&#39;&gt;;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 成员属性访问表达式和函数调用都以标识符开头，这是字面量所没有的特征</span></span>
<span class="line"><span> * 所以在主表达式中可以根据该特征来做区分</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * PrimaryExpression</span></span>
<span class="line"><span> * : MumberAccessExpressionOrFunctionCallExpression</span></span>
<span class="line"><span> * | BracketedExpression</span></span>
<span class="line"><span> * | Literal</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type PrimaryExpression =</span></span>
<span class="line"><span>  | MumberAccessExpressionOrFunctionCallExpression</span></span>
<span class="line"><span>  | BracketedExpression</span></span>
<span class="line"><span>  | Literal;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 成员属性访问表达式和函数调用的区分就在于后续有没有括号</span></span>
<span class="line"><span> * 所以可以先假设这里是一个成员属性访问表达式，如果后面接着一个括号，则假设错误，说明这里是一个函数调用</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * MumberAccessExpressionOrFunctionCallExpression</span></span>
<span class="line"><span> * : MumberAccessExpression</span></span>
<span class="line"><span> * | FunctionCall</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type MumberAccessExpressionOrFunctionCallExpression =</span></span>
<span class="line"><span>  | MumberAccessExpression</span></span>
<span class="line"><span>  | FunctionCall;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 成员属性访问表达式</span></span>
<span class="line"><span> * 把this,super,标识符,都归到这类，因为他们都有相同的特征</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * MumberAccessExpression</span></span>
<span class="line"><span> * : This</span></span>
<span class="line"><span> * | Super</span></span>
<span class="line"><span> * | Identifier</span></span>
<span class="line"><span> * | MumberAccessExpression &#39;.&#39; Identifier</span></span>
<span class="line"><span> * | MumberAccessExpression &#39;[&#39; Expression &#39;]&#39;</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type MumberAccessExpression =</span></span>
<span class="line"><span>  | This</span></span>
<span class="line"><span>  | Super</span></span>
<span class="line"><span>  | Identifier</span></span>
<span class="line"><span>  | _MumberAccessExpression;</span></span>
<span class="line"><span>export interface _MumberAccessExpression extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;MumberAccessExpression&#39;;</span></span>
<span class="line"><span>  object: MumberAccessExpression;</span></span>
<span class="line"><span>  property: Identifier | Expression;</span></span>
<span class="line"><span>  isIndex: boolean;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * FunctionCall</span></span>
<span class="line"><span> * : Calee Arguments</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface FunctionCall extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;FunctionCall&#39;;</span></span>
<span class="line"><span>  calee: Calee;</span></span>
<span class="line"><span>  args: Arguments;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Calee</span></span>
<span class="line"><span> * : MumberAccessExpression</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type Calee = MumberAccessExpression;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Arguments</span></span>
<span class="line"><span> * : &#39;(&#39; AssignExpression &#39;)&#39;</span></span>
<span class="line"><span> * | &#39;(&#39; &#39;)&#39;</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type Arguments = Array&lt;AssignExpression&gt;;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * This</span></span>
<span class="line"><span> * : &#39;this&#39;</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface This extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;this&#39;;</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Super</span></span>
<span class="line"><span> * : &#39;super&#39;</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface Super extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;super&#39;;</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Identifier</span></span>
<span class="line"><span> * : [\\w]+</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface Identifier extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;Identifier&#39;;</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 括号表达式</span></span>
<span class="line"><span> * BracketedExpression</span></span>
<span class="line"><span> * : &#39;(&#39; Expression &#39;)&#39;</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> * 这里原本可以直接写 BracketedExpression = Expression; 但是这会导致类型循环定义。</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface BracketedExpression extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;BracketedExpression&#39;;</span></span>
<span class="line"><span>  expression: Expression;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Literal</span></span>
<span class="line"><span> * : NumberLiteral</span></span>
<span class="line"><span> * | BooleanLiteral</span></span>
<span class="line"><span> * | StringLiteral</span></span>
<span class="line"><span> * | NullLiteral</span></span>
<span class="line"><span> * ;</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export type Literal =</span></span>
<span class="line"><span>  | NumberLiteral</span></span>
<span class="line"><span>  | BooleanLiteral</span></span>
<span class="line"><span>  | StringLiteral</span></span>
<span class="line"><span>  | NullLiteral;</span></span>
<span class="line"><span>export interface NumberLiteral extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;NumberLiteral&#39;;</span></span>
<span class="line"><span>  value: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export interface BooleanLiteral extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;BooleanLiteral&#39;;</span></span>
<span class="line"><span>  value: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export interface StringLiteral extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;StringLiteral&#39;;</span></span>
<span class="line"><span>  value: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export interface NullLiteral extends AST_BASE_NODE {</span></span>
<span class="line"><span>  type: &#39;NullLiteral&#39;;</span></span>
<span class="line"><span>  value: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export type AST_NODE_TYPE =</span></span>
<span class="line"><span>  | &#39;Program&#39;</span></span>
<span class="line"><span>  | &#39;Statement&#39;</span></span>
<span class="line"><span>  | &#39;EmptyStatement&#39;</span></span>
<span class="line"><span>  | &#39;BlockStatement&#39;</span></span>
<span class="line"><span>  | &#39;IfStatement&#39;</span></span>
<span class="line"><span>  | &#39;WhileStatement&#39;</span></span>
<span class="line"><span>  | &#39;IdentifierDeclarationsStatement&#39;</span></span>
<span class="line"><span>  | &#39;VariableDeclaration&#39;</span></span>
<span class="line"><span>  | &#39;FunctionDeclaration&#39;</span></span>
<span class="line"><span>  | &#39;ExpressionStatement&#39;</span></span>
<span class="line"><span>  | &#39;AssignExpression&#39;</span></span>
<span class="line"><span>  | &#39;CommaExpression&#39;</span></span>
<span class="line"><span>  | &#39;TernaryExpression&#39;</span></span>
<span class="line"><span>  | &#39;BineryExpression&#39;</span></span>
<span class="line"><span>  | &#39;MumberAccessExpression&#39;</span></span>
<span class="line"><span>  | &#39;this&#39;</span></span>
<span class="line"><span>  | &#39;super&#39;</span></span>
<span class="line"><span>  | &#39;Identifier&#39;</span></span>
<span class="line"><span>  | &#39;FunctionCall&#39;</span></span>
<span class="line"><span>  | &#39;NumberLiteral&#39;</span></span>
<span class="line"><span>  | &#39;BooleanLiteral&#39;</span></span>
<span class="line"><span>  | &#39;StringLiteral&#39;</span></span>
<span class="line"><span>  | &#39;NullLiteral&#39;</span></span>
<span class="line"><span>  | &#39;BracketedExpression&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export type AST_NODE =</span></span>
<span class="line"><span>  | Program</span></span>
<span class="line"><span>  | Statement</span></span>
<span class="line"><span>  | EmptyStatement</span></span>
<span class="line"><span>  | BlockStatement</span></span>
<span class="line"><span>  | IfStatement</span></span>
<span class="line"><span>  | WhileStatement</span></span>
<span class="line"><span>  | IdentifierDeclarationsStatement</span></span>
<span class="line"><span>  | VariableDeclaration</span></span>
<span class="line"><span>  | FunctionDeclaration</span></span>
<span class="line"><span>  | ExpressionStatement</span></span>
<span class="line"><span>  | Expression /* Expression中以递归下降的方式定义了其他所有表达式 */;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export interface AST_BASE_NODE {</span></span>
<span class="line"><span>  type: AST_NODE_TYPE;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文法分析的实现" tabindex="-1"><a class="header-anchor" href="#文法分析的实现"><span>文法分析的实现</span></a></h2><p><code>Parser.ts</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { TokenType, Token } from &#39;./Tokenizer&#39;;</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>  Program,</span></span>
<span class="line"><span>  Statements,</span></span>
<span class="line"><span>  Statement,</span></span>
<span class="line"><span>  EmptyStatement,</span></span>
<span class="line"><span>  BlockStatement,</span></span>
<span class="line"><span>  IfStatement,</span></span>
<span class="line"><span>  WhileStatement,</span></span>
<span class="line"><span>  ExpressionStatement,</span></span>
<span class="line"><span>  IdentifierDeclarationsStatement,</span></span>
<span class="line"><span>  VariableOrFunctionDeclaration,</span></span>
<span class="line"><span>  VariableDeclaration,</span></span>
<span class="line"><span>  VariableDeclarationInit,</span></span>
<span class="line"><span>  FunctionDeclaration,</span></span>
<span class="line"><span>  FormedArguments,</span></span>
<span class="line"><span>  Expression,</span></span>
<span class="line"><span>  CommaExpression,</span></span>
<span class="line"><span>  AssignExpression,</span></span>
<span class="line"><span>  TernaryExpression,</span></span>
<span class="line"><span>  LogicalOrExpression,</span></span>
<span class="line"><span>  LogicalAndExpression,</span></span>
<span class="line"><span>  EqualityExpression,</span></span>
<span class="line"><span>  RelationalExpression,</span></span>
<span class="line"><span>  AdditiveExpression,</span></span>
<span class="line"><span>  MultiplicativeExpression,</span></span>
<span class="line"><span>  PrimaryExpression,</span></span>
<span class="line"><span>  MumberAccessExpressionOrFunctionCallExpression,</span></span>
<span class="line"><span>  MumberAccessExpression,</span></span>
<span class="line"><span>  Identifier,</span></span>
<span class="line"><span>  This,</span></span>
<span class="line"><span>  Super,</span></span>
<span class="line"><span>  Arguments,</span></span>
<span class="line"><span>  BracketedExpression,</span></span>
<span class="line"><span>  Literal,</span></span>
<span class="line"><span>  NumberLiteral,</span></span>
<span class="line"><span>  BooleanLiteral,</span></span>
<span class="line"><span>  StringLiteral,</span></span>
<span class="line"><span>  NullLiteral,</span></span>
<span class="line"><span>  BineryExpression,</span></span>
<span class="line"><span>} from &#39;./ast&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export class Parser {</span></span>
<span class="line"><span>  curToken!: Token | null;</span></span>
<span class="line"><span>  tk_idx = 0;</span></span>
<span class="line"><span>  tokens!: Token[];</span></span>
<span class="line"><span>  parse(tokens: Token[]) {</span></span>
<span class="line"><span>    this.tokens = tokens;</span></span>
<span class="line"><span>    this.curToken = this.tokens[(this.tk_idx = 0)];</span></span>
<span class="line"><span>    return this.Program();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Program(): Program {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;Program&#39;,</span></span>
<span class="line"><span>      statements: this.Statements(),</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Statements(stopAt?: TokenType): Statements {</span></span>
<span class="line"><span>    let statements = [this.Statement()];</span></span>
<span class="line"><span>    while (this.curToken != null &amp;&amp; this.curToken?.type != stopAt) {</span></span>
<span class="line"><span>      statements.push(this.Statement());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return statements;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Statement(): Statement {</span></span>
<span class="line"><span>    switch (this.curToken?.type) {</span></span>
<span class="line"><span>      case &#39;;&#39;:</span></span>
<span class="line"><span>        return this.EmptyStatement();</span></span>
<span class="line"><span>      case &#39;{&#39;:</span></span>
<span class="line"><span>        return this.BlockStatement();</span></span>
<span class="line"><span>      case &#39;if&#39;:</span></span>
<span class="line"><span>        return this.IfStatement();</span></span>
<span class="line"><span>      case &#39;while&#39;:</span></span>
<span class="line"><span>        return this.WhileStatement();</span></span>
<span class="line"><span>      case &#39;def&#39;:</span></span>
<span class="line"><span>        return this.IdentifierDeclarationsStatement();</span></span>
<span class="line"><span>      default:</span></span>
<span class="line"><span>        return this.ExpressionStatement();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  EmptyStatement(): EmptyStatement {</span></span>
<span class="line"><span>    this.eat(&#39;;&#39;);</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;EmptyStatement&#39;,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  BlockStatement(): BlockStatement {</span></span>
<span class="line"><span>    this.eat(&#39;{&#39;);</span></span>
<span class="line"><span>    let statements = this.curToken?.type != &#39;}&#39; ? this.Statements(&#39;}&#39;) : [];</span></span>
<span class="line"><span>    this.eat(&#39;}&#39;);</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;BlockStatement&#39;,</span></span>
<span class="line"><span>      statements,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  IfStatement(): IfStatement {</span></span>
<span class="line"><span>    this.eat(&#39;if&#39;);</span></span>
<span class="line"><span>    this.eat(&#39;(&#39;);</span></span>
<span class="line"><span>    let condition = this.Expression();</span></span>
<span class="line"><span>    this.eat(&#39;)&#39;);</span></span>
<span class="line"><span>    let case1 = this.Statement();</span></span>
<span class="line"><span>    let case2: Statement | undefined;</span></span>
<span class="line"><span>    if (this.curToken?.type == &#39;else&#39;) {</span></span>
<span class="line"><span>      this.eat(&#39;else&#39;);</span></span>
<span class="line"><span>      case2 = this.Statement();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;IfStatement&#39;,</span></span>
<span class="line"><span>      condition,</span></span>
<span class="line"><span>      case1,</span></span>
<span class="line"><span>      case2,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  WhileStatement(): WhileStatement {</span></span>
<span class="line"><span>    this.eat(&#39;while&#39;);</span></span>
<span class="line"><span>    this.eat(&#39;(&#39;);</span></span>
<span class="line"><span>    let condition = this.Expression();</span></span>
<span class="line"><span>    this.eat(&#39;)&#39;);</span></span>
<span class="line"><span>    let statement = this.Statement();</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;WhileStatement&#39;,</span></span>
<span class="line"><span>      condition,</span></span>
<span class="line"><span>      statement,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ExpressionStatement(): ExpressionStatement {</span></span>
<span class="line"><span>    let expression = this.Expression();</span></span>
<span class="line"><span>    this.eat(&#39;;&#39;);</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;ExpressionStatement&#39;,</span></span>
<span class="line"><span>      expression,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  IdentifierDeclarationsStatement(): IdentifierDeclarationsStatement {</span></span>
<span class="line"><span>    this.eat(&#39;def&#39;);</span></span>
<span class="line"><span>    let declarations = [this.VariableOrFunctionDeclaration()];</span></span>
<span class="line"><span>    while (this.curToken?.type == &#39;,&#39;) {</span></span>
<span class="line"><span>      this.eat(&#39;,&#39;);</span></span>
<span class="line"><span>      declarations.push(this.VariableOrFunctionDeclaration());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    this.eat(&#39;;&#39;);</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;IdentifierDeclarationsStatement&#39;,</span></span>
<span class="line"><span>      declarations,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  VariableOrFunctionDeclaration(): VariableOrFunctionDeclaration {</span></span>
<span class="line"><span>    let identifier = this.eat(&#39;Identifier&#39;).value;</span></span>
<span class="line"><span>    switch (this.curToken?.type) {</span></span>
<span class="line"><span>      case &#39;(&#39;:</span></span>
<span class="line"><span>        return this.FunctionDeclaration(identifier);</span></span>
<span class="line"><span>      default:</span></span>
<span class="line"><span>        return this.VariableDeclaration(identifier);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  VariableDeclaration(variableName: string): VariableDeclaration {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;VariableDeclaration&#39;,</span></span>
<span class="line"><span>      name: variableName,</span></span>
<span class="line"><span>      value: this.VariableDeclarationInit(),</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  VariableDeclarationInit(): VariableDeclarationInit {</span></span>
<span class="line"><span>    if (this.curToken?.type == &#39;AssignOpSimple&#39;) {</span></span>
<span class="line"><span>      this.eat(&#39;AssignOpSimple&#39;);</span></span>
<span class="line"><span>      return this.LogicalOrExpression();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return undefined;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  FunctionDeclaration(functionName: string): FunctionDeclaration {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;FunctionDeclaration&#39;,</span></span>
<span class="line"><span>      name: functionName,</span></span>
<span class="line"><span>      FormedArguments: this.FormedArguments(),</span></span>
<span class="line"><span>      statements: this.BlockStatement(),</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  FormedArguments(): FormedArguments {</span></span>
<span class="line"><span>    this.eat(&#39;(&#39;);</span></span>
<span class="line"><span>    let args: VariableOrFunctionDeclaration[] = [];</span></span>
<span class="line"><span>    while (this.curToken?.type == &#39;def&#39;) {</span></span>
<span class="line"><span>      this.eat(&#39;def&#39;);</span></span>
<span class="line"><span>      args.push(this.VariableOrFunctionDeclaration());</span></span>
<span class="line"><span>      // @ts-ignore</span></span>
<span class="line"><span>      if (this.curToken.type == &#39;,&#39;) this.eat(&#39;,&#39;);</span></span>
<span class="line"><span>      else break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    this.eat(&#39;)&#39;);</span></span>
<span class="line"><span>    return args;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Expression(): Expression {</span></span>
<span class="line"><span>    return this.CommaExpression();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  CommaExpression(): CommaExpression {</span></span>
<span class="line"><span>    let exp = this.AssignExpression();</span></span>
<span class="line"><span>    if (this.curToken?.type == &#39;,&#39;) {</span></span>
<span class="line"><span>      let exps = [exp];</span></span>
<span class="line"><span>      while (this.curToken?.type == &#39;,&#39;) {</span></span>
<span class="line"><span>        this.eat(&#39;,&#39;);</span></span>
<span class="line"><span>        exps.push(this.AssignExpression());</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        type: &#39;CommaExpression&#39;,</span></span>
<span class="line"><span>        expressions: exps,</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return exp;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  AssignExpression(): AssignExpression {</span></span>
<span class="line"><span>    let left: AssignExpression = this.TernaryExpression();</span></span>
<span class="line"><span>    while (</span></span>
<span class="line"><span>      (left.type == &#39;MumberAccessExpression&#39; || left.type == &#39;Identifier&#39;) &amp;&amp;</span></span>
<span class="line"><span>      (this.curToken?.type == &#39;AssignOpSimple&#39; ||</span></span>
<span class="line"><span>        this.curToken?.type == &#39;AssignOpComplex&#39;)</span></span>
<span class="line"><span>    ) {</span></span>
<span class="line"><span>      let operator = this.eat(this.curToken.type).value;</span></span>
<span class="line"><span>      let right = this.AssignExpression();</span></span>
<span class="line"><span>      left = {</span></span>
<span class="line"><span>        type: &#39;AssignExpression&#39;,</span></span>
<span class="line"><span>        operator,</span></span>
<span class="line"><span>        left,</span></span>
<span class="line"><span>        right,</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return left;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  TernaryExpression(): TernaryExpression {</span></span>
<span class="line"><span>    let condition: TernaryExpression = this.LogicalOrExpression();</span></span>
<span class="line"><span>    if (this.curToken?.type == &#39;TernaryOp?&#39;) {</span></span>
<span class="line"><span>      this.eat(&#39;TernaryOp?&#39;);</span></span>
<span class="line"><span>      let case1 = this.TernaryExpression();</span></span>
<span class="line"><span>      this.eat(&#39;TernaryOp:&#39;);</span></span>
<span class="line"><span>      let case2 = this.TernaryExpression();</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        type: &#39;TernaryExpression&#39;,</span></span>
<span class="line"><span>        condition,</span></span>
<span class="line"><span>        case1,</span></span>
<span class="line"><span>        case2,</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return condition;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  LogicalOrExpression(): LogicalOrExpression {</span></span>
<span class="line"><span>    return this.BineryExpression(this.LogicalAndExpression, &#39;LogicalOr&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  LogicalAndExpression(): LogicalAndExpression {</span></span>
<span class="line"><span>    return this.BineryExpression(this.EqualityExpression, &#39;LogicalAnd&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  EqualityExpression(): EqualityExpression {</span></span>
<span class="line"><span>    return this.BineryExpression(this.RelationalExpression, &#39;EqualityOp&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  RelationalExpression(): RelationalExpression {</span></span>
<span class="line"><span>    return this.BineryExpression(this.AdditiveExpression, &#39;RelationalOp&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  AdditiveExpression(): AdditiveExpression {</span></span>
<span class="line"><span>    return this.BineryExpression(this.MultiplicativeExpression, &#39;AddOp&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  MultiplicativeExpression(): MultiplicativeExpression {</span></span>
<span class="line"><span>    return this.BineryExpression(this.PrimaryExpression, &#39;MutOp&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  PrimaryExpression(): PrimaryExpression {</span></span>
<span class="line"><span>    switch (this.curToken?.type) {</span></span>
<span class="line"><span>      case &#39;Identifier&#39;:</span></span>
<span class="line"><span>      case &#39;this&#39;:</span></span>
<span class="line"><span>      case &#39;super&#39;:</span></span>
<span class="line"><span>        return this.MumberAccessExpressionOrFunctionCallExpression();</span></span>
<span class="line"><span>      case &#39;(&#39;:</span></span>
<span class="line"><span>        return this.BracketedExpression();</span></span>
<span class="line"><span>      default:</span></span>
<span class="line"><span>        return this.Literal();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  MumberAccessExpressionOrFunctionCallExpression(): MumberAccessExpressionOrFunctionCallExpression {</span></span>
<span class="line"><span>    let mumberExp = this.MumberAccessExpression();</span></span>
<span class="line"><span>    if (this.curToken?.type == &#39;(&#39;) {</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        type: &#39;FunctionCall&#39;,</span></span>
<span class="line"><span>        calee: mumberExp,</span></span>
<span class="line"><span>        args: this.Arguments(),</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return mumberExp;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  MumberAccessExpression(): MumberAccessExpression {</span></span>
<span class="line"><span>    let object!: MumberAccessExpression;</span></span>
<span class="line"><span>    switch (this.curToken?.type) {</span></span>
<span class="line"><span>      case &#39;this&#39;:</span></span>
<span class="line"><span>        object = this.This();</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case &#39;super&#39;:</span></span>
<span class="line"><span>        object = this.Super();</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case &#39;Identifier&#39;:</span></span>
<span class="line"><span>        object = this.Identifier();</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      default:</span></span>
<span class="line"><span>        throw new SyntaxError(\`unexpectted token:\${this.curToken?.value}\`);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // @ts-ignore</span></span>
<span class="line"><span>    while (this.curToken?.type == &#39;.&#39; || this.curToken.type == &#39;[&#39;) {</span></span>
<span class="line"><span>      let property!: Identifier | Expression;</span></span>
<span class="line"><span>      let isIndex = false;</span></span>
<span class="line"><span>      if (this.curToken.type == &#39;.&#39;) {</span></span>
<span class="line"><span>        this.eat(&#39;.&#39;);</span></span>
<span class="line"><span>        property = this.Identifier();</span></span>
<span class="line"><span>        isIndex = false;</span></span>
<span class="line"><span>      } else if (this.curToken.type == &#39;[&#39;) {</span></span>
<span class="line"><span>        this.eat(&#39;[&#39;);</span></span>
<span class="line"><span>        property = this.Expression();</span></span>
<span class="line"><span>        this.eat(&#39;]&#39;);</span></span>
<span class="line"><span>        isIndex = true;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      object = {</span></span>
<span class="line"><span>        type: &#39;MumberAccessExpression&#39;,</span></span>
<span class="line"><span>        object: object,</span></span>
<span class="line"><span>        property: property,</span></span>
<span class="line"><span>        isIndex,</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return object;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  This(): This {</span></span>
<span class="line"><span>    let ts = this.eat(&#39;this&#39;).value;</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;this&#39;,</span></span>
<span class="line"><span>      name: ts,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Super(): Super {</span></span>
<span class="line"><span>    let sp = this.eat(&#39;super&#39;).value;</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;super&#39;,</span></span>
<span class="line"><span>      name: sp,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Identifier(): Identifier {</span></span>
<span class="line"><span>    let id = this.eat(&#39;Identifier&#39;).value;</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;Identifier&#39;,</span></span>
<span class="line"><span>      name: id,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Arguments(): Arguments {</span></span>
<span class="line"><span>    this.eat(&#39;(&#39;);</span></span>
<span class="line"><span>    let args: Array&lt;AssignExpression&gt; = [];</span></span>
<span class="line"><span>    if (this.curToken?.type == &#39;)&#39;) {</span></span>
<span class="line"><span>      this.eat(&#39;)&#39;);</span></span>
<span class="line"><span>      return args;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    args.push(this.AssignExpression());</span></span>
<span class="line"><span>    if (this.curToken?.type == &#39;,&#39;) {</span></span>
<span class="line"><span>      this.eat(&#39;,&#39;);</span></span>
<span class="line"><span>      args.push(this.AssignExpression());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    this.eat(&#39;)&#39;);</span></span>
<span class="line"><span>    return args;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  BracketedExpression(): BracketedExpression {</span></span>
<span class="line"><span>    this.eat(&#39;(&#39;);</span></span>
<span class="line"><span>    let expression = this.Expression();</span></span>
<span class="line"><span>    this.eat(&#39;)&#39;);</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;BracketedExpression&#39;,</span></span>
<span class="line"><span>      expression,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Literal(): Literal {</span></span>
<span class="line"><span>    switch (this.curToken?.type) {</span></span>
<span class="line"><span>      case &#39;Number&#39;:</span></span>
<span class="line"><span>        return this.NumberLiteral();</span></span>
<span class="line"><span>      case &#39;String&#39;:</span></span>
<span class="line"><span>        return this.StringLiteral();</span></span>
<span class="line"><span>      case &#39;null&#39;:</span></span>
<span class="line"><span>        return this.NullLiteral();</span></span>
<span class="line"><span>      case &#39;Boolean&#39;:</span></span>
<span class="line"><span>        return this.BooleanLiteral();</span></span>
<span class="line"><span>      default:</span></span>
<span class="line"><span>        throw new SyntaxError(\`unknow Literal: \${this.curToken?.value}\`);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  NumberLiteral(): NumberLiteral {</span></span>
<span class="line"><span>    let val = this.eat(&#39;Number&#39;).value;</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;NumberLiteral&#39;,</span></span>
<span class="line"><span>      value: val,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  BooleanLiteral(): BooleanLiteral {</span></span>
<span class="line"><span>    let val = this.eat(&#39;Boolean&#39;).value;</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;BooleanLiteral&#39;,</span></span>
<span class="line"><span>      value: val,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  StringLiteral(): StringLiteral {</span></span>
<span class="line"><span>    let val = this.eat(&#39;String&#39;).value;</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;StringLiteral&#39;,</span></span>
<span class="line"><span>      value: val,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  NullLiteral(): NullLiteral {</span></span>
<span class="line"><span>    let val = this.eat(&#39;null&#39;).value;</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      type: &#39;NullLiteral&#39;,</span></span>
<span class="line"><span>      value: val,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  BineryExpression&lt;ChildNode, operatorType extends TokenType&gt;(</span></span>
<span class="line"><span>    childBuilder: () =&gt; ChildNode,</span></span>
<span class="line"><span>    operatorType: operatorType</span></span>
<span class="line"><span>  ): ChildNode | BineryExpression&lt;ChildNode, operatorType&gt; {</span></span>
<span class="line"><span>    let left: ChildNode | BineryExpression&lt;ChildNode, operatorType&gt; =</span></span>
<span class="line"><span>      childBuilder.apply(this);</span></span>
<span class="line"><span>    while (this.curToken?.type == operatorType) {</span></span>
<span class="line"><span>      let operator = this.eat(operatorType).value;</span></span>
<span class="line"><span>      let right = childBuilder.apply(this);</span></span>
<span class="line"><span>      left = {</span></span>
<span class="line"><span>        type: &#39;BineryExpression&#39;,</span></span>
<span class="line"><span>        operator,</span></span>
<span class="line"><span>        left,</span></span>
<span class="line"><span>        right,</span></span>
<span class="line"><span>      } as BineryExpression&lt;ChildNode, operatorType&gt;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return left;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  eat(tkt: TokenType) {</span></span>
<span class="line"><span>    if (this.curToken?.type != tkt) {</span></span>
<span class="line"><span>      throw new SyntaxError(</span></span>
<span class="line"><span>        \`expected:&#39;\${tkt}&#39;;but actually get:&#39;\${this.curToken?.value}&#39;\`</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    let token = this.tokens[this.tk_idx];</span></span>
<span class="line"><span>    this.curToken =</span></span>
<span class="line"><span>      this.tk_idx + 1 &lt; this.tokens.length ? this.tokens[++this.tk_idx] : null;</span></span>
<span class="line"><span>    return token;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解释器的实现" tabindex="-1"><a class="header-anchor" href="#解释器的实现"><span>解释器的实现</span></a></h2><p><code>Interpreater.ts</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { AST_NODE } from &#39;./ast&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export class Interpreater {</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 暂时的想法是，进入一个块作用域，就创建一个上下文对象，压入栈顶，</span></span>
<span class="line"><span>   * 当要在该作用域定义变量时，把变量存储到栈顶的上下文对象中。</span></span>
<span class="line"><span>   * 当要寻找一个变量的值时，则从栈顶往栈底遍历。</span></span>
<span class="line"><span>   * 当离开一个作用域时，弹出栈顶上下文对象，并将其销毁</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  ctxIdx = 0; // 上下文栈指针，第0个栈为系统栈</span></span>
<span class="line"><span>  ctxStack: Array&lt;Map&lt;string, any&gt;&gt; = [new Map()]; // 上下文对象栈</span></span>
<span class="line"><span>  constructor() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  exec(node?: AST_NODE): any {</span></span>
<span class="line"><span>    if (!node) return undefined;</span></span>
<span class="line"><span>    switch (node.type) {</span></span>
<span class="line"><span>      case &#39;Program&#39;:</span></span>
<span class="line"><span>      case &#39;BlockStatement&#39;:</span></span>
<span class="line"><span>        // 执行代码块，返回最后一条语句的值</span></span>
<span class="line"><span>        this.ctxIdx++;</span></span>
<span class="line"><span>        let res = node.statements.map((stm) =&gt; this.exec(stm)).pop();</span></span>
<span class="line"><span>        this.ctxIdx--;</span></span>
<span class="line"><span>        return res;</span></span>
<span class="line"><span>      case &#39;EmptyStatement&#39;:</span></span>
<span class="line"><span>        return undefined;</span></span>
<span class="line"><span>      case &#39;IfStatement&#39;:</span></span>
<span class="line"><span>        // TODO: 需要考虑 return 和 break</span></span>
<span class="line"><span>        if (this.exec(node.condition)) this.exec(node.case1);</span></span>
<span class="line"><span>        else if (node.case2) this.exec(node.case2);</span></span>
<span class="line"><span>        return undefined;</span></span>
<span class="line"><span>      case &#39;WhileStatement&#39;:</span></span>
<span class="line"><span>        // TODO: 需要考虑return 和 break</span></span>
<span class="line"><span>        while (this.exec(node.condition)) this.exec(node.statement);</span></span>
<span class="line"><span>        // 返回最后执行的一条语句</span></span>
<span class="line"><span>        return undefined;</span></span>
<span class="line"><span>      case &#39;IdentifierDeclarationsStatement&#39;:</span></span>
<span class="line"><span>        // 返回标识符列表</span></span>
<span class="line"><span>        return node.declarations.map((dec) =&gt; this.exec(dec));</span></span>
<span class="line"><span>      case &#39;VariableDeclaration&#39;:</span></span>
<span class="line"><span>        // 变量声明以及初始化</span></span>
<span class="line"><span>        return this.declear(node.name, this.exec(node.value));</span></span>
<span class="line"><span>      case &#39;FunctionDeclaration&#39;:</span></span>
<span class="line"><span>        // 返回函数名</span></span>
<span class="line"><span>        return this.declear(node.name, node);</span></span>
<span class="line"><span>      case &#39;ExpressionStatement&#39;:</span></span>
<span class="line"><span>        this.exec(node.expression);</span></span>
<span class="line"><span>        return undefined;</span></span>
<span class="line"><span>      case &#39;CommaExpression&#39;:</span></span>
<span class="line"><span>        // 计算并返回逗号表达式的最后一个值</span></span>
<span class="line"><span>        return node.expressions.map((exp) =&gt; this.exec(exp)).pop();</span></span>
<span class="line"><span>      case &#39;AssignExpression&#39;:</span></span>
<span class="line"><span>        switch (node.left.type) {</span></span>
<span class="line"><span>          case &#39;Identifier&#39;:</span></span>
<span class="line"><span>            return this.assign(</span></span>
<span class="line"><span>              node.left.name,</span></span>
<span class="line"><span>              node.operator,</span></span>
<span class="line"><span>              this.exec(node.right)</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>          default:</span></span>
<span class="line"><span>            throw new SyntaxError(&#39;unimplement functions.&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      case &#39;TernaryExpression&#39;:</span></span>
<span class="line"><span>        return this.exec(node.condition)</span></span>
<span class="line"><span>          ? this.exec(node.case1)</span></span>
<span class="line"><span>          : this.exec(node.case2);</span></span>
<span class="line"><span>      case &#39;BineryExpression&#39;:</span></span>
<span class="line"><span>        switch (node.operator) {</span></span>
<span class="line"><span>          case &#39;||&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) || this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;&amp;&amp;&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) &amp;&amp; this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;==&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) == this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;!=&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) != this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;&lt;&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) &lt; this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;&gt;&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) &gt; this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;&lt;=&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) &lt;= this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;&gt;=&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) &gt;= this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;+&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) + this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;-&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) - this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;*&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) * this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;/&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) / this.exec(node.right);</span></span>
<span class="line"><span>          case &#39;%&#39;:</span></span>
<span class="line"><span>            return this.exec(node.left) % this.exec(node.right);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        throw new SyntaxError(\`unknow operator:\${node.operator}\`);</span></span>
<span class="line"><span>      case &#39;FunctionCall&#39;:</span></span>
<span class="line"><span>        switch (node.calee.type) {</span></span>
<span class="line"><span>          case &#39;Identifier&#39;:</span></span>
<span class="line"><span>            let symbol = node.calee.name;</span></span>
<span class="line"><span>            let fun: Function | AST_NODE = this.getVal(symbol);</span></span>
<span class="line"><span>            if (fun) {</span></span>
<span class="line"><span>              if (fun instanceof Function) {</span></span>
<span class="line"><span>                let args = node.args.map((arg) =&gt; this.exec(arg));</span></span>
<span class="line"><span>                return fun(args);</span></span>
<span class="line"><span>              } else if (fun.type == &#39;FunctionDeclaration&#39;) {</span></span>
<span class="line"><span>                // 计算实参</span></span>
<span class="line"><span>                let argValus = node.args.map((arg) =&gt; this.exec(arg));</span></span>
<span class="line"><span>                // 进入函数调用</span></span>
<span class="line"><span>                this.ctxIdx++;</span></span>
<span class="line"><span>                // 声明初始化形式参数</span></span>
<span class="line"><span>                let argNames = fun.FormedArguments.map((arg) =&gt; this.exec(arg));</span></span>
<span class="line"><span>                // 把实参传给形式参数</span></span>
<span class="line"><span>                argNames.forEach((name, idx) =&gt;</span></span>
<span class="line"><span>                  this.assign(name, &#39;=&#39;, argValus[idx])</span></span>
<span class="line"><span>                );</span></span>
<span class="line"><span>                let result = this.exec(fun.statements);</span></span>
<span class="line"><span>                this.ctxIdx--;</span></span>
<span class="line"><span>                return result;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>              throw new SyntaxError(\`unimplement function \${symbol}.\`);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          default:</span></span>
<span class="line"><span>            throw new SyntaxError(&#39;unimplement functions.&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      case &#39;BracketedExpression&#39;:</span></span>
<span class="line"><span>        return this.exec(node.expression);</span></span>
<span class="line"><span>      case &#39;Identifier&#39;:</span></span>
<span class="line"><span>        return this.getVal(node.name);</span></span>
<span class="line"><span>      case &#39;NumberLiteral&#39;:</span></span>
<span class="line"><span>        return Number(node.value);</span></span>
<span class="line"><span>      case &#39;BooleanLiteral&#39;:</span></span>
<span class="line"><span>        return node.value == &#39;true&#39; ? true : false;</span></span>
<span class="line"><span>      case &#39;StringLiteral&#39;:</span></span>
<span class="line"><span>        return node.value;</span></span>
<span class="line"><span>      case &#39;NullLiteral&#39;:</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>      case &#39;MumberAccessExpression&#39;:</span></span>
<span class="line"><span>      case &#39;super&#39;:</span></span>
<span class="line"><span>      case &#39;this&#39;:</span></span>
<span class="line"><span>        throw new SyntaxError(&#39;unimplement functions.&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 获取当前作用域的上下文对象</span></span>
<span class="line"><span>   * 如果不存在，则要负责创建它</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  getCurrentContext() {</span></span>
<span class="line"><span>    this.ctxStack.length = this.ctxIdx + 1;</span></span>
<span class="line"><span>    let ctx = this.ctxStack[this.ctxIdx];</span></span>
<span class="line"><span>    if (!ctx) {</span></span>
<span class="line"><span>      ctx = this.ctxStack[this.ctxIdx] = new Map&lt;string, any&gt;();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ctx;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 自上而下的到上下文对象栈中去寻找定义了某个符号的上下文对象。</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  findContextWithSymbol(symbol: string) {</span></span>
<span class="line"><span>    this.ctxStack.length = this.ctxIdx + 1;</span></span>
<span class="line"><span>    let stack = this.ctxStack;</span></span>
<span class="line"><span>    for (let idx = this.ctxIdx; 0 &lt;= idx; idx--) {</span></span>
<span class="line"><span>      const ctx = stack[idx];</span></span>
<span class="line"><span>      if (ctx &amp;&amp; ctx.has(symbol)) return ctx;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return null;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  registerFun(funName: string, fun: Function) {</span></span>
<span class="line"><span>    // 把预定义函数定义在系统栈中</span></span>
<span class="line"><span>    this.ctxStack[0].set(funName, fun);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 在当前的作用域中声明变量</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  declear(symbol: string, val: any | undefined) {</span></span>
<span class="line"><span>    let ctx = this.getCurrentContext();</span></span>
<span class="line"><span>    if (ctx.has(symbol)) throw new SyntaxError(\`redefined symbol: \${symbol}\`);</span></span>
<span class="line"><span>    ctx.set(symbol, val);</span></span>
<span class="line"><span>    return symbol;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 对一个已经定义的变量赋值</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  assign(symbol: string, operator: string, val: number) {</span></span>
<span class="line"><span>    let ctx = this.findContextWithSymbol(symbol);</span></span>
<span class="line"><span>    if (!ctx) throw new SyntaxError(\`undefined symbol: \${symbol}\`);</span></span>
<span class="line"><span>    let newVal = ctx.get(symbol);</span></span>
<span class="line"><span>    switch (operator) {</span></span>
<span class="line"><span>      case &#39;=&#39;:</span></span>
<span class="line"><span>        newVal = val;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case &#39;+=&#39;:</span></span>
<span class="line"><span>        newVal += val;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case &#39;-=&#39;:</span></span>
<span class="line"><span>        newVal -= val;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case &#39;*=&#39;:</span></span>
<span class="line"><span>        newVal *= val;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case &#39;/=&#39;:</span></span>
<span class="line"><span>        newVal /= val;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case &#39;%=&#39;:</span></span>
<span class="line"><span>        newVal %= val;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      default:</span></span>
<span class="line"><span>        throw new SyntaxError(\`unknow operator:\${operator}\`);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ctx.set(symbol, newVal);</span></span>
<span class="line"><span>    return newVal;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 获取一个已经定义的变量的值</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  getVal(symbol: string) {</span></span>
<span class="line"><span>    let ctx = this.findContextWithSymbol(symbol);</span></span>
<span class="line"><span>    if (!ctx) throw new SyntaxError(\`undefined symbol: \${symbol}\`);</span></span>
<span class="line"><span>    return ctx.get(symbol);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function g(f,A){const p=d("CodeTabs");return t(),r("div",null,[b,v(p,{id:"251",data:[{id:"解释器代码:<code v-pre>test/index.ts</code>"},{id:"输出结果:<code v-pre>output.txt</code>"}]},{title0:a(({value:e,isActive:l})=>[s("解释器代码:"),o]),title1:a(({value:e,isActive:l})=>[s("输出结果:"),h]),tab0:a(({value:e,isActive:l})=>[E]),tab1:a(({value:e,isActive:l})=>[x]),_:1}),y])}const S=c(m,[["render",g],["__file","index.html.vue"]]),T=JSON.parse('{"path":"/%E7%90%86%E8%AE%BA/2023-12-20-%E4%BD%BF%E7%94%A8%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0%E7%AE%80%E6%98%93%E8%A7%A3%E9%87%8A%E5%99%A8/","title":"使用递归下降算法实现简易解释器","lang":"zh-CN","frontmatter":{"title":"使用递归下降算法实现简易解释器","description":"尝试使用递归下降算法实现简易词法分析器和文法分析器以及解释器","date":"2023-12-20T17:21:35.512Z","cover":"/cover/使用递归下降算法实现简易解释器.png","tag":["递归下降","解释器","编译原理"],"category":["理论"],"star":true,"head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E7%90%86%E8%AE%BA/2023-12-20-%E4%BD%BF%E7%94%A8%E9%80%92%E5%BD%92%E4%B8%8B%E9%99%8D%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0%E7%AE%80%E6%98%93%E8%A7%A3%E9%87%8A%E5%99%A8/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"使用递归下降算法实现简易解释器"}],["meta",{"property":"og:description","content":"尝试使用递归下降算法实现简易词法分析器和文法分析器以及解释器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://dingdingdang.online/cover/使用递归下降算法实现简易解释器.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T09:30:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://dingdingdang.online/cover/使用递归下降算法实现简易解释器.png"}],["meta",{"name":"twitter:image:alt","content":"使用递归下降算法实现简易解释器"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"递归下降"}],["meta",{"property":"article:tag","content":"解释器"}],["meta",{"property":"article:tag","content":"编译原理"}],["meta",{"property":"article:published_time","content":"2023-12-20T17:21:35.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T09:30:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用递归下降算法实现简易解释器\\",\\"image\\":[\\"https://dingdingdang.online/cover/使用递归下降算法实现简易解释器.png\\"],\\"datePublished\\":\\"2023-12-20T17:21:35.000Z\\",\\"dateModified\\":\\"2024-03-18T09:30:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"缘由","slug":"缘由","link":"#缘由","children":[]},{"level":2,"title":"目前支持的语法","slug":"目前支持的语法","link":"#目前支持的语法","children":[]},{"level":2,"title":"实现效果","slug":"实现效果","link":"#实现效果","children":[{"level":3,"title":"解释器测试","slug":"解释器测试","link":"#解释器测试","children":[]}]},{"level":2,"title":"词法分析的实现","slug":"词法分析的实现","link":"#词法分析的实现","children":[]},{"level":2,"title":"文法定义","slug":"文法定义","link":"#文法定义","children":[]},{"level":2,"title":"文法分析的实现","slug":"文法分析的实现","link":"#文法分析的实现","children":[]},{"level":2,"title":"解释器的实现","slug":"解释器的实现","link":"#解释器的实现","children":[]}],"git":{"createdTime":1703191688000,"updatedTime":1710754240000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":2}]},"readingTime":{"minutes":5.41,"words":1623},"filePathRelative":"理论/2023-12-20-使用递归下降算法实现简易解释器/index.md","localizedDate":"2023年12月20日","excerpt":""}');export{S as comp,T as data};
