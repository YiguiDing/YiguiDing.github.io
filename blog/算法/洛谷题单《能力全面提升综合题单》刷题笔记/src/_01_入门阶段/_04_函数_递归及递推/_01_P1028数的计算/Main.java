package _01_入门阶段._04_函数_递归及递推._01_P1028数的计算;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(dfs(sc.nextInt()));
    }
    static Map<Integer,	Integer> cacheMap = new HashMap<>();
    static int dfs(int cur_last) {
    	if(cacheMap.containsKey(cur_last)) {
    		return cacheMap.get(cur_last);
    	}
    	int res=0;
    	// 情况1：不往后添加新数
    	res+=1;
    	// 情况2：往后添加新数
		for (int next = cur_last/2; 1 <= next ; next--) {
			res+=dfs(next);
		}
		cacheMap.put(cur_last, res);// 缓存
		return res;
    }
}
