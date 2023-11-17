import java.util.*;
public class _11_蛇形填数2 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		sc.close();
		int[][] nums = new int[N][N];
		int left=0,right=N-1,// 二维数组的最左侧、最右侧、最顶部、最底部
			top=0,bottom=N-1;
		int num=N*N;
		while(left<=right&&top<=bottom) {
			for(int x=left;x<=right;x++) {// 最顶部一行	
				nums[top][x]=num--;
			}
			for(int y=top+1;y<=bottom;y++) {// 最左侧一列			
				nums[y][right]=num--;
			}
			for(int x=right-1;left<=x;x--) {// 最底部一行		
				nums[bottom][x]=num--;
			}
			for(int y=bottom-1;top+1<=y;y--) {// 最右侧一列		
				nums[y][left]=num--;
			}
			left++;right--;// 缩小边框范围
			top++;bottom--;
		}
		for (int i = 0; i < nums.length; i++) {
			System.out.println(Arrays.toString(nums[i]));	
		}
	}
}
