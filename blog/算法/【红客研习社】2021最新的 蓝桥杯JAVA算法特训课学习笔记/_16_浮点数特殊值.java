public class _16_浮点数特殊值 {
	public static void main(String[] args) {
		// IEEE754中有五个特殊值
		// * Infinity
		// * - Infinity
		// * 0.0
		// * -0.0
		// * NaN		非数Not A Number

		// System.out.println(0 / 0);// 算数异常报错
		System.out.println(0.0 / 0);// NaN
		System.out.println(3.0 / 0);// Infinity
		System.out.println(1.0 / 0);// Infinity

		// 无穷的特性
		// 相加相乘仍为无穷
		// 相减相除为非数
		double Infinity = 1.0 / 0;
		System.out.println(Infinity + 1);// 无穷+1=无穷
		System.out.println(Infinity - 1);// 无穷-1=无穷
		System.out.println(Infinity + Infinity);// 无穷+无穷=无穷
		System.out.println(Infinity - Infinity);// 无穷-无穷=NaN
		System.out.println(Infinity * Infinity);// 无穷*无穷=无穷
		System.out.println(Infinity / Infinity);// 无穷/无穷=NaN
		System.out.println(1 / Infinity);// 1/无穷=无穷小=0.0
		System.out.println(1 / -Infinity);// 1/负无穷=负无穷小=-0.0
		System.out.println(-Infinity);// 无穷的相反数为负无穷
		System.out.println(Infinity * -1);// 无穷的相反数为负无穷
	}
}
