#include "stm32f10x.h"
#include "Delay.h"
#include "Serial.h"
#include "OLED.h"
#include "OLED_Printf.h"

#define BUFFER_MAX_SIZE 10

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

    while (1)
    {
        OLED_Printf("state: Running\n");
        for (uint8_t i = 0; i < length; i++)
        {
            OLED_Printf("%x ", buffer[i]);
        }
        OLED_Printf("\n");

        OLED_Printf("state: Seeping\n");

        // 进入浅睡眠模式
        SCB->SCR &= ~SCB_SCR_SLEEPDEEP;   // SLEEPDEEP=0 浅睡眠模式
        SCB->SCR &= ~SCB_SCR_SLEEPONEXIT; // SLEEPONEXIT=0 立即进入睡眠模式，而不是等待中断函数执行完毕
        __WFI();                          // 进入睡眠模式，等待中断
    }
}
