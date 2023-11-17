package _01_基础算法;

import java.io.BufferedInputStream;
import java.util.Scanner;
import java.util.Stack;
import java.util.Vector;

public class _05_高精度整数 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        String a1 = sc.next();
        String a2 = sc.next();
        MyBigInteger n1 = new MyBigInteger(a1);
        MyBigInteger n2 = new MyBigInteger(a2);
        System.out.println("加法测试:"+n1.add(n2));
        System.out.println("减法测试:"+n1.sub(n2));
        System.out.println("乘法测试:"+new MyBigInteger(MyBigInteger.multAbs(n1.data, Integer.parseInt(a2))));
        System.out.println("除法测试:"+new MyBigInteger(MyBigInteger.divAbs(n1.data, Integer.parseInt(a2),null)));
    }
}

class MyBigInteger {
    boolean sign;
    Vector<Integer> data;

    MyBigInteger(String num) {
        data = new Vector<>();
        int start = num.length() - 1;
        int end = 0;
        if (num.charAt(0) == '-' || num.charAt(0) == '+') {
            this.sign = num.charAt(0) == '-';
            end++;
        }
        for (; end <= start; start--) {
            data.add(num.charAt(start) - '0');
        }
    }

    MyBigInteger(Vector<Integer> data) {
        this.data = data;
    }

    MyBigInteger(Vector<Integer> data, boolean sign) {
        this.sign = sign;
        this.data = data;
    }

    public int comp(MyBigInteger a, MyBigInteger b) {
        if (a.sign != b.sign)
            return b.sign ? 1 : -1; // 异号
        else
            return !a.sign ? compAbs(a.data, b.data) : -compAbs(a.data, b.data);// 符号相同,同正则绝对值越大值越大，同负则值越大值越小
    }

    public MyBigInteger add(MyBigInteger other) {
        if (this.sign == other.sign) {// 同号相加，绝对值相加，符号保持不变
            return new MyBigInteger(addAbs(this.data, other.data), this.sign);
        } else {// 异号相加，绝对值大的减绝对值小的，符号保持和绝对值大的一致
            if (compAbs(this.data, other.data) >= 0)
                return new MyBigInteger(subAbs(this.data, other.data), this.sign);
            else
                return new MyBigInteger(subAbs(other.data, this.data), other.sign);
        }
    }

    public MyBigInteger sub(MyBigInteger other) {
        return this.add(other.opposite());// 减一个数等于加这个数的相反数。
    }

    public MyBigInteger opposite() {// 相反数
        return new MyBigInteger(this.data, !this.sign);
    }

    // a>b 1
    // a==b 0
    // a<b -1
    private int compAbs(Vector<Integer> a, Vector<Integer> b) {
        if (a.size() != b.size())
            return a.size() > b.size() ? 1 : -1; // a>b
        for (int i = 0; i < a.size(); i++)
            if (a.get(i) != b.get(i))
                return a.get(i) > b.get(i) ? 1 : -1;// a>b
        return 0; // a==b
    }

    private static Vector<Integer> addAbs(Vector<Integer> A, Vector<Integer> B) {
        Vector<Integer> res = new Vector<>();
        int temp = 0;// 进位
        for (int i = 0; i < A.size() || i < B.size(); i++) {
            if (i < A.size()) temp += A.get(i);
            if (i < B.size()) temp += B.get(i);
            res.add(temp % 10);
            temp /= 10;
        }
        if (temp == 1) res.add(1); // 考虑9+9+来自之前的进位1=19，也就是说进位最多是1
        return res;
    }

    private static Vector<Integer> subAbs(Vector<Integer> A, Vector<Integer> B) {// a>b
        Vector<Integer> res = new Vector<>();
        int temp = 0;// 借位
        for (int i = 0; i < A.size(); i++) {
            temp = A.get(i) - temp;
            if (i < B.size()) temp -= B.get(i);// 减出来的就是结果，可能为负
            res.add((temp + 10) % 10);// temp可能是负数，因为当前位的被减数可能不够减，所以直接给他加10,表示提前借位，然后取余
            if (temp < 0) temp = 1;// 是负数就说明下一次要借位
            else temp = 0;
        }
        while (res.size() != 1 && res.lastElement() == 0)
            res.remove(res.size() - 1); // 移除最高位的0
        return res;
    }
    static Vector<Integer> mul(Vector<Integer> a1,Vector<Integer> a2){
        Vector<Integer> res = new Vector<>();
        for (int i = 0; i < a1.size(); i++) {
            for(int j=0;j<a2.size();j++){
                int p = j+i;// 位置
                int n = a1.get(i)*a2.get(j);// 结果
                while(p>=res.size()) res.add(0);// 保证有第p位
                res.set(p,res.get(p)+n);// 这个位置可能本就有值，所以要加上
            }
        }
        for(int i=0;i<res.size();i++){// 最后处理进位
            if(res.get(i)>=10){// 当前位需要进位
                if(i==res.size()) res.add(0);// 保证有第i+1位
                res.set(i+1,res.get(i+1) + res.get(i)/10);// 进位
                res.set(i,res.get(i)%10);// 取余
            }
        }
        return res;
    }
     static Vector<Integer> multAbs(Vector<Integer> A, int b) {// a>b
        Vector<Integer> res = new Vector<>();
        int temp = 0;// 进位
        for (int i = 0; i < A.size() || temp > 0; i++) {
            if (i < A.size()) temp += A.get(i) * b;
            res.add(temp % 10);
            temp /= 10;
        }
        while (res.size() != 1 && res.lastElement() == 0)
            res.remove(res.size() - 1); // 移除最高位的0
        return res;
    }
    static class myObject<T>{
        T val;// 封装一个引用对象
        myObject(T val){ this.val=val; }
    }
    static Vector<Integer> divAbs(Vector<Integer> A, int b, myObject<Integer> R) {// a>b
        Vector<Integer> res = new Vector<>();
        Stack<Integer> temp = new Stack<>();
        int r = 0;// 余数
        for (int i = A.size() - 1; 0 <= i; i--) {// 从最高位开始，模拟手算
            r = r * 10 + A.get(i);
            temp.push(r / b);// 为了实现反转
            r %= b;
        }
        while(!temp.isEmpty()){res.add(temp.pop());}// 反转，因为上一步是从最高位开始算的，结果也是从最高位开始，
        while (res.size() != 1 && res.lastElement() == 0)
            res.remove(res.size() - 1); // 移除最高位的0
        if(R!=null) R.val = r;
        return res;
    }

    @Override
    public String toString() {
        StringBuffer sb = new StringBuffer();
        if (sign)
            sb.append('-');
        for (int i = this.data.size() - 1; 0 <= i; i--)
            sb.append((char) ('0' + this.data.get(i)));
        return sb.toString();
    }
}