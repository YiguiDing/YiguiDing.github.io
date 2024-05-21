#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "PWM.h"
#include <math.h>

int8_t step = 1;
uint16_t duty = 0;

int main(void)
{
    OLED_Init();
    Timer2_PWM_Init();
    OLED_ShowString(1, 1, "Duty:");
    while (1)
    {
        OLED_ShowNum(1, 6, duty, 3);
        Timer2_PWM_SetDuty(duty);
        duty += 5;
        Delay_ms(100);
        duty %= 100;
    }
}
