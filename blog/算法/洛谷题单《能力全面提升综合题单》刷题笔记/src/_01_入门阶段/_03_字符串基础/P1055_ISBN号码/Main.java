package _01_入门阶段._03_字符串基础.P1055_ISBN号码;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String ISBN = sc.nextLine();//x-xxx-xxxxx-x
		
		int k = 1;
		int s = 0;
		for (int i = 0; i < ISBN.length()-1; i++) {
			char ch = ISBN.charAt(i);
			if(ch=='-')continue;
			int n = ch-'0';
			s+=(n*k++)%11;
		}
		s%=11;
		char correntEnd = (char)(s==10? 'X':s+'0');
		if(correntEnd==ISBN.charAt(ISBN.length()-1)) {
			System.out.println("Right");
		}else {
			StringBuilder sBuilder = new StringBuilder();
			sBuilder.append(ISBN);
			sBuilder.setCharAt(sBuilder.length()-1, correntEnd);
			System.out.println(sBuilder.toString());
		}
	}
}
