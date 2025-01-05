#include <Arduino.h>
#include "hardware.h"
#include "motor.h"

Motor motor;
void setup()
{
    Serial.begin(115200);
    hardware_init();
    motor_init(&motor, 7, 12);
}

char buffer[255];
uint8_t idx = 0;
uint8_t len = 0;

float t1 = micros() / 1e6, t2, dt = 0.0001;
void loop()
{
    t1 = micros() / 1e6f; // 48 MHz 耗时 0.000002s
    // analog_read +analog_write 耗时122us
    // device_init 耗时50us
    motor_foc_loop(&motor, dt);
    t2 = micros() / 1e6f;
    dt = t2 - t1;
    if (dt <= 0)
        dt = 0.0001;
    // log
    static uint8_t cnt = 0;
    if (++cnt % 35 == 0 && len == 0)
    {
        cnt = 0;
        // len += sprintf(buffer, "0,%f\n", dt);
        // len += sprintf(buffer, "0,%.2f,%.2f\n", motor.Uahpha, motor.Ubeta);
        // len += sprintf(buffer, "0,%.6f,%.2f,%.2f,%.2f\n", dt, motor.Ua, motor.Ub, motor.Uc);
        len += sprintf(buffer, "0,%.6f,%.2f,%.2f,%.2f,%.2f,%.2f,%.2f\n",
                       dt,
                       motor.theta_mes,
                       motor.theta_est,
                       _normalizeAngle(motor.theta_est),
                       motor.omega,
                       motor.Ua, motor.Ub, motor.Uc);
        // len += sprintf(buffer, "0,%.6f,%.2f,%.2f\n", dt, motor.theta, motor.omega);
        // len += sprintf(buffer, "0,%.6f,%d\n", dt, val);
        // len += sprintf(buffer, "0,%f,%f,%f\n", min_val, motor.theta_mes, max_val);
    }
    // send message
    if (len > 0)
    {
        Serial.print(buffer[idx++]);
        if (idx == len)
            len = idx = 0;
    }
    // decode cmd
    if (Serial.available())
    {
        char cmd = Serial.read();
        float val = Serial.parseFloat();
        while (Serial.read() != '\n')
            ;
        switch (cmd)
        {
        case 't':
            motor.target = val;
        case 'l':
            motor.pll_theta.filter.Ts = val;
            break;
        case 'p':
            motor.pll_theta.pid.Kp = val;
            pid_controller_reset(&motor.pll_theta.pid);
            break;
        case 'i':
            motor.pll_theta.pid.Ki = val;
            pid_controller_reset(&motor.pll_theta.pid);
            break;
        case 'd':
            motor.pll_theta.pid.Kd = val;
            pid_controller_reset(&motor.pll_theta.pid);
            break;
        default:
            break;
        }
    }
}
