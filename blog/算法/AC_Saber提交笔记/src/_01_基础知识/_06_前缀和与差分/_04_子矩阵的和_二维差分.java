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
2 3 4 1 
4 3 4 1 
2 2 2 2 
 * */

public class _04_子矩阵的和_二维差分 {
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
	static class DifferMatrix{
		int[][] differ;
		void load(int[][] origin) {
			differ=new int[origin.length+1][origin[0].length+1];
			for (int i = 1; i < origin.length; i++) {
				for (int j = 1; j < origin[i].length; j++) {
					add(i, j, i, j, origin[i][j]);
				}
			}
		}
		void add(int i1,int j1,int i2,int j2,int x) {
			differ[i1][j1]+=x;
			differ[i1][j2+1]-=x;
			differ[i2+1][j1]-=x;
			differ[i2+1][j2+1]+=x;
		}
		int[][]  toPreFixSum() {
			int[][]prefix = new int[differ.length-1][differ[0].length-1];
			for (int i = 1; i < prefix.length; i++) {
				for (int j = 1; j < prefix[0].length; j++) {
					prefix[i][j]=prefix[i-1][j]+prefix[i][j-1]-prefix[i-1][j-1]+differ[i][j];
				}
			}
			return prefix;
		}
 	}
	public static void main(String[] args) {
		int N = nextInt(),M=nextInt(),Q=nextInt(),i1,i2,j1,j2,w;
		int matrix[][] = new int[N+1][M+1];
		DifferMatrix differ= new DifferMatrix();
		for (int i = 1; i < matrix.length; i++) {
			for (int j = 1; j < matrix[i].length; j++) {
				matrix[i][j]=nextInt();
			}
		}
		differ.load(matrix);
		while (Q--!=0) {
			i1=nextInt();j1=nextInt();i2=nextInt();j2=nextInt();w=nextInt();
			differ.add(i1, j1, i2, j2,w);
			
		}
		int[][] res = differ.toPreFixSum();
		for (int i = 1; i < res.length; i++) {
			
			int j;
			for (j = 1; j < res[i].length-1; j++) {
				pw.print(res[i][j]+" ");
			}
			pw.print(res[i][j]);
			if(i<res.length-1) pw.print("\n");
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

