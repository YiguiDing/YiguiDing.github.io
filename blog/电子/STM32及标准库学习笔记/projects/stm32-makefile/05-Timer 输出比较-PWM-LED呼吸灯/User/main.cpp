#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "PWM.h"

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
        Delay_ms(5);
        duty += step;
        if (duty == 0) step = 1;
        if (duty == 100) step = -1;
    }
}
