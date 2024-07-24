#ifndef __InputCompare_H__
#define __InputCompare_H__
#include "stm32f10x.h"
#include "time.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Timer3_EncoderInterface_Init();
    int16_t Timer3_EncoderInterface_GetPosition();

#ifdef __cplusplus
}
#endif

#endif