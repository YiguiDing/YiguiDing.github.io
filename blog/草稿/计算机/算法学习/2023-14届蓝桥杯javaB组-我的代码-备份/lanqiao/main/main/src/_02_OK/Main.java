package _02_OK;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        int idx = 1;
        int num = 1;
        while (idx<=2023) {
            if (    
                    check(num, 2) &&
                    check(num, 8) &&
                    check(num, 10) &&
                    check(num, 16)
                ) {
                System.out.println(idx + " " + num);
                idx++;
            }
            num++;
        }

    }

    static boolean check(int num, int base) {
        int baseSum = 0;
        int temp = num;
        while (temp != 0) {
            baseSum += temp % base;
            temp /= base;
        }
        // System.out.println("baseSum:"+baseSum);
        return num % baseSum == 0;
    }
}
