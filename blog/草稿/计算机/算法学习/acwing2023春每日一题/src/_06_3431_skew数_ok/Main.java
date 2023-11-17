package _06_3431_skew数_ok;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        while (sc.hasNextLine()) {
            System.out.println(toNum(sc.nextLine()));
        }
    }

    static long toNum(String skew) {
        long res = 0;
        for (int i = skew.length() - 1,k=1; 0 <= i; i--,k++)
            res += (skew.charAt(i) - '0') * (Math.pow(2, k) - 1);
        return res;
    }

}