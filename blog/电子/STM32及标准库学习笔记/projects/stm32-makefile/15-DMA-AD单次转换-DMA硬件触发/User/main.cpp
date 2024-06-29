#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "AD.h"
#include "AD_With_DMA.h"

int main(void)
{
    OLED_Init();
    // AD_Init(); 
    AD_With_DMA_Init(); 
    while (1)
    {
        // dataA
        OLED_ShowHexNum(1, 1, Value[0], 8);
        OLED_ShowHexNum(2, 1, Value[1], 8);
        OLED_ShowHexNum(3, 1, Value[2], 8);
        Delay_ms(50);
    }
}
