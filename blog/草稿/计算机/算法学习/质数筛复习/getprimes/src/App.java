import java.util.ArrayList;

public class App {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println(getPrimes(100).toString());
        // 输出[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    }

    static ArrayList<Integer> getPrimes(int N) {
        ArrayList<Integer> primes = new ArrayList<>();
        boolean[] removed = new boolean[N+1];
        for (int i = 2; i < N; i++) {
            if (!removed[i]) primes.add(i);
            for (int j = 0; j < primes.size() && primes.get(j) * i <removed.length; j++) {
                removed[primes.get(j) * i] = true;
                if (i % primes.get(j) == 0)
                    break;// primes[j]是i的因数
            }
        }
        return primes;
    }
}
