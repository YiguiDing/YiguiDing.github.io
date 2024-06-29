#include "stm32f10x.h"
#include "OLED.h"
#include "Serial.h"

#define BUFFER_MAX_SIZE 5

uint32_t length = 0;
uint8_t buffer[BUFFER_MAX_SIZE];

/** 定义接收到数据时的处理函数*/
void dataHandler(uint8_t data)
{
    // 保存数据
    buffer[length++] = data;
    length %= BUFFER_MAX_SIZE;
}

int main(void)
{
    OLED_Init();
    Serial_Init();
    Serial_SetDataHandler(dataHandler);

    uint8_t idx = 0;
    while (1)
    {
        for (uint32_t i = 0; i < length; i++)
        {
            OLED_ShowHexNum(1, 1 + i * 3, buffer[i], 2);
        }
    }
}
