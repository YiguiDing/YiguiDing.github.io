package com.example.demo.controller.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BaseClass {
    public Class<? extends BaseClass> cls;
    public Logger log;
    public BaseClass() {
        cls =  this.getClass();
        log = LoggerFactory.getLogger(cls);
    }
}