#include "Rtc.h"

void Rtc_Init()
{
    // RCC配置时钟配置
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_PWR, ENABLE); // 开启PWR时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_BKP, ENABLE); // 开启BKP时钟
    PWR_BackupAccessCmd(ENABLE);                        // 允许访问BKP(以及RTC)
    RCC_LSEConfig(RCC_LSE_ON);                          // 开启 LSE 时钟(32.768khz)
    while (!RCC_GetFlagStatus(RCC_FLAG_LSERDY))         // 等待 LSE 时钟启震动
        ;
    RCC_RTCCLKConfig(RCC_RTCCLKSource_LSE); // 为RTC选择 LSE 时钟源
    RCC_RTCCLKCmd(ENABLE);                  // 开启 RTC 时钟
    // RCC配置

    RTC_WaitForSynchro();  // 等待AHB1时钟和RTC外设时钟同步完成
    RTC_WaitForLastTask(); // 等待上一次写入操作完成(可以不写)
    RTC_EnterConfigMode(); // 进入配置模式，否则无法配置分频器(可以不写,因为RTC_SetXXX中已经包含)

    RTC_SetPrescaler(32768 - 1); // 设置预分频器
    RTC_WaitForLastTask();       // 等待写入完成
    // RTC_SetCounter(0);           // 0表示1970年1月1日
    // RTC_WaitForLastTask();       // 等待写入完成
}
void Rtc_SetUnixTime(uint32_t unixTime)
{
    RTC_WaitForLastTask(); // 等待上次写入完成
    RTC_SetCounter(unixTime);
}
/**
 * 获取unix时间戳
 */
uint32_t Rtc_GetTime_S()
{
    return RTC_GetCounter();
}
/**
 * 获取毫秒级时间
 */
uint64_t Rtc_GetTime_MS()
{
    return (uint64_t)RTC_GetCounter() * 1000 +        // s *1000
           (32768 - RTC_GetDivider()) * 1000 / 32768; // 先乘后除,避免使用浮点数
}