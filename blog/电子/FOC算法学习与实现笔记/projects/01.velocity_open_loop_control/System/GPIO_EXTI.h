#ifndef __CountSensor_H__
#define __CountSensor_H__

#ifdef __cplusplus
extern "C"
{
#endif

#include "stm32f10x.h"
#include "stdint.h"
#include <stddef.h>

    void GPIOB11_EXTI_Init(void (*_callback)());

#ifdef __cplusplus
}
#endif

#endif