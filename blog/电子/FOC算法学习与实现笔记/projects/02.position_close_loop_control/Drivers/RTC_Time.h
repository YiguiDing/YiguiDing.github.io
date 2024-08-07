#ifndef __RTC_Time_H__
#define __RTC_Time_H__

#include "stm32f10x.h"
#include "stddef.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void RTC_Time_Init();
    void RTC_Time_SetUnixTime(uint32_t unixTime);
    uint32_t RTC_Time_GetTime_S();
    uint64_t RTC_Time_GetTime_MS(uint64_t *ms);

#ifdef __cplusplus
}
#endif

#endif