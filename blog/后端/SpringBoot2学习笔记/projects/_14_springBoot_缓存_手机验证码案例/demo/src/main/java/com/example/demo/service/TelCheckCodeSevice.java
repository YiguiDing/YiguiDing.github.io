package com.example.demo.service;


public interface TelCheckCodeSevice  {
    public String SendCodeToPhone(String tel);
    public Boolean CheckCode(String tel,String code);
}
