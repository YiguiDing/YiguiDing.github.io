#include "stm32f10x.h"
#include "OLED.h"
#include "Delay.h"
#include "AD.h"
#include "DMA1_Data_Transfer.h"

int main(void)
{
    OLED_Init();
    uint8_t dataA[4] = {1, 2, 3, 4};
    uint8_t dataB[4] = {0, 0, 0, 0};
    DMA1_Data_Transfer_Init((uint32_t)dataA, (uint32_t)dataB, 4);
    while (1)
    {
        // dataA
        OLED_ShowNum(1, 1, dataA[0], 2);
        OLED_ShowNum(1, 4, dataA[1], 2);
        OLED_ShowNum(1, 7, dataA[2], 2);
        OLED_ShowNum(1, 10, dataA[3], 2);
        // dataB
        OLED_ShowNum(2, 1, dataB[0], 2);
        OLED_ShowNum(2, 4, dataB[1], 2);
        OLED_ShowNum(2, 7, dataB[2], 2);
        OLED_ShowNum(2, 10, dataB[3], 2);
        Delay_ms(1000);

        // 触发，搬运数据
        DMA1_Data_Transfer_Triger();

        // dataA
        OLED_ShowNum(1, 1, dataA[0], 2);
        OLED_ShowNum(1, 4, dataA[1], 2);
        OLED_ShowNum(1, 7, dataA[2], 2);
        OLED_ShowNum(1, 10, dataA[3], 2);
        // dataB
        OLED_ShowNum(2, 1, dataB[0], 2);
        OLED_ShowNum(2, 4, dataB[1], 2);
        OLED_ShowNum(2, 7, dataB[2], 2);
        OLED_ShowNum(2, 10, dataB[3], 2);

        Delay_ms(1000);
        for (uint8_t i = 0; i < 4; i++)
        {
            dataA[i]++;
        }
    }
}
