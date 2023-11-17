package _01_基础知识._06_前缀和与差分;


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
3 4 3
1 7 2 4
3 6 2 8
2 1 2 3
1 1 2 2
2 1 3 4
1 3 3 4
输出
17
27
21
 * */

public class _03_子矩阵的和_二维前缀和 {
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static StreamTokenizer st = new StreamTokenizer(br);
	static PrintWriter pw = new PrintWriter(bw);
	static class PrefixMatrix{
		int[][]prefix;
		public PrefixMatrix() {};
		public PrefixMatrix(int[][] origin) {
			load(origin);
		}
		void load(int[][] origin) {
			prefix = new int[origin.length][origin[0].length];
			for (int i = 1; i < origin.length; i++) {
				for (int j = 1; j < origin[i].length; j++) {
					prefix[i][j]=prefix[i][j-1]+prefix[i-1][j]-prefix[i-1][j-1]+origin[i][j];
				}
			}
		}
		int getSum(int i1,int j1,int i2,int j2) {
			return prefix[i2][j2]-prefix[i2][j1-1]-prefix[i1-1][j2]+prefix[i1-1][j1-1];
		}
	}
	public static void main(String[] args) {
		int N = nextInt(),M=nextInt(),Q=nextInt(),i1,i2,j1,j2;
		int matrix[][] = new int[N+1][M+1];
		PrefixMatrix prefixArray = new PrefixMatrix();
		for (int i = 1; i < matrix.length; i++) {
			for (int j = 1; j < matrix[i].length; j++) {
				matrix[i][j]=nextInt();
			}
		}
		prefixArray.load(matrix);
		while (Q--!=0) {
			i1=nextInt();j1=nextInt();i2=nextInt();j2=nextInt();
			pw.println(prefixArray.getSum(i1, j1, i2, j2));
			
		}
		pw.flush();
	}
	
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

