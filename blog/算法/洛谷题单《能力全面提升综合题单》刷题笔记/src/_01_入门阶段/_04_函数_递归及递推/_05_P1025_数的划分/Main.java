package _01_入门阶段._04_函数_递归及递推._05_P1025_数的划分;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        K = sc.nextInt();
        cache = new int[N + 1][N + 1][K + 1];
        computed = new boolean[N + 1][N + 1][K + 1];
        System.out.println(dfs(1, 0, 0));
    }

    static int N;
    static int K;
    static LinkedList<Integer> result = new LinkedList<>();
    static int[][][] cache;
    static boolean[][][] computed;

    static int dfs(int curNum, int curSum, int selected) {
        if (curSum > N/* 剪枝，和大于目标值提前结束递归 */ || curNum > N/* 数字的范围1+7=8 7是组成8的最大的数 */) {
            return 0;
        }
        if (selected == K) {
            if (curSum == N) {
                // System.out.println(result);
                return 1;
            } else {
                return 0;
            }
        } else {

            if (computed[curNum][curSum][selected]) {// 查缓存
                return cache[curNum][curSum][selected];
            }
            int cnt = 0;
            // 不选当前数
            cnt += dfs(curNum + 1/* 后续也不再考虑这个数 */, curSum, selected);
            // 选当前数
            // result.add(curNum);
            cnt += dfs(
                    curNum/* 后续任然可能选择当前数，但绝不会再选择之前的数导致重复 */,
                    curSum + curNum/* 求和 */,
                    selected + 1/* 选中 */
            );
            // result.removeLast();
            cache[curNum][curSum][selected] = cnt;// 缓存
            computed[curNum][curSum][selected] = true;
            return cnt;
        }
    }
}
