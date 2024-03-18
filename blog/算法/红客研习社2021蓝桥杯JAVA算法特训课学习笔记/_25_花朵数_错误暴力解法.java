import java.math.BigDecimal;
import java.math.BigInteger;

public class _25_花朵数_错误暴力解法 {
	public static void main(String[] args) {
		StringBuilder from_sb = new StringBuilder();
		StringBuilder to_sb = new StringBuilder();
		from_sb.append("1");
		for (int i = 0; i < 20; i++) {
			from_sb.append("0");
		}
		for (int i = 0; i < 21; i++) {
			to_sb.append("9");
		}
		String from_s = from_sb.toString();
		String to_s = to_sb.toString();

		BigInteger k1 = new BigInteger(from_s);
		BigInteger k2 = new BigInteger(to_s);

		for (; k1.compareTo(k2) <= 0; k1 = k1.add(BigInteger.ONE)) {
			// System.out.println(k1);
			BigInteger res = BigInteger.valueOf(0);
			char[] chars = k1.toString().toCharArray();
			for (int i = 0; i < chars.length; i++) {
				// 每项的21次方
				BigInteger each = new BigInteger(chars[i] + "").pow(21);
				res = res.add(each);
				if (res.compareTo(k1) > 0)
					break;
			}
			if (res.compareTo(k1) == 0)
				System.out.println(k1);
		}

	}

}
