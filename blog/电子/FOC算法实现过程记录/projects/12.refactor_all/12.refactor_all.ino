#include <Arduino.h>
#include <Wire.h>
#include "BLDCMotor.hpp"
#include "BLDCDriver.hpp"
#include "Sensor.hpp"
#include "foc_utils.h"
#include "arduino/ArduinoBLDCDriver.hpp"
#include "arduino/ArduinoCurrentSensor.hpp"
#include "arduino/ArduinoCommand.hpp"
#include "arduino/AS5600Sensor.hpp"
#include "Command.hpp"

#define Ua 5
#define Ub 9
#define Uc 6
#define En 8

#define Ia A0
#define Ib A2
#define I_R 0.01f // 10mΩ
#define I_A 50    // 50倍

BLDCMotor motor = BLDCMotor(7, 12);
Sensor *sensor = new AS5600Sensor();
BLDCDriver *driver = new ArduinoBLDCDriver(Ua, Ub, Uc, En);
CurrentSensor *currentSensor = new ArduinoCurrentSensor(Ia, Ib, I_R, I_A);
ArduinoCommand command;

void setup()
{
  Serial.begin(115200);

  motor.connectDriver(driver);
  motor.connectSensor(sensor);
  motor.connectCurrentSensor(currentSensor);

  command.connectMotor(&motor);
  command.connectSerial(&Serial);
  motor.connectCommand(&command);

  motor.initFOC();
  motor.setMode(BLDCControlMode::Current);
}

void loop()
{
  motor.loopFOC();
  command.update();
  return;
  sensor->update();
  currentSensor->update();

  float e_angle = motor.electricalAngle();
  CurrentABC abc = currentSensor->getCurrentABC();
  CurrentAB ab = currentSensor->getCurrentAB();
  CurrentDQ dq = currentSensor->getCurrentDQ(e_angle);

  motor.setPhraseVoltage(0, 0.3, e_angle);

  Serial.print(abc.a);
  Serial.print(',');
  Serial.print(abc.b);
  Serial.print(',');
  Serial.print(abc.c);
  Serial.print(',');

  Serial.print(ab.alpha);
  Serial.print(',');
  Serial.print(ab.beta);
  Serial.print(',');

  Serial.print(dq.d);
  Serial.print(',');
  Serial.print(dq.q);
  Serial.print('\n');
}