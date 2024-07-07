#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"

int main(void)
{

    RCC_APB1PeriphClockCmd(RCC_APB1Periph_PWR, ENABLE); // 开启PWR时钟
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_BKP, ENABLE); // 开启BKP时钟
    PWR_BackupAccessCmd(ENABLE);                        // 允许访问BKP(以及RCC)

    // 使BKP所有寄存器恢复默认值
    // BKP_DeInit();

    // 写入BKP数据寄存器（中容量:BKP_DR1~10）
    BKP_WriteBackupRegister(BKP_DR1, 0x55AA);
    // 读取BKP数据寄存器
    uint32_t data = BKP_ReadBackupRegister(BKP_DR1);

    OLED_Init();
    OLED_Printf("%X\n", data); // 使用OLED显示输出

    while (1)
    {
    }
}
