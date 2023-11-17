package com.example.pojo;

public class Address {
    String country;
    String city;

    Address(){
        // 最好至少保证有无参构造方法
        System.out.println("Address.Address()");
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public void setCity(String city) {
        this.city = city;
    }
    @Override
    public String toString() {
        return "Address [country=" + country + ", city=" + city + "]";
    }
}
