import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;

public class _17_四舍六入五成双 {
	public static void main(String[] args) {
		BigDecimal a = BigDecimal.valueOf(1);
		BigDecimal b = BigDecimal.valueOf(3);
		BigDecimal k1 = a.divide(b, new MathContext(4));// MathContext可以控制精度，保留几位小数
		System.out.println(k1);

		// HALF_UP是通常理解的四舍五入，达到了0.5就进位
		// 即
		// 0.1 => 0
		// 0.4 => 0
		// 0.5 => 1
		// 0.51 => 1
		// 0.66666 => 0.6667
		BigDecimal k2 = BigDecimal.valueOf(2).divide(BigDecimal.valueOf(3), new MathContext(4, RoundingMode.HALF_UP));
		System.out.println(k2);

		// HALF_DOWN 是超过了0.5才进位
		// 即
		// 0.4 => 0
		// 0.5 => 0
		// 0.51 => 1
		// 0.61 => 1
		BigDecimal k3 = BigDecimal.valueOf(2).divide(BigDecimal.valueOf(3), new MathContext(4, RoundingMode.HALF_DOWN));
		System.out.println(k3);

		// HALF_EVEN 是四舍六入 在等于5的时候，往偶数方向进位或舍去
		// 即
		// 0.1 => 0
		// 0.4 => 0
		// 0.5 => 0
		// 1.5 => 2
		// 2.5 => 2
		// 3.5 => 4
		// 0.6 => 1
		// 0.7 => 1
		BigDecimal k4 = BigDecimal.valueOf(2).divide(BigDecimal.valueOf(3), new MathContext(4, RoundingMode.HALF_EVEN));
		System.out.println(k4);

	}
}
