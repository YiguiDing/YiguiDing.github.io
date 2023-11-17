package _02_数据结构;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _07_KMP {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(new BufferedInputStream(System.in));
		String s1 = scanner.next();
		String s2 = scanner.next();
		System.out.println(kmp(s1, s2));
	}
	static int kmp(String str1,String str2) {
		char[] s1 = str1.toCharArray();
		char[] s2 = str2.toCharArray();
		int[] next = new int[s2.length];
		getNextArray(s2, next);
		int p1=0,p2=0;
		while(p1<s1.length&&p2<s2.length) {
			if(s1[p1]==s2[p2]) {
				p1++;p2++;
			}else if(next[p2]!=-1) {
				p2=next[p2];
			}else {
				p1++;
			}
		}
		return p2==s2.length? p1-p2:-1;
	}
	static void getNextArray(char[] str,int[] next) {
		next[0]=-1;next[1]=0;
		for (int i = 2; i < next.length; i++) {
			for (int preIdx = next[i-1]; 0<=preIdx; preIdx=next[preIdx]) {
				if(str[preIdx]==str[i-1]) {
					next[i]=preIdx+1;
					break;
				}
			}
		}
	}
}
