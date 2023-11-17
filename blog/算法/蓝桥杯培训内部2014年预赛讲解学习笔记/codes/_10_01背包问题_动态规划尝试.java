import java.util.*;

public class _10_01背包问题_动态规划尝试 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();// 物品数
		int V = sc.nextInt();// 背包容量
		int[] values = new int[N];
		int[] volume = new int[N];

		for (int i = 0; i < N; i++) {
			volume[i] = sc.nextInt();
			values[i] = sc.nextInt();
		}
		sc.close();
//		dp[把第i个物品][放入容量为j的背包的]=总价值
//		dp[把第i个物品][放入容量为j的背包的]=dp[i-1][j-weight[i]]+value[i]
		int[][] dp = new int[N][V + 1];
		for (int j = 0; j < V + 1; j++) {
			dp[0][j] = volume[0] <= j ? values[0] : 0;
		}
		int resMaxVal = 0;
		for (int i = 1; i < N; i++) {
			for (int j = 0; j < V + 1; j++) {
				dp[i][j] = volume[i] <= j
						? Math.max(dp[i - 1][j - volume[i]] + values[i], dp[i - 1][j])
						: dp[i - 1][j];
				if (dp[i][j] > resMaxVal) {
					resMaxVal = dp[i][j];
				}
			}

		}
		System.out.println(resMaxVal);

	}
}
