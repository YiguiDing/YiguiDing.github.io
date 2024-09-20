#ifndef _Sensor_H_
#define _Sensor_H_

#include <stdint.h>
#include "arduino.h"
#include "Timer.hpp"

class BLDCMotor;

class Sensor : Timer
{

private:
  //
  void (*_initSensor)();
  uint16_t (*_readSensor)();
  //
  BLDCMotor *motor = nullptr;
  //
  uint16_t offset = 0;
  uint16_t angle = 0;
  uint16_t prev_angle = 0;
  int32_t full_rotations = 0;
  int32_t prev_full_rotations = 0;
  //
  uint16_t position = 0;
  int32_t positions = 0;
  int32_t velocity = 0;

public:
  Sensor::Sensor(void (*initSensor)(), uint16_t (*readSensor)());
  void connectMotor(BLDCMotor *motor);
  void initSensor();
  uint16_t readSensor();
  void alignSensor();
  void init();
  void update();
  uint16_t getPositon();
  int32_t getPositons();
  int32_t getVelocity();
};

#endif