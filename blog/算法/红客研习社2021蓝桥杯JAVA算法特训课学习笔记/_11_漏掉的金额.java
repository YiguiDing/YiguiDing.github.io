import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class _11_漏掉的金额 {
	// 输出：
	// 1 2 4
	// 1 3 3
	// 3 4
	// 3 4
	public static void main(String[] args) {
		String example = "6 5 3 2 4 3 1";
		Scanner sc = new Scanner(System.in);
		target_sum = sc.nextInt();
		N = sc.nextInt();
		details = new int[N];
		selected = new boolean[N];
		for (int i = 0; i < details.length; i++) {
			details[i] = sc.nextInt();
		}
		Arrays.sort(details);
		f(0, 0);
	}

	static int target_sum;
	static int N;
	static int[] details;
	static boolean[] selected;

	static void f(int cur_sum, int cur_idx) {
		if (cur_sum > target_sum)
			return;
		else if (cur_sum == target_sum) {
			List<Integer> list = new LinkedList<>();
			for (int i = 0; i < selected.length; i++) {
				if (selected[i] == false) {
					list.add(details[i]);
				}
			}
			Collections.sort(list);
			System.out.println(list);
			return;
		} else {
			if (cur_idx == details.length)
				return;
			// 选
			selected[cur_idx] = true;
			f(cur_sum + details[cur_idx], cur_idx + 1);
			// 不选
			selected[cur_idx] = false;
			f(cur_sum + 0, cur_idx + 1);
			
		}
	}
}
