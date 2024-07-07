#ifndef __RTC_H__
#define __RTC_H__

#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Rtc_Init();
    void Rtc_SetUnixTime(uint32_t unixTime);
    uint32_t Rtc_GetTime_S();
    uint64_t Rtc_GetTime_MS();

#ifdef __cplusplus
}
#endif

#endif