#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"
#include "RTC.h"

int main(void)
{
    Rtc_Init();
    OLED_Init();

    while (1)
    {
        uint32_t s = Rtc_GetTime_S();
        uint64_t ms = Rtc_GetTime_MS();
        OLED_Printf("s: %lu \n", s);
        OLED_Printf("ms: %lu \n", (uint32_t)ms);
    }
}
