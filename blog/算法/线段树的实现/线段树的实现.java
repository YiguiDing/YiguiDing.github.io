public class 线段树的实现 {
	public static void main(String[] args) {
		SegmentTree st = new SegmentTree(5);
		// 长度为 5 的线段树的结构 index:[start,end]
		// ----------------------0:[0,4]
		// -------------1:[0,2]-----------2:[3,4]
		// -------3:[0,1]----4:[2,2]---5:[3,3]-----6:[4,4]
		// ---7:[0,0]-7:[1,1]

		st.insert(0, 1);// 非递归方式在0的位置统计元素
		// 输出：
		// 插入操作
		// debug:[[left,right],value]:[[0,4],1]
		// debug:[[left,right],value]:[[0,2],1]
		// debug:[[left,right],value]:[[0,1],1]
		// debug:[[left,right],value]:[[0,0],1]
		st.insert_r(1, 1);// 递归方式在1的位置统计元素
		// 输出：
		// debug:[[left,right],value]:[[0,4],2]
		// debug:[[left,right],value]:[[0,2],2]
		// debug:[[left,right],value]:[[0,1],2]
		// debug:[[left,right],value]:[[1,1],1]
		st.query_r(0, 1);
		// 输出：
		// debug:[[left,right],value]:[[0,4],2]
		// debug:[[left,right],value]:[[0,2],2]
		// debug:[[left,right],value]:[[0,1],2]
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

	// 非递归方式的插入
	void insert(int targetIdx, int num) {
		if (!(0 <= targetIdx && targetIdx < this.arrLength))
			return;
		int left = 0;
		int right = arrLength - 1;
		int mid = left + (right - left) / 2;
		int curIdx = 0;
		while (true) {
			data[curIdx] += num;// 自增
			System.out.printf("debug:[[left,right],value]:[[%d,%d],%d]\n", left, right, data[curIdx]);

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

	// 递归方式版
	void insert_r(int targetIdx, int num) {
		insert_r(targetIdx, num, 0, 0, arrLength - 1);
	}

	// 递归方式版
	void insert_r(int targetIdx, int num, int curIdx, int curLeft, int curRight) {
		if (curLeft <= curRight) {

			data[curIdx] += num;// 自增
			System.out.printf("debug:[[left,right],value]:[[%d,%d],%d]\n", curLeft, curRight, data[curIdx]);

			// 未到达叶节点
			if (curLeft != curRight) {

				// 计算下一轮的位置信息。
				// 第i个节点的左子树的是2i+1 右子树是2i+2
				// ----------------------0:[0,4]
				// -------------1:[0,2]-----------2:[3,4]
				// -------3:[0,1]----4:[2,2]---5:[3,3]-----6:[4,4]
				// ---7:[0,0]-7:[1,1]
				// 计算中间位置
				int curMid = curLeft + (curRight - curLeft) / 2;
				// 注意第一个是小于等于
				if (targetIdx <= curMid) {
					// 进入左子树
					insert_r(targetIdx, num, 2 * curIdx + 1, curLeft, curMid);
				} else if (targetIdx > curMid) {
					// 进入右子树
					insert_r(targetIdx, num, 2 * curIdx + 2, curMid + 1, curRight);
				}
			}
		}
	}

	// 可以查找任意区间的统计结果,递归方式
	int query_r(int targetLeft, int targetRight) {
		return query_r(0, 0, arrLength - 1, targetLeft, targetRight);
	}

	private int query_r(int curIdx, int curLeft, int curRight, int targetLeft, int targetRight) {
		if (curLeft <= curRight && // 过滤非法的当前区间
				targetLeft <= targetRight// 过滤非法的目标区间
		) {
			System.out.printf("debug:[[left,right],value]:[[%d,%d],%d]\n", curLeft, curRight, data[curIdx]);

			if (curLeft == targetLeft && targetRight == curRight) {
				// 所查找的区间和当前所在区间完全匹配,直接返回其统计结果
				return data[curIdx];
			} else {
				int mid = curLeft + (curRight - curLeft) / 2;
				int k = 0;
				if (targetRight <= mid) {
					// 查找的区间在左子树
					k += query_r(2 * curIdx + 1, curLeft, mid, targetLeft, targetRight);// 左子树查询
				} else if (mid < targetLeft) {
					// 查找的区间在右子树
					k += query_r(2 * curIdx + 2, mid + 1, curRight, targetLeft, targetRight);// 右子树查询
				} else {
					// 查找的区间横跨左右子树,则分别去查找
					k += query_r(2 * curIdx + 1, curLeft, mid, targetLeft, mid);// 左子树查询
					k += query_r(2 * curIdx + 2, mid + 1, curRight, mid + 1, targetRight);// 右子树查询
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

	// 这种查找方式不能查找横跨中间位置的区间,没什么用。
	int search(int targetLeft, int targetRight) {
		if (targetLeft > targetRight)
			return 0;

		int left = 0;
		int right = arrLength - 1;
		int mid = left + (right - left) / 2;
		int curIdx = 0;

		while (true) {
			System.out.printf("debug:[[left,mid,right],value]:[[%d,%d,%d],%d]\n", left, mid, right, data[curIdx]);
			if (left == targetLeft && right == targetRight) {
				// 到达目标位置
				break;
			}
			// 计算下一轮的信息
			mid = left + (right - left) / 2;
			if (targetRight <= mid) {
				right = mid;
				curIdx = 2 * curIdx + 1;// 进入左子树
			} else if (targetLeft > mid) {
				left = mid + 1;
				curIdx = 2 * curIdx + 2;// 进入右子树
			}
		}
		return data[curIdx];
	}
}