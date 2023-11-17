package _03_数据结构._09_并查集;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
import java.util.HashMap;
/*
提交状态: AC
输入
5 10
M 2 3
Q 2 3
M 1 5
Q 3 2
M 1 4
Q 4 5
Q 1 2
Q 2 4
M 4 1
Q 5 3
输出
Yes
Yes
Yes
No
No
No

 * */
public class _01_并查集_复习 {
	static int findRoot(int[] parent,int x) {
		if(parent[x]!=x) parent[x] = findRoot(parent, parent[x]);
		return parent[x];
	}
	
			
	public static void main(String[] args) throws IOException  {
		String[] ops = reader.readLine().split(" ");
		int n =Integer.parseInt(ops[0]),m=Integer.parseInt(ops[1]);
		int[] parent = new int[n+1];
		for(int i=1;i<=n;i++) parent[i]=i;
		while(m--!=0) {
			ops = reader.readLine().split(" ");
			if("M".equals(ops[0])) {
				int a = Integer.parseInt(ops[1]);
				int b = Integer.parseInt(ops[2]);
				parent[findRoot(parent, a)] = parent[findRoot(parent, b)];
			}else if("Q".equals(ops[0])) {
				int a = Integer.parseInt(ops[1]);
				int b = Integer.parseInt(ops[2]);
				boolean res = findRoot(parent, a) == findRoot(parent, b);
				printer.println(res?"Yes":"No");
			}
		}
		printer.flush();
	}
	static BufferedReader reader =new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer =new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter printer =new PrintWriter(writer);
	static String[] tokens=null; static int pos = 0;
	static void nextToken() {
		pos++;
		if(tokens==null||pos==tokens.length) {
			try {
				tokens = reader.readLine().split(" ");
			} catch (IOException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
			pos=0;
		}
	}
	static int nextInt() {
		nextToken();
		return Integer.parseInt(tokens[pos]);
	}

}
