package com.demo.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
// import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;

@Data
@TableName(value = "book") // 如果表名和类名不一致，指定表名
public class Book {

    @TableId(type = IdType.AUTO/* id自增,数据库该字段必须是自增 */)
    // @TableId(type = IdType.ASSIGN_ID/* id手动分配，数据库该字段关闭自增，然后手动指定id */)
    // @TableId(type = IdType.ASSIGN_UUID /* 使用雪花算法生成id,也可以手动分配 */)
    Long id;
    @TableField(value = "name") // 如果表中的字段名和此处不一致，则可用该注解指定字段名
    String name;
    @TableField(value = "author", select = true) // 如果不想让密码等的字段被查询，可使用select=false
    String author;
    String description;

    // @TableLogic(value = "0"/*默认值，不删除 */,delval = "1"/*删除标记值 */)
    // Integer exist;// 名称需和表中字段一致

    @Override
    public String toString() {
        return "Book [id=" + id + ", name=" + name + ", author=" + author + ", description=" + description + "]";
    }
}