import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class _02_最少刷题数 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		Date[] dates = new Date[N];
		int[] result = new int[N];
		for (int idx = 0; idx < N; idx++) {
			dates[idx] = new Date(idx, sc.nextInt());
		}
		Arrays.sort(dates);
		// System.out.println(Arrays.toString(dates));

		int lastIdx = -1;
		for (int i = 0; i < dates.length; i++) {

			int val = dates[i].val;
			
			dates[i].left = lastVal < val ? lastIdx + 1 : 0;

			if (lastVal <= val) {
				lastIdx = val;
			}
		}

		int midVal = dates[N / 2].val;
		for (int i = 0; i < N / 2; i++) {

			int idx = dates[i].idx;
			int val = dates[i].val;
			if ((N & 1) == 1)
				result[idx] = val <= midVal ? midVal - val + 1 : 0;
			else
				result[idx] = val <= midVal ? midVal - val + 0 : 0;
		}
		// System.out.println(Arrays.toString(result));
		for (int i = 0; i < result.length; i++) {
			if (i < result.length - 1)
				System.out.print(result[i] + " ");
			else
				System.out.print(result[i]);
		}
	}

	static class Date implements Comparable {
		int idx;
		int val;
		int left;
		int right;

		Date(int i, int v) {
			idx = i;
			val = v;
		}

		@Override
		public int compareTo(Object o) {
			return val - ((Date) o).val;
		}

		@Override
		public String toString() {
			return "Date [idx=" + idx + ", val=" + val + "]";
		}
	}
}
