#ifndef __InputCompare_H__
#define __InputCompare_H__
#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Timer3_IC_Init();
    int Timer3_IC_GetFreq();

#ifdef __cplusplus
}
#endif

#endif