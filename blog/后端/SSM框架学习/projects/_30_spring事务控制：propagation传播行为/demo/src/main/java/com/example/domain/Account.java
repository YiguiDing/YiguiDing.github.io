package com.example.domain;

public class Account {
    int uid;
    String uname;
    String passwd;
    Double money;

    public Account(String uname) {
        this.uname = uname;
    }

    public Account(String uname, String passwd) {
        this.uname = uname;
        this.passwd = passwd;
    }

    public Account(int uid, String uname, String passwd) {
        this.uid = uid;
        this.uname = uname;
        this.passwd = passwd;
    }

    public Account(int uid, String uname, String passwd, Double money) {
        this.uid = uid;
        this.uname = uname;
        this.passwd = passwd;
        this.money = money;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    @Override
    public String toString() {
        return "Account [uid=" + uid + ", uname=" + uname + ", passwd=" + passwd + ", money=" + money + "]";
    }
}
