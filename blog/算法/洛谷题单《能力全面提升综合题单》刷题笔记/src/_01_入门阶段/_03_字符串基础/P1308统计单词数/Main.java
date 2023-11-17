package _01_入门阶段._03_字符串基础.P1308统计单词数;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String target = sc.nextLine().toLowerCase();
		String content = sc.nextLine().toLowerCase();
		
		String regex = "\\b"+target+"\\b";

		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(content); // 获取 matcher 对象
		
		int idx = -1;
		int cnt = 0;
		while(m.find()) {
			if(idx==-1) {
				idx=m.start();
			}
			cnt++;
		}
		if(idx!=-1) {
			System.out.println(cnt+" "+idx);
		}else {
			System.out.println(-1);
		}
	}
}
