package 左程云算法课初级班基础知识学习笔记._11_堆;

import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		Heap heap = new Heap();
		int test[] = { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 };
		heap.heapSort(test);
		System.out.println(Arrays.toString(test));
	}
}

class Heap {
	int heapLen = 0;
	int heap[] = new int[10];

	public void heapSort(int nums[]) {
		init();
		heapAdd(nums);
		for (int i = nums.length - 1; i >= 0; i--) {
			// 从末尾遍历
			nums[i] = popMax();
		}
	}

	// 弹出最大的数
	public Integer popMax() {
		if (isEmpty()) {
			return null;
		}
		int maxNum = this.heap[0];
		// 将末尾节点的数放置到根节点上，然后缩小堆的大小
		Utils.exchange(this.heap, 0, --this.heapLen);
		heapify(0);// 从根节点开始堆化
		return maxNum;
	}

	// 堆化：从某个的子节点地位提升的过程，假皇帝被贬的过程
	public void heapify(int currentIdx) {
		int leftIdx = 2 * currentIdx + 1;
		int rightIdx = leftIdx + 1;
		while (leftIdx < this.heapLen) {// 判断是否存在子节点
			// 找出子节点中最大节点的下标
			int maxIdx = rightIdx < this.heapLen && this.heap[rightIdx] > this.heap[leftIdx] ? rightIdx : leftIdx;
			if (this.heap[currentIdx] >= this.heap[maxIdx])
				break;
			Utils.exchange(heap, currentIdx, maxIdx);// 父节点和子节点交换
			currentIdx = maxIdx;
			leftIdx = 2 * currentIdx + 1;
			rightIdx = leftIdx + 1;
		}
	}

	// 堆插入操作,插入一个数组
	public void heapAdd(int nums[]) {
		for (int i = 0; i < nums.length; i++) {
			heapAdd(nums[i]);
		}
	}

	// 堆插入操作,插入一个数
	public void heapAdd(int num) {
		heapInsert(this.heapLen, num);
	}

	// 堆插入操作,仅可以在[0,length]位置插入一个数
	public void heapInsert(int i, int num) {
		if (isFull())// 堆满则扩容
			resize();

		// 先将其插入到末尾
		int currentIdx = i < this.heapLen ? i : this.heapLen++;// 获取插入位置并更新堆大小
		this.heap[currentIdx] = num;

		// 子节点依次打败父节点，提升地位的过程：
		int fatherIdx = (currentIdx - 1) / 2;
		while (this.heap[currentIdx] > this.heap[fatherIdx]) {
			// 如果当前节点比其父节点大，则交换
			Utils.exchange(heap, currentIdx, fatherIdx);
			currentIdx = fatherIdx;
			fatherIdx = (currentIdx - 1) / 2;
		}

		// 子节点篡位的过程
		heapify(i);// 从i位置往下堆化
	}

	// 是否满
	private boolean isFull() {
		return this.heapLen == this.heap.length;
	}

	// 是否空
	private boolean isEmpty() {
		return this.heapLen == 0;
	}

	// 清空
	private void init() {
		this.heapLen = 0;
	}

	// 扩容
	private void resize() {
		// 分配内存
		int help[] = new int[this.heap.length * 2];
		// 拷贝
		for (int i = 0; i < this.heap.length; i++) {
			help[i] = this.heap[i];
		}
		this.heap = help;
	}
}

class Utils {
	public static void exchange(int arr[], int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}