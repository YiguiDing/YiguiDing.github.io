package _05_数学._06_中国剩余定理;
// 提交状态：AC
/*
输入样例：
3
3 1
5 1
7 2
输出样例：
16

解释:
// x≡a_i (mod m_i)
// a_i: 1 1 2
// m_i: 3 5 7
//
// M = ∏ m_i
//   = 3 * 5 * 7 = 105
//
// M_i = M/m_i
// M_1 = M/m_i = 105/3 = 35         
// M_2 = M/m_i = 105/5 = 21         
// M_3 = M/m_i = 105/7 = 15 
//         
// M_i * M_i^(-1) ≡ 1 (MOD m_i) 要用扩展欧几里得算法求，因为题目不保证m_i是质数
//
// 以下使用费马定理求，是因为这里的m_i正好是质数
// M_i^(-1) = M_i^(m_i-2) (MOD m_i) 
// M_1^(-1) = M_1^(3-2) (MOD 3) = 35^1 MOD 3 = 35 MOD 3 = 2
// M_2^(-1) = M_2^(5-2) (MOD 5) = 21^3 MOD 5 = 9261 MOD 5 = 1
// M_3^(-1) = M_3^(7-2) (MOD 7) = 15^5 MOD 7 = 759375 MOD 7 = 1
//
// x的计算
// x= ∑ a_i * M_i * M_i(-1) MOD M
//  = 1*35*2+1*21*1+2*15*1 MOD M
//  = 121 MOD 105
//  = 16
 */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

public class _01_曹冲养猪_中国剩余定理 {
	static long qickPow(long base,long pow) {
		long t;
		if(pow==0) return 1;
		else if(pow%2==1) return base * qickPow(base, pow-1);
		else return (t=qickPow(base, pow/2))*t;
	}
	static long qickPowMOD(long base,long pow,long MOD) {
		long t;
		if(pow==0) return 1%MOD;
		else if(pow%2==1) return base * qickPowMOD(base, pow-1, MOD)%MOD;
		else return (t=qickPowMOD(base, pow/2, MOD))*t%MOD;
	}
	static class R{
		long x,y,gcd;
		public R(long x, long y, long gcd) {
			this.x = x;
			this.y = y;
			this.gcd = gcd;
		}
	}
	static R exGcd(long a,long b) {
		if(b==0) return new R(1,0,a);
		else {
			R r = exGcd(b, a%b);
			long x=r.x,y=r.y,gcd=r.gcd;
//			推导过程：
//			x * b + y * (a%b) = gcd
//			x * b + y * (a-[a/b]*b) = gcd
//			x * b + y * a - y*[a/b]*b = gcd
//			y * a + x * b - y*[a/b]*b = gcd
//			y * a + (x - y*[a/b])*b = gcd
			return new R(y,x-y*(a/b),gcd);
		}
	}
	public static void main(String[] args) {
		int n = nextInt();
		long M = 1;
		long M_[] = new long[n];
		long M_ni[] = new long[n];
		long m_[] = new long[n];
		long a_[] = new long[n];
		for(int i=0;i<n;i++) {
			m_[i]=nextLon();
			a_[i]=nextLon();
//			x ≡ a_i*(mod m_i) 
			M*=m_[i];// M = ∏ m_i 
//			x = ∑ a_i*M_i*M_i^(-1)
		}

		long x=0;
		for(int i=0;i<n;i++) {
			M_[i]=M/m_[i];
			
//			费马定理快速幂求逆元：
//			使用该定理要保证m[i]是质数，且M_[i]和m[i]互质，这里用这种方法无法通过，因为题目没有保证m[i]是质数，实际的测试数据中的m[i]存在不是质数的情况
//			M_ni[i]=qickPowMOD(M_[i], m_[i]-2,m_[i]);
			
//			扩展欧几里得算法求逆元：
//			M_i * M_i^(-1) ≡ 1 (MOD m_i)
//			M_i * M_i^(-1) MOD m_i = 1
//			M_i * M_i^(-1) - k *  m_i = 1
			R r = exGcd(M_[i], m_[i]); // 使用扩展
			M_ni[i]= (((r.x * r.gcd)%m_[i])+m_[i])%m_[i]; // 求逆元，因为要防止出现负数
			
			x+=a_[i]*M_[i]*M_ni[i];
			x%=M;
		}
 		print.println(x);
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
