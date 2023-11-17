package _02_数据结构;

public class _12_heap堆_删除第k个插入的元素 {
	public static void main(String[] args) {
		int[] arr =  {8,7,6,5,4,3,2,1};
		Heap heap = new Heap(100);
		heap.load_NlogN(arr);
		while(!heap.isEmpty()) {
			System.out.println(heap.removeFirst());
		}
	}
	static class Heap{
		int[] data,h2k,k2h;
		int size,k,MAX_SIZE;
		public Heap(int capacity) {
			init(capacity);
		}
		void init(int capacity) {
			MAX_SIZE=capacity+1;
			data=new int[MAX_SIZE];
			h2k=new int[MAX_SIZE];
			k2h=new int[MAX_SIZE];
			clear();
		}
		void clear() {
			size=0;
			k=0;
		}
//		---------------------------------------------------基本操作---------------------------------------------------
		void down(int idx){
			int minIdx = idx;
			if(2*idx<=size&&data[2*idx]<data[minIdx]) minIdx=2*idx;// 判断左子树值是否更小，记录下标
			if(2*idx+1<=size&&data[2*idx+1]<data[minIdx]) minIdx=2*idx+1;// 判断右子树值是否更小，记录下标
			if(minIdx==idx)return;// 相等说明自己已经是最小值了
			heap_swap(idx, minIdx);
			down(minIdx);
		}
		void up(int idx) {
			int maxIdx =idx;
			if(idx/2>=1&&data[idx/2]>data[maxIdx]) maxIdx=idx/2;
			if(maxIdx==idx)return;// 选出最小值的下标
			heap_swap(idx, maxIdx);
			up(maxIdx);
		}
//		O(N*logN)的建堆方式
		void load_NlogN(int[] arr) {
			for (int i = 0; i < arr.length; i++) {
				add(arr[i]);
			}
		}
		// 增
		void add(int x) {
			size++;
			k++;
			data[size]=x;// 放到末尾
			up(size);// 向上调整
			h2k[k]=size;// 记录第k个插入的数在堆中的所在位置
			k2h[size]=k;// 反向映射，记录某元素是第几个插入的
		}
		// 改：需改某节点上的数
		void modify(int idx,int val) {
			data[idx]=val;
			up(idx);down(idx);
		}
		// 删除
		int remove(int idx) {
			int temp = data[idx];
			heap_swap(idx, size--);
			down(idx);up(idx);
			return temp;
		}
//		---------------------------------------------------基本操作---------------------------------------------------
		int removeFirst() {
			return remove(1);
		}
		// 修改第k个插入的数
		void modifyK(int k,int val) {
			modify(k2h[k], val);
		}
		int removeK(int k) {
			return remove(k2h[k]);
		}
		boolean isEmpty() {
			return size==0;
		}
		boolean isFull() {
			return size==MAX_SIZE;
		}
//		交换值和映射关系
		void heap_swap(int i,int j) {
			swap(data, i, j);
			swap(h2k, i, j);// 交换映射关系
			swap(k2h, h2k[j], h2k[i]);
		}
		void swap(int[] arr,int i,int j) {
			if(i!=j) {
				arr[i]=arr[i]^arr[j];
				arr[j]=arr[i]^arr[j];
				arr[i]=arr[i]^arr[j];
			}
		}
	}
}
