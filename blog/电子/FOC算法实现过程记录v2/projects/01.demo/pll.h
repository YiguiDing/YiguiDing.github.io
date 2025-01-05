#ifndef __PLL_H__
#define __PLL_H__

#include "foc_math.h"
#include "lowpass_filter.h"
#include "pid_controller.h"

#ifdef __cplusplus
extern "C"
{
#endif

    typedef struct
    {
        float theta; // 角度
        float omega; // 角速度
        LowpassFilter filter;
        PidController pid;
    } PLL;

    void pll_init(PLL *pll, float Ts, float Kp, float Ki);
    float pll_update(PLL *pll, float theta, float dt);

#ifdef __cplusplus
}
#endif

#endif