package com.example.demo.controller.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    Object data;
    Message msg;
    public static Message SAVE_OK = new Message(1000001, "保存成功");
    public static Message SAVE_ER = new Message(1000002, "保存失败");
    public static Message QUEY_OK = new Message(1000003, "查询成功");
    public static Message QUEY_ER = new Message(1000004, "查询失败");
    public static Message MODF_OK = new Message(1000005, "修改成功");
    public static Message MODF_ER = new Message(1000006, "修改失败");
    public static Message DELT_OK = new Message(1000007, "删除成功");
    public static Message DELT_ER = new Message(1000008, "删除失败");
    
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    static class Message {
        int code;
        String info;
    }
}
