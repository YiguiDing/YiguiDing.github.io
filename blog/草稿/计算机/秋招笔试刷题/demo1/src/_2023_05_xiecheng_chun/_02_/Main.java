package _2023_05_xiecheng_chun._02_;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;

/**
 * 用时 20分钟
 * 2.
 * 游游的除2操作
 * 游游拿到了一个数组，她每次可以进行如下操作：
 * ·选择一个元素，使其除以2，向下取整。
 * 游游想知道，她最少多少次操作可以使得所有元素相等？
 * 时间限制：C/C++ 2秒，其他语言4秒
 * 空间限制：C/C++ 256M，其他语言512M
 * 输入描述：
 * 第一行输入一个正整数n，代表数组的长度。
 * 第二行输入n个正整数a_i，代表数组的元素。
 * 1\leq n \leq 100000
 * 1\leq a_i \leq 10^9
 * 输出描述：
 * 一个整数，代表最少的操作次数。
 * 示例1
 * 输入例子：
 * 4
 * 1 2 1 3
 * 输出例子：
 * 2
 * 例子说明：
 * 第二个数和第四个数分别操作1次即可。
 * 示例2
 * 输入例子：
 * 1
 * 114514
 * 输出例子：
 * 0
 * 例子说明：
 * 不需要任何操作。
 */

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static StreamTokenizer st = new StreamTokenizer(br);
    static PrintWriter pw = new PrintWriter(bw);

    static int nextInt() throws IOException {
        st.nextToken();
        return (int) st.nval;
    }

    static String nexString() throws IOException {
        st.nextToken();
        return st.sval;
    }

    public static void main(String[] args) throws Exception {
        int n = nextInt();
        int nums[] = new int[n];
        for (int i = 0; i < nums.length; i++) {
            nums[i] = nextInt();
        }
        // Arrays.sort(nums);

        // 思路，先排序，后一个数比前一个数大，说明后一个数要化小，除一次，直到后一个数小于等于前一个数 循环整个过程
        // 1 2 3 4 5
        int cnt = 0;
        while (true) {
            Arrays.sort(nums);
            for (int i = 0; i < nums.length - 1; i++) {
                while (nums[i] < nums[i + 1]) {
                    nums[i + 1] = nums[i + 1] / 2;
                    cnt++;
                }
            }
            // 判断是否停止(O(n)),还可以优化，直接把这个过程写到上面的for循环里
            int min = Integer.MAX_VALUE;
            int max = Integer.MIN_VALUE;
            for (int j = 0; j < nums.length; j++) {
                min = Math.min(nums[j], min);
                max = Math.max(nums[j], max);
            }
            if (min == max)
                break;
        }

        // System.out.println(Arrays.toString(nums));
        pw.println(cnt);
        pw.flush();
    }
}
