package 蓝桥杯历年真题刷题笔记._2014_java_B_;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class _09_地宫取宝 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		K = sc.nextInt();
		for (int x = 0; x < N; x++) {
			for (int y = 0; y < M; y++) {
				matrix[x][y] = sc.nextInt();
			}
		}
		sc.close();
		int res = f(0, 0, 0, -1);
		System.out.println(res);
	}

	static int N = 0;
	static int M = 0;
	static int K = 0;
	static int[][] matrix = new int[50][50];
	static int count = 0;
	/**
	 * State
	 */
	static Map<State, Integer> map = new HashMap<>();

	static int f(int cur_x, int cur_y, int bagSize, int bagMaxVal) {
		if (cur_x == N - 1 && cur_y == M - 1) {// 走到最后一个格子
			// 已经拾取足够数量的宝物，计数
			if (bagSize == K) {
				return 1;
			} else
			// 未拾取足够数量宝物，但是拾取当前位置的宝物即可满足条件，计数
			if (bagSize == K - 1 && (bagMaxVal < matrix[cur_x][cur_y])) {
				return 1;
			} else {
				return 0;
			}
		} else if (cur_x < N && cur_y < M) {
			State curState = new State(cur_x, cur_y, bagSize, bagMaxVal);
			if (map.containsKey(curState)) {
				return map.get(curState);
			} else {
				int cnt = 0;
				int curVal = matrix[cur_x][cur_y];
				// 当前值若比拥有的值都要大
				if (bagMaxVal < curVal) {
					// 可以拿

					// 可以拿 然后拿
					cnt += f(cur_x + 1, cur_y, bagSize + 1, curVal);// 往右走
					cnt += f(cur_x, cur_y + 1, bagSize + 1, curVal);// 往下走

					// 可以拿 但不拿
					cnt += f(cur_x + 1, cur_y, bagSize, bagMaxVal);// 往右走
					cnt += f(cur_x, cur_y + 1, bagSize, bagMaxVal);// 往下走

				} else {
					// 不可以拿 不拿
					cnt += f(cur_x + 1, cur_y, bagSize, bagMaxVal);// 往右走
					cnt += f(cur_x, cur_y + 1, bagSize, bagMaxVal);// 往下走
				}
				map.put(curState, cnt);
				return cnt;
			}
		}
		return 0;
	}

	public static class State {

		int x, y, bagSize, bagMaxVal;

		public State(int x, int y, int bagSize, int bagMaxVal) {
			this.x = x;
			this.y = y;
			this.bagSize = bagSize;
			this.bagMaxVal = bagMaxVal;
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + x;
			result = prime * result + y;
			result = prime * result + bagSize;
			result = prime * result + bagMaxVal;
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			State other = (State) obj;
			if (x != other.x)
				return false;
			if (y != other.y)
				return false;
			if (bagSize != other.bagSize)
				return false;
			if (bagMaxVal != other.bagMaxVal)
				return false;
			return true;
		}

	}

}
