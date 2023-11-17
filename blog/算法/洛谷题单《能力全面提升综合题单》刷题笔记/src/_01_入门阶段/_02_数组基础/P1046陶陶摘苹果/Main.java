package _01_入门阶段._02_数组基础.P1046陶陶摘苹果;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] inputs = sc.nextLine().split(" ");
        int self_height= sc.nextInt();
        int[] apple_heights = new int[inputs.length];
        for (int i = 0; i < apple_heights.length; i++) {
            apple_heights[i] = Integer.valueOf(inputs[i]);
        }
        int res =0;
        for (int i = 0; i < apple_heights.length; i++) {
            if(self_height+30>=apple_heights[i]){
                res++;
            }
        }
        System.out.println(res);
    }
}
