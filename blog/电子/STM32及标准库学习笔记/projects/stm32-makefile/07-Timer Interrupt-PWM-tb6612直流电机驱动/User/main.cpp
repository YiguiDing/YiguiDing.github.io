#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "PWM.h"
#include <math.h>

float degree = 0;

float random(float from,float to){
    float rand_0_1 = (float)rand() / RAND_MAX;
    return rand_0_1 * (to - from) + from;
}

int main(void)
{
    OLED_Init();
    Timer2_PWM_Init();
    OLED_ShowString(1, 1, "Degree:");
    while (1)
    {
        OLED_ShowSignedNum(1, 7, degree, 5);
        Timer2_PWM_SetDegree(degree);
        Delay_ms(1000);
        degree = random(0,180);
    }
}
