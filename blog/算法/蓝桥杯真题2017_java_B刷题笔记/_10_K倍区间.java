import java.util.Scanner;

public class _10_K倍区间 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int K = sc.nextInt();
		int result = 0;
		int[] perFixSum = new int[N + 1];
		for (int i = 1; i <= N; i++) {
			perFixSum[i] = perFixSum[i - 1] + sc.nextInt();
		}
		for (int left = 1; left <= N; left++) {
			for (int right = left; right <= N; right++) {
				if((perFixSum[right]-perFixSum[left-1])%K==0){
					result++;
				}
			}
		}
		System.out.println(result);
	}
}

class RangeTree {
	int curV;
	int curL;
	int curR;
	int curM;
	RangeTree left;
	RangeTree right;

	RangeTree(int length) {
		this(0, length - 1);
	}

	RangeTree(int l, int r) {
		curL = l;
		curR = r;
		curM = curL + (curR - curL) / 2;
		if (curL != r) {
			left = new RangeTree(curL, curM);
			right = new RangeTree(curM + 1, curR);
		}
	}

	void insert(int i, int num) {
		curV += num;
		if (curL != curR) {
			if (i <= curM) {
				left.insert(i, num);
			} else {
				right.insert(i, num);
			}
		}
	}

	int search(int tarL, int tarR) {
		if (curL == tarR) {
			return curV;
		} else {
			if (tarR <= curM) {
				return left.search(tarL, tarR);
			} else if (curM < tarL) {
				return right.search(tarL, tarR);
			} else {
				return left.search(tarL, curM) + right.search(curM + 1, tarR);
			}
		}
	}
}
