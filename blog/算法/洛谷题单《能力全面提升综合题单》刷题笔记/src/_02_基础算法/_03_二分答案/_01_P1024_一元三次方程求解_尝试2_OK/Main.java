package _02_基础算法._03_二分答案._01_P1024_一元三次方程求解_尝试2_OK;

import java.io.BufferedInputStream;
import java.util.ArrayList;
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
		for (double x = -100; x <= 100; x+=0.001) {
			if(Math.abs(fun(x))<0.01) {
				ans.add(x);
				x+=1;
			}
			if(ans.size()>=3) {
				break;
			}
		}
		for (Double val : ans) {			
			System.out.printf("%.2f ",val);
		}
	}

	static double a, b, c, d;

	static double fun(double x) {
		return a * x * x * x + b * x * x + c * x + d;
	}
}
