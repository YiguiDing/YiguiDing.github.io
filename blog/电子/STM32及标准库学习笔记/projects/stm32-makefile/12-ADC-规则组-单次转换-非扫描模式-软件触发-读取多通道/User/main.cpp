#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "AD.h"
#include "stdio.h"
int main(void)
{
    OLED_Init();
    AD_Init();
    uint16_t ad_val;
    float voltage;
    char str[200];
    uint8_t ch = 0;
    while (1)
    {
        ad_val = AD_GetChVal(ch);        // 0~4095
        voltage = ad_val / 4096.0 * 3.33; // 0~3.33

        /**
        使用GCC ARM Embedded 工具链时，默认情况下不会启用 printf 中的浮点支持。
        要启用，请添加-u _printf_float到您的 LDFLAGS
        LDFLAGS += -u _printf_float
        */
        sprintf(str, "ch%d:%.2fv", ch, voltage);
        OLED_ShowString(ch + 1, 1, str);

        ch += 1;
        ch %= 3;
    }
}
