#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"

int main(void)
{
    OLED_Init();
    // 由独立看门狗导致的复位
    if (RCC_GetFlagStatus(RCC_FLAG_IWDGRST) == SET)
        OLED_Printf("reset by: IWDG\n");
    else
    {
        OLED_Printf("reset by: RST\n");
    }
    // 清除标志位，否则下次复位后还在。
    RCC_ClearFlag();

    // 设置1s的超时时间
    // 时钟40k
    // 预分频器:16分频。     40k / 16 => 2.5khz 0.0025s
    // 重装值：2500。      2.5khz / 2.5k => 1hz 1s

    // 开启LSI时钟（不需要手动开启，所以不用写）
    ;
    // 解除IWDG_PR和IWDG_RLR的写保护
    IWDG_WriteAccessCmd(IWDG_WriteAccess_Enable); // 给键寄存器写入0x5555指令
    // 设置预分频器
    IWDG_SetPrescaler(IWDG_Prescaler_16); // 给PR预分频器写入0~6的值代表2~256的分频系数
    // 设置重装值
    IWDG_SetReload(2500 - 1); // 给12位RLR自动重装计数器写入值
    // 喂狗:将重装值写入自减计数器
    IWDG_ReloadCounter(); // 给KR键寄存器写入0xAAAA，由于写入值不是0x5555,将自动开启写保护
    // 开启独立看门狗
    IWDG_Enable(); // 给KR键寄存器写入0xCCCC，由于写入值不是0x5555,将自动开启写保护
    while (1)
    {
        OLED_Printf("state: Running\n");
        // Delay_ms(200);
        Delay_ms(1000);
        // 喂狗:将重装值写入自减计数器
        IWDG_ReloadCounter();
    }
}
