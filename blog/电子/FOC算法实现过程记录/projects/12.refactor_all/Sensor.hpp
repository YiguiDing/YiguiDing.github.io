#ifndef _Sensor_H_
#define _Sensor_H_

#include <stdint.h>
#include "Timer.hpp"
#include "config.h"

class BLDCMotor;
class Sensor
{
  friend class BLDCMotor;

public:
  /**
   * @return void
   */
  virtual void initSensor() = 0;
  /**
   * @return [0,2PI]
   */
  virtual float readSensor() = 0;

  void connectMotor(BLDCMotor *motor);
  void alignSensor();
  void alignDirectron();
  void align();
  void update();
  float getPositon();
  float getPositons();
  float getVelocity();
  enum SensorDirectrion : int8_t
  {
    UNKNOW = 0,
    CLOCK_WISE = 1,
    ANTI_CLOCK_WISE = -1,
  };

private:
  BLDCMotor *motor = nullptr;
  Timer *timer = new ConcreteTimer();
  SensorDirectrion directron = SensorDirectrion::UNKNOW;
  float offset = 0;
  float position_pre, position_now = 0, d_position;
  float rotations_pre, rotation_now = 0, d_rotation;
  float positions_pre, positions_now = 0, d_positions;
  float velocity = 0;
};

#endif