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
        float ch1_duty,
        float ch2_duty,
        float ch3_duty);

#ifdef __cplusplus
}
#endif

#endif