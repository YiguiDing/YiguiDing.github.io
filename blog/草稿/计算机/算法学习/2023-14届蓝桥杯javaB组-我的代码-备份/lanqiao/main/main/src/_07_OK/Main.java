// package _07_;

import java.io.BufferedInputStream;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        N = sc.nextInt();
        map1 = new int[N][N];
        map2 = new int[N][N];
        for (int h = 0; h < N; h++) {
            for (int w = 0; w < N; w++) {
                map1[h][w] = sc.nextInt();
            }
        }
        for (int h = 0; h < N; h++) {
            for (int w = 0; w < N; w++) {
                map2[h][w] = sc.nextInt();
            }
        }
        // System.out.println(infect(map1, 0, 1));
        System.out.println(outerCounter(map1)+outerCounter(map2));
    }

    static int N;
    static int[][] map1;
    static int[][] map2;

    static int infect(int[][] map, int y, int x) {
        int cnt = 0;
        if (0 <= y && y < map.length &&
                0 <= x && x < map[y].length &&
                map[y][x] == 1) {
            cnt++;
            map[y][x] = 2;
            cnt += infect(map, y + 1, x);
            cnt += infect(map, y - 1, x);
            cnt += infect(map, y, x + 1);
            cnt += infect(map, y, x - 1);
            // map[y][x] = 1;// 回溯
        }
        return cnt;
    }

    static int outerCounter(int[][] map) {
        int max = 0;
        for (int idx = 0; idx < N; idx++) {
            if (map[idx][0] == 1) {
                int k = infect(map, idx, 0);
                if (k > max) {
                    max = k;
                }
            }
            if (map[idx][N - 1] == 1) {
                int k = infect(map, idx, N - 1);
                if (k > max) {
                    max = k;
                }
            }
            if (map[0][idx] == 1) {
                int k = infect(map, 0, idx);
                if (k > max) {
                    max = k;
                }
            }
            if (map[N - 1][idx] == 1) {
                int k = infect(map, N - 1, idx);
                if (k > max) {
                    max = k;
                }
            }
        }
        return max;
    }
}
