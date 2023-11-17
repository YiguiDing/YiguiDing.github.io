package _01_入门阶段._03_字符串基础.P5015标题统计;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
    	Scanner sc = new Scanner(System.in);
    	String str = sc.nextLine();
    	int cnt = 0;
    	for(char ch:str.toCharArray()) {
    		if(!Character.isWhitespace(ch)) {
    			cnt++;
    		}
    	}
    	System.out.println(cnt);
    }
}
