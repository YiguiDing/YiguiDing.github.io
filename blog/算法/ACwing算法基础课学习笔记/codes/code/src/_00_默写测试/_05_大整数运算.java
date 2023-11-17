package _00_默写测试;

import java.io.BufferedInputStream;
import java.util.Scanner;
import java.util.Vector;

public class _05_大整数运算 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        Vector<Integer> n1 = numStrToVec(sc.next());
        Vector<Integer> n2 = numStrToVec(sc.next());
        Vector<Integer> n3 = add(n1, n2);
        Vector<Integer> n4 = sub(n1, n2);
        Vector<Integer> n5 = mul(n1, n2);
        System.out.println(vecToNumStr(n3));
        System.out.println(vecToNumStr(n4));
        System.out.println(vecToNumStr(n5));
    }

    static Vector<Integer> numStrToVec(String num) {
        Vector<Integer> res = new Vector<>();
        for (int i = num.length() - 1; 0 <= i; i--)
            res.add(num.charAt(i) - '0');
        return res;
    }

    static String vecToNumStr(Vector<Integer> num) {
        StringBuilder sb = new StringBuilder();
        for (Integer integer : num)
            sb.append(integer);
        sb.reverse();
        return sb.toString();
    }

    static Vector<Integer> add(Vector<Integer> a1, Vector<Integer> a2) {
        Vector<Integer> res = new Vector<>();
        int t = 0;// 进位
        for (int i = 0; i < a1.size() || i < a2.size(); i++) {
            if (i < a1.size())
                t += a1.get(i);
            if (i < a2.size())
                t += a2.get(i);
            res.add(t % 10);
            t /= 10;
        }
        if (t == 1)
            res.add(1);
        return res;
    }

    // 0 <= a2 <= a1
    static Vector<Integer> sub(Vector<Integer> a1, Vector<Integer> a2) {
        Vector<Integer> res = new Vector<>();
        int t = 0;// 借位
        for (int i = 0; i < a1.size(); i++) {
            int k = 10 + a1.get(i) - t;// 加10表示提前借一位
            if (i < a2.size())
                k = k - a2.get(i);
            res.add(k % 10);
            if (k - 10 < 0)
                t = 1;// 如果不借10结果为负则说明必须借位
            else
                t = 0;
        }
        while(res.size()!=1&&res.firstElement()==0)
            res.remove(res.size()-1);
        return res;
    }

    static Vector<Integer> mul(Vector<Integer> a1, Vector<Integer> a2) {
        Vector<Integer> res = new Vector<>();
        for (int i = 0; i < a1.size(); i++) {
            for (int j = 0; j < a2.size(); j++) {
                int pos = i + j;
                int num = a1.get(i) * a2.get(j);
                while (pos >= res.size())
                    res.add(0);// 保证访问pos位置时不保存，有这个位置。
                res.set(pos, res.get(pos) + num);
            }
        }
        for (int i = 0; i < res.size(); i++) {
            if (res.get(i) >= 10) {
                if (i == res.size())
                    res.add(0);
                res.set(i + 1, res.get(i + 1) + res.get(i) / 10);
                res.set(i, res.get(i) % 10);
            }
        }
        return res;
    }
}
