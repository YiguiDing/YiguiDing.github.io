#include "FOC.h"

float max_power_supply_voltage = 24; // 供电电压
float limit_voltage = 2;             // 供电电压
uint8_t pole_pairs = 7;              // 极对数
float max_force_angle = 0.25 * M_PI; // 45° // 输出最大力矩时的最大误差角度（用于计算位置闭环控制的Kp）

void FOC_Init()
{
    Timer2_PWM_Init();
    Timer2_PWM_SetFreq(10);
    RTC_Time_Init();
    Soft_I2C_Init();
    AS5600_Init();
}
/**
 * @param uD 施加在D轴的电压 范围 [-max,+max]
 * @param uQ 施加在Q轴的电压 范围 [-max,+max]
 * @param angle 机械角度 单位：弧度制 因为标准库中的sin函数也是弧度制
 */
void FOC_ControlUpdate(float uD, float uQ, float angle)
{
    // 限制电压范围
    uD = fixedRange(-max_power_supply_voltage, uD, max_power_supply_voltage);
    uQ = fixedRange(-max_power_supply_voltage, uQ, max_power_supply_voltage);
    // 通过机械角度计算电角度
    angle = normalizeAngle(electricalAngle(angle));
    // 帕克变换
    float uAlpha = uD * cos(angle) - uQ * sin(angle);
    float uBata = uQ * cos(angle) + uD * sin(angle);
    // 克拉克逆变换（等幅值）
    float uA = uAlpha;
    float uB = (sqrt(3) * uBata - uAlpha) / 2;
    float uC = (-uAlpha - sqrt(3) * uBata) / 2;
    // 设置相电压
    FOC_setPhaseVoltage(uA, uB, uC);
}
/**
 * @param uA 施加在A相的电压 范围 [-max,+max]
 * @param uB 施加在B相的电压 范围 [-max,+max]
 * @param uC 施加在C相的电压 范围 [-max,+max]
 */
void FOC_setPhaseVoltage(float uA, float uB, float uC)
{
    // 限制电压范围
    uA = fixedRange(-limit_voltage, uA, limit_voltage);
    uB = fixedRange(-limit_voltage, uB, limit_voltage);
    uC = fixedRange(-limit_voltage, uC, limit_voltage);
    Timer2_PWM_SetDuty(
        // 重映射 [-max,+max] => [0,1]
        uA / 2 / max_power_supply_voltage + 0.5,
        uB / 2 / max_power_supply_voltage + 0.5,
        uC / 2 / max_power_supply_voltage + 0.5);
}
/**
 * 速度开环控制
 * @param targetSpeed 目标速度
 */
void FOC_SpeedOpenLoopControl(float targetSpeed)
{
    float angle = 0;
    float dt_s;
    uint64_t prevTime_ms, curTime_ms;
    curTime_ms = prevTime_ms = RTC_Time_GetTime_MS(NULL);
    while (1)
    {
        curTime_ms = RTC_Time_GetTime_MS(NULL);
        dt_s = (curTime_ms - prevTime_ms) / 1000.0;
        angle += targetSpeed * dt_s;
        angle = normalizeAngle(angle);
        FOC_ControlUpdate(0, limit_voltage, angle);
        prevTime_ms = curTime_ms;
    }
}
/**
 * 位置闭环控制
 * @param targetAngle 位置
 */
void FOC_PositionCloseLoopControl(float targetAngle)
{
    targetAngle = 0.5 * M_PI;
    uint64_t prevTime_ms, curTime_ms, dt_ms;
    curTime_ms = prevTime_ms = RTC_Time_GetTime_MS(NULL);
    while (1)
    {
        curTime_ms = RTC_Time_GetTime_MS(NULL);
        dt_ms = curTime_ms - prevTime_ms;
        float curentAngle = AS5600_Angle();              // 获取当前位置
        float positon_error = targetAngle - curentAngle; // 计算位置误差
        float Kp = limit_voltage / max_force_angle;      // 计算k_p 最大输出力矩:最大误差角度

        float output_Uq = Kp * positon_error; // 计算输出值

        FOC_ControlUpdate(0, output_Uq, curentAngle);
        prevTime_ms = curTime_ms;
    }
}
/**
 * 范围限制
 */
float fixedRange(float min, float val, float max)
{
    return val <= min ? min : (val >= max ? max : val);
}
/**
 * 将角度限制在[0,2π]
 */
float normalizeAngle(float angle)
{
    angle = fmod(angle, 2 * M_PI);
    if (angle < 0)
        angle += 2 * M_PI;
    return angle;
}
/**
 * 电角度=机械角度 x 极对数
 */
float electricalAngle(float mechanical_angle)
{
    return mechanical_angle * pole_pairs;
}

float rad(float deg)
{
    return deg / 180 * M_PI;
}