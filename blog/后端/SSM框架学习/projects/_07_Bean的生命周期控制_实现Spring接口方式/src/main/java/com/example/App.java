package com.example;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.service.Service;

public class App {
    public static void main(String[] args) {
        // 从 ConfigurableApplicationContext 才开始有close方法； ApplicationContext没有close方法
        ConfigurableApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        Service service1 = (Service) ctx.getBean("myService_id2");
        service1.save();
        // 输出9行:
        /*
         * BookDaoImpl的私有无参构造器被调用......
         * ServiceImp的私有无参构造器被调用......
         * setBookDao()被调用......
         * BookDaoImpl的实例对象:
         * com.example.service.impl.ServiceImp@39c0f4a.afterPropertiesSet()被调用......
         * BookDaoImpl的实例对象: com.example.service.impl.ServiceImp@39c0f4a即将被初始化....
         * ServiceImp: saving book...
         * BookDaoImpl: saving book...
         * BookDaoImpl的实例对象:
         * com.example.service.impl.ServiceImp@39c0f4a.destory()被调用......
         * BookDaoImpl的实例对象: com.example.service.impl.ServiceImp@39c0f4a即将被销毁....
         * 
         */
        // 关闭容器才会执行bean的销毁操作
        ctx.registerShutdownHook();// 注册钩子，在java虚拟机关闭前执行关闭容器的操作，可以写在任意位置
        // ctx.close();// 直接关闭容器，一般写在最后
    }
}
