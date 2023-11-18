---
title: codeforce897_A_Unit_Array单位数组
date: 2023-06-19T00:25:00+08:00
cover: /cover/default_cover.jpg
tag: [codeforce,JAVA,算法,刷题笔记]
category: 算法
---


**思路**

```text
A = [a_1 a_2 a_3 .... a_n]

a_i ∈ {-1,1}

∑{a_i} >= 1
∏{a_i} == 1


-1 * -1 = 1
1 * 1 =  1

-1 * 1 =  -1
1 * -1 =  -1


1的个数是无所谓的，其个数不会影响乘积的结果 
-1的个数应当是偶数个或0个 这样才能保证-1相乘抵消得1

1的个数应当至少比-1的个数多1 这样和才能>=1

设
1的个数是x
-1的个数是y
则
y%2==0 || y==0
x+1 >= y

cnt = 0
dfs(x,y){
    if(x+1<y){
        cnt++;
        dfs(x+1,y-1)
    }else if(y%2==1){
        cnt++
        dfs(x+1,y-1)
    }
}
```

**代码**

```java
// package _A_Unit_Array;
// 提交状态：AC 通过

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class Main {
    /*
     * A = [a_1 a_2 a_3 .... a_n]
     * 
     * a_i ∈ {-1,1}
     * 
     * ∑{a_i} >= 1
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
     * 和>=0：
     * 1的个数应当>=-1的个数 这样和才能>=0
     * 
     * 设
     * 1的个数是x
     * -1的个数是y
     * 则
     * y%2==0
     * x>=y
     */
    static int MAX_VAL = 0x3f3f3f3f;

    static int dfs(int x, int y) {
        if (y % 2 == 0 && x >= y) {
            return 0;
        } else {
            int k1, k2;
            // 把-1变成1 但是要保证当前1的个数不能是0
            k1 = (y != 0) ? dfs(x + 1, y - 1) : MAX_VAL;
            // 把1变成-1 但是要保证当前1的个数不是0，且：要保证变化后1的数量>=-1的数量（剪枝，否则超时）
            k2 = (x != 0 && x - 1 >= y + 1) ? dfs(x - 1, y + 1) : MAX_VAL; 
            return 1 + Math.min(k1, k2);
        }
    }

    public static void main(String[] args) {
        int n = nextInt();
        while (n-- != 0) {
            int m = nextInt();
            int x = 0, y = 0; 
            for (int i = 0; i < m; i++) {
                int t = nextInt();
                if (t == 1) x++;// 统计1和-1的数量
                else y++;
            }
            int cnt = dfs(x, y);
            printer.println(cnt);
        }
        printer.flush();
    }

    static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
    static PrintWriter printer = new PrintWriter(writer);
    static String[] tokens = null;
    static int idx = 0;

    static int nextInt() {
        nextToken();
        return Integer.parseInt(tokens[idx]);
    }

    static void nextToken() {
        idx++;
        if (tokens == null || idx == tokens.length) {
            try {
                tokens = reader.readLine().split(" ");
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            idx = 0;
        }
    }
}
```
