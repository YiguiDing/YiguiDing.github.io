#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"

int main(void)
{
    OLED_Init();
    OLED_Printf("SystemCoreClock: %d \n", SystemCoreClock);
    while (1)
    {
    }
}
