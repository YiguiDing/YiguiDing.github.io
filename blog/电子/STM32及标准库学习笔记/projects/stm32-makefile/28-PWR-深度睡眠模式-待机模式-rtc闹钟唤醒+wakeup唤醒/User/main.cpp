#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"
#include "Rtc.h"

int main(void)
{
    OLED_Init();
    Rtc_Init();
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_PWR, ENABLE); // 开启PWR时钟

    RTC_SetAlarm(RTC_GetCounter() + 10); // 设置闹钟为10秒后
    // PWR_WakeUpPinCmd(ENABLE);            // 开启wakeup功能（默认下拉低电平，给高电平唤醒）

    while (1)
    {
        OLED_Printf("state: Running\n");

        OLED_Printf("time: %d \n", RTC_GetCounter());

        OLED_Printf("state: Seeping\n");

        // 进入待机模式（库函数写法）
        PWR_EnterSTANDBYMode();

        // 进入待机模式（操作寄存器写法）
        // SCB->SCR |= SCB_SCR_SLEEPDEEP; // SLEEPDEEP=1 深度睡眠模式
        // PWR->CR |= PWR_CR_PDDS;        // PWR_CR_PDDS=1 待机模式
        // PWR->CR |= PWR_CR_CWUF;        // 清除唤醒标志位
        // __WFI();                       // 进入睡眠模式，等待唤醒
    }
}
