package _05_数学._08_高斯消元;
// 提交状态：AC
/*
输入样例：
3
1.00 2.00 -1.00 -6.00
2.00 1.00 -3.00 -9.00
-1.00 -1.00 2.00 7.00
输出样例：
1.0
-2.0
3.0

解释:

 */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class _01_高斯消元解线性方程组 {
	static double eps = 1e-6;
	static int gauss(double [][] m) {
//		debug(m);
		int col=0,row=0;
		for(;row<m.length&&col<m[row].length;col++) {
			int t=row;
			for(int i=row;i<m.length;i++) if(m[t][col]<m[i][col]) t=i;
			if(t!=row) for(int i=0;i<m[row].length;i++) {double temp=m[t][i];m[t][i]=m[row][i];m[row][i]=temp;}
//			debug(m);
			if(Math.abs(m[row][col])<=eps) continue;
			for(int i=m[row].length-1;0<=i;i--) m[row][i]/=m[row][col];
//			debug(m);
			for(int i=row+1;i<m.length;i++){
				if(Math.abs(m[i][col])<=eps) continue;
				for(int j=m[i].length-1;0<=j;j--)
					m[i][j]-=m[row][j]*m[i][col];
			}
//			debug(m);
			row++;
		}
		if(row==m.length) {
			for(int r=m.length-2;0<=r;r--) {
				for(int c=r+1;c<m.length;c++) {
					m[r][m.length]-=m[r][c]*m[c][m.length];
					m[r][c]=0;
				}
			}
			return 0;
		}else {
			for (int i = row; i < m.length; i++) {
				if(Math.abs(m[i][m.length])<eps) return 1; // 0x == 0 
			}
			return 2;
		}
	}
	static void debug(double[][] m) {
		for(int i=0;i<m.length;i++) {
			for (int j = 0; j < m[i].length; j++) {
				print.print(m[i][j]+" ");
			}
			print.println();
		}
		print.println();
	}
	public static void main(String[] args) {
		int n=nextInt();
		double[][] m = new double[n][n+1];
		for(int i=0;i<m.length;i++) {
			for (int j = 0; j < m[i].length; j++) {
				m[i][j]=nextDub();
			}
		}
		int res =gauss(m);
		if(res==0) {
			for(int i=0;i<m.length;i++) print.printf("%.2f\n",m[i][m.length]);
		}else if(res==1) {
			print.println("Infinite group solutions");
		}else {
			print.println("No solution");
		}
		print.flush();
	}

	
	
	
	
	
	
	
	
	
	
	
	
	static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	static BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
	static PrintWriter print = new PrintWriter(writer);
	static String[] tokens;
	static int idx=0;
	static void nextToken() {
		idx++;
		if(tokens==null||idx==tokens.length) {
			try {
				tokens=reader.readLine().split(" ");
			} catch (IOException e) {
				e.printStackTrace();
			}
			idx=0;
		}
	}
	static int nextInt() {
		nextToken();
		return Integer.parseInt(tokens[idx]);
	}
	static long nextLon() {
		nextToken();
		return Long.parseLong(tokens[idx]);
	}
	static double nextDub() {
		nextToken();
		return Double.parseDouble(tokens[idx]);
	}
	static String nextStr() {
		nextToken();
		return tokens[idx];
	}
}
