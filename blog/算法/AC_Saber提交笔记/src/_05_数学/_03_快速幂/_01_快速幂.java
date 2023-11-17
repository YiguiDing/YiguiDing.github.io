package _05_数学._03_快速幂;
//提交状态：AC
/*
* 输入：
2
3 2 5
4 3 9
* 输出：
4
1
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class _01_快速幂 {
	static long quickPow(int base,int pow,long MOD) {
		long t;
		if(pow==0) return 1;
		else if(pow%2==1) return base*quickPow(base, pow-1, MOD)%MOD;
		else return (t=quickPow(base, pow/2, MOD))*t%MOD;
	}
	public static void main(String[] args) {
		int n=nextInt();
		while(n--!=0) {
			int base=nextInt(),pow=nextInt(),mod=nextInt();
			printer.println(quickPow(base, pow, mod));
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
