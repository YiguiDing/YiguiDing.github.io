import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Scanner;

public class _29_高僧斗法 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		LinkedList<Integer> list = new LinkedList<>();
		String[] nums = sc.nextLine().split(" ");
		for (int i = 0; i < nums.length; i++) {
			list.add(Integer.parseInt(nums[i]));
		}
		datas = list.toArray(new Integer[list.size()]);
		f(0);
	}
	static Integer[] datas;
	// hashMap 记录当前局面的状态的输赢情况，用于在下一次遇到相同局面时直接查表返回结果
	static HashMap<State, Boolean> cache = new HashMap<>();

	static boolean f(int k) {
		State curState = new State(datas);
		if (cache.containsKey(curState)) {
			return cache.get(curState);// 取出之前计算的结果
		}
		if (isFailure()/* 检查局面是否导致自己输了 */) {
			cache.put(curState, false);
			return false;
		}
		// 遍历每个小和尚,除了最后一个
		for (int i = 0; i < datas.length - 1; i++) {
			for (int step = 1/* 遍历该小和尚可以走多少步 */; datas[i] + step < datas[i + 1]/* 新位置不能等于或超过下一个小和尚的位置 */; step++) {
				datas[i] += step;// 这个小和尚走step步后达到新位置
				boolean res = f(k + 1);// 把局面交给对手,进入k+1轮
				datas[i] -= step;// 回溯
				if (res == false) {// 对手输，则我赢
					if (k == 0) {// 仅在第一次输出
						System.out.println(datas[i] + " " + (datas[i] + step)/* 记住要加括号！！！ */);// 打印旧位置和新位置
					}
					cache.put(curState, true);
					return true;// 对手输，则我赢
				}
			}
		}
		cache.put(curState, false);
		return false;// 找不到让对手输的情况，则我输
	}
	static boolean isFailure() {
		for (int i = 0; i < datas.length - 1; i++) {
			// [6 7 8 9]就是输了，否则就没有
			if (datas[i] + 1 != datas[i + 1]) {
				return false;
			}
		}
		return true;
	}
}
// 记录当前局面的特征
class State {
	Integer[] dates;
	State(Integer[] arr) {
		dates = Arrays.copyOf(arr, arr.length);
	}
	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		if (obj instanceof State) {
			return Arrays.equals(dates, ((State) obj).dates);
		} else
			return false;
	}
	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return Arrays.hashCode(dates);
	}
}
