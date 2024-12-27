#ifndef __BLDCMotor_H__
#define __BLDCMotor_H__
#include <stdint.h>
#include "foc_utils.h"
#include "BLDCDriver.hpp"
#include "Sensor.hpp"
#include "CurrentSensor.hpp"
#include "PIDControler.hpp"
#include "LowPassFilter.hpp"
#include "communication.hpp"

enum BLDCControlMode : uint8_t
{
    Unknow = 0,
    Voltage = 1,
    Current = 2,
    VelocityCurrent = 3,
    PositionCurrent = 4,
    PositionVelocityCurrent = 5,
};
enum MotorDirectrion : int8_t
{
    UNKNOW = 0,
    ANTI_CLOCK_WISE = 1,
    CLOCK_WISE = -1,
};

class BLDCMotor
{
public:
    // ####################################################################################
    uint8_t pole_pairs;                 // 极对数
    float power_supply_voltage = 12.0f; // 供电电压
    // ####################################################################################
    float limit_voltage = 12.0f;   // 限制电压
    float limit_current = 10.0f;   // 限制电流
    float limit_velocity = 130.0f; // 限制速度
    // ####################################################################################
    float target = 0;                                               // taget
    BLDCControlMode controlMode = BLDCControlMode::VelocityCurrent; // mode
    MotorDirectrion direction = MotorDirectrion::ANTI_CLOCK_WISE;   // directron
    // ####################################################################################
    LowPassFilter current_q_filter{5};
    LowPassFilter current_d_filter{5};
    LowPassFilter shaft_velocity_filter{50};
    LowPassFilter shaft_angle_filter{100};
    // ####################################################################################
    PIDControler pid_iq_controller;
    PIDControler pid_id_controller;
    PIDControler pid_velocity_controller;
    PIDControler pid_position_controller;
    // ####################################################################################
    BLDCDriver *driver = nullptr;
    Sensor *sensor = nullptr;
    CurrentSensor *currentSensor = nullptr;

public:
    // ####################################################################################
    BLDCMotor(uint8_t pole_pairs, float power_supply_voltage);
    // ####################################################################################
    void connectDriver(BLDCDriver *driver);
    void connectSensor(Sensor *sensor);
    void connectCurrentSensor(CurrentSensor *currentSensor);
    // ####################################################################################
    void initFOC();
    void loopFOC();
    // ####################################################################################
    /**
     * 设置控制模式
     */
    void setMode(BLDCControlMode mode);
    /**
     * 设置目标值（电压/力矩/速度/位置）
     */
    void setTarget(float target);
    /**
     * 设置旋转方向
     */
    void setDirection(MotorDirectrion direction);
    // ####################################################################################
    /**
     * 获取电角度
     */
    float electricalAngle();
    /**
     * 设置相电压
     * @param u_d float [-1,1]
     * @param u_q float [-1,1]
     * @param e_angle float [0,2PI]
     */
    void setPhraseVoltage(float u_d, float u_q, float e_angle);
    /**
     * 开环电压控制
     */
    void open_loop_voltage_control(float target_ud, float target_uq);
    // ####################################################################################
    /**
     * 获取dq轴电流
     */
    CurrentDQ getCurrentDQ();
    /**
     * 闭环电流控制
     */
    void close_loop_current_control(float target);
    // ####################################################################################
    /**
     * 获取速度
     */
    float shaftVelocity();
    /**
     * 闭环速度控制
     */
    void close_loop_velocity_current_control(float target);
    // ####################################################################################
    /**
     * 获取位置
     */
    float shaftAngle();
    /**
     * 闭环位置控制: 位置-力矩-闭环控制
     */
    void close_loop_position_current_control(float target);
    /**
     * 闭环位置控制: 位置-速度-力矩-闭环控制
     */
    void close_loop_position_velocity_current_control(float target);
    // ####################################################################################
};

#endif
