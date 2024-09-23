#include "HardwareSerial.h"
#include "Sensor.hpp"
#include "BLDCMotor.hpp"

Sensor::Sensor(void (*initHardWare)(), uint16_t (*readHardWare)())
{
    this->initHardWare = initHardWare;
    this->readHardWare = readHardWare;
}
void Sensor::initSensor()
{
    this->initHardWare();
}
uint16_t Sensor::readSensor()
{
    return this->readHardWare();
}
void Sensor::connectMotor(BLDCMotor *motor)
{
    this->motor = motor;
}
void Sensor::alignSensor()
{
    // offset
    this->motor->setPhraseVoltage(0.1f * INT16_MAX, 0, 0); // -90°位置q轴施加电压，或0度d轴施加电压
    delay(1000);
    this->offset = this->readHardWare();
    this->motor->setPhraseVoltage(0, 0, 0);
    // directron
    this->directron = SensorDirectrion::CLOCK_WISE;
}
void Sensor::init()
{
    this->angle = this->readHardWare() - offset;
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
    this->angle = this->readHardWare() - offset;
    // ----更新圈数
    // uint16_t 也能计算是否溢出。
    // 之前的写法: int32_t d_angle = this->angle - (uint32_t)this->prev_angle ； 根据d_angle的绝对值判断溢出，正负性判断方向
    uint8_t is_increase = this->angle > this->prev_angle;
    uint16_t d_angle = is_increase ? this->angle - this->prev_angle : this->prev_angle - this->angle;
    if (d_angle > _3_PI_2_)
        this->full_rotations += (!is_increase ? +1 : -1); // 圈数自增/自减
    // ####################################
}
/**
 * 获取位置
 */
uint16_t Sensor::getPositon()
{
    return UINT16_MAX + this->directron * this->angle;
}
/**
 * 获取位置(带圈数)
 */
float Sensor::getPositons()
{
    return this->directron * (this->full_rotations * (float)_2PI_ + this->angle);
}
/**
 * 获取速度
 * 单位: rad/s
 */
float Sensor::getVelocity()
{
    v_positions = this->v_prev_positions;
    v_prev_positions = this->getPositons();
    return this->directron * ((v_positions - v_prev_positions) / this->dt_s());
}