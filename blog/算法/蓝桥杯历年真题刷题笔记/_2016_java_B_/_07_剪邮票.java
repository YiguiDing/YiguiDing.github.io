import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.Stack;

import javax.swing.text.Position;

public class _07_剪邮票 {
	public static void main(String[] args) {
		_07_剪邮票 handle = new _07_剪邮票();
		handle.process(0, 0, 0);
		System.out.println(handle.counter);
		// 输出： 13920
	}

	int counter = 0;
	int selected[][] = new int[3][4];

	// 全排列
	void process(int curI, int curJ, int getter) {
		if (getter == 5) {
			if (check()) {
				counter++;
				// System.out.println(Arrays.toString(selected[0]));
				// System.out.println(Arrays.toString(selected[1]));
				// System.out.println(Arrays.toString(selected[2]));
				// System.out.println("");
				// System.out.println(counter);
			}
		} else {
			// 计算正确坐标
			if (curJ >= selected[curI].length) {
				curI += 1;
				curJ = 0;
			}
			// 行坐标越界直接终止递归
			if (curI >= selected.length) {
				return;
			}

			// 选中当前元素
			selected[curI][curJ] = 1;
			process(curI, curJ + 1, getter + 1);

			// 不选当前元素
			selected[curI][curJ] = 0;
			process(curI, curJ + 1, getter + 0);
		}
	}

	boolean check() {
		// 找到一个坐标作为起始坐标
		int start_I = 0, start_J = 0;
		outerFor: for (int i = 0; i < selected.length; i++) {
			for (int j = 0; j < selected[i].length; j++) {
				if (selected[i][j] == 1) {
					start_I = i;
					start_J = j;
					break outerFor;
				}
			}
		}

		int count = check_process(new Position(start_I, start_J), new HashSet<>());
		return count == 5;
	}

	int check_process(Position curPos, Set<Position> processed) {
		int count = 0;
		if (curPos.isCorrectPosAt(selected) &&
				selected[curPos.i][curPos.j] == 1 &&
				!processed.contains(curPos)) {
			count++;
			processed.add(curPos);
			// ---a1
			// a2 aa a3
			// ---a4
			count += check_process(new Position(curPos.i - 1, curPos.j), processed);
			count += check_process(new Position(curPos.i, curPos.j - 1), processed);
			count += check_process(new Position(curPos.i, curPos.j + 1), processed);
			count += check_process(new Position(curPos.i + 1, curPos.j), processed);
		}
		return count;
	}

	class Position {
		int i, j;

		public Position(int i, int j) {
			this.i = i;
			this.j = j;
		}

		boolean isCorrectPosAt(int[][] map) {
			return (0 <= i && i < map.length &&
					0 <= j && j < map[i].length);
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + getEnclosingInstance().hashCode();
			result = prime * result + i;
			result = prime * result + j;
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
			Position other = (Position) obj;
			if (!getEnclosingInstance().equals(other.getEnclosingInstance()))
				return false;
			if (i != other.i)
				return false;
			if (j != other.j)
				return false;
			return true;
		}

		private _07_剪邮票 getEnclosingInstance() {
			return _07_剪邮票.this;
		}
	}
}
