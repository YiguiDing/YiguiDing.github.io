
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.config.SpringConfig;
import com.example.service.AccountService;

public class App {
    public static void main(String[] args)throws Exception {
        ConfigurableApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        AccountService accountService = ctx.getBean(AccountService.class);
        // accountService.add(new Account("userA", "123"));
        // accountService.add(new Account("userB", "123"));
        // accountService.save(1, 1000);
        // accountService.save(2, 1000);

        System.out.println(accountService.getAll());
        accountService.transfer(2, 1, 500);
        System.out.println(accountService.getAll());
        ctx.close();
    }
}
