package _04_OK;
// package _04_;

import java.io.BufferedInputStream;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(new BufferedInputStream(System.in));
        add(sc.nextInt(),sc.nextInt(),sc.nextInt(),sc.nextInt());
        add(sc.nextInt(),sc.nextInt(),sc.nextInt(),sc.nextInt());
        System.out.println(positions.size());
    }

    static Set<Item> positions = new HashSet<>();
    static void add(int x1, int y1, int x2, int y2) {
        for (int y = y1; y < y2; y++) {
            for (int x = x1; x < x2; x++) {
                positions.add(new Item(x, y));
            }
        }
    }

}

class Item {
    int x, y;

    public Item(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + x;
        result = prime * result + y;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Item other = (Item) obj;
        if (x != other.x)
            return false;
        if (y != other.y)
            return false;
        return true;
    }

}
