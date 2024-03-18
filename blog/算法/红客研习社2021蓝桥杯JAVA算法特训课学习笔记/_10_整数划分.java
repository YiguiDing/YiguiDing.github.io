import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.function.BiConsumer;

public class _10_整数划分 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		f(N, 0);
	}

	static LinkedList<Integer> list = new LinkedList<>();

	static void f(int num, int sum) {
		if (sum == num) {
			System.out.println(list);
		} else {
			// n从大到小取，因为输出格式是从大到小
			for (int n = num; 1 <= n; n--) {
				if (sum + n > num)
					continue;// 剪枝
				if (list.size() != 0 && n > list.getLast())
					continue;// 后一个值不能大于前一个值
				list.add(n);
				f(num, sum + n);
				list.removeLast();
			}
		}
	}
}
