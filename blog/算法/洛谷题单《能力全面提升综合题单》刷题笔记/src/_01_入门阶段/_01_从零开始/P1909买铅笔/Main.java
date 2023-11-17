package _01_入门阶段._01_从零开始.P1909买铅笔;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();// 需要的铅笔数
        int[][] data = new int[3][2];
        for (int i = 0; i < data.length; i++) {
            data[i][0] = sc.nextInt();// 该包装铅笔数量
            data[i][1] = sc.nextInt();// 该包装铅笔价格
        }

        // 一共就三种选择，只能选一种，找出最便宜的一种即可
        int price = Integer.MAX_VALUE;
        for (int i = 0; i < data.length; i++) {
            int val = (int)Math.ceil(/*向上取整*/n / (double) data[i][0])/* 数量 */ * data[i][1]/* 价格 */;
            if(val<price)price=val;
        }
        System.out.println(price);
    }
}
