#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "PWM.h"
#include "InputCompare.h"

int main(void)
{
    Timer2_PWM_Init();
    Timer2_PWM_SetDuty(55);
    Timer2_PWM_SetFreq(1);

    Timer3_IC_Init();

    OLED_Init();
    OLED_ShowString(1, 1, "Freq: 000000Hz");
    OLED_ShowString(2, 1, "Duty: 000000%");

    while (1)
    {
        OLED_ShowNum(1, 7, Timer3_IC_GetFreq(), 6);
        OLED_ShowNum(2, 7, Timer3_IC_GetDuty(), 6);
    }
}
