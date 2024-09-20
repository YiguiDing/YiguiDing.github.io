#include <Arduino.h>
#include <Wire.h>
#include "BLDCMotor.hpp"
#include "BLDCDriver.hpp"
#include "Sensor.hpp"
#include "foc_utils.h"
#include "typedef.h"

#define AS5600
// #define AS5047P

#ifdef AS5600

#define AS5600_ADDR 0x36
#define AS5600_RAW_ANGLE 0x0c
#define AS5600_ANGLE 0x0e

#elif defined AS5047P

#include <AS5047P.h>
#define AS5047P_CHIP_SELECT_PORT 9
#define AS5047P_CUSTOM_SPI_BUS_SPEED 100000
AS5047P as5047p = AS5047P(AS5047P_CHIP_SELECT_PORT, AS5047P_CUSTOM_SPI_BUS_SPEED);

#endif

Sensor *sensor = new Sensor(
#ifdef AS5600
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
    }
#elif defined AS5047P
    []()
    {
      pinMode(AS5047P_CHIP_SELECT_PORT, OUTPUT);
      as5047p.initSPI();
    },
    []()
    {
      digitalWrite(AS5047P_CHIP_SELECT_PORT, HIGH);
      // 14bit精度 左移2位变成16位
      uint16_t data = as5047p.readAngleRaw() << 2;
      digitalWrite(AS5047P_CHIP_SELECT_PORT, LOW);
      return data;
    }
#endif
);

void setup()
{
  Serial.begin(115200);
  sensor->initSensor();
}

uint8_t idx = 0;
void loop()
{
  sensor->update();
  if ((++idx %= 10) == 0)
  {
    Serial.print(0);
    Serial.print(sensor->readSensor());
    Serial.print(',');
    Serial.print(sensor->getPositon());
    Serial.print(',');
    Serial.print(sensor->getPositons());
    Serial.print(',');
    Serial.print(sensor->getVelocity());
    Serial.print('\n');
  }
}
