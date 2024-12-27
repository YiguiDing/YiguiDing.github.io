#ifndef _Sensor_H_
#define _Sensor_H_

#include <stdint.h>
#include "Timer.hpp"
#include "config.h"
#include "Pll.h"

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
  enum SensorMode : int8_t
  {
    FDM_Mode = 1, // 有限差分法（Finite Difference Method）
    PLL_Mode = 2,
  };

// private:
public:
  BLDCMotor *motor = nullptr;
  Timer *timer = new ConcreteTimer();
  SensorDirectrion directron = SensorDirectrion::UNKNOW;
  SensorMode mode = SensorMode::PLL_Mode;
  // ##################################################################
  float offset = 0;
  float positon = 0;
  float positons = 0;
  float Velocity = 0;
  // ##################################################################
  PLL pll;
  // ##################################################################
  float position_pre = 0, position_now = 0;
  float rotations_pre = 0, rotations_now = 0;
  float positions_pre = 0, positions_now = 0;
  // ##################################################################
  float velocity = 0;
};

#endif