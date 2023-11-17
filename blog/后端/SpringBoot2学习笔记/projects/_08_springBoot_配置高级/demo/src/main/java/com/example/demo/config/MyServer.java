package com.example.demo.config;

import java.time.temporal.ChronoUnit;

import javax.validation.constraints.Max;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.convert.DataSizeUnit;
import org.springframework.boot.convert.DurationUnit;
import org.springframework.util.unit.DataSize;
import org.springframework.util.unit.DataUnit;
import org.springframework.validation.annotation.Validated;

import ch.qos.logback.core.util.Duration;
import lombok.Data;

@Data
@Validated // 使用验证器来验证
@ConfigurationProperties(prefix = "my-server")
public class MyServer {
    String ip;
    @Max(value = 65535,message = "端口号不能超过65535") // 验证上限值
    int port;
    @DurationUnit(ChronoUnit.DAYS)
    Duration timeOut;
    @DataSizeUnit(DataUnit.BYTES)
    DataSize size;
}
