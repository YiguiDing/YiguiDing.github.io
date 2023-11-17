package _FF_习题课;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class _03_数的三次方根 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(new BufferedInputStream(System.in));
		double n = sc.nextDouble();
		System.out.printf("%.6f",root(n));
		
	}
	static double root(double x) {
		double l=-1e4,r=1e4,mid;
		while(r-l>1e-8) {
			mid = l+(r-l)/2;
			if(mid*mid*mid<=x) l=mid;
			else r=mid;
		}
		return r;
	}
}
