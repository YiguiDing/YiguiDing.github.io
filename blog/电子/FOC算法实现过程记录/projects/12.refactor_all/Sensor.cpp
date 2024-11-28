#include "Sensor.hpp"
#include "BLDCMotor.hpp"
#include "foc_utils.h"

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
  position_pre = position_now;
  rotations_pre = rotation_now;
  positions_pre = positions_now;
  // ##################################################################
  position_now = this->readSensor();        // for position_now
  d_position = position_now - position_pre; // for d_position
  // ##################################################################
  if (fabsf(d_position) > 3 * M_PI_2)         // 3/2 * PI = 270°
    rotation_now += d_position < 0 ? +1 : -1; // for rotation_now
  d_rotation = rotation_now - positions_pre;  // for d_rotation
  // ##################################################################
  positions_now = rotation_now * M_TWOPI + position_now; // for positions_now
  d_positions = positions_now - positions_pre;           // for d_positions
  // ##################################################################
  velocity = d_positions / this->timer->dt_s();
}
/**
 * @return [0,2PI]
 */
float Sensor::getPositon()
{
  return _normalizeAngle(M_TWOPI + this->directron * (position_now - offset));
}
float Sensor::getPositons()
{
  return this->directron * (positions_now - offset);
}
float Sensor::getVelocity()
{
  return this->directron * velocity;
}
