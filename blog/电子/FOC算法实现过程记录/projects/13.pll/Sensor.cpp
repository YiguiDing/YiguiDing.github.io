#include "Sensor.hpp"
#include "BLDCMotor.hpp"
#include "foc_utils.h"
#include "communication.hpp"

void Sensor::connectMotor(BLDCMotor *motor)
{
  this->motor = motor;
}
void Sensor::alignSensor()
{
  this->motor->setPhraseVoltage(0, 0.3f, 3 * M_PI_2); // -90° (3PI/2) 位置q轴施加电压，或0度d轴施加电压
  delay(2000);
  this->offset = this->readSensor();
  this->motor->setPhraseVoltage(0, 0, 0);
}
void Sensor::alignDirectron()
{
  this->directron = SensorDirectrion::CLOCK_WISE;
}
void Sensor::align()
{
  this->alignSensor();
  this->alignDirectron();
  position_now = this->readSensor(); // for position_now
}
void Sensor::update()
{
  switch (mode)
  {
  case SensorMode::PLL_Mode:           // 锁相环法
    position_now = this->readSensor(); // for position_now
    this->pll.update(position_now);    //  /* 37us */
    this->positon = _normalizeAngle(this->directron * (this->pll.value - offset));
    this->positons = this->directron * (this->pll.value - offset);
    this->velocity = this->directron * this->pll.speed;
    break;
  case SensorMode::FDM_Mode:                        // 有限差分法（Finite Difference Method）
    position_now = this->readSensor();              // for position_now
    float d_position = position_now - position_pre; // for d_position
    // ##################################################################
    if (fabsf(d_position) > 3 * M_PI_2)               // 3/2 * PI = 270°
      rotations_now += d_position < 0 ? +1 : -1;      // for rotation_now
    float d_rotation = rotations_now - rotations_pre; // for d_rotation
    // ##################################################################
    positions_now = rotations_now * M_TWOPI + position_now; // for positions_now
    float d_positions = positions_now - positions_pre;      // for d_positions
    // ##################################################################
    velocity = d_positions / this->timer->dt_s();
    // ##################################################################
    this->positon = _normalizeAngle(this->directron * (position_now - offset));
    this->positons = this->directron * (positions_now - offset);
    this->velocity = this->directron * velocity;
    // ##################################################################
    position_pre = position_now;
    rotations_pre = rotations_now;
    positions_pre = positions_now;
    // ##################################################################
    break;
  }
}
/**
 * @return [0,2PI]
 */
float Sensor::getPositon()
{
  return positon;
}
float Sensor::getPositons()
{
  return this->positons;
}
float Sensor::getVelocity()
{
  return this->velocity;
}
