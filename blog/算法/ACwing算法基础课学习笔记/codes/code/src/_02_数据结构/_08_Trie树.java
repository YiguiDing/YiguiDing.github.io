package _02_数据结构;

import java.io.BufferedInputStream;
import java.util.Scanner;
/*
输入
11
I abc
I abc
I abcd
Q abc
R abc
Q abc
R abc
Q abc
Q abcd
R abcd
Q abcd
输出
2
1
0
1
0
 */
public class _08_Trie树 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(new BufferedInputStream(System.in));
		int N = scanner.nextInt(); scanner.nextLine();
		Trie trie = new Trie();
		while (N--!=0) {
			String[] in = scanner.nextLine().split(" ");
			String op = in[0];
			String str = in[1];
			switch(op) {
				case "I":
					trie.insert(str);
					break;
				case "Q":
					System.out.println(trie.query(str));
					break;
				case "R":
					trie.remove(str);
					break;
			}
		}
	}
	static class Trie{
		int pass,end;
		Trie[] next=new Trie[26];
		void insert(String str){
			Trie current= this;
			current.pass++;// 如果插入的是空串，根节点也会成功记录,根节点的end代表空串数
			for(int i=0;i<str.length();i++) {
				int direction = str.charAt(i)-'a';
				if(current.next[direction]==null) 
					current.next[direction]=new Trie();
				current = current.next[direction];
				current.pass++;
			}
			current.end++;
		}
		int query(String str) {
			Trie current= this;
			for(int i=0;i<str.length();i++) {
				int direction = str.charAt(i)-'a';
				if(current.next[direction]==null) 
					return 0;
				current = current.next[direction];
			}
			return current.end;
		}
		void remove(String str) {
			if(query(str)==0) return;
			Trie current= this;
			current.pass--;
			for(int i=0;i<str.length();i++) {
				int direction = str.charAt(i)-'a';
				current.next[direction].pass--;
				if(current.next[direction].pass==0) {
					// 说明这条路径上没有记录了，直接删除后序所有节点。
					current.next[direction]=null;
					return;
				}
				current = current.next[direction];
			}
			current.end--;
		}
	}
}
