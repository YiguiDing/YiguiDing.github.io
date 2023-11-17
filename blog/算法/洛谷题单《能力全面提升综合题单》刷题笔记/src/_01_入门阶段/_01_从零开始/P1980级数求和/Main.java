package _01_入门阶段._01_从零开始.P1980级数求和;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        int n = 0;
        double s = 0;
        while(s<k){
            s+=1.0/++n;
        }
        System.out.println(n);
    }

    public static void main0(String[] args) {
        // 错误尝试
        // 不必使用有理数分式来计算，因为当k很大时，n也急剧增大，
        // s的分子分母数组位数也极具增大，无法单纯用long表示，
        // 应该仅在有理数**等值判断**时才使用有理分式。
        Scanner sc = new Scanner(System.in);
        Frac k = new Frac(sc.nextInt(), 1);
        Frac s = new Frac(0, 1);
        int n = 0;
        while (s.compareTo(k) <= 0) {
            s = s.add(new Frac(1, ++n));
            System.out.println(s);
        }
        ;
        System.out.println(n);
    }
}

/**
 * Frac
 */
class Frac {
    long a, b;

    public Frac(long a, long b) {
        this.a = a;
        this.b = b;
        long k = gcd(Math.abs(a), Math.abs(b));
        this.a /= k;
        this.b /= k;
    }

    Frac add(Frac other) {
        return new Frac(this.a * other.b + other.a * this.b, this.b * other.b);
    }

    public long compareTo(Frac other) {
        return this.a * other.b - other.a * this.b;
    }

    long gcd(long a, long b) {
        return b == 0 ? a : gcd(b, a % b);
    }

    @Override
    public String toString() {
        return "Frac [" + a + "/" + b + "]";
    }

}
