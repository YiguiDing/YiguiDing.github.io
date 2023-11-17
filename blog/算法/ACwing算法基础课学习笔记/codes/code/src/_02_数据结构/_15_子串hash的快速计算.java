package _02_数据结构;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StreamTokenizer;
/*
输入
8 3
aabbaabb
1 3 5 7
1 3 6 8
1 2 1 2
输出
true
false
true

 */
public class _15_子串hash的快速计算 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static StreamTokenizer tokenizer = new StreamTokenizer(br);
	static PrintWriter out = new PrintWriter(new BufferedOutputStream(System.out));
	static String nextStr() throws IOException {
		tokenizer.nextToken();
		return tokenizer.sval;
	}
	static int nextInt() throws IOException {
		tokenizer.nextToken();
		return (int)tokenizer.nval;
	}
	
	public static void main(String[] args) throws IOException {
		int n = nextInt();
		int m = nextInt();
		String str = nextStr();
		Hash strHash = new Hash(str);
		while(m--!=0) {
			int l1,r1,l2,r2;
			l1 = nextInt();
			r1 = nextInt();
			l2 = nextInt();
			r2 = nextInt();
			out.println(strHash.getHash(l1, r1)==strHash.getHash(l2, r2));
		}
		out.flush();
	}
	static class Hash{
		int P = 131;
		long[] hash;
		long[] pow;
		
		Hash(String str){
			hash = new long[str.length()+1];
			pow = new long[str.length()+1];
			pow[0]=1;// 存p^0=1
			for (int i = 1; i < hash.length; i++) {
				pow[i]=pow[i-1]*P;// 为了快速求P^(n),所以预处理
				hash[i]=hash[i-1]*P+str.charAt(i-1);
			}
		}
		long getHash(int l,int r) {
			return hash[r]-hash[l-1]*pow[r-l+1];
		}
	}
}
