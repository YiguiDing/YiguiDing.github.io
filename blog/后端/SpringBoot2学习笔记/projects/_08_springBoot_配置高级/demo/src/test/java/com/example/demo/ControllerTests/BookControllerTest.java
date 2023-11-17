package com.example.demo.ControllerTests;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest( webEnvironment = WebEnvironment.RANDOM_PORT) // 使用随机端口启动web服务器环境
@AutoConfigureMockMvc // 开启web测试环境，使得可以创建并自动装配MockMvc对象
// Transactional注解默认在遇到某些异常时回滚，但在JUnit的@Test函数上使用事务注解@Transactional时，函数无论抛异常与否，均会自动回滚。
@Transactional
@Rollback(true) // 显式声明为自动回滚，实际上不必写
public class BookControllerTest {
    @Autowired
    MockMvc mockMvc;// 用来发虚拟请求的对象
    @Test
    void testStetus() throws Exception{
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/books/1");
        ResultActions perform = mockMvc.perform(requestBuilder);
        perform.andExpect(MockMvcResultMatchers.status().is(200)); // 测试状态码是否为200
    }
    @Test
    void testContents() throws Exception{
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/books/1");
        ResultActions perform = mockMvc.perform(requestBuilder);
        // 这里实际存在编码上的问题，暂不考虑
        // 测试字符串是否一致
        perform.andExpect(MockMvcResultMatchers.content().string("{\"data\":\"\u67E5\u8BE2\u6210\u529F,\u4F60\u8BF7\u6C42\u7684ID\u4E3A1\u3002\",\"msg\":{\"state\":100001,\"info\":\"\u67E5\u8BE2\u6210\u529F\"}}"));
    }
    @Test
    void testJson() throws Exception{
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/books/1");
        ResultActions perform = mockMvc.perform(requestBuilder);

        // 测试json数据是否一致
        perform.andExpect(MockMvcResultMatchers.content().json("{\"data\":\"\u67E5\u8BE2\u6210\u529F,\u4F60\u8BF7\u6C42\u7684ID\u4E3A1\u3002\",\"msg\":{\"state\":100001,\"info\":\"\u67E5\u8BE2\u6210\u529F\"}}"));
    
    }
    @Test
    void testCOntentType() throws Exception{
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/books/1");
        ResultActions perform = mockMvc.perform(requestBuilder);
        // 测试响应头是否一致
        perform.andExpect(MockMvcResultMatchers.header().string("Content-Type","application/json"));
    }
}
