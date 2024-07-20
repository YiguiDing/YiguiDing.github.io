#include "stm32f10x.h"
#include "Delay.h"
#include "Serial.h"
#include "OLED.h"
#include "OLED_Printf.h"
#include "CountSensor.h"

int main(void)
{
    OLED_Init();
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_PWR, ENABLE); // 开启PWR时钟
    CountSensor_Init();

    while (1)
    {
        OLED_Printf("state: Running\n");

        OLED_Printf("count: %d \n", CountSensor_GetCounter());

        OLED_Printf("state: Seeping\n");

        // 进入停止模式（库函数写法）
        PWR_EnterSTOPMode(    // 进入停止模式
            PWR_Regulator_ON, // 开启寄存器（不进入低功耗模式）
            PWR_STOPEntry_WFI // 使用wfi指令进入停止模式
        );

        // 进入停止模式（操作寄存器写法）
        // PWR->CR &= ~PWR_CR_LPDS; // 关闭低功耗模式
        // SCB->SCR |= SCB_SCR_SLEEPDEEP; // SLEEPDEEP=1 深度睡眠模式
        // __WFI();                       // 进入睡眠模式，等待中断

        // 退出停止模式后，时钟频率为8M
        SystemInit(); // 重新初始化系统时钟为72M
    }
}
