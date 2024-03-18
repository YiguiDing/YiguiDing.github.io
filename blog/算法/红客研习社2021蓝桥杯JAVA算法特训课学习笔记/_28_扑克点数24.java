import java.util.Arrays;
import java.util.EmptyStackException;
import java.util.Random;
import java.util.Scanner;
import java.util.Stack;

import javax.sound.midi.Track;

public class _28_扑克点数24 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] nums = new int[4];
		for (int i = 0; i < nums.length; i++) {
			nums[i] = sc.nextInt();
		}
		process(nums);
		// 输入：
		// 7 8 5 3
		// 输出：
		// [8, 5, 7, 3, x, -, -]
		// (8-(5-7x3))=24
	}

	static void process(int[] nums) {
		// 1 + 2 + 3 + 4 // 四个数中间可以插入三个操作符
		// 前四个放数字，后三个个放操作符
		Object[] k = new Object[7];
		for (int t = 0; t < 10000; t++) {
			// 放入全部4个数字
			for (int i = 0; i < nums.length; i++) {
				k[i] = nums[i];
			}
			// 放入3个随机操作符
			for (int i = 4; i < k.length; i++) {
				k[i] = getRandomOp();
			}
			// 对于这三个随机操作符，打乱几次来尝试
			for (int i = 0; i < 10; i++) {
				reArrange(k);// 打乱顺序
				// 计算是否等于24
				if (computed(k) == 24) {
					System.out.println(Arrays.toString(k));
					System.out.println(interpreter(k) + "=24");
					return;// 找出一个即可
				}
			}
		}
		System.out.println("not fond.");
	}

	// 逆波兰数表达式的解释器
	static String interpreter(Object[] arr) {
		Stack<String> result = new Stack<>();
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] instanceof Integer) {
				result.push(arr[i] + "");
			} else {
				char op = (char) arr[i];
				if (op == '+' || op == '-')
					result.push("(" + result.pop() + op + result.pop() + ")");
				else
					result.push(result.pop() + op + result.pop());
			}
		}
		return result.pop();
	}

	// 随机获取一个操作符
	static Character getRandomOp() {
		switch ((int) (Math.random() * 4)) {
			case 0:
				return '+';
			case 1:
				return '-';
			case 2:
				return 'x';
			default:
				return '/';
		}
	}

	// 随机打乱顺序
	static void reArrange(Object[] items) {
		for (int i = 0; i < items.length; i++) {
			swap(items, i, (int) (Math.random() * items.length));// 随机找一个元素和当前元素交换
		}
	}

	// 交换
	static void swap(Object[] datas, int i, int j) {
		Object t = datas[i];
		datas[i] = datas[j];
		datas[j] = t;
	}

	// 计算
	static int computed(Object[] items) {
		Stack<Integer> stack = new Stack<>();
		try {
			for (int i = 0; i < items.length; i++) {
				if (items[i] instanceof Integer) {
					stack.push((Integer) items[i]);
				} else {
					switch ((Character) items[i]) {
						case '+':
							stack.push(stack.pop() + stack.pop());
							break;
						case '-':
							stack.push(stack.pop() - stack.pop());// 注意顺序
							break;
						case 'x':
							stack.push(stack.pop() * stack.pop());
							break;
						default:
							Integer k1 = stack.pop();
							Integer k2 = stack.pop();
							if (k1 % k2 != 0)
								throw new Exception("无法整除");
							stack.push(k1 / k2);
							break;
					}
				}
			}
			if (stack.size() == 1) {
				return stack.pop();
			}
		} catch (Exception e) {
		}
		return -1;
	}
}
