package _03_数据结构;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
/*
提交状态: AC
输入
5
I abc
Q abc
Q ab
I ab
Q ab
输出
1
0
1
 * */
public class _08_Trie_复习 {
	static class Trie{
		int pass,end;
		Trie[] next = new Trie['z'-'A'+1];
		void insert(String str) {
			Trie cur = this;
			cur.pass++;
			for(int i=0;i<str.length();i++) {
				int dir = str.charAt(i)-'A';
				if(cur.next[dir]==null) cur.next[dir]=new Trie();
				cur.next[dir].pass++;
				cur = cur.next[dir];
			}
			cur.end++;
		}
		int search(String str) {
			Trie cur = this;
			if(str.length()==0) return cur.end;
			for(int i=0;i<str.length();i++) {
				int dir = str.charAt(i)-'A';
				if(cur.next[dir]==null) return 0;
				if(cur.next[dir].pass==0) return 0;
				cur = cur.next[dir];
			}
			return cur.end;
		}
		void remove(String str) {
			if(search(str)==0) return;
			Trie cur = this;
			for(int i =0;i<str.length();i++) {
				int dir = str.charAt(i)-'A';
				cur.next[dir].pass--;
				if(cur.next[dir].pass==0) {
					 cur.next[dir]=null;
					 return;
				}
				cur=cur.next[dir];
			}
			cur.end--;
		}
	}
	public static void main(String[] args) throws NumberFormatException, IOException  {
		Trie trie = new Trie();
		int N = Integer.parseInt(br.readLine());
		
		while(N--!=0) {
			String[] ops = br.readLine().split(" ");
			if("I".equals(ops[0])) {
				String x= ops[1];
				trie.insert(x);
				
			}else if("Q".equals(ops[0])) {
				String x= ops[1];
				pw.println(trie.search(x));
			}
		}
		pw.flush();
	}
	static BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw =new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw =new PrintWriter(bw);

	static int nextInt() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return (int) st.nval;
	}
	static String nextStr() {
		try {
			st.nextToken();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		return st.sval;
	}
}
