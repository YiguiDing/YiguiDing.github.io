#ifndef __BLDCMotor_H__
#define __BLDCMotor_H__
#include <stdint.h>
#include "foc_utils.h"
#include "BLDCDriver.hpp"
#include "LowPassFilter.hpp"
#include "CurrentSensor.hpp"
#include "Sensor.hpp"
#include "Timer.hpp"
#include "pid.hpp"

class BLDCMotor : Timer
{
    enum MotorDirectrion : int8_t
    {
        UNKNOW = 0,
        CLOCK_WISE = 1,
        ANTI_CLOCK_WISE = -1,
    };

public:
    // 极对数
    uint8_t polePairs;
    // 供电电压
    float power_supply_voltage = 12.0f;
    // 限制电压
    float limit_voltage = 4.0f;
    // 限制速度
    float limit_speed = 100.0f;
    // 限制电流
    float limit_current = 4.0f;
    // directron
    MotorDirectrion direction = MotorDirectrion::CLOCK_WISE;
    // filter
    LowPassFilter current_q_filter{500};
    LowPassFilter shaft_angle_filter{20};
    LowPassFilter shaft_velocity_filter{20};
    // pid-controller
    PIDControler pid_iq_controller{10, 0, 0, 0, 12};

private:
    //
    BLDCDriver *driver = nullptr;
    Sensor *sensor = nullptr;
    CurrentSensor *currentSensor = nullptr;

public:
    BLDCMotor(uint8_t polePairs, float power_supply_voltage);
    void connectDriver(BLDCDriver *driver);
    void connectSensor(Sensor *sensor);
    void connectCurrentSensor(CurrentSensor *currentSensor);
    void initFOC();
    void loopFOC();
    /**
     * 获取电角度
     */
    uint16_t electricalAngle();

    /**
     * 设置相电压
     * @param u_d int16_t [-32768,32767] 表示 [-1,1] 精度：1/32768 = 0.0000305
     * @param u_q int16_t [-32768,32767] 表示 [-1,1]
     * @param e_angle uint16_t [0,65535] 表示 [0,2PI] 精度：360°/65535 = 0.00549°
     */
    void setPhraseVoltage(int16_t u_d, int16_t u_q, uint16_t e_angle);
    /**
     * 开环电压控制
     */
    void open_loop_voltage_control(float target);
    /**
     * 获取q轴电流
     */
    float getCurrentQ();
    /**
     * 闭环电流控制
     */
    void close_loop_current_control(float target);
    /**
     * 获取机械角度
     */
    float shaftAngle();
    /**
     * 闭环速度控制
     */
    void close_loop_speed_control(float target);
    /**
     * 获取机械角度
     */
    float shaftVelocity();
    /**
     * 闭环位置控制
     */
    void close_loop_position_control(float target);
};
#endif
