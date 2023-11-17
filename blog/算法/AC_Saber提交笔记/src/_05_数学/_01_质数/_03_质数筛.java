package _05_数学._01_质数;
// 提交状态：AC
/*
输入
8
输出
4
 */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class _03_质数筛{
	static Result getPrimes(int n) {
		int primes[] = new int[n+1],cnt=0;
		boolean remove[] = new boolean[n+1];
		for(int i=2;i<=n;i++) {
			if(!remove[i]) primes[cnt++]=i;
			for(int j=0,p=primes[j];p<=n/i;j++,p=primes[j]) {
				remove[p*i]=true;
				if(i%p==0) break;
			}
		}
		return new Result(primes, cnt);
	}
	public static void main(String[] args) {
		int n = nextInt();
		Result res = getPrimes(n);
//		输出这些质数
//		for(int i=0;i<res.len;i++) {
//			if(i!=0)printer.print(" ");
//			printer.print(res.data[i]);
//		}
//		输出质数的个数
		printer.print(res.len);
		printer.flush();
	}
	static class Result{
		int[] data;
		int len;
		public Result(int[] data, int len) {
			this.data = data;
			this.len = len;
		}
	}
	static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter printer = new PrintWriter(writer);
	static String[] tokens=null;
	static int idx=0;
	static void nextToken() {
		idx++;
		if(tokens==null||idx==tokens.length) {
			try {
				tokens = reader.readLine().split(" ");
			} catch (IOException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
			idx=0;
		}
	}
	static int nextInt() {
		nextToken();
		return Integer.parseInt(tokens[idx]);
	}
	static String nextStr() {
		nextToken();
		return tokens[idx];
	}
	
}