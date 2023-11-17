import java.util.*;

public class _05_ACM导弹拦截_错误解法求最长递减子序列 {
	public static void main(String[] args) {
		// 最多20发导弹
		Scanner sc = new Scanner(System.in);

		String[] inputs = sc.nextLine().split(" ");
		int[] heights = new int[inputs.length];// 20发导弹高度信息
		for (int i = 0; i < heights.length; i++) {
			heights[i] = Integer.valueOf(inputs[i]);
		}

		// 求最长递减子序列
		// 对于只有一套系统的情况，
		int maxLen = Integer.MIN_VALUE;
		for(int startIdx = 0/*开始位置*/;startIdx<heights.length;startIdx++) {
			int len =1;
			int prev= heights[startIdx];
			for(int curIdx=startIdx+1;curIdx<heights.length;curIdx++) {
				if(prev>heights[curIdx]) {
					len++;
					prev=heights[curIdx];// 这一步就错了，下一步是递减的，但下一步并不一定是长的走法，也许跳过这一步能走得更远
				}
			}
			System.out.println(len);
			if(maxLen<len) {
				maxLen=len;
			}
		}
		
		
		// 对于有20套系统的情况：

		int len = 1;// 启用的拦截系统数
		int[] sys = new int[20];// 20套导弹拦截系统 剩余可拦截高度信息
		int[] cnt = new int[20];// 20套导弹拦截系统 单系统拦截的导弹数

		for (int i = 0; i < sys.length; i++) {
			sys[i] = 30001;// 导弹的高度不超过30000（可能会等于），则系统初始最高可打的高度也设置成这个
		}

		for (int i = 0; i < heights.length; i++) {// 依次处理来袭导弹的高度信息
			int targetHeight = heights[i];// 目标高度

			int minCost = Integer.MAX_VALUE;
			int bestSys = -1;// 最终决定让谁开火
			for (int j = 0; j < len; j++) {// 遍历20套系统
				int cost = sys[j] - targetHeight;// 找到代价最小的策略
				if (sys[j] > targetHeight/* 可以击落 */ && cost < minCost/* 代价最小 */) {
					minCost = cost;
					bestSys = j;
				}
			}
			// 实在是无法拦截才启动增添新系统
			if (bestSys == -1/* 依然无法 */ && len < sys.length/* 还能增加系统，实际上不需要这个判断 */) {
				++len;
				bestSys = len - 1;
			}
			// 拦截
			sys[bestSys] = targetHeight;
			cnt[bestSys]++;// 统计开火次数
		}
		System.out.println(maxLen+" "+len);
	}
}
