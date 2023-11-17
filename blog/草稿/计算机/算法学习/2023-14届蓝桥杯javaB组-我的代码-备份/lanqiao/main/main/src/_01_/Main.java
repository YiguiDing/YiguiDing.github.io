package _01_;

import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {
        // 1 2 3
        // 1 2 6 = 9
        BigInteger num = new BigInteger("1");
        BigInteger Max = new BigInteger("202320232023");
        BigInteger temp = new BigInteger("1");
        BigInteger sum = new BigInteger("0");
        while (num.compareTo(Max) <= 0) {
            temp = temp.multiply(num);
            sum = sum.add(temp);
            num = num.add(BigInteger.ONE);
        }
        System.out.println(sum);
    }

}
