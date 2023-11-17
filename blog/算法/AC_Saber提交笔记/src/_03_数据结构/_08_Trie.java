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
public class _08_Trie {
	static class Trie{
		int pass,end;
		Trie nexts[]=new Trie[26];
		 void insert(char[] str){
			 Trie cur=this;
			 cur.pass++;
			 for(int i=0;i<str.length;i++) {
				 int direction = str[i]-'a';
				 if(cur.nexts[direction]==null) cur.nexts[direction]=new Trie();
				 cur=cur.nexts[direction];
				 cur.pass++;
			 }
			 cur.end++;
		}
		 int query(char[] str) {
			 Trie cur = this;
			 if(cur.pass<=0) return 0;
			 for (int i = 0; i < str.length; i++) {
				 int dir = str[i]-'a';
				if(cur.nexts[dir]==null || cur.nexts[dir].pass<=0)return 0;
				cur=cur.nexts[dir];
			}
			return cur.end;
		 }
		 void remove(char[] str) {
			 Trie cur = this;
			 cur.pass--;
			 for (int i = 0; i < str.length; i++) {
				 int dir = str[i]-'a';
				cur=cur.nexts[dir];
				cur.pass--;
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
				trie.insert(x.toCharArray());
				
			}else if("Q".equals(ops[0])) {
				String x= ops[1];
				pw.println(trie.query(x.toCharArray()));
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
