package com.example.pojo;

public class User {
    String name;
    int age;
    Address address;

    User() {
        System.out.println("User.User()");
        // 最好保证至少有无参构造函数
    }

    public User(String name, int age) {
        // 如果前端参数提供name和age属性，则会调用此处的构造函数，不会报错，
        // 但是如果前端只提供name参数，
        // 则应该保证至少有无参构造函数+setName方法
        // 或者应该保证有一个User User(String name)构造方法
        this.name = name;
        this.age = age;
        System.out.println("User.User(String name, int age)");
    }
    @Override
    public String toString() {
        return "User [name=" + name + ", age=" + age + ", address=" + address + "]";
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Address getAddress() {
        // 这个方法必须要有，在获取到 address.country=china时，
        // 会调用这个方法，如果该方法返回null,则调用无参构造方法创建
        // 然后调用address.setCountry()方法，然后会调用setAddress()方法
        // 在读取到address.city=?? 时，又会接着调用这里的getAddress方法，获取address对象，然后给address注入city
        return address;
    }
}
