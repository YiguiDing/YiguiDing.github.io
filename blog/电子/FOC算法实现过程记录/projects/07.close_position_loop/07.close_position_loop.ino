#include <Arduino.h>
#include <Wire.h>
#include "BLDCMotor.hpp"
#include "BLDCDriver.hpp"
#include "Sensor.hpp"
#include "foc_utils.h"
#include "typedef.h"

BLDCMotor motor = BLDCMotor();

#define M1_En 8
#define M1_Ua 5
#define M1_Ub 9
#define M1_Uc 6
BLDCDriver driver = BLDCDriver(
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
      // 大多数引脚上的 PWM 信号频率约为490 Hz
      // 设置占空比
      analogWrite(M1_Ua, (u_a + _INT16_N_ONE_) / 255);
      analogWrite(M1_Ub, (u_b + _INT16_N_ONE_) / 255);
      analogWrite(M1_Uc, (u_c + _INT16_N_ONE_) / 255);
      Serial.print((u_a + _INT16_N_ONE_) / 255);
      Serial.print(',');
      Serial.print((u_b + _INT16_N_ONE_) / 255);
      Serial.print(',');
      Serial.print((u_c + _INT16_N_ONE_) / 255);
      Serial.print('\n');
    });

#define AS5600_ADDR 0x36
#define AS5600_RAW_ANGLE 0x0c
#define AS5600_ANGLE 0x0e
Sensor sensor = Sensor(
    []()
    {
      Wire.begin();
    },
    []()
    {
      Wire.beginTransmission(AS5600_ADDR);
      Wire.write(AS5600_ANGLE);
      Wire.endTransmission(false);
      Wire.requestFrom(AS5600_ADDR, 2);
      uint16_t data = 0;
      *((uint8_t *)&data + 1) = Wire.read();
      *((uint8_t *)&data + 0) = Wire.read();
      Wire.endTransmission(true);
      // as5600 12bit精度，左移4位变成16位
      data <<= 4;
      return data;
    });

void setup()
{
  Serial.begin(115200);
  motor.connectDriver(&driver);
  motor.connectSensor(&sensor);
  motor.initFOC();
}

void loop()
{
  motor.loopFOC();
  // motor.setPhraseVoltage(0,0,0);
}