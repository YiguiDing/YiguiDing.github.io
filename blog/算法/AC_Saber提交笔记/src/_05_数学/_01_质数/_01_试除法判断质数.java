package _05_数学._01_质数;
/*
提交状态: AC
输入
2
2
6
输出
Yes
No
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class _01_试除法判断质数 {
	static boolean isSu(int n) {
		if(n<=1) return false;
		for (int i = 2; i*i <= n; i++) {
			if(n%i==0)return false;
		}
		return true;
	}
	public static void main(String[] args) throws Throwable {
		int n = nextInt();
		while (n--!=0) 
			printer.println(isSu(nextInt())?"Yes":"No");
		printer.flush();
	}
	static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter printer = new PrintWriter(writer);
	static String tokens[];static int idx;
	static void nextToken() throws Throwable {
		idx++;
		if(tokens==null || idx==tokens.length){
			tokens=reader.readLine().split(" ");
			idx=0;
		}
	}
	static int nextInt() throws Throwable {
		nextToken();
		return Integer.parseInt(tokens[idx]);
	}
	static long nextLon() throws Throwable{
		nextToken();
		return Long.parseLong(tokens[idx]);
	}
	static String nextStr() throws Throwable{
		nextToken();
		return tokens[idx];
	}
}
