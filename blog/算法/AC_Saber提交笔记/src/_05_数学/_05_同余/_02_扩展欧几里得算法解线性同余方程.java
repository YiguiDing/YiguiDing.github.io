package _05_数学._05_同余;
// 提交状态：AC
/*
输入样例：
2
2 3 6
4 3 5
输出样例：
impossible
-3
 */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class _02_扩展欧几里得算法解线性同余方程 {
	static class R{
		int x,y,gcd;
		public R(int x, int y, int gcd) {
			this.x = x;
			this.y = y;
			this.gcd = gcd;
		}
	}
	static R extGcd(int a,int b) {
		if(b==0) return new R(1,0,a);//		1*a + 0*b = gcd = a
		else {
			R r = extGcd(b, a%b);
			int x = r.x,y=r.y,gcd=r.gcd;
//			x * b + y * a%b = gcd
//			x * b + y * (a-[a/b]*b) = gcd
//			x * b + (y * a - y * [a/b]*b) = gcd
//			y * a + (x - y * [a/b]) * b  = gcd
			return new R(y,x-y*(a/b),gcd);// 注意（a/b）要加括号，因为要下取整
		}
	}
	public static void main(String[] args) {
		int n = nextInt();
		while(n--!=0) {
			int a =nextInt(),b=nextInt(),m=nextInt();
//			a * x ≡ b (mod m)
//			a*x mod m = b mod m
//			a*x - j * m = b - k * m
//			a*x + (k - j) * m = b
//			x*a + y*m = b
			R r = extGcd(a, m);
			if(b%r.gcd==0) print.println(((long)r.x)*(b/r.gcd)%m); // 记得乘以(b/gcd) 记得取余
			else print.println("impossible");
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
	static String nextStr() {
		nextToken();
		return tokens[idx];
	}
}
