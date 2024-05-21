#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "PWM.h"
#include "EncoderInterface.h"
int16_t curPosition, prevPosition, speed;
int main(void)
{

    Timer3_EncoderInterface_Init();

    OLED_Init();
    OLED_ShowString(1, 1, "Posit: 000000");
    OLED_ShowString(2, 1, "Speed: 000000");
    while (1)
    {
        curPosition = TIM_GetCounter(TIM3);
        speed = (curPosition - prevPosition) / 1;
        prevPosition = curPosition;

        OLED_ShowSignedNum(1, 8, curPosition, 6); // 位置
        OLED_ShowSignedNum(2, 8, speed, 6);       // 速度
        Delay_s(1);
    }
}
