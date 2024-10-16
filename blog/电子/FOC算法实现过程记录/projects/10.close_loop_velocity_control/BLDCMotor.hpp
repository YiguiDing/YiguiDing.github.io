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
#include "Command.cpp"

enum ControlMode : uint8_t
{
    Unknow = 0,
    Voltage = 1,
    Current = 2,
    Velocity = 3,
    Position = 4
};
class BLDCMotor : Timer
{

    enum MotorDirectrion : int8_t
    {
        UNKNOW = 0,
        ANTI_CLOCK_WISE = 1,
        CLOCK_WISE = -1,
    };

public:
    // 极对数
    uint8_t polePairs;
    // 供电电压
    float power_supply_voltage = 12.0f;
    // 限制电压
    float limit_voltage = 5.0f;
    // 限制电流
    float limit_current = 10.0f;
    // 限制速度
    float limit_velocity = 1000.0f;
    // directron
    MotorDirectrion direction = MotorDirectrion::ANTI_CLOCK_WISE;
    // taget
    float target = 0;
    // mode
    ControlMode controlMode = ControlMode::Unknow;
    uint8_t debug = 0;
    // filter
    LowPassFilter current_q_filter{5};
    LowPassFilter current_d_filter{5};
    LowPassFilter shaft_velocity_filter{50};
    LowPassFilter shaft_angle_filter{100};
    // pid-controller
    PIDControler pid_iq_controller;
    PIDControler pid_id_controller;
    PIDControler pid_velocity_controller;
    PIDControler pid_position_controller;

private:
    //
    BLDCDriver *driver = nullptr;
    Sensor *sensor = nullptr;
    CurrentSensor *currentSensor = nullptr;
    Command *command = nullptr;

public:
    BLDCMotor(uint8_t polePairs, float power_supply_voltage);
    void connectDriver(BLDCDriver *driver);
    void connectSensor(Sensor *sensor);
    void connectCurrentSensor(CurrentSensor *currentSensor);
    void connectCommand(Command *command);
    void initFOC();
    void loopFOC();
    /**
     * 设置控制模式
     */
    void setMode(ControlMode mode);
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
    void open_loop_voltage_control(float target_ud, float target_uq);
    /**
     * 获取dq轴电流
     */
    CurrentDQ getCurrentDQ();
    /**
     * 闭环电流控制
     */
    void close_loop_current_control(float target);
    /**
     * 查找最佳pid参数
     */
    void find_close_loop_position_control_kp_ki_kd();
    /**
     * 获取机械角度
     */
    float shaftVelocity();
    /**
     * 闭环速度控制
     */
    void close_loop_velocity_control(float target);
    /**
     * 获取机械角度
     */
    float shaftAngle();
    /**
     * 闭环位置控制
     */
    void close_loop_position_control(float target);
};
#endif
