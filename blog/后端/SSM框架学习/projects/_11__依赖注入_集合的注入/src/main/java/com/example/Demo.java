package com.example;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class Demo {
    int[] myArray;
    List<String> myList;
    Set<String> mySet;
    Map<String, String> myMap;
    Properties myProperties;
    public void setMyArray(int[] array) {
        this.myArray = array;
    }
    public void setMyList(List<String> list) {
        this.myList = list;
    }
    public void setMySet(Set<String> set) {
        this.mySet = set;
    }
    public void setMyMap(Map<String, String> map) {
        this.myMap = map;
    }
    public void setMyProperties(Properties properties) {
        this.myProperties = properties;
    }
    @Override
    public String toString() {
        return "Demo [myArray=" + Arrays.toString(myArray) + ", myList=" + myList + ", mySet=" + mySet + ", myMap="
                + myMap + ", myProperties=" + myProperties + "]";
    }
}
