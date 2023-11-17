import java.util.*;
import java.util.Scanner;

public class Main2_2 {
	public static void main(String[] args) {
//		全班刷题比他多的学生数<=刷题比他少的学生数。
		// dp[i][]
		Scanner sc = new Scanner(System.in);
		Stu[] sts = new Stu[sc.nextInt()];
		int[] res = new int[sts.length];
		for(int i=0;i<sts.length;i++) {
			sts[i]=new Stu(sc.nextInt(),i);
		}
		Arrays.sort(sts,(o1,o2)->-Integer.compare(o1.score, o2.score));
		for(int i=0;i<sts.length;i++) {
			if(i<=sts.length/2) {
				res[sts[i].initIdx]=0;
			}else {
				res[sts[i].initIdx]= sts[i-1].score-sts[i].score+res[sts[i-1].initIdx];
			}
		}
		for(int i=0;i<res.length;i++) {
			if(res[i]!=0) {
				res[i]++;
			}
		}
		Arrays.toString(res);
		StringBuilder sb = new StringBuilder();
		for(int i=0;i<res.length;i++) {
			sb.append(res[i]);
			if(i<res.length-1) {
				sb.append(' ');
			}
		}
		System.out.println(sb.toString());
	}
	static class Stu{
		int score,initIdx;
		public Stu(int score, int initOrder) {
			super();
			this.score = score;
			this.initIdx = initOrder;
		}
		
	}
}
