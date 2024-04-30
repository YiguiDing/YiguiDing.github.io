#include "stm32f10x.h"
#include "OLED.h"
#include "test.h"

int main(void)
{
    // test();
    Encoder_Init();
    OLED_Init();
    OLED_ShowString(1, 1, "Hello World!!!");
    Delay_s(1);
    OLED_Clear();
    while (1)
    {
        OLED_ShowSignedNum(1, 1, Encoder_GetCounter(), 10);
    }
}
