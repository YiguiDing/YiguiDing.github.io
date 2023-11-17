package com.example.demo.service;

import java.io.File;

public interface SmtpMailServer {
    public void SendSimpleMail(String to, String title, String content);

    public void SendMail(String to, String title, String htmlContent, File[] attachments);
}
