import java.util.*;
public class _11_蛇形填数3 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		sc.close();
		int[][] nums = new int[N][N];
		int num = 1;
		int len=1;
		while(len<=N) {
			if(len%2==0) {// 方向不同
				for (int i = 0; i < len; i++) {
					nums[i][len-i-1]=num++;// 遍历矩阵对角线
				}	
			}else {
				for (int i = 0; i < len; i++) {
					nums[len-i-1][i]=num++;// 遍历矩阵对角线
				}
			}
			len++;
		}
		len=N-1;
		int offset =1;
		while(1<=len) {
			if(len%2==0) {// 方向不同
				for (int i = 0; i < len; i++) {
					nums[offset+i][offset+len-i-1]=num++;// 遍历矩阵对角线，相对于原数组的偏移为offset
				}	
			}else {
				for (int i = 0; i < len; i++) {
					nums[offset+len-i-1][offset+i]=num++;// 遍历矩阵对角线
				}
			}
			offset++;
			len--;
		}
		for (int i = 0; i < nums.length; i++) {
			System.out.println(Arrays.toString(nums[i]));	
		}
	}
}
