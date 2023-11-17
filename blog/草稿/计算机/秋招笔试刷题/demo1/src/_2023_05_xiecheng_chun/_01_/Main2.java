package _2023_05_xiecheng_chun._01_;

import java.util.Scanner;

// 20分钟做完
/**
 * 2023年携程春招笔试第五批
 * 1.
 * 游游的整数切割
 * 游游拿到了一个正整数，她希望将它切割成两部分，使得它们的和为偶数。游游想知道有多少种合法的切割方案？
 * 注：切割后的正整数允许出现前导零。
 * 时间限制：C/C++ 1秒，其他语言2秒
 * 空间限制：C/C++ 256M，其他语言512M
 * 输入描述：
 * 一个正整数，大小不超过10^{100000}
 * 输出描述：
 * 一个整数，代表切割的方案数。
 * 示例1
 * 输入例子：
 * 103
 * 输出例子：
 * 1
 * 例子说明：
 * 切割成1+03=4是合法的，但10+3=13为奇数，不符合要求。所以有1种合法方案。
 */
public class Main2 {
    static boolean isObb(char ch) {
        return ch == '1' || ch == '3' || ch == '5' || ch == '7' || ch == '9';
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String num = sc.nextLine();
        Integer end = num.length();
        Integer cnt = 0;
        for (int i = 0; i < end - 1; i++) {
            // 奇数+奇数= 偶数 1+3 =4
            // 奇数+偶数= 奇数 1+2 =3
            // 偶数+偶数= 偶数 2+2 =4
            char n1 = num.charAt(i);
            char n2 = num.charAt(end - 1);
            // System.out.println(n1);
            // System.out.println(n2);
            if ((isObb(n1) && isObb(n2)) || (!isObb(n1) && !isObb(n2))) {
                cnt++;
            }
        }
        System.out.println(cnt);
    }
}
