#include <Arduino.h>
#include <Wire.h>
#include "BLDCMotor.hpp"
#include "BLDCDriver.hpp"
#include "Sensor.hpp"
#include "foc_utils.h"
#include "typedef.h"

// #define SA5600
#define AS5047P

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
      // 大多数引脚上的 PWM 信号频率约为490 Hz
      analogWrite(M1_Ua, (u_a + _INT16_N_ONE_) / 255);
      analogWrite(M1_Ub, (u_b + _INT16_N_ONE_) / 255);
      analogWrite(M1_Uc, (u_c + _INT16_N_ONE_) / 255);
    });

#ifdef SA5600

Sensor sensor_as5600 = Sensor(
#define SA5600_ADDR 0x36
#define AS5600_RAW_ANGLE 0x0c
#define AS5600_ANGLE 0x0e
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
      uint8_t data[2];
      data[1] = Wire.read();
      data[0] = Wire.read();
      Wire.endTransmission(true);
      return *(uint16_t *)data;
    });

#elif defined AS5047P

#include <AS5047P.h>
#define AS5047P_CHIP_SELECT_PORT 9
#define AS5047P_CUSTOM_SPI_BUS_SPEED 100000
AS5047P as5047p = AS5047P(AS5047P_CHIP_SELECT_PORT, AS5047P_CUSTOM_SPI_BUS_SPEED);
Sensor sensor_as5047p = Sensor(
    []()
    {
      pinMode(AS5047P_CHIP_SELECT_PORT, OUTPUT);
      as5047p.initSPI();
    },
    []()
    {
      digitalWrite(AS5047P_CHIP_SELECT_PORT, HIGH);
      uint16_t t = (uint32_t)as5047p.readAngleRaw() * 0xffff / 0x3fff;
      digitalWrite(AS5047P_CHIP_SELECT_PORT, LOW);
      return t;
    });
#endif

void setup()
{
  Serial.begin(115200);
  motor.connectDriver(&driver);
#ifdef SA5600
  motor.connectSensor(&sensor_as5600);
#elif defined AS5047P
  motor.connectSensor(&sensor_as5047p);
#endif
  motor.initFOC();
}
uint8_t idx = 0;

#include "LowPassFilter.hpp"
LowPassFilter filter1 = LowPassFilter(20);
LowPassFilter filter2 = LowPassFilter(30);
LowPassFilter filter3 = LowPassFilter(40);

void loop()
{
  motor.loopFOC();
  Serial.print(0);
  Serial.print(',');
  Serial.print(sensor_AS5047P.getPositons());
  Serial.print(',');
  Serial.print(filter1(sensor_AS5047P.getPositons()));
  Serial.print(',');
  Serial.print(filter2(sensor_AS5047P.getPositons()));
  Serial.print(',');
  Serial.print(filter3(sensor_AS5047P.getPositons()));
  Serial.print('\n');
}