#ifndef __FOC_H__
#define __FOC_H__
#include "stm32f10x.h"
#include "OLED.h"
#include "Timer2.h"
#include "Timer3.h"
#include "Timer4.h"
#include "Delay.h"
#include <math.h>
#include "time.h"
#include "GPIO_EXTI.h"

#ifdef __cplusplus
extern "C"
{
#endif
    void FOC_Init();
    void FOC_Update(float F, float angle);
    void FOC_openSpeedLoop();
    float electricalAngle(float angle, int pole_pairs);
    float normalizeAngle(float angle);
    float rad(float deg);

#ifdef __cplusplus
}
#endif

#endif