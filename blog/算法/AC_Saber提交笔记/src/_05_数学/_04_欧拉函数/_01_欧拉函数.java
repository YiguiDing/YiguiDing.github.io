package _05_数学._04_欧拉函数;
//提交状态：AC
/*
* 输入：
3
3
6
8
* 输出：
2
2
4
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class _01_欧拉函数 {
	//按欧拉函数的最原始定义：只统计1~n中和n互质的数的个数即可 φ(N)=N*(1-1/p_1)*(1-1/p_2)*...
	static int φ(int n) {
		int res=n;
		for(int i=2;i<=n/i;i++) {
			if(n%i==0) {
				while(n%i==0) n/=i;
//				res=res*(1-1/i);
//				res=res-res/i;
				res-=res/i;
			}
		}
		if(n>1) res-=res/n;
		return res;
	}
	public static void main(String[] args) {
		int n=nextInt();
		while(n--!=0) {
			int m = nextInt();
			printer.println(φ(m));
		}
		printer.flush();
	}
	static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter printer = new PrintWriter(writer);
	static String[] tokens = null;
	static int idx=0;
	static int nextInt() {
		nextToken();
		return Integer.parseInt(tokens[idx]);
	}
	static String nextStr() {
		nextToken();
		return tokens[idx];
	}
	static long nextLon() {
		nextToken();
		return Long.parseLong(tokens[idx]);
	}
	static void nextToken() {
		idx++;
		if(tokens==null || idx==tokens.length) {
			try {
				tokens = reader.readLine().split(" ");
			} catch (IOException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
			idx = 0;
		}
	}	
}