package com.example.mapper;

public class User {
    int uid;
    String uname;
    String passwd;

    public int getUid() {
        return uid;
    }

    public User(String uname, String passwd) {
        this.uname = uname;
        this.passwd = passwd;
    }
    

    public User(int uid, String uname, String passwd) {
        this.uid = uid;
        this.uname = uname;
        this.passwd = passwd;
    }

    public void setUid(int id) {
        this.uid = id;
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
        return "User [uid=" + uid + ", uname=" + uname + ", passwd=" + passwd + "]";
    }
}
