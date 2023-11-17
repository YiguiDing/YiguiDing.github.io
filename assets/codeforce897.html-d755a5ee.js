import{_ as n,o as i,c as e,e as s}from"./app-8da63f05.js";const d={},l=s(`<p><strong>思路</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>A = [a_1 a_2 a_3 .... a_n]

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function a(c,r){return i(),e("div",null,v)}const m=n(d,[["render",a],["__file","codeforce897.html.vue"]]);export{m as default};
