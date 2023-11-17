-- Active: 1692111092852@@127.0.0.1@3306@xiecheng

/*
 5.
 统计各等级会员用户下订单总额
 现有某公司部分订单数据及用户会员等级数据，如下所示：
 订单信息表：order_tb（订单id-order_id，用户id-user_id，订单金额-order_price，订单创建时间-order_time）
 会员等级信息表：uservip_tb（用户id-user_id，会员等级-vip，积分-point）
 请统计每个会员等级的订单总额。
 要求输出：会员等级，订单总额
 注：如果存在某一会员等级的用户没有下订单也需要输出该会员等级，订单总额记录为0，
 输出结果按照订单总额降序排序
 示例数据结果如下：
 结果解释：
 由用户会员等级信息表可知，钻石会员用户有12，该用户这几日共计下订单总额为1550，其他结果同理；
 其中普通会员用户14、16没有下订单，故订单总额为0。
 时间限制：C/C++ 1秒，其他语言2秒
 空间限制：C/C++ 256M，其他语言512M
 示例1
 输入例子：
 drop table if exists  `order_tb` ; 
 CREATE TABLE `order_tb` (
 `order_id` int(11) NOT NULL,
 `user_id` int(11) NOT NULL,
 `order_price` int(11) NOT NULL,
 `order_time` datetime NOT NULL,
 PRIMARY KEY (`order_id`));
 INSERT INTO order_tb VALUES(101,11,380,'2022-09-01 09:00:00'); 
 INSERT INTO order_tb VALUES(102,12,200,'2022-09-01 10:00:00'); 
 INSERT INTO order_tb VALUES(103,13,260,'2022-09-01 12:00:00'); 
 INSERT INTO order_tb VALUES(104,11,100,'2022-09-02 11:00:00'); 
 INSERT INTO order_tb VALUES(105,12,150,'2022-09-02 12:00:00'); 
 INSERT INTO order_tb VALUES(106,12,1200,'2022-09-02 13:00:00'); 
 INSERT INTO order_tb VALUES(107,11,60,'2022-09-03 09:00:00'); 
 INSERT INTO order_tb VALUES(108,13,380,'2022-09-03 09:30:00'); 
 drop table if exists  `uservip_tb` ; 
 CREATE TABLE `uservip_tb` (
 `user_id` int(11) NOT NULL,
 `vip` varchar(16) NOT NULL,
 `point` int(11) NOT NULL,
 PRIMARY KEY (`user_id`));
 INSERT INTO uservip_tb VALUES(10,'银卡会员',530); 
 INSERT INTO uservip_tb VALUES(11,'银卡会员',1555); 
 INSERT INTO uservip_tb VALUES(12,'钻石会员',12000); 
 INSERT INTO uservip_tb VALUES(13,'金卡会员',6115); 
 INSERT INTO uservip_tb VALUES(14,'普通会员',230); 
 INSERT INTO uservip_tb VALUES(15,'银卡会员',810); 
 INSERT INTO uservip_tb VALUES(16,'普通会员',330);
 输出例子：
 vip|order_total
 钻石会员|1550
 金卡会员|640
 银卡会员|540
 普通会员|0
 */

CREATE DATABASE IF NOT EXISTS xiecheng;

USE xiecheng;

drop table if exists `order_tb` ;

CREATE TABLE
    `order_tb` (
        `order_id` int(11) NOT NULL,
        `user_id` int(11) NOT NULL,
        `order_price` int(11) NOT NULL,
        `order_time` datetime NOT NULL,
        PRIMARY KEY (`order_id`)
    );

INSERT INTO order_tb VALUES(101,11,380,'2022-09-01 09:00:00');

INSERT INTO order_tb VALUES(102,12,200,'2022-09-01 10:00:00');

INSERT INTO order_tb VALUES(103,13,260,'2022-09-01 12:00:00');

INSERT INTO order_tb VALUES(104,11,100,'2022-09-02 11:00:00');

INSERT INTO order_tb VALUES(105,12,150,'2022-09-02 12:00:00');

INSERT INTO order_tb VALUES(106,12,1200,'2022-09-02 13:00:00');

INSERT INTO order_tb VALUES(107,11,60,'2022-09-03 09:00:00');

INSERT INTO order_tb VALUES(108,13,380,'2022-09-03 09:30:00');

drop table if exists `uservip_tb` ;

CREATE TABLE
    `uservip_tb` (
        `user_id` int(11) NOT NULL,
        `vip` varchar(16) NOT NULL,
        `point` int(11) NOT NULL,
        PRIMARY KEY (`user_id`)
    );

INSERT INTO uservip_tb VALUES(10,'银卡会员',530);

INSERT INTO uservip_tb VALUES(11,'银卡会员',1555);

INSERT INTO uservip_tb VALUES(12,'钻石会员',12000);

INSERT INTO uservip_tb VALUES(13,'金卡会员',6115);

INSERT INTO uservip_tb VALUES(14,'普通会员',230);

INSERT INTO uservip_tb VALUES(15,'银卡会员',810);

INSERT INTO uservip_tb VALUES(16,'普通会员',330);

SELECT
    uservip_tb.vip,
    SUM(
        IFNULL(order_tb.order_price, 0)
    ) as order_total
from uservip_tb
    LEFT JOIN order_tb ON order_tb.user_id = uservip_tb.user_id
GROUP BY uservip_tb.vip
ORDER BY order_total DESC;