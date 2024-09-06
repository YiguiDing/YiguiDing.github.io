import{_ as s,c as n,e as i,o as e}from"./app-CHjqYunX.js";const a="/assets/image1-BubhDV_E.png",t="/assets/image2-C5H4eeJb.png",d="/assets/image6-DQveffHr.png",c="/assets/image3-DsvbvcOB.png",r="/assets/image4-C0oAeARs.png",p="/assets/image5-pyB1tugO.png",o="/assets/image7-BBw3KaB1.png",u="/assets/image8-CbIzU6QQ.png",v="/assets/image9-DBUN0t_F.png",g="/assets/image10-CQI-ckaZ.png",m="/assets/image11-DxolKT7Q.png",b="/assets/image12-DkvhJl7u.png",x="/assets/image13-UNAtKrlw.png",h="/assets/image14-DgcH6Mgn.png",E={};function y(A,l){return e(),n("div",null,l[0]||(l[0]=[i(`<p><strong>乔姆斯基语言分类法</strong></p><ul><li><strong>0型文法(1型文法)</strong> ： 上下文有关文法，（产生式的左部参杂着终结符）</li><li><strong>2型文法</strong> ： 上下文无关文法，（产生式的左部只有非终结符）</li><li><strong>3型文法</strong> ： 正规文法 <ul><li>每个规则只能具有下面两种形式，并且正规文法中只能出现其中一种 <ul><li>第一种(终结符+非终结符) <ul><li><code>A::=a</code></li><li><code>A::=aB</code> (右线性文法)</li></ul></li><li>第二种(非终结符+终结符) <ul><li><code>A::=a</code></li><li><code>A::=Ba</code> (左线性文法)</li></ul></li></ul></li></ul></li></ul><p><strong>语法分析树（推导树）</strong></p><ul><li>语法树上的每一个节点都是终结符或非终结符</li><li>树根是文法的开始符</li><li>分支， <ul><li>有分支的一定是非终结符，</li><li>没有分支的，无法判定</li><li>一个节点有分支，一定能找到一条规则 <ul><li>B节点有两个子节点，则文法中一定有一条规则： <code>B-&gt;bd</code></li></ul></li></ul></li><li>子树：某节点的子树就是该节点及其向下的部分，</li><li>层数：比如下面的案例，S有3层，A有2层，B有1层。</li><li>简单子树：只含有单层分支的子树（层数为1的子树），如B</li><li>最左推导：每一步的推导总是替换掉最左边的非终结符</li><li>最右推导（规范推导）：（反过来）</li><li>规约序列： <ul><li>最左规约为规范规约。</li><li>从句子通过一次次规约，规约到文法开始符号，就可以证明该句子是该文法所定义的语言中的一个句子。</li><li>最左规约和最有推导互为逆过程</li></ul></li><li>规范句型（右句型） <ul><li>通过规范推导得出的句型都叫规范句型。</li></ul></li></ul><p><strong>案例</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">G[S]:</span>
<span class="line">  S-&gt;aAB</span>
<span class="line">  A-&gt;Ba|a</span>
<span class="line">  B-&gt;bd</span>
<span class="line"></span>
<span class="line">最左推导过程：</span>
<span class="line"></span>
<span class="line">S =&gt; aAB =&gt; a(Ba|a)B =&gt; a((bd)a|a)B =&gt; a((bd)a|a)(bd)</span>
<span class="line"></span>
<span class="line">最右推导过程（规范推导）：</span>
<span class="line"></span>
<span class="line">S =&gt; aAB =&gt; aA(bd) =&gt; a(Ba|a)((Ba|a)) =&gt; a((bd)a|a)(bd)</span>
<span class="line"></span>
<span class="line">上面的 aAB aAbd 都是规范句型，最后一个是句子，但句子也是特殊的句型，所以最后一个也是规范句型。</span>
<span class="line"></span>
<span class="line">最左规约（规范规约）序列：</span>
<span class="line">abdabd =△&gt; aBabd =△&gt; aAbd =△&gt; aAB =△&gt; S</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">推导树：</span>
<span class="line"></span>
<span class="line">S</span>
<span class="line">|____</span>
<span class="line">| | |</span>
<span class="line">a A B</span>
<span class="line">  | |__</span>
<span class="line">  | | |</span>
<span class="line">  | b d</span>
<span class="line">  |__</span>
<span class="line">  | |</span>
<span class="line">  B a</span>
<span class="line">  |__</span>
<span class="line">  | |</span>
<span class="line">  b d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>二义性</strong></p><ul><li>如果一个文法存在某个句子对应两颗完全不同语法树，则说这个文法是二义性的,这个句子是二义性句子 <ul><li>或者说一个文法中只要有某个句子，他的左推导和右推导是不同的，则这个文法是二义性的文法，这个句子是二义性的句子</li></ul></li><li>句型：一个句型可以有多课语法树，最左推导和最右推导可以不同</li><li>句子: 一个句子只能有一颗语法树，最左推导和最右推导必须相同，否则就是具有二义性</li><li>注意：文法的二义性和语言的二义性概念不同</li><li>如果一个语言的所有文法都是二义性文法，则称该语言是先天性二义性语言</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">这个文法就是二义性文法，因为左推导和右推导将推出完全不同的推导树。</span>
<span class="line">G[E]: E -&gt; E+E -&gt; E*E -&gt; (E) | i</span>
<span class="line">左推导：E =&gt; E+E =&gt; E*E+E =&gt; i*i+i</span>
<span class="line">右推导：E =&gt; E+E =&gt; E+E*E =&gt; i+i*i</span>
<span class="line"></span>
<span class="line">由于之前写过编译器和解释器，这里尝试着消除二义性：</span>
<span class="line"></span>
<span class="line">G[AddExpression]:</span>
<span class="line">  AddExpression</span>
<span class="line">    := MutExpression</span>
<span class="line">    |  AddExpression + MutExpression</span>
<span class="line">    ;</span>
<span class="line">  MutExpression</span>
<span class="line">    := FactorExpression</span>
<span class="line">    |  MutExpression * FactorExpression</span>
<span class="line">    ;</span>
<span class="line">  FactorExpression</span>
<span class="line">  := BracketedExpression</span>
<span class="line">  |  i</span>
<span class="line">  ;</span>
<span class="line">  BracketedExpression</span>
<span class="line">  := (  AddExpression  )</span>
<span class="line">  ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>句型的分析</strong></p><ul><li>语法树是句型推导的几何表示（上下文无关文法）</li><li>语法树是句型分析的好工具</li><li>句型分析就是识别符号串是否为某文法的句型</li><li>这也是为什么语法树也被叫做分析树、语法分析树</li><li>完成句型分析的程序成为分析程序、识别程序</li><li>分析算法又称为识别算法</li></ul><p><strong>分析算法</strong></p><ul><li>从左到右的分析算法 <ul><li>自顶向下分析法 <ul><li>从文法的开始符号出发，反复用各种产生式，寻找和输入字符串匹配的推导。</li><li><img src="`+a+'" alt=""></li></ul></li><li>自底向上分析法 <ul><li>从输入符号串开始，逐步进行规约，直至规约到文法的开始符号</li><li><img src="'+t+`" alt=""></li></ul></li></ul></li><li>从右到左的分析算法</li></ul><p><strong>自底向上分析法</strong></p><ul><li>短语：在一个子树中，末端节点是子树树根的短语。</li><li>简单短语(直接短语)：在一个简单子树中，由末端节点所组成的符号串就是简单子树树根的简单短语。</li><li>句柄：最左简单子树的末端节点组成的符号串是句柄。 <ul><li>句柄只适用于规范句型，规范句型只在规范推导中出现，</li><li>规范推导就是最右推导，最右推导又对应着最左规约。</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">G[S]:</span>
<span class="line">  S-&gt;aAB</span>
<span class="line">  A-&gt;Ba|a</span>
<span class="line">  B-&gt;bd</span>
<span class="line"></span>
<span class="line">最左推导过程：</span>
<span class="line">S =&gt; aAB =&gt; a(Ba|a)B =&gt; a((bd)a|a)B =&gt; a((bd)a|a)(bd) =&gt; abdabd | aabd</span>
<span class="line"></span>
<span class="line">推导树：</span>
<span class="line">S</span>
<span class="line">|____</span>
<span class="line">| | |</span>
<span class="line">a A B</span>
<span class="line">  | |__</span>
<span class="line">  | | |</span>
<span class="line">  | b d</span>
<span class="line">  |__</span>
<span class="line">  | |</span>
<span class="line">  B a</span>
<span class="line">  |__</span>
<span class="line">  | |</span>
<span class="line">  b d</span>
<span class="line"></span>
<span class="line">求句型abdabd的短语、简单短语、句柄。</span>
<span class="line"></span>
<span class="line">短语</span>
<span class="line">abdabd是该句型相对于S的短语</span>
<span class="line">bda是该句型相对于A的短语</span>
<span class="line">bd是该句型相对于B的短语</span>
<span class="line"></span>
<span class="line">简单短语（找出短语之后，找出哪些只有一层的子树）：</span>
<span class="line">bd是该句型相对于B的简单短语</span>
<span class="line"></span>
<span class="line">句柄(找出所有简单短语中最左边的)：</span>
<span class="line">bd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正规式和有穷自动机" tabindex="-1"><a class="header-anchor" href="#正规式和有穷自动机"><span>正规式和有穷自动机</span></a></h3><ul><li>正规式：将<strong>符号表</strong><code>Σ</code>上的字母用 <code>*</code> <code>.</code> <code>|</code>连接组成的表达式 <ul><li><code>()</code> 括号的优先级最高, 然后依次为：</li><li><code>*</code> 字符的闭包运算，</li><li><code>.</code> 字符的乘积运算，这个符号有时候可以省略</li><li><code>|</code> 字符的加法运算，读作或，也可以写成 <code>+</code></li></ul></li><li>正规集：由<strong>正规式所描述的符号串</strong>所组成的集合</li><li>正规式与正规集的案例 <ul><li><img src="`+d+`" alt=""></li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">正规式描述标识符：</span>
<span class="line"></span>
<span class="line">(a|b|c|....|z)(a|..|z|0|...0)*</span>
<span class="line"></span>
<span class="line">文法描述：</span>
<span class="line"></span>
<span class="line">G[&lt;标识符&gt;]:</span>
<span class="line">            &lt;标识符&gt; -&gt; &lt;字母&gt;</span>
<span class="line">            &lt;标识符&gt; -&gt; &lt;标识符&gt;&lt;数字&gt;</span>
<span class="line">            &lt;字母&gt; -&gt; a|b|c|...|z</span>
<span class="line">            &lt;数字&gt; -&gt; 0|1|2|...|9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DFA的构造</strong></p><ul><li>乘积运算可以在状态图的中间加一个状态来实现</li><li>或运算可以用两条箭头来实现</li><li>闭包运算是一个自循环,前后两个空字符串</li><li>开始状态一个圈，结束状态两个圈 <ul><li><img src="`+c+'" alt=""></li><li><img src="'+r+'" alt=""></li></ul></li></ul><p><strong>根据文法构建状态机</strong></p><ul><li><img src="'+p+`" alt=""></li></ul><p><strong>五元组定义DFA</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">D_1 = (</span>
<span class="line">  状态的集合K,</span>
<span class="line">  状态机可接受的终结符Σ,</span>
<span class="line">  转换函数M,</span>
<span class="line">  有穷状态机初态S,</span>
<span class="line">  终止状态的集合F</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">K = {S,A,B,Z}</span>
<span class="line">Σ = {a,b}</span>
<span class="line">M:</span>
<span class="line">  M(S,a)=A   M(S,b)=B</span>
<span class="line">  M(A,a)=Z   M(A,b)=B</span>
<span class="line">  M(B,b)=Z   M(B,a)=A</span>
<span class="line">  M(Z,a)=Z</span>
<span class="line">S = S</span>
<span class="line">F = {Z}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>NFA的确定化</strong></p><ul><li>NFA：不确定的有穷自动机</li><li>DFA: 确定的有穷自动机</li><li>方法： <ul><li>子集法（可处理<code>ε</code>规则）</li><li>简化的子集法（不能处理ε规则）</li></ul></li></ul><p>例题</p><ul><li><img src="`+o+'" alt=""></li></ul><p>解</p><ul><li>先画出其状态转换表</li></ul><table><thead><tr><th style="text-align:center;">K\\Σ</th><th style="text-align:center;">0</th><th style="text-align:center;">1</th></tr></thead><tbody><tr><td style="text-align:center;">S</td><td style="text-align:center;">V,Q</td><td style="text-align:center;">Q,U</td></tr><tr><td style="text-align:center;">V</td><td style="text-align:center;">Z</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">Q</td><td style="text-align:center;">V</td><td style="text-align:center;">Q,U</td></tr><tr><td style="text-align:center;">U</td><td style="text-align:center;"></td><td style="text-align:center;">Z</td></tr><tr><td style="text-align:center;">Z</td><td style="text-align:center;">Z</td><td style="text-align:center;">Z</td></tr></tbody></table><ul><li>然后构造新的等价的<code>DFA(K&#39;,Σ,M&#39;,S&#39;,F&#39;)</code></li><li>这张表中就包含了<code>K&#39;</code> 和 <code>M&#39;</code></li></ul><table><thead><tr><th style="text-align:center;"><code>K&#39;</code>\\ Σ</th><th style="text-align:center;">0</th><th style="text-align:center;">1</th></tr></thead><tbody><tr><td style="text-align:center;">[S]</td><td style="text-align:center;">[V,Q]</td><td style="text-align:center;">[Q,U]</td></tr><tr><td style="text-align:center;">[V,Q]</td><td style="text-align:center;">[V,Z]</td><td style="text-align:center;">[Q,U]</td></tr><tr><td style="text-align:center;">[Q,U]</td><td style="text-align:center;">[V]</td><td style="text-align:center;">[Q,U,Z]</td></tr><tr><td style="text-align:center;">[V,Z]</td><td style="text-align:center;">[Z]</td><td style="text-align:center;">[Z]</td></tr><tr><td style="text-align:center;">[Q,U,Z]</td><td style="text-align:center;">[V,Z]</td><td style="text-align:center;">[Q,U,Z]</td></tr><tr><td style="text-align:center;">[V]</td><td style="text-align:center;">[Z]</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">[Q]</td><td style="text-align:center;">[V]</td><td style="text-align:center;">[Q,U]</td></tr><tr><td style="text-align:center;">[U]</td><td style="text-align:center;"></td><td style="text-align:center;">[Z]</td></tr><tr><td style="text-align:center;">[Z]</td><td style="text-align:center;">[Z]</td><td style="text-align:center;">[Z]</td></tr></tbody></table><ul><li><code>S&#39; = [S]</code><br> 新的开始状态</li><li><code>F&#39; = { [V,Z] , [Q,U,Z] , [Z] }</code><ul><li>新的终止状态状态，是所有状态中，包含旧的终止状态的集合</li></ul></li></ul><h2 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析"><span>语法分析</span></a></h2><h3 id="自顶向下的语法分析" tabindex="-1"><a class="header-anchor" href="#自顶向下的语法分析"><span>自顶向下的语法分析</span></a></h3><p><strong>LL(1)文法</strong></p><ul><li>第一个L，表示从左向右扫描</li><li>第二个L，表示最左推导</li><li>1 表示向前看1个字符</li></ul><p><strong>首符号集<code>First(α)</code></strong></p><ul><li>找到<code>α</code>最左边可能出现的终结符</li><li>技巧，向左看</li><li><img src="'+u+'" alt=""></li></ul><p><strong>后跟符号集Follow(A)</strong></p><ul><li>表示的是非终结符A后面可以跟的所有终结符的集合(A属于V_N)</li><li>求解步骤 <ol><li><code>#∈Follow(S)</code> S为识别符号 <ul><li>意思是先把<code>#</code>放入集合中</li><li><code>G[识别符号]:</code></li></ul></li><li>若存在规则<code>T-&gt;XWY</code>则 <code>First(y)-{ε}∈Follow(W)</code><ul><li>Y可能是终结符也可能是非终结符</li><li>这里就是说，W的后跟符号集，一定包含Y的首符号集减去空串。</li></ul></li><li>若存在规则<code>T-&gt;XW</code> 或(<code>T-&gt;XWY</code>,其中<code>Y =*=&gt; ε</code>),则<code>Follow(T)∈Follow(W)</code><ul><li>就是说T的后更符号集一定也是W的后跟符号集</li><li>比如aTb，使用T—&gt;XW规则，就变成了aXWb。这样，原来T后面的b自然就变成了W后面的了</li></ul></li></ol></li><li>技巧，向右看</li></ul><p><img src="'+v+`" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Follow(E) = {#} ∪ {)} = {#,)}</span>
<span class="line">Follow(T) = (First(E&#39;)-{ε}) ∪ Follow(E&#39;) = {+,#,)}</span>
<span class="line">Follow(E&#39;) = Follow(E) = {#,)}</span>
<span class="line">Follow(T&#39;) = Follow(T) = {+,#,)}</span>
<span class="line">Follow(F) = (First(T&#39;)-{ε}) ∪ Follow(T)  ∪ Follow(T&#39;) = {*,+,#,)}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>选择符号集合：SELECT(A-&gt;α)</strong></p><ul><li><p>如果<code>α</code>不能广义推导出<code>ε</code> 则 <code>SELECT(A-&gt;α) = First(α)</code></p></li><li><p>如果<code>α</code>能广义推导出<code>ε</code> 则 <code>(SELECT(A-&gt;α)-{ε}) ∪ Follow(A)</code></p></li><li><p><img src="`+g+'" alt=""></p></li></ul><p><strong>LL(1)文法</strong></p><ul><li>自顶向下的分析技术</li><li>对于每个非终极符A的任意两个产生式<code>A-&gt;α A-&gt;β</code></li><li>满足： <ul><li><code>Select(A-&gt;α) ∩ Select(A-&gt;β) = ∅</code></li><li><code>α</code>和<code>β</code>至多只能有一个能推导出<code>ε</code></li></ul></li><li>判定： <ul><li>含相同左部的产生式的可选集交集均为空集，则该文法是LL(1)文法。 <ul><li>其实说的就是上面的表达式。</li></ul></li><li>就是去看它的文法定义，找出所有左部相同的产生式,然后证明： <ul><li><code>Select(A-&gt;B) ∩ Select(A-&gt;B) ∩ Select(A-&gt;C) = ∅</code></li></ul></li></ul></li></ul><p><strong>将非LL(1)文法等价变化为LL(1)文法</strong></p><ul><li>提取左公因子 <ul><li><img src="'+m+'" alt=""></li><li><img src="'+b+'" alt=""></li></ul></li><li>消除左递归 <ul><li><img src="'+x+'" alt=""></li><li><img src="'+h+'" alt=""></li></ul></li><li>消除间接左递归 <ul><li>略</li></ul></li><li>消除文法中的一切左递归 <ul><li>略</li></ul></li></ul><p><strong>LL(1)文法分析的实现</strong></p><ul><li>递归下降法</li><li>表驱动</li></ul>',53)]))}const B=s(E,[["render",y],["__file","index.html.vue"]]),F=JSON.parse('{"path":"/%E7%90%86%E8%AE%BA/2023-12-23-%E3%80%90%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86%E3%80%91%E9%87%8D%E5%AD%A6%E7%AC%94%E8%AE%B0/","title":"【编译原理】重学笔记","lang":"zh-CN","frontmatter":{"title":"【编译原理】重学笔记","date":"2023-12-23T07:38:56.657Z","cover":"","tag":[],"category":[],"article":false,"description":"【编译原理】重学笔记 目录 【编译原理】重学笔记 目录 词法分析 基本概念 文法和语言 正规式和有穷自动机 语法分析 自顶向下的语法分析 词法分析 基本概念 编译程序是一种翻译程序，将源语言翻译成目标语言 基本步骤 词法分析 语法分析 语义分析 中间代码生成（优化） 目标代码生成（优化） 几个概念 字母表: Σ = {a,b,c} 符号串: 字母表Σ=...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E7%90%86%E8%AE%BA/2023-12-23-%E3%80%90%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86%E3%80%91%E9%87%8D%E5%AD%A6%E7%AC%94%E8%AE%B0/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"【编译原理】重学笔记"}],["meta",{"property":"og:description","content":"【编译原理】重学笔记 目录 【编译原理】重学笔记 目录 词法分析 基本概念 文法和语言 正规式和有穷自动机 语法分析 自顶向下的语法分析 词法分析 基本概念 编译程序是一种翻译程序，将源语言翻译成目标语言 基本步骤 词法分析 语法分析 语义分析 中间代码生成（优化） 目标代码生成（优化） 几个概念 字母表: Σ = {a,b,c} 符号串: 字母表Σ=..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-22T16:53:14.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:published_time","content":"2023-12-23T07:38:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-22T16:53:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"【编译原理】重学笔记\\",\\"description\\":\\"【编译原理】重学笔记 目录 【编译原理】重学笔记 目录 词法分析 基本概念 文法和语言 正规式和有穷自动机 语法分析 自顶向下的语法分析 词法分析 基本概念 编译程序是一种翻译程序，将源语言翻译成目标语言 基本步骤 词法分析 语法分析 语义分析 中间代码生成（优化） 目标代码生成（优化） 几个概念 字母表: Σ = {a,b,c} 符号串: 字母表Σ=...\\"}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"词法分析","slug":"词法分析","link":"#词法分析","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"文法和语言","slug":"文法和语言","link":"#文法和语言","children":[]},{"level":3,"title":"正规式和有穷自动机","slug":"正规式和有穷自动机","link":"#正规式和有穷自动机","children":[]}]},{"level":2,"title":"语法分析","slug":"语法分析","link":"#语法分析","children":[{"level":3,"title":"自顶向下的语法分析","slug":"自顶向下的语法分析","link":"#自顶向下的语法分析","children":[]}]}],"git":{"createdTime":1703553763000,"updatedTime":1721667194000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":14.23,"words":4269},"filePathRelative":"理论/2023-12-23-【编译原理】重学笔记/index.md","localizedDate":"2023年12月23日","excerpt":"","autoDesc":true}');export{B as comp,F as data};
