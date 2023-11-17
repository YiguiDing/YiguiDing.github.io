package _2023_05_xiecheng_chun._01_;

import java.util.Scanner;

public class Main1 {
    static boolean isObb(String str) {
        return str.endsWith("1") || str.endsWith("3") || str.endsWith("5") || str.endsWith("7") || str.endsWith("9");
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String num = sc.nextLine();
        Integer end = num.length();
        Integer cnt = 0;
        for (int i = 1; i < end; i++) {
            // 奇数+奇数= 偶数 1+3 =4
            // 奇数+偶数= 奇数 1+2 =3
            // 偶数+偶数= 偶数 2+2 =4
            String n1 = num.substring(0, i);
            String n2 = num.substring(i, end);
            // System.out.println(n1);
            // System.out.println(n2);
            if ((isObb(n1) && isObb(n2)) || (!isObb(n1) && !isObb(n2))) {
                cnt++;
            }
        }
        System.out.println(cnt);
    }
}
