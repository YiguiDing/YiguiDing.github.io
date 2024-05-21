#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "AD.h"
int main(void)
{
    OLED_Init();
    AD_Init();
    uint16_t ad_val;
    float voltage;
    while (1)
    {
        ad_val = AD_GetVal();            // 0~4095
        voltage = ad_val / 4096.0 * 3.3; // 0~3.33

        OLED_ShowNum(1, 1, ad_val, 10);
        OLED_ShowNum(2, 1, voltage, 1);
        OLED_ShowChar(2, 2, '.');
        OLED_ShowNum(2, 3, (uint16_t)(voltage * 100) % 100, 2);
    }
}
