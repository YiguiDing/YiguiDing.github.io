#include "stm32f10x.h"
#include "OLED.h"
#include "Timer2.h"

uint16_t num = 0;
void update_callback()
{
    num++;
}

int main(void)
{
    OLED_Init();
    Timer2_setInterval(update_callback, 2);
    while (1)
    {
        OLED_ShowString(1, 1, "Hello World!!!");
        OLED_ShowNum(2, 1, num, 10);
    }
}
