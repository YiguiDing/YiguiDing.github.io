import java.util.Arrays;
import java.util.BitSet;

/**
 * BloomFilter的实现
 */
public class BloomFilter的实现 {
	// 测试
	public static void main(String[] args) {
		BloomFilter bf = new BloomFilter(10000, 0.00001);

		System.out.println(bf);

		for (int i = 0; i < 10000; i++) {
			bf.put(i + "");
		}
		System.out.println("添加记录完毕");

		// System.out.println(bf);

		for (int i = 0; i < 10000; i++) {
			if (!bf.mayContain(i + "")) {
				System.out.printf("bug: 本应该存在，但 %d 不存在\n", i);
			}
		}
		System.out.println("查询已添加的记录完毕");

		for (int i = 10000; i < 900000; i++) {
			if (bf.mayContain(i + "")) {
				System.out.printf("失误，本不该存在，但 %d 存在\n", i);
			}
		}
		System.out.println("查询未添加的记录完毕");
	}
}

/**
 * BloomFilter
 */
class BloomFilter {

	private int N;// 存储的元素个数
	private int K;// hash函数个数
	private int M;// bit数
	private BitSet bitMap;// bitMap
	private int[] primes;// hash函数种子，质数

	BloomFilter(int N, double P_falseRate) {
		// N为要存取的元素个数，
		// P_falseRate 为预期失误率
		if (N <= 0 || P_falseRate <= 0)
			new Error("N must >= 1,falseRate must > 1");
		/*
		 * Given:
		 * 
		 * n: how many items you expect to have in your filter (e.g. 216,553)
		 * p: your acceptable false positive rate {0..1} (e.g. 0.01 → 1%)
		 * we want to calculate:
		 * 
		 * m: the number of bits needed in the bloom filter
		 * k: the number of hash functions we should apply
		 * The formulas:
		 * 
		 * m = -n*ln(p) / (ln(2)^2) the number of bits
		 * k = m/n * ln(2) the number of hash functions
		 * 
		 */

		// 根据公式计算需要分配的字节数
		double M = -N * Math.log(P_falseRate) / (Math.pow(Math.log(2), 2));
		// 根据公式计算需要的Hash函数个数
		double K = M / N * Math.log(2);

		this.N = N;
		this.M = (int) Math.ceil(M);
		this.K = (int) Math.ceil(K);
		this.bitMap = new BitSet(N);
		this.primes = PrimesGenerator.getPrimes(this.K);
	}

	void put(String val) {
		for (int i = 0; i < primes.length; i++) {
			bitMap.set((int) ((HashFunction.hash(val, primes[i]) % M)), true);
		}
	}

	boolean mayContain(String val) {
		for (int i = 0; i < primes.length; i++) {
			if (!bitMap.get((int) ((HashFunction.hash(val, primes[i]) % M))))
				return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "BloomFilter [N=" + N + ", K=" + K + ", M=" + M + ", bitMap=" + bitMap + ", primes="
				+ Arrays.toString(primes) + "]";
	}

}

// 质数生成器
class PrimesGenerator {
	static int[] getPrimes(int N) {
		if (N <= 0)
			return null;
		int[] res = new int[N];
		res[0] = 3;
		for (int idx = 1; idx < res.length; idx++) {
			for (int num = res[idx - 1] + 1; true; num++) {
				if (isPrime(num)) {
					res[idx] = num;
					break;
				}
			}
		}
		return res;
	}

	private static boolean isPrime(int num) {
		double maxDivisor = Math.sqrt(num);
		for (int divisor = 2; divisor <= maxDivisor; divisor++) {
			if (num % divisor == 0)
				return false;
		}
		return true;
	}
}

// hash函数
class HashFunction {
	static long hash(String str, int basePrimeSeed) {
		long res = 0;
		for (Byte val : str.getBytes()) {
			res = res * basePrimeSeed + val % basePrimeSeed;
		}
		return res;
	}
}