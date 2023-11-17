package _2023_05_xiecheng_chun._03_;

// 没做出来
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;

/**
 * 3.
 * 游游刷题
 * 游游制定了一个刷题计划，她找到了
 * �
 * n套试卷，每套试卷的题目数量为
 * �
 * �
 * a
 * i
 * ​
 * 。游游每天上午最多打开一套试卷，下午最多打开一套试卷，也可以选择不刷题而摸鱼。当游游打开一套试卷后，她就会把上面的题目全部刷完。但是游游有强迫症，她希望每天刷的题目总数均为
 * �
 * k的倍数。请你计算游游最多能刷多少天的题？
 * 时间限制：C/C++ 1秒，其他语言2秒
 * 空间限制：C/C++ 256M，其他语言512M
 * 输入描述：
 * 第一行输入两个正整数n和k。
 * 第二行输入n个正整数a_i
 * 1\leq n \leq 10^5
 * 1\leq k,a_i \leq 10^9
 * 输出描述：
 * 一个整数，代表游游最多能刷题的天数。
 * 示例1
 * 输入例子：
 * 5 3
 * 1 2 3 4 5
 * 输出例子：
 * 3
 * 例子说明：
 * 第一天上午刷1号试卷，下午刷5号试卷，总共刷6题。
 * 第二天上午摸鱼，下午刷3号试卷，总共刷3题。
 * 第三天上午刷4号试卷，下午刷2号试卷，总共刷6题。
 * 示例2
 * 输入例子：
 * 5 3
 * 1 1 1 1 1
 * 输出例子：
 * 0
 * 例子说明：
 * 显然，游游没有任何一个方案可以开始刷题。
 */

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static StreamTokenizer st = new StreamTokenizer(br);
    static PrintWriter pw = new PrintWriter(bw);

    static int nextInt() throws Exception {
        st.nextToken();
        return (int) st.nval;
    }

    static String nextStr() throws Exception {
        st.nextToken();
        return st.sval;
    }

    public static void main(String[] args) throws Exception {
        int n = nextInt(), k = nextInt();
        int a[] = new int[n];
        for (int i = 0; i < a.length; i++) {
            a[i] = nextInt();
        }
        int dp[][] = new int[n][n];
        for (int day = 0; day < dp.length; day++) {

        }
        // (a[i]+a[j])%3==0

        // dp[day][剩余题数] = dp[day-1][剩余题数-今日刷题数]+今日刷题数

        // dp[day][0]

        // 第一天的方案：1 2 ； 1 3 ； 1 4； 1 5..... 选出符合要求的所有组合 (什么是剩余的选项，如何保存状态？)
        // 第二天的方案： 在前一天的剩余的选项中 选出符合要求的所有组合
        // 第三天的方案： 在前一天的剩余的选项中 选出符合要求的所有组合
        // ... 没有组合了...
        // 找出，最后把所有方案都挑完的那一天

        // dp[day][剩余任务量] = {1,2}

    }
}
