#ifndef _AD_H_
#define _AD_H_

#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void AD_Init();
    uint16_t AD_GetChVal(uint8_t ADC_Channel);

#ifdef __cplusplus
}
#endif

#endif