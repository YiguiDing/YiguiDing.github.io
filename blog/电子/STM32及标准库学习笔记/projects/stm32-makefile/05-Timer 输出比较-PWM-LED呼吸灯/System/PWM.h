#ifndef __PWM_H__
#define __PWM_H__
#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Timer2_PWM_Init();
    void Timer2_PWM_SetDuty(uint8_t duty);

#ifdef __cplusplus
}
#endif

#endif