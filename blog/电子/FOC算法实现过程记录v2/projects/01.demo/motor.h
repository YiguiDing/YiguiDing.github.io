#ifndef __Motor_H__
#define __Motor_H__

#include <Arduino.h>
#include <stdint.h>
#include "foc_math.h"
#include "pid_controller.h"
#include "pll.h"

#ifdef __cplusplus
extern "C"
{
#endif

    // 状态
    typedef enum
    {
        Align = 0,
        Running = 1,
        Stop = 2,
    } State;

    // 控制模式
    typedef enum
    {
        OPEN_VOLTAGE_LOOP = 0,
        CLOSE_CURRENT_LOOP = 1,
        CLOSE_VELOCITY_LOOP = 2,
    } ControlMode;

    // 调制模式
    typedef enum
    {
        SPWM = 0,
        SVPWM = 1,
    } Modulation;

    typedef struct
    {
        // 极对数
        uint8_t pole_pairs;
        // ########################################
        float power_supply;
        // ########################################
        float target; // 目标值
        State state;
        ControlMode controlMode; // 控制模式
        Modulation modulation;   // 调制模式
        // ########################################
        // clsoe_current_loop
        PidController pid_id_controller;
        PidController pid_iq_controller;
        float Id_target, Iq_target;
        float Id, Iq;
        float Ia, Ib, Ic;
        float Ialpha, Ibeta;
        // open_volatage_loop
        float Ud_target, Uq_target;
        float Ud, Uq;
        float Uahpha, Ubeta;
        float Ua, Ub, Uc;
        // ########################################
        float theta_mes;            //  测量角度 measurement
        float theta_mes_offset;     //  测量角度误差 measurement
        PLL pll_theta;              // 角度锁相环
        LowpassFilter theta_filter; // 估计角度滤波器
        float theta_est;            // 估计角度 estimate
        float theta_pdt;            // 预测角度 prediect
        float e_theta;              // 电角度
        float omega;                // 角速度
        float e_omega;              //  电角速度
        float sin_e_theta;          // sin(e_theta)
        float cos_e_theta;          // cos(e_theta)
        // ########################################
    } Motor;

    void motor_init(Motor *motor, uint8_t pole_pairs, float power_supply);
    void motor_foc_loop(Motor *motor, float dt);
    void motor_set_phrase_voltage(Motor *motor);
#ifdef __cplusplus
}
#endif

#endif