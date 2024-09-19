#include <Arduino.h>
#include "BLDCMotor.hpp"
#include "foc_utils.h"
#include "typedef.h"

BLDCMotor motor;
void setup()
{
  Serial.begin(9600);
}
uint16_t a = 0;
void loop()
{
  a += 1500;
  if (a > _2PI_)
    a -= _2PI_;
  motor.setPhraseVoltage(_INT16_ONE_, 0, a);
}