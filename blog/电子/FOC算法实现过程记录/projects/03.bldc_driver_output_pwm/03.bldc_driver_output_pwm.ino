#include <Arduino.h>
#include "BLDCMotor.hpp"
#include "foc_utils.h"
#include "typedef.h"

BLDCMotor motor = BLDCMotor();
BLDCDriver driver = BLDCDriver(
#define M1_En 8
#define M1_Ua 5
#define M1_Ub 9
#define M1_Uc 6
    // init driver
    []()
    {
      pinMode(M1_En, OUTPUT); // enable
      pinMode(M1_Ua, OUTPUT); // a
      pinMode(M1_Ub, OUTPUT); // b
      pinMode(M1_Uc, OUTPUT); // c
    },
    // enable or disable driver
    [](bool enable)
    {
      digitalWrite(M1_En, enable ? HIGH : LOW); // enable
    },
    // set pwm to driver
    [](int16_t u_a, int16_t u_b, int16_t u_c)
    {
      // [-32768,32767] => [0,255]
      Serial.print((u_a + _INT16_N_ONE_) / 255);
      Serial.print(',');
      Serial.print((u_b + _INT16_N_ONE_) / 255);
      Serial.print(',');
      Serial.print((u_c + _INT16_N_ONE_) / 255);
      Serial.print('\n');
      // [-32768,32767] => [0,255]
      // 大多数引脚上的 PWM 信号频率约为490 Hz
      // 设置占空比
      analogWrite(M1_Ua, (u_a + _INT16_N_ONE_) / 255);
      analogWrite(M1_Ub, (u_b + _INT16_N_ONE_) / 255);
      analogWrite(M1_Uc, (u_c + _INT16_N_ONE_) / 255);
    });

void setup()
{
  Serial.begin(9600);
  motor.connectDriver(&driver);
  motor.initFOC();
}

uint64_t t1_us, t2_us = micros(), dt_us;
uint64_t dt()
{
  // 微妙us 70分钟溢出一次
  t1_us = micros();
  dt_us = t2_us - t1_us;
  t2_us = t1_us;
  // 大于1s 返回 0.1ms
  return dt_us > 1000000 ? 100 : dt_us;
}

float angle = 0;
void loop()
{
  angle += 1000;
  motor.setPhraseVoltage(0, _INT16_ONE_, angle);
}