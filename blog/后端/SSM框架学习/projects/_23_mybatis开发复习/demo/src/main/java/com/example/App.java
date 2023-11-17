package com.example;

import com.example.mapper.User;
import com.example.mapper.UserMapper;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class App {

    public static void main(String[] args) throws Exception {
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder()
                .build(Resources.getResourceAsStream("myBaties.xml"));// 加载配置文件实例化sessionFactory

        SqlSession sqlSession = sqlSessionFactory.openSession();// 创建连接

        UserMapper uMapper = sqlSession.getMapper(UserMapper.class);// 代理方式获取mapper
        System.out.println(uMapper);

        uMapper.createUser(new User("admin", "admin"));// 创建用户
        System.out.println(uMapper.getUserById(3));// 查询用户
        uMapper.alterUser(new User(3, "test", "test"));// 修改用户
        System.out.println(uMapper.selectAll());// 查询所用用户

        sqlSession.commit();// 提交事务,因为默认不提交
        sqlSession.close();// 关闭session

        // output
        // org.apache.ibatis.binding.MapperProxy@61a485d2
        // User [uid=3, uname=admin, passwd=admin]
        // [User [uid=1, uname=admin, passwd=admin], User [uid=2, uname=admin, passwd=admin], User [uid=3, uname=test, passwd=test], User [uid=4, uname=admin, passwd=admin]]
    }
}
