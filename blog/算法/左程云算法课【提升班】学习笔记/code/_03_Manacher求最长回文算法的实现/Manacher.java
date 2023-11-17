import java.util.Arrays;

/**
 * Manacher
 */
public class Manacher {
	public static void main(String[] args) {
		// System.out.println(Arrays.toString(preProcess("123312")));
		System.out.println(getMaxLenStr("qq111222q1231321bbb"));
		System.out.println(getMaxLenStr("qq222111q123321q111222bbb"));
	}

	static int getMaxLenStr(String str_raw) {
		char[] str_ = preProcess(str_raw);
		int[] radius = new int[str_.length];
		int pre_I = -1;
		int pre_R = -1;
		int max_L = -1;
		for (int idx = 0; idx < str_.length; idx++) {
			// 找到之前的对称的最长半径
			radius[idx] = idx < pre_R ? radius[pre_I - (idx - pre_I)] : 0;
			while (0 <= idx - radius[idx] &&
					idx + radius[idx] < str_.length &&
					str_[idx - radius[idx]] == str_[idx + radius[idx]]) {
				radius[idx]++;
			}
			if (pre_R < idx + radius[idx]) {
				pre_R = idx + radius[idx];
				pre_I = idx;
			}
			if (max_L < radius[idx]) {
				max_L = radius[idx];
			}
		}
		return max_L - 1;
	}

	static char[] preProcess(String str) {
		char[] data = new char[str.length() * 2 + 1];
		for (int i = 0, j = 0; i < data.length; i++) {
			data[i] = (i & 1) == 1 ? str.charAt(j++) : '#';
		}
		return data;
	}
}