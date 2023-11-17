package _05_数学._03_快速幂;
//提交状态：AC
/*
* 输入：
3
4 3
8 5
6 3
* 输出：
1
2
impossible
*/
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class _02_快速幂求逆元 {
	static long quickPow(int base,int pow,long MOD) {
		long t;
		if(pow==0) return 1;
		else if(pow%2==1) return base*quickPow(base, pow-1, MOD)%MOD;
		else return (t=quickPow(base, pow/2, MOD))*t%MOD;
	}
	public static void main(String[] args) {
		int n=nextInt();
		while(n--!=0) {
			int a=nextInt(),p=nextInt();// 题目保证p是质数，但没保证a、p互质
//			求a的乘法逆元k=a^(-1)
//			a*a^(-1)≡1(mod p)
//			欧拉定理：a^φ(m)≡1(mod m)
//			费马定理：a^(p-1)≡1(mod p)    当（a、p互质,且p是质数）
//			所以：a * a^(p-2) ≡ 1 (mod p)
//			所以：k=a(p-2);
			if(a%p!=0) {// a、p互质
				printer.println(quickPow(a, p-2, p)); // 要求返回0~p-1之间的逆元就是说要对p取模
			}else {
				printer.println("impossible");
			}
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
