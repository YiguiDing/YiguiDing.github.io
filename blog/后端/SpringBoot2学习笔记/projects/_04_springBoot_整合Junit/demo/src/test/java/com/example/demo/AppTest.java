package com.example.demo;//当前的测试类所在位置


// 引导类携带SpringConfiguration注解，通过该注解修饰过的类可以用于创建容器，测试类需要该容器。
// 引导类所在位置：
import com.example.demo.App;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest(classes = App.class/*如果测试类和引导类在同一个包中，则不需要指定classes */)
// @ContextConfiguration(classes = App.class/*也可以用这行来代替上面的指定class的语句 */)
class AppTest {
    @Test
    void test(){
        System.out.println("hello test");
    }
}
