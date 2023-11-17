import java.util.BitSet;

public class bitMap的实现 {
	public static void main(String[] args) {
		bitMap bMap = new bitMap(64);
		for (int i = 0; i < bMap.lengthOfBit; i++) {
			bMap.setBit(i, i%2==0? true:false);
		}
		System.out.println(bMap.toString());
		//输出 [1010101010101010101010101010101010101010101010101010101010101010]
	}
}

class bitMap {
	long[] data;// long 4字节，32bit
	int lengthOfBit;
	int capacityOfData;

	bitMap(int lengthOfBit) {
		this.lengthOfBit = lengthOfBit;
		capacityOfData = (int) Math.ceil(lengthOfBit / 32d);
		data = new long[capacityOfData];
	}

	void setBit(int idxOfBit, boolean flag) {
		if (0 <= idxOfBit && idxOfBit < lengthOfBit) {
			int index = idxOfBit / 32;
			int offset = idxOfBit % 32;
			long mask = 1L << offset;
			if (flag) {
				data[index] = data[index] | mask;
			} else {
				data[index] = data[index] & ~mask;
			}
		}
	}

	boolean getBit(int idxOfBit) {
		if (0 <= idxOfBit && idxOfBit < lengthOfBit) {
			int index = idxOfBit / 32;
			int offset = idxOfBit % 32;
			long mask = 1L << offset;
			return (data[index] & mask) != 0;
		}
		return false;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append('[');
		for (int i = 0; i < lengthOfBit; i++) {
			if (getBit(i)) {
				sb.append("1");
			} else {
				sb.append("0");
			}
		}
		sb.append(']');
		return sb.toString();
	}
}
