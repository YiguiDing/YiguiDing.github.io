package com.example;

import com.example.service.Service;
import com.example.service.impl.ServiceImp;

public class App {
    public static void main(String[] args) {
        Service service = new ServiceImp();
        service.save();
    }
}
