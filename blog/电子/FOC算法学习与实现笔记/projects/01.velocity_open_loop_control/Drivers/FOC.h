#ifndef __FOC_H__
#define __FOC_H__
#include "stm32f10x.h"
#include "Timer2_PWM.h"
#include "RTC_Time.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"
#include <math.h>

#ifdef __cplusplus
extern "C"
{
#endif
    void FOC_Init();
    void FOC_ControlUpdate(float uD, float uQ, float angle);
    void FOC_setPhaseVoltage(float uA, float uB, float uC);
    void FOC_SpeedOpenLoopControl(float targetSpeed);
    float fixedRange(float min, float val, float max);
    float normalizeAngle(float angle);
    float electricalAngle(float mechanical_angle);
    float rad(float deg);
#ifdef __cplusplus
}
#endif

#endif