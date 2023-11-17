import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

import javax.management.Query;

public class _10_压缩变换 {
	public static void main(String[] args) {
		test0();// 解题
		// test1();
	}

	static void test0() {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		data = new int[N];
		seg = new SegmentTree(N);
		for (int i = 0; i < N; i++) {
			data[i] = sc.nextInt();
		}
		sc.close();
		process();
		printResult();
	}

	// 模拟题目的数据规模测试
	// 模拟数据规模测试算法速度 // 耗时：1337 ms
	static void test1() {
		data = Generator.getRandomArray(100000);
		seg = new SegmentTree(data.length);
		long t1 = System.currentTimeMillis();
		process();
		printResult();
		long t2 = System.currentTimeMillis();
		System.out.printf("耗时：%d ms", t2 - t1);
	}



	static int N;
	static int[] data;// 存原数组
	static SegmentTree seg;// 线段树，统计区间中独立元素个数
	static Map<Integer, Integer> lastIdxMap = new HashMap<>();

	// 处理
	static void process() {
		for (int curIdx = 0; curIdx < data.length; curIdx++) {
			int val = data[curIdx];// 记录这个位置数的原始值
			if (!lastIdxMap.containsKey(val)) {
				// 对于新出现的数，改为相反数
				data[curIdx] = -val;
				seg.insert(curIdx, 1);
			} else {
				// 对于曾出现的数
				// 替换为，从这个数曾经最后一次出现的位置到当前位置(不包含这两个位置)之间的独立的数的个数
				int preIdx = lastIdxMap.get(val);

				data[curIdx] = seg.query_r(preIdx + 1, curIdx - 1);

				// 移除旧位置的元素,因为只需要统计一个数上一次出现和这一次出现之间的数的种类数
				// 而在下一次统计时的“上次出现的位置”就是当前这个数出现的位置，只需要统计这两个数之间的数
				seg.insert(preIdx, -1);
				seg.insert(curIdx, 1);// 在新位置记录元素
			}
			lastIdxMap.put(val, curIdx);// 记录这个数的最后出现位置
		}
	}
	static void printResult() {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < data.length; i++) {
			if (i < data.length - 1) {
				sb.append(data[i] + " ");
			} else {
				sb.append(data[i]);
			}
		}
		System.out.println(sb.toString());
	}
}

class SegmentTree {
	int data[];
	int arrLength;
	int capacity;

	SegmentTree(int length) {
		// 层数就是 1 + ceil( log_2(end-start+1) )
		double layer = 1d + Math.ceil(log_2((double) length));
		// 满二叉树元素个数,个层元素数的和，等比数列求和：S_n = a1*((1-q^n)/(1-q)) 公比：q = 2
		double capacity = 1d * (1d - Math.pow(2d, layer)) / (1d - 2d);

		this.arrLength = length;
		this.capacity = (int) Math.ceil(capacity);
		this.data = new int[this.capacity];
	}

	void insert(int targetIdx, int increasement) {
		if (!(0 <= targetIdx && targetIdx < this.arrLength))
			return;
		int left = 0;
		int right = arrLength - 1;
		int mid = left + (right - left) / 2;
		int curIdx = 0;
		while (true) {
			data[curIdx] += increasement;// 统计
			// System.out.printf("debug:[[left,mid,right],value]:[[%d,%d,%d],%s]\n", left,
			// mid, right, data[curIdx]);

			if (right == left) {
				// 到达叶节点
				return;
			}
			// 计算下一轮的位置信息。
			// 第i个节点的左子树的是2i+1 右子树是2i+2
			// ----------------------0:[0,4]
			// -------------1:[0,2]-----------2:[3,4]
			// -------3:[0,1]----4:[2,2]---5:[3,3]-----6:[4,4]
			// ---7:[0,0]-7:[1,1]
			// 计算中间位置
			mid = left + (right - left) / 2;
			// 注意第一个是小于等于
			if (targetIdx <= mid) {
				right = mid;
				curIdx = 2 * curIdx + 1;// 进入左子树
			} else if (targetIdx > mid) {
				left = mid + 1;
				curIdx = 2 * curIdx + 2;// 进入右子树
			}
		}
	}

	int query_r(int targetLeft, int targetRight) {
		return query(0, 0, arrLength - 1, targetLeft, targetRight);
	}

	private int query(int curIdx, int curLeft, int curRight, int targetLeft, int targetRight) {
		if (curLeft <= curRight && // 过滤非法的当前区间
				targetLeft <= targetRight// 过滤非法的目标区间
		) {
			// System.out.printf("debug:[[left,mid,right],value]:[[%d,%d,%d],%s]\n", left,
			// mid, right, data[curIdx]);
			if (curLeft == targetLeft && targetRight == curRight) {
				// 所查找的区间和当前所在区间完全匹配,直接返回其统计结果
				return data[curIdx];
			} else {
				int mid = curLeft + (curRight - curLeft) / 2;
				int k = 0;
				if (targetRight <= mid) {
					// 查找的区间在左子树
					k += query(2 * curIdx + 1, curLeft, mid, targetLeft, targetRight);// 左子树查询
				} else if (mid < targetLeft) {
					// 查找的区间在右子树
					k += query(2 * curIdx + 2, mid + 1, curRight, targetLeft, targetRight);// 右子树查询
				} else {
					// 查找的区间横跨左右子树,则分别去查找
					k += query(2 * curIdx + 1, curLeft, mid, targetLeft, mid);// 左子树查询
					k += query(2 * curIdx + 2, mid + 1, curRight, mid + 1, targetRight);// 右子树查询
				}
				return k;
			}
		}
		return 0;
	}

	static double log_2(double x) {
		// > 需要使用换底公式：log_A{B} = log_n{B}/log_n{A}
		// > 即log_2{B} = log_n{B}/log_n{2}
		return Math.log(x) / Math.log(2);
	}

	@Override
	public String toString() {
		return "SegmentTree [data=" + Arrays.toString(data) + ", arrLength=" + arrLength + ", capacity=" + capacity
				+ "]";
	}



}

class Generator {
	static int[] getRandomArray(int length) {
		int[] res = new int[length];
		for (int i = 0; i < res.length; i++) {
			res[i] = (int) randomRange(0, 1e9);
		}
		return res;
	}

	static double randomRange(double from, double to) {
		return from + (Math.random() * (to - from));
	}
}