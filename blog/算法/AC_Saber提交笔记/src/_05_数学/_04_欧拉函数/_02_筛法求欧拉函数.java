package _05_数学._04_欧拉函数;
//提交状态：AC
/*
* 输入：
6
* 输出：
12
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.Arrays;

public class _02_筛法求欧拉函数 {
//	筛法求1~n中每个数的欧拉函数
	static int[] fai(int n) {
		int φ[] = new int[n+1];
		φ[1]=1;
		int primes[] = new int[n+1],cnt=0;
		boolean remove[] = new boolean[n+1];
		for(int i=2;i<=n;i++) {
			if(!remove[i]) {
				primes[cnt++]=i;
				φ[i]=i-1;// i是质数，则根据欧拉函数的计算公式1到i中和i互质的数是i*(1-1/i)=i-1个
			}
			for(int j=0,p=primes[j];p<=n/i;p=primes[++j]) {
				remove[p*i]=true;
				if(i%p==0) {
//					p*i是合数，且p是i的质因子，则i的质因数分解和i*p的质因数分解的底数应当是相同的，次数将会在p项上多1。
//					根据欧拉函数φ(p*i) = (p*i) * (1-1/p_1) * (1-1/p_2) * (1-1/p_3) * ... * (1-1/p_k);
//					即：φ(p*i) = p * φ(i);
					φ[p*i]=p * φ[i];
					break;
				}else {
//					p*i是合数，且p不是i的质因子，则p*i的质因数分解 和 i的质因数分解 相比，必然多一个p.
//					根据欧拉函数φ(p*i) = (p*i) * (1-1/p_1) * (1-1/p_2) * (1-1/p_3) * ... * (1-1/p_k) * (1-1/p);
//					即：φ(p*i) = p * φ(i) * (1-1/p);
//					即：φ(p*i) = (p-1) * φ(i);
					φ[p*i]= (p-1) * φ[i];
				}
			}
		}
		return φ;
	}
	public static void main(String[] args) {
		int m = nextInt();
		int φ[] = fai(m);
		long res = 0;
		for(int p:φ) {
			res+=p;
		}
		printer.println(res);
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
