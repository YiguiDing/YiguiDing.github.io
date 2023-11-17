package com.example.demo.controller.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    Object date;
    Info info;

    @Data
    @AllArgsConstructor
    static class Info {
        int code; // 格式 xxx + 001 + 1或0
        String msg;
    }
    public static Info ADD_OK = new Info(2000011, "添加成功");
    public static Info ADD_FL = new Info(2000010, "添加失败");
    public static Info DEL_OK = new Info(2000021, "删除成功");
    public static Info DEL_FL = new Info(2000020, "删除失败");
    public static Info UPD_OK = new Info(2000031, "更新成功");
    public static Info UPD_FL = new Info(2000030, "更新失败");
    public static Info SER_OK = new Info(2000041, "查询成功");
    public static Info SER_FL = new Info(2000040, "查询失败");
    public static Info PAG_OK = new Info(2000051, "页面查询成功");
    public static Info PAG_FL = new Info(2000050, "页面查询失败");

    public static Info SER_INR_ERR = new Info(5000010, "服务器内部异常");
}
