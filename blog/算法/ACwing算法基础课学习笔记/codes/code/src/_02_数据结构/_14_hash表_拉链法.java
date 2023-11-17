package _02_数据结构;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.Arrays;

/*
5
I 1
I 2
I 3
Q 2
Q 5

输出
Yes
No
 */

public class _14_hash表_拉链法 {
	static BufferedReader bReader = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bWriter = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer tokenizer =new StreamTokenizer(bReader);
	static PrintWriter out = new PrintWriter(bWriter);
	static int nextInt() throws IOException{
		tokenizer.nextToken();
		return (int)tokenizer.nval;
	}
	static String nextString() throws IOException{
		tokenizer.nextToken();
		return tokenizer.sval;
	}
	public static void main(String[] args) throws IOException {
		HashSet set = new HashSet(10000);
		int N = nextInt();
		while (N--!=0) {
			String op =nextString();
			int x;
			switch(op) {
			case"I":
				x = nextInt();
				set.add(x);
				break;
			case "Q":
				x = nextInt();
				out.println(set.contain(x)?"Yes":"No");
				break;
			}
		}
		out.flush();
	}
	
	static class HashSet{
		int[] table;
		int[] data,next;
		int idx,MAX_SIZE,NULL=0x3f3f3f3f;
		public HashSet(int capacity) {
			MAX_SIZE=nextSu(capacity);// 用质数来作为N
			table=new int[MAX_SIZE];
			data=new int[MAX_SIZE];
			next=new int[MAX_SIZE];
			Arrays.fill(next, NULL);// next和table都是存指针
			Arrays.fill(table, NULL);
		}
//		找质数
		int nextSu(int from) {
			for (int num = from;; num++) {
				boolean flag = true;
				for(int n = 2;n*n<=num;n++) {
					if(num%n==0) {
						flag=false;
						break;
					}
				}
				if(flag) return num;
			}
		}
		int hash(int x) {
			return (x%MAX_SIZE+MAX_SIZE)%MAX_SIZE;
		}
		int find(int x) {
			for(int p = table[hash(x)];p!=NULL;p=next[p]) {
				if(data[p]==x) return p;
			}
			return NULL;
		}
		void add(int val) {
			int pos = hash(val);
			data[idx]=val;
			next[idx]=table[pos];
			table[pos]=idx++;
		}
		boolean contain(int val) {
			return find(val)!=NULL;
		}
	}
}
