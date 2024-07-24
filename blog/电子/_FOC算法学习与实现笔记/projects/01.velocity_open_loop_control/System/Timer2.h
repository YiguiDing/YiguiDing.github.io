#ifndef __PWM_H__
#define __PWM_H__
#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Timer2_PWM_Init();
    void Timer2_PWM_SetFreq(uint16_t freq_khz);
    void Timer2_PWM_SetDuty(
        uint16_t ch1_duty_per,
        uint16_t ch2_duty_per,
        uint16_t ch3_duty_per);

#ifdef __cplusplus
}
#endif

#endif