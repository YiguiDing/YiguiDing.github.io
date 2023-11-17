package com.example.demo.service.implments;

import java.io.File;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.demo.service.SmtpMailServer;

@Service
public class SmtpMailServerImpl implements SmtpMailServer {

    @Autowired
    private JavaMailSender mailSender;

    @Value(value = "${spring.mail.username}" + "(xxx官方)")
    private String from; // from 必须和发件人一致

    @Override
    public void SendSimpleMail(String to, String title, String content) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(from);
        msg.setTo(to);
        msg.setSubject(title);
        msg.setText(content);
        mailSender.send(msg);
    }

    @Override
    public void SendMail(String to, String title, String htmlContent, File[] attachments) {
        MimeMessage mineMsg = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mineMsg, true); // 需要指定multipart=true
            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(title);
            helper.setText(htmlContent, true); // 需要指定html=true
            for (File file : attachments) {
                helper.addAttachment(file.getName(), file);
            }
            mailSender.send(mineMsg);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
