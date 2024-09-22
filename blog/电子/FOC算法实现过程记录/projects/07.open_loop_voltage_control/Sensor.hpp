#ifndef _Sensor_H_
#define _Sensor_H_

#include <stdint.h>
#include "arduino.h"
#include "Timer.hpp"

class BLDCMotor;

class Sensor : Timer
{
  enum SensorDirectrion : int8_t
  {
    UNKNOW = 0,
    CLOCK_WISE = 1,
    ANTI_CLOCK_WISE = -1,
  };
  friend class BLDCMotor;

private:
  // haredware
  void (*initHardWare)();
  uint16_t (*readHardWare)();
  //
  BLDCMotor *motor = nullptr;
  //
  uint16_t offset = 0;
  uint16_t angle = 0;
  uint16_t prev_angle = 0;
  int32_t full_rotations = 0;
  int32_t prev_full_rotations = 0;
  // for Velocity
  float v_positions = 0;
  float v_prev_positions = 0;
  float prev_velocity = 0;
  float v_dt_s = 0;
  // for dir
  SensorDirectrion directron = SensorDirectrion::UNKNOW;

public:
  Sensor(void (*initHardWare)(), uint16_t (*readHardWare)());
  void connectMotor(BLDCMotor *motor);
  void initSensor();
  uint16_t readSensor();
  void alignSensor();
  void init();
  void update();
  uint16_t getPositon();
  float getPositons();
  float getVelocity();
};

#endif