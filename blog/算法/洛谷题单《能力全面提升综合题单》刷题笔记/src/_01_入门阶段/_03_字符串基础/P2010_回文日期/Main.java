package _01_入门阶段._03_字符串基础.P2010_回文日期;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int from = sc.nextInt();
        int to = sc.nextInt();
        int cnt = 0;
        for (int cur = from; cur <= to; cur = getNextDate(cur)) {
            String s1 = cur + "";
            String s2 = new StringBuffer(s1).reverse().toString();
            if (s1.equals(s2)) {
                cnt++;
            }
        }
        System.out.println(cnt);
    }

    // 获取下一个日期
    static int getNextDate(int date) {
        // date:年年年月月日日
        // 润年：被400整除||（被4整除&&不被100整除）
        // 2月润28天平29天 
        // 4 6 9 11月30天，
        // 其他月31天
        int yyyy = date / 10000;
        int mm = date / 100 % 100;
        int dd = date % 100;
        dd++;
        switch (mm) {
            case 2:
                if (isRunYear(yyyy)) {
                    if (dd == 30/* 闰年2月正常应该29天，30天说明应该进位了 */) {
                        dd = 1;
                        mm++;
                    }
                } else {
                    if (dd == 29/* 正常应该28天，29天说明应该进位了 */) {
                        dd = 1;
                        mm++;
                    }
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (dd == 31/* 正常应该30天，31天说明应该进位了 */) {
                    dd = 1;
                    mm++;
                }
                break;
            default:
                if (dd == 32/* 正常应该31天，32天说明应该进位了 */) {
                    dd = 1;
                    mm++;
                }
                break;
        }
        if (mm == 13/* 正常最多12月，13说明应该进位了 */) {
            mm = 1;
            yyyy++;
        }
        return yyyy * 10000 + mm * 100 + dd;
    }

    static boolean isRunYear(int yyyy) {
        return yyyy % 400 == 0 || (yyyy % 4 == 0 && yyyy % 100 != 0);
    }
}
