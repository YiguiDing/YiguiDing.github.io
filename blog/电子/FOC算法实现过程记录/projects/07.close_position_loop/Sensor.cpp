#include "HardwareSerial.h"
#include "Sensor.hpp"
#include "BLDCMotor.hpp"

Sensor::Sensor(void (*_initSensorl)(), uint16_t (*_readSensor)())
{
    this->_initSensor = _initSensorl;
    this->_readSensor = _readSensor;
}
void Sensor::initSensor()
{
    this->_initSensor();
}
uint16_t Sensor::readSensor()
{
    return this->_readSensor();
}
void Sensor::connectMotor(BLDCMotor *motor)
{
    this->motor = motor;
}
void Sensor::alignSensor()
{
    this->motor->setPhraseVoltage(0, 0.4 * INT16_MAX, _3_PI_2_); // -90°位置施加磁场
    delay(1000);
    this->offset = this->_readSensor();
    this->motor->setPhraseVoltage(0, 0, 0);
}
void Sensor::init()
{
    this->angle = this->readSensor();
}
void Sensor::update()
{
    // ####################################
    // 1.记录当前值
    this->prev_angle = this->angle;
    this->prev_full_rotations = this->full_rotations;
    // ####################################
    // 2.更新
    // ----更新角度
    this->angle = this->_readSensor();
    // ----更新圈数
    int32_t d_angle = this->angle - (int32_t)this->prev_angle;
    if (abs(d_angle) > 0.8 * _2PI_)
        this->full_rotations += (d_angle < 0) ? +1 : -1; // 圈数自增/自减
    // ####################################
    // 3.计算
    // ----计算位置
    this->position = this->angle - offset;
    // ----计算位置(带圈数)
    this->positions = this->full_rotations * _2PI_ + this->angle - this->offset;
    // ----计算速度(rad/ms)
    this->velocity = ((this->full_rotations - this->prev_full_rotations) * _2PI_ + (this->angle - (int32_t)this->prev_angle)) / dt_ms();
    // ####################################
}
/**
 * 获取位置
 */
uint16_t Sensor::getPositon()
{
    return this->position;
}
/**
 * 获取位置(带圈数)
 */
int32_t Sensor::getPositons()
{
    return this->positions;
}
/**
 * 获取速度
 * 单位: rad/ms
 */
int32_t Sensor::getVelocity()
{
    return this->velocity;
}