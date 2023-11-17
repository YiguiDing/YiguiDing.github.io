package _01_基础算法;

import java.util.Scanner;

public class _10_双指针_单词输出 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String words = sc.nextLine();
        for (int start = 0, end = 0; start < words.length(); start++) {
            end=start;
            while(end<words.length() && words.charAt(end)!=' ')end++;
            for (int idx = start; idx < end; idx++) 
                System.out.print(words.charAt(idx));
            System.out.println("");
            start=end;
        }
    }
}
