package _02_基础算法._03_二分答案._01_P1024_一元三次方程求解_错;

import java.io.BufferedInputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(new BufferedInputStream(System.in));
		a = sc.nextDouble();
		b = sc.nextDouble();
		c = sc.nextDouble();
		d = sc.nextDouble();
		List<Double> ans = new ArrayList<>();

		double l = -100, r = 100;
		while (l < r && ans.size() < 3) {
			while(r-l>0.0001){
				double mid = l+(r-l)/2;
				if (fun(l) * fun(mid) < 0) 
					r=mid;
				else if (fun(mid) * fun(r) < 0) 
					l=mid;
				else{
					r-=0.001;
				}
			}
			ans.add(l);
			l+=1;
			r=100;
		}
		for (Double num : ans) {
			System.out.printf("%.2f ", num);
		}
	}

	static double a, b, c, d;

	static double fun(double x) {
		return a * x * x * x + b * x * x + c * x + d;
	}
}
