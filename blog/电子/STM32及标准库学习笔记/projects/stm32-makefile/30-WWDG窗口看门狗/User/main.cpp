#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"

int main(void)
{
    OLED_Init();
    // 由独立看门狗导致的复位
    if (RCC_GetFlagStatus(RCC_FLAG_WWDGRST) == SET)
        OLED_Printf("reset by: WWDG\n");
    else
    {
        OLED_Printf("reset by: RST\n");
    }
    // 清除标志位，否则下次复位后还在。
    RCC_ClearFlag();

    // 设置10ms的超时时间, 5ms 的窗口时间
    // 1000ms 1hz
    // 100ms 10hz
    // 10ms 100hz

    // 时钟36Mhz
    // 内置预分频器: 4096        36Mhz / 4096 => 8,789.0625Hz
    // 预分频器: 2分频。      8,789.0625Hz / 2 => 4,394.53125Hz
    // 重装值：43.9453125      4,394.53125Hz / 43.9453125 => 100hz 10ms

    // 开启WWDG的时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_WWDG, ENABLE);
    WWDG_SetPrescaler(WWDG_Prescaler_2);      // 预分频器
    WWDG_SetCounter(0x40 | (44 - 1));         // 自减计数器
    WWDG_SetWindowValue(0x40 | (44 - 1) / 2); // 窗口值
    WWDG_Enable(0x40 | (44 - 1));             // 启用 0x80是WDGA位 0x40是溢出标志位 44-1是重装值
    while (1)
    {
        // Delay_ms(5); // 过早喂狗,导致直接复位
        Delay_ms(6);                      //
        WWDG_SetCounter(0x40 | (44 - 1)); // 喂狗：重写自减计数器
    }
}
