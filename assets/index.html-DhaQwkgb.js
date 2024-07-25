import{_ as r,r as c,c as u,d as p,w as l,b as t,a as n,o as d,e as s}from"./app-DTZtoZLC.js";const m="/assets/the-super-tiny-compiler-lVUTzW8L.png",o={},v=t('<h1 id="学习并尝试使用ts重构实现简易编译器和解释器" tabindex="-1"><a class="header-anchor" href="#学习并尝试使用ts重构实现简易编译器和解释器"><span>学习并尝试使用ts重构实现简易编译器和解释器</span></a></h1><p><img src="'+m+`" alt="the-super-tiny-compiler.png"></p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ul><li><a href="#%E5%AD%A6%E4%B9%A0%E5%B9%B6%E5%B0%9D%E8%AF%95%E4%BD%BF%E7%94%A8ts%E9%87%8D%E6%9E%84%E5%AE%9E%E7%8E%B0%E7%AE%80%E6%98%93%E7%BC%96%E8%AF%91%E5%99%A8%E5%92%8C%E8%A7%A3%E9%87%8A%E5%99%A8">学习并尝试使用ts重构实现简易编译器和解释器</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E6%9C%80%E7%BB%88%E6%95%88%E6%9E%9C">最终效果</a><ul><li><a href="#%E8%A7%A3%E9%87%8A%E5%99%A8%E6%B5%8B%E8%AF%95">解释器测试</a></li><li><a href="#%E7%BC%96%E8%AF%91%E5%99%A8%E6%B5%8B%E8%AF%95">编译器测试</a></li></ul></li><li><a href="#%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0">具体实现</a><ul><li><a href="#%E8%AF%8D%E6%B3%95%E5%88%86%E6%9E%90%E5%99%A8%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90%E5%99%A8%E8%BD%AC%E6%8D%A2%E5%99%A8%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%E5%99%A8">词法分析器、语法分析器、转换器、代码生成器</a></li><li><a href="#%E7%BC%96%E8%AF%91%E5%99%A8%E8%A7%A3%E9%87%8A%E5%99%A8">编译器、解释器</a></li><li><a href="#%E7%BB%88%E7%AB%AF%E5%B7%A5%E5%85%B7">终端工具</a></li></ul></li></ul></li></ul><h2 id="最终效果" tabindex="-1"><a class="header-anchor" href="#最终效果"><span>最终效果</span></a></h2><h3 id="解释器测试" tabindex="-1"><a class="header-anchor" href="#解释器测试"><span>解释器测试</span></a></h3><p>解释器测试:<code>test_intrepreter.ts</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { intrepreter } from &quot;../index&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function test_intrepreter() {</span></span>
<span class="line"><span>  intrepreter(</span></span>
<span class="line"><span>    \`(</span></span>
<span class="line"><span>      print</span></span>
<span class="line"><span>      (</span></span>
<span class="line"><span>        add</span></span>
<span class="line"><span>        &quot;hello world!!!&quot; &quot;\\n&quot;</span></span>
<span class="line"><span>        &quot;1+1=&quot; (add 1 1) &quot;\\n&quot;</span></span>
<span class="line"><span>        &quot;2-2=&quot; (sub 2 2) &quot;\\n&quot;</span></span>
<span class="line"><span>        &quot;3*3=&quot; (mut 3 3) &quot;\\n&quot;</span></span>
<span class="line"><span>        &quot;4/4=&quot; (div 4 4) &quot;\\n&quot;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    )\`</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main() {</span></span>
<span class="line"><span>  test_intrepreter();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果:<code>test_intrepreter_output.txt</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>hello world!!!</span></span>
<span class="line"><span>1+1=2</span></span>
<span class="line"><span>2-2=0</span></span>
<span class="line"><span>3*3=9</span></span>
<span class="line"><span>4/4=1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译器测试" tabindex="-1"><a class="header-anchor" href="#编译器测试"><span>编译器测试</span></a></h3><p>编译器测试:<code>test_compiler.ts</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { compiler } from &quot;../index&quot;;</span></span>
<span class="line"><span>import { visualizeEscapes } from &quot;../utils&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function test_compiler() {</span></span>
<span class="line"><span>  let result = compiler(</span></span>
<span class="line"><span>    \`(</span></span>
<span class="line"><span>      print</span></span>
<span class="line"><span>      (</span></span>
<span class="line"><span>        add</span></span>
<span class="line"><span>        &quot;hello world!!!&quot; &quot;\\n&quot;</span></span>
<span class="line"><span>        &quot;1+1=&quot; (add 1 1) &quot;\\n&quot;</span></span>
<span class="line"><span>        &quot;2-2=&quot; (sub 2 2) &quot;\\n&quot;</span></span>
<span class="line"><span>        &quot;3*3=&quot; (mut 3 3) &quot;\\n&quot;</span></span>
<span class="line"><span>        &quot;4/4=&quot; (div 4 4) &quot;\\n&quot;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    )\`</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  console.log(visualizeEscapes(result));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main() {</span></span>
<span class="line"><span>  test_compiler();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果:<code>test_compiler_output.txt</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>print(add(&quot;hello world!!!&quot;,&quot;\\n&quot;,&quot;1+1=&quot;,add(1,1),&quot;\\n&quot;,&quot;2-2=&quot;,sub(2,2),&quot;\\n&quot;,&quot;3*3=&quot;,mut(3,3),&quot;\\n&quot;,&quot;4/4=&quot;,div(4,4),&quot;\\n&quot;));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现"><span>具体实现</span></a></h2><h3 id="词法分析器、语法分析器、转换器、代码生成器" tabindex="-1"><a class="header-anchor" href="#词法分析器、语法分析器、转换器、代码生成器"><span>词法分析器、语法分析器、转换器、代码生成器</span></a></h3>`,17),b=n("code",null,"tokenizer.ts",-1),E=n("code",null,"parser.ts",-1),h=n("code",null,"transformer.ts",-1),_=n("code",null,"codeGenerator.ts",-1),T=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"export type Token = { type: TokenType; value: string };")]),s(`
`),n("span",{class:"line"},[n("span",null,"export enum TokenType {")]),s(`
`),n("span",{class:"line"},[n("span",null,'  paren = "paren",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  number = "number",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  string = "string",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  name = "name",')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"export function tokenizer(input: string) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let current = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let tokens: Array<Token> = [];")]),s(`
`),n("span",{class:"line"},[n("span",null,"  while (current < input.length) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let char = input[current];")]),s(`
`),n("span",{class:"line"},[n("span",null,'    if (char === "(") {')]),s(`
`),n("span",{class:"line"},[n("span",null,'      tokens.push({ type: TokenType.paren, value: "(" });')]),s(`
`),n("span",{class:"line"},[n("span",null,"      current++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      continue;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,'    if (char === ")") {')]),s(`
`),n("span",{class:"line"},[n("span",null,'      tokens.push({ type: TokenType.paren, value: ")" });')]),s(`
`),n("span",{class:"line"},[n("span",null,"      current++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      continue;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let WHITESPACE = /\\s/;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (WHITESPACE.test(char)) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      current++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      continue;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let NUMBERS = /[0-9]/;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (NUMBERS.test(char)) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      let value = "";')]),s(`
`),n("span",{class:"line"},[n("span",null,"      while (NUMBERS.test(char)) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value += char;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        char = input[++current];")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      tokens.push({ type: TokenType.number, value });")]),s(`
`),n("span",{class:"line"},[n("span",null,"      continue;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,`    if (char === '"') {`)]),s(`
`),n("span",{class:"line"},[n("span",null,'      let value = "";')]),s(`
`),n("span",{class:"line"},[n("span",null,"      char = input[++current];")]),s(`
`),n("span",{class:"line"},[n("span",null,`      while (char !== '"') {`)]),s(`
`),n("span",{class:"line"},[n("span",null,"        value += char;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        char = input[++current];")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      char = input[++current];")]),s(`
`),n("span",{class:"line"},[n("span",null,"      tokens.push({ type: TokenType.string, value });")]),s(`
`),n("span",{class:"line"},[n("span",null,"      continue;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let LETTERS = /[a-z]/i; // /i 表示不区分大小写")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (LETTERS.test(char)) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      let value = "";')]),s(`
`),n("span",{class:"line"},[n("span",null,"      while (LETTERS.test(char)) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value += char;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        char = input[++current];")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      tokens.push({ type: TokenType.name, value });")]),s(`
`),n("span",{class:"line"},[n("span",null,"      continue;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,'    throw new TypeError("I dont know what this character is: " + char);')]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return tokens;")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,'import { Token, TokenType } from "./tokenizer";')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type AST_NODE = AST_ROOT_NODE | AST_VALE_NODE | AST_Call_NODE;")]),s(`
`),n("span",{class:"line"},[n("span",null,"export enum AST_NODE_TYPE {")]),s(`
`),n("span",{class:"line"},[n("span",null,'  Program = "Program",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  NumberLiteral = "NumberLiteral",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  StringLiteral = "StringLiteral",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  CallExpression = "CallExpression",')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type AST_ROOT_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: AST_NODE_TYPE.Program;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  body: Array<AST_NODE>;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type AST_Call_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: AST_NODE_TYPE.CallExpression;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: string;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  params: Array<AST_VALE_NODE | AST_Call_NODE>;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type AST_VALE_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: AST_NODE_TYPE.NumberLiteral | AST_NODE_TYPE.StringLiteral;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  value: string;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"export function parser(tokens: Array<Token>) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let current = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  function walk() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let token = tokens[current];")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let node: AST_NODE;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (token.type === TokenType.number) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      current++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      node = { type: AST_NODE_TYPE.NumberLiteral, value: token.value };")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return node;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (token.type === TokenType.string) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      current++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      node = { type: AST_NODE_TYPE.StringLiteral, value: token.value };")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return node;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,'    if (token.type === TokenType.paren && token.value === "(") {')]),s(`
`),n("span",{class:"line"},[n("span",null,"      token = tokens[++current];")]),s(`
`),n("span",{class:"line"},[n("span",null,"      node = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        type: AST_NODE_TYPE.CallExpression,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        name: token.value,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        params: [],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      };")]),s(`
`),n("span",{class:"line"},[n("span",null,"      token = tokens[++current];")]),s(`
`),n("span",{class:"line"},[n("span",null,"      while (")]),s(`
`),n("span",{class:"line"},[n("span",null,"        token.type !== TokenType.paren ||")]),s(`
`),n("span",{class:"line"},[n("span",null,'        (token.type === TokenType.paren && token.value !== ")")')]),s(`
`),n("span",{class:"line"},[n("span",null,"      ) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        node.params.push(walk());")]),s(`
`),n("span",{class:"line"},[n("span",null,"        token = tokens[current];")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      current++;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return node;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    throw new TypeError(TokenType[token.type]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let ast: AST_ROOT_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    type: AST_NODE_TYPE.Program,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    body: [],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  };")]),s(`
`),n("span",{class:"line"},[n("span",null,"  while (current < tokens.length) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ast.body.push(walk());")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return ast;")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"import {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  AST_NODE,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  AST_ROOT_NODE,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  AST_NODE_TYPE,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  AST_Call_NODE,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  AST_VALE_NODE,")]),s(`
`),n("span",{class:"line"},[n("span",null,'} from "./parser";')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type NEW_AST_NODE =")]),s(`
`),n("span",{class:"line"},[n("span",null,"  | NEW_AST_ROOT_NODE")]),s(`
`),n("span",{class:"line"},[n("span",null,"  | NEW_AST_IDNT_NODE")]),s(`
`),n("span",{class:"line"},[n("span",null,"  | NEW_AST_CALL_NODE")]),s(`
`),n("span",{class:"line"},[n("span",null,"  | NEW_AST_NUMB_NODE")]),s(`
`),n("span",{class:"line"},[n("span",null,"  | NEW_AST_EXPR_NODE")]),s(`
`),n("span",{class:"line"},[n("span",null,"  | NEW_AST_STRI_NODE;")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"export enum NEW_AST_NODE_TYPE {")]),s(`
`),n("span",{class:"line"},[n("span",null,'  Program = "Program",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  NumberLiteral = "NumberLiteral",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  StringLiteral = "StringLiteral",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  Identifier = "Identifier",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  CallExpression = "CallExpression",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  ExpressionStatement = "ExpressionStatement",')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type NEW_AST_ROOT_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: NEW_AST_NODE_TYPE.Program;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  body: Array<NEW_AST_NODE>;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type NEW_AST_NUMB_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: NEW_AST_NODE_TYPE.NumberLiteral;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  value: string;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type NEW_AST_STRI_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: NEW_AST_NODE_TYPE.StringLiteral;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  value: string;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type NEW_AST_IDNT_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: NEW_AST_NODE_TYPE.Identifier;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: string;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type NEW_AST_CALL_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: NEW_AST_NODE_TYPE.CallExpression;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  callee: NEW_AST_IDNT_NODE;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  arguments: Array<NEW_AST_NODE>;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"export type NEW_AST_EXPR_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  type: NEW_AST_NODE_TYPE.ExpressionStatement;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expression: NEW_AST_CALL_NODE;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"let ctx_map: Map<AST_NODE, Array<NEW_AST_NODE>> = new Map();")]),s(`
`),n("span",{class:"line"},[n("span",null,"export function transformer(ast: AST_ROOT_NODE) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let newAst: NEW_AST_ROOT_NODE;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let visitor: Visitor = {};")]),s(`
`),n("span",{class:"line"},[n("span",null,"  visitor[AST_NODE_TYPE.Program] = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    enter(node: AST_ROOT_NODE, parent: null) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      newAst = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        type: NEW_AST_NODE_TYPE.Program,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        body: [],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      };")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ctx_map.set(node, newAst.body);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    exit(node: AST_Call_NODE, parent: AST_NODE) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ctx_map.delete(node);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  };")]),s(`
`),n("span",{class:"line"},[n("span",null,"  visitor[AST_NODE_TYPE.CallExpression] = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    enter(node: AST_Call_NODE, parent: AST_NODE) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let expression: NEW_AST_CALL_NODE | NEW_AST_EXPR_NODE = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        type: NEW_AST_NODE_TYPE.CallExpression,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        callee: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          type: NEW_AST_NODE_TYPE.Identifier,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          name: node.name,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        arguments: [],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      };")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ctx_map.set(node, expression.arguments);")]),s(`
`),n("span",{class:"line"},[n("span",null,"      if (parent.type !== AST_NODE_TYPE.CallExpression) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        expression = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          type: NEW_AST_NODE_TYPE.ExpressionStatement,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          expression: expression,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        };")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ctx_map.get(parent)!.push(expression);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    exit(node: AST_Call_NODE, parent: AST_NODE) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ctx_map.delete(node);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  };")]),s(`
`),n("span",{class:"line"},[n("span",null,"  visitor[AST_NODE_TYPE.NumberLiteral] = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    enter(node: AST_VALE_NODE, parent: AST_NODE) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ctx_map.get(parent)!.push({")]),s(`
`),n("span",{class:"line"},[n("span",null,"        type: NEW_AST_NODE_TYPE.NumberLiteral,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: node.value,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      });")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  };")]),s(`
`),n("span",{class:"line"},[n("span",null,"  visitor[AST_NODE_TYPE.StringLiteral] = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    enter(node: AST_VALE_NODE, parent: AST_NODE) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ctx_map.get(parent)!.push({")]),s(`
`),n("span",{class:"line"},[n("span",null,"        type: NEW_AST_NODE_TYPE.StringLiteral,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: node.value,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      });")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  };")]),s(`
`),n("span",{class:"line"},[n("span",null,"  traverser(ast, visitor);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return newAst!;")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"type Visitor = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  [key in AST_NODE_TYPE]?: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    enter(node: AST_NODE, parent: AST_NODE | null): void;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    exit?(node: AST_NODE, parent: AST_NODE | null): void;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  };")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"function traverser(ast: AST_ROOT_NODE, visitor: Visitor) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  function traverseArray(")]),s(`
`),n("span",{class:"line"},[n("span",null,"    array: Array<AST_NODE>,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    parent: AST_ROOT_NODE | AST_Call_NODE")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    array.forEach((child) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      traverseNode(child, parent);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    });")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  function traverseNode(")]),s(`
`),n("span",{class:"line"},[n("span",null,"    node: AST_NODE,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    parent: AST_ROOT_NODE | AST_Call_NODE | null")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let methods = visitor[node.type];")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (methods && methods.enter) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      methods.enter(node, parent);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    switch (node.type) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      case AST_NODE_TYPE.Program:")]),s(`
`),n("span",{class:"line"},[n("span",null,"        traverseArray(node.body, node);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      case AST_NODE_TYPE.CallExpression:")]),s(`
`),n("span",{class:"line"},[n("span",null,"        traverseArray(node.params, node);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      case AST_NODE_TYPE.NumberLiteral:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      case AST_NODE_TYPE.StringLiteral:")]),s(`
`),n("span",{class:"line"},[n("span",null,"        break;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      default:")]),s(`
`),n("span",{class:"line"},[n("span",null,"        // @ts-ignore")]),s(`
`),n("span",{class:"line"},[n("span",null,"        throw new TypeError(AST_NODE_TYPE[node.type]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (methods && methods.exit) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      methods.exit(node, parent);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  traverseNode(ast, null);")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,'import { NEW_AST_NODE, NEW_AST_NODE_TYPE } from "./transformer";')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"export function codeGenerator(node: NEW_AST_NODE): string {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  switch (node.type) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.Program:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let statements = node.body.map(codeGenerator);")]),s(`
`),n("span",{class:"line"},[n("span",null,'      return statements.join("\\n");')]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.ExpressionStatement:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let expression = codeGenerator(node.expression);")]),s(`
`),n("span",{class:"line"},[n("span",null,'      return expression + ";";')]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.CallExpression:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let funName = codeGenerator(node.callee);")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let args = node.arguments.map(codeGenerator);")]),s(`
`),n("span",{class:"line"},[n("span",null,'      return funName + "(" + args.join(",") + ")";')]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.Identifier:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return node.name;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.NumberLiteral:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return node.value;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.StringLiteral:")]),s(`
`),n("span",{class:"line"},[n("span",null,`      return '"' + node.value + '"';`)]),s(`
`),n("span",{class:"line"},[n("span",null,"    default:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      // @ts-ignore")]),s(`
`),n("span",{class:"line"},[n("span",null,"      throw new TypeError(NEW_AST_NODE_TYPE[node.type]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h3",{id:"编译器、解释器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#编译器、解释器"},[n("span",null,"编译器、解释器")])],-1),y=n("code",null,"compiler.ts",-1),S=n("code",null,"intrepreter.ts",-1),O=n("code",null,"index.ts",-1),D=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,'import { tokenizer } from "./tokenizer";')]),s(`
`),n("span",{class:"line"},[n("span",null,'import { parser } from "./parser";')]),s(`
`),n("span",{class:"line"},[n("span",null,'import { transformer } from "./transformer";')]),s(`
`),n("span",{class:"line"},[n("span",null,'import { codeGenerator } from "./codeGenerator";')]),s(`
`),n("span",{class:"line"},[n("span",null,"export function compiler(input: string) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let tokens = tokenizer(input);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let ast = parser(tokens);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let newAst = transformer(ast);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let output = codeGenerator(newAst);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return output;")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,'import { NEW_AST_NODE, NEW_AST_NODE_TYPE } from "./transformer";')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"export function executer(node: NEW_AST_NODE): any {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  switch (node.type) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.Program:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let statements = node.body;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return statements.forEach((statement) => executer(statement));")]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.ExpressionStatement:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let expression = node.expression;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return executer(expression);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.CallExpression:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let func = executer(node.callee);")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let args = node.arguments.map(executer);")]),s(`
`),n("span",{class:"line"},[n("span",null,"      switch (func) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        case "add":')]),s(`
`),n("span",{class:"line"},[n("span",null,"          return args.reduce((prev, cur) => prev + cur);")]),s(`
`),n("span",{class:"line"},[n("span",null,'        case "sub":')]),s(`
`),n("span",{class:"line"},[n("span",null,"          return args.reduce((prev, cur) => prev - cur);")]),s(`
`),n("span",{class:"line"},[n("span",null,'        case "mut":')]),s(`
`),n("span",{class:"line"},[n("span",null,"          return args.reduce((prev, cur) => prev * cur);")]),s(`
`),n("span",{class:"line"},[n("span",null,'        case "div":')]),s(`
`),n("span",{class:"line"},[n("span",null,"          return args.reduce((prev, cur) => prev / cur);")]),s(`
`),n("span",{class:"line"},[n("span",null,'        case "print":')]),s(`
`),n("span",{class:"line"},[n("span",null,'          let str = args.join(",");')]),s(`
`),n("span",{class:"line"},[n("span",null,"          return console.log(str);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        default:")]),s(`
`),n("span",{class:"line"},[n("span",null,"          throw new SyntaxError(`unknow function: ${func}`);")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.Identifier:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let id = node.name;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return id;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.NumberLiteral:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let num = new Number(node.value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return num;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    case NEW_AST_NODE_TYPE.StringLiteral:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let str = node.value;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return str;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    default:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      throw new SyntaxError(`unknow syntax: ${node}`);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,'import { tokenizer } from "./tokenizer";')]),s(`
`),n("span",{class:"line"},[n("span",null,'import { parser } from "./parser";')]),s(`
`),n("span",{class:"line"},[n("span",null,'import { transformer } from "./transformer";')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"export function intrepreter(input: string) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let tokens = tokenizer(input);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let ast = parser(tokens);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let newAst = transformer(ast);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let output = executer(newAst);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return output;")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,'export { compiler } from "./compiler";')]),s(`
`),n("span",{class:"line"},[n("span",null,'export { intrepreter } from "./intrepreter";')])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h3",{id:"终端工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#终端工具"},[n("span",null,"终端工具")])],-1),P=n("p",null,"Terminal工具：编译器和解释器的实现",-1),W=n("code",null,"cli_compiler.ts",-1),w=n("code",null,"cli_intrepreter.ts",-1),Y=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,'import { compiler } from "./index";')]),s(`
`),n("span",{class:"line"},[n("span",null,'import { createInterface } from "readline/promises";')]),s(`
`),n("span",{class:"line"},[n("span",null,"let readline = createInterface({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  input: process.stdin,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  output: process.stdout,")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"async function test_compiler() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'    let ans = await readline.question(">");')]),s(`
`),n("span",{class:"line"},[n("span",null,"    let result = compiler(ans);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    console.log(result);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"async function main() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  test_compiler();")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"main();")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[n("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,'import { intrepreter } from "./index";')]),s(`
`),n("span",{class:"line"},[n("span",null,'import { createInterface } from "readline/promises";')]),s(`
`),n("span",{class:"line"},[n("span",null,"let readline = createInterface({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  input: process.stdin,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  output: process.stdout,")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"async function test_intrepreter() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  while (true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,'    let ans = await readline.question(">");')]),s(`
`),n("span",{class:"line"},[n("span",null,"    intrepreter(ans);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"async function main() {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  test_intrepreter();")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"main();")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function C(L,R){const i=c("CodeTabs");return d(),u("div",null,[v,p(i,{id:"93",data:[{id:"词法分析器<code v-pre>tokenizer.ts</code>"},{id:"语法分析器<code v-pre>parser.ts</code>"},{id:"转换器<code v-pre>transformer.ts</code>"},{id:"代码生成器<code v-pre>codeGenerator.ts</code>"}]},{title0:l(({value:e,isActive:a})=>[s("词法分析器"),b]),title1:l(({value:e,isActive:a})=>[s("语法分析器"),E]),title2:l(({value:e,isActive:a})=>[s("转换器"),h]),title3:l(({value:e,isActive:a})=>[s("代码生成器"),_]),tab0:l(({value:e,isActive:a})=>[T]),tab1:l(({value:e,isActive:a})=>[g]),tab2:l(({value:e,isActive:a})=>[k]),tab3:l(({value:e,isActive:a})=>[A]),_:1}),N,p(i,{id:"110",data:[{id:"编译器:<code v-pre>compiler.ts</code>"},{id:"解释器:<code v-pre>intrepreter.ts</code>"},{id:"<code v-pre>index.ts</code>"}]},{title0:l(({value:e,isActive:a})=>[s("编译器:"),y]),title1:l(({value:e,isActive:a})=>[s("解释器:"),S]),title2:l(({value:e,isActive:a})=>[O]),tab0:l(({value:e,isActive:a})=>[D]),tab1:l(({value:e,isActive:a})=>[x]),tab2:l(({value:e,isActive:a})=>[f]),_:1}),q,P,p(i,{id:"127",data:[{id:"编译器终端工具:<code v-pre>cli_compiler.ts</code>"},{id:"解释器终端工具:<code v-pre>cli_intrepreter.ts</code>"}]},{title0:l(({value:e,isActive:a})=>[s("编译器终端工具:"),W]),title1:l(({value:e,isActive:a})=>[s("解释器终端工具:"),w]),tab0:l(({value:e,isActive:a})=>[Y]),tab1:l(({value:e,isActive:a})=>[B]),_:1})])}const z=r(o,[["render",C],["__file","index.html.vue"]]),V=JSON.parse('{"path":"/%E7%90%86%E8%AE%BA/2023-12-15-%E5%AE%9E%E7%8E%B0%E7%AE%80%E6%98%93%E7%BC%96%E8%AF%91%E5%99%A8%E5%92%8C%E8%A7%A3%E9%87%8A%E5%99%A8/","title":"实现简易编译器和解释器","lang":"zh-CN","frontmatter":{"title":"实现简易编译器和解释器","date":"2023-12-15T08:05:45.758Z","cover":"/cover/the-super-tiny-compiler.png","tag":["编译器","解释器","编译原理","词法分析","文法分析"],"category":["理论"],"star":true,"description":"学习并尝试使用ts重构实现简易编译器和解释器 the-super-tiny-compiler.png 目录 学习并尝试使用ts重构实现简易编译器和解释器 目录 最终效果 解释器测试 编译器测试 具体实现 词法分析器、语法分析器、转换器、代码生成器 编译器、解释器 终端工具 最终效果 解释器测试 解释器测试:test_intrepreter.ts 测试结...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E7%90%86%E8%AE%BA/2023-12-15-%E5%AE%9E%E7%8E%B0%E7%AE%80%E6%98%93%E7%BC%96%E8%AF%91%E5%99%A8%E5%92%8C%E8%A7%A3%E9%87%8A%E5%99%A8/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"实现简易编译器和解释器"}],["meta",{"property":"og:description","content":"学习并尝试使用ts重构实现简易编译器和解释器 the-super-tiny-compiler.png 目录 学习并尝试使用ts重构实现简易编译器和解释器 目录 最终效果 解释器测试 编译器测试 具体实现 词法分析器、语法分析器、转换器、代码生成器 编译器、解释器 终端工具 最终效果 解释器测试 解释器测试:test_intrepreter.ts 测试结..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://dingdingdang.online/cover/the-super-tiny-compiler.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T09:30:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://dingdingdang.online/cover/the-super-tiny-compiler.png"}],["meta",{"name":"twitter:image:alt","content":"实现简易编译器和解释器"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"编译器"}],["meta",{"property":"article:tag","content":"解释器"}],["meta",{"property":"article:tag","content":"编译原理"}],["meta",{"property":"article:tag","content":"词法分析"}],["meta",{"property":"article:tag","content":"文法分析"}],["meta",{"property":"article:published_time","content":"2023-12-15T08:05:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T09:30:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"实现简易编译器和解释器\\",\\"image\\":[\\"https://dingdingdang.online/cover/the-super-tiny-compiler.png\\"],\\"datePublished\\":\\"2023-12-15T08:05:45.000Z\\",\\"dateModified\\":\\"2024-03-18T09:30:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"最终效果","slug":"最终效果","link":"#最终效果","children":[{"level":3,"title":"解释器测试","slug":"解释器测试","link":"#解释器测试","children":[]},{"level":3,"title":"编译器测试","slug":"编译器测试","link":"#编译器测试","children":[]}]},{"level":2,"title":"具体实现","slug":"具体实现","link":"#具体实现","children":[{"level":3,"title":"词法分析器、语法分析器、转换器、代码生成器","slug":"词法分析器、语法分析器、转换器、代码生成器","link":"#词法分析器、语法分析器、转换器、代码生成器","children":[]},{"level":3,"title":"编译器、解释器","slug":"编译器、解释器","link":"#编译器、解释器","children":[]},{"level":3,"title":"终端工具","slug":"终端工具","link":"#终端工具","children":[]}]}],"git":{"createdTime":1703084912000,"updatedTime":1710754240000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":2}]},"readingTime":{"minutes":1.54,"words":463},"filePathRelative":"理论/2023-12-15-实现简易编译器和解释器/index.md","localizedDate":"2023年12月15日","excerpt":"","autoDesc":true}');export{z as comp,V as data};
