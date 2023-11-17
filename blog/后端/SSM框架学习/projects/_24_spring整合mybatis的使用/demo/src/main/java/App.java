

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.config.SpringConfig;
import com.example.domain.User;
import com.example.service.UserService;

public class App {
    public static void main(String[] args) {
        ConfigurableApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        UserService userService = ctx.getBean(UserService.class);
        userService.add(new User("test01", "test01"));
        userService.update(new User(1, "kkk","bbb"));
        System.out.println(userService.getById(1));
        System.out.println(userService.getAll());
        // User [uid=1, uname=kkk, passwd=bbb]
        //[User [uid=1, uname=kkk, passwd=bbb], User [uid=2, uname=admin, passwd=admin], User [uid=3, uname=test, passwd=test], User [uid=4, uname=admin, passwd=admin], User [uid=5, uname=test01, passwd=test01]]
        ctx.close();
    }
}
