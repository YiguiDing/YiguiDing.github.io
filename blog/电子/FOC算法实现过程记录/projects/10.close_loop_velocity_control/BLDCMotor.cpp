#include "Arduino.h"
#include "BLDCMotor.hpp"

BLDCMotor::BLDCMotor(uint8_t polePairs, float power_supply_voltage) {
  this->polePairs = polePairs;
  this->power_supply_voltage = power_supply_voltage;
}
void BLDCMotor::connectDriver(BLDCDriver *driver) {
  this->driver = driver;
}
void BLDCMotor::connectSensor(Sensor *sensor) {
  this->sensor = sensor;
}
void BLDCMotor::connectCurrentSensor(CurrentSensor *currentSensor) {
  this->currentSensor = currentSensor;
}
void BLDCMotor::initFOC() {
  if (this->currentSensor) {
    this->currentSensor->initSensor();
    this->currentSensor->alignSensor();
  }
  if (this->driver) {
    this->driver->initDriver();
    this->driver->enableDriver(true);
    this->driver->setPhraseVoltage(0, 0, 0);
  }
  if (this->sensor) {
    this->sensor->initSensor();
    this->sensor->connectMotor(this);
    this->sensor->alignSensor();
    this->sensor->init();
    this->sensor->update();
  }
}
uint8_t mode = 2;
float target = 0;
void BLDCMotor::loopFOC() {
  if (this->sensor)
    this->sensor->update();
  if (Serial.available() > 1) {
    char cmd;
    do
      cmd = Serial.read();
    while (cmd == '\r' || cmd == '\n');
    float val = Serial.parseFloat();
    switch (cmd) {
      case 'T':
      case 't':
        target = val;
        break;
      case 'M':
      case 'm':
        mode = val;
        break;
      case 'p':
        this->pid_id_controller.K_p = val;
        this->pid_iq_controller.K_p = val;
        this->pid_id_controller.reset();
        this->pid_iq_controller.reset();
        break;
      case 'i':
        this->pid_id_controller.K_i = val;
        this->pid_iq_controller.K_i = val;
        this->pid_id_controller.reset();
        this->pid_iq_controller.reset();
        break;
      case 'd':
        this->pid_id_controller.K_d = val;
        this->pid_iq_controller.K_d = val;
        this->pid_id_controller.reset();
        this->pid_iq_controller.reset();
        break;
      case 'P':
        this->pid_velocity_controller.K_p = val;
        this->pid_velocity_controller.reset();
        break;
      case 'I':
        this->pid_velocity_controller.K_i = val;
        this->pid_velocity_controller.reset();
        break;
      case 'D':
        this->pid_velocity_controller.K_d = val;
        this->pid_velocity_controller.reset();
        break;
      default:
        break;
    }
  }
  switch (mode) {
    case 0:
      this->open_loop_voltage_control(0, target);
      break;
    case 1:
      this->close_loop_current_control(target);
      break;
    case 2:
      this->close_loop_velocity_control(target);
      break;
    default:
      break;
  }
}

/**
 * @details
 *  电角度=机械角度*极对数
 *  @return [0,2PI] => [0,UINT16_MAX]
 */
uint16_t BLDCMotor::electricalAngle() {
  return this->sensor->getPositon() * polePairs;
}
/**
 * 设置相电压
 * @param u_d int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
 * @param u_q int16_t [-32768,32767] 表示 [-1,1]
 * @param e_angle uint16_t [0,65535] 表示 [0,2PI] 精度：360°/65535 = 0.00549°
 */
void BLDCMotor::setPhraseVoltage(int16_t u_d, int16_t u_q, uint16_t e_angle) {
  int16_t sin, cos;
  // 计算三角函数
  _sincos(e_angle, &sin, &cos);
  // 帕克逆变换
  int16_t u_alpha = ((cos * (int32_t)u_d) + (sin * -(int32_t)u_q)) / INT16_MAX;
  int16_t u_beta = ((sin * (int32_t)u_d) + (cos * (int32_t)u_q)) / INT16_MAX;
  // 克拉克逆变换(等幅值形式)
  int16_t u_a = u_alpha;
  int16_t u_b = (-1 * u_alpha + _INT16_SQRT3_ * u_beta / INT16_MAX) / 2;
  int16_t u_c = -(u_a + u_b);
  // 设置相电压
  driver->setPhraseVoltage(u_a, u_b, u_c);
}

void BLDCMotor::open_loop_voltage_control(float target_ud, float target_uq) {
  float voltage_ud = _constrain(-limit_voltage, target_ud, limit_voltage);
  float voltage_uq = _constrain(-limit_voltage, target_uq, limit_voltage);
  int16_t u_d = this->sensor->directron * this->direction * (voltage_ud / power_supply_voltage * INT16_MAX);
  int16_t u_q = this->sensor->directron * this->direction * (voltage_uq / power_supply_voltage * INT16_MAX);
  uint16_t e_angle = this->electricalAngle();
  this->setPhraseVoltage(u_d, u_q, e_angle);
}
/**
 * 获取Q轴电流
 */
CurrentDQ BLDCMotor::getCurrentDQ() {
  CurrentDQ i = this->currentSensor->getCurrentDQ(this->electricalAngle());
  return {
    .d = this->current_d_filter(i.d),
    .q = this->current_q_filter(i.q),
  };
}
#include "foc_utils.h"
/**
 * 电流闭环控制
 */

void BLDCMotor::close_loop_current_control(float target) {

  float target_i_d = 0;
  float target_i_q = _constrain(-limit_current, target, limit_current);
  CurrentDQ current = this->getCurrentDQ();
  float error_d = target_i_d - current.d;
  float error_q = target_i_q - current.q;
  float u_d = this->pid_id_controller(error_d);
  float u_q = this->pid_iq_controller(error_q);
  this->open_loop_voltage_control(u_d, u_q);
  static uint8_t idx = 0;
  if (mode == 1 && ++idx % 30 == 0) {
    Serial.print(target);
    Serial.print(',');
    // Serial.print(current.d);
    // Serial.print(',');
    Serial.print(current.q);
    Serial.print(',');
    Serial.print(this->dt_ms());
    // Serial.print(',');
    // Serial.print(u_q);
    // Serial.print(',');
    // Serial.print(u_d);
    // Serial.print(',');
    Serial.print('\n');
  }
}
/**
 * 获取机械角度
 */
float BLDCMotor::shaftAngle() {
  return shaft_angle_filter(this->sensor->getPositons());
}
/**
 * 获取机械角度
 */
float BLDCMotor::shaftVelocity() {
  return shaft_velocity_filter(this->sensor->getVelocity());
}
void BLDCMotor::close_loop_velocity_control(float target) {
  float target_velocity = _constrain(-limit_velocity, target, limit_velocity);
  float current_velocity = this->shaftVelocity();
  float error = target_velocity - current_velocity;
  float i_q = this->direction * this->sensor->directron * this->pid_velocity_controller(error);
  this->close_loop_current_control(i_q);
  static uint8_t idx = 0;
  if (mode == 2 && ++idx % 30 == 0) {
    Serial.print(target_velocity);
    Serial.print(',');
    Serial.print(current_velocity);
    Serial.print(',');
    Serial.print(this->dt_ms());
    // Serial.print(',');
    // Serial.print(i_q);
    Serial.print('\n');
  }
}