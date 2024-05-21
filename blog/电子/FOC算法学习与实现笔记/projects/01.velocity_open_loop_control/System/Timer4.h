#ifndef __PWM_H__
#define __PWM_H__
#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Timer4_Clock_Init();
    uint64_t Timer4_Clock_GetClockMs();

#ifdef __cplusplus
}
#endif

#endif