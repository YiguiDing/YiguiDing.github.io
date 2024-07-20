#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"
#include "FlashUtils.h"

int main(void)
{
    OLED_Init();
    // 0x08000000 00
    // 0x08000001 50
    // 0x08000002 00
    // 0x08000003 20
    OLED_Printf("%lX \n", FlashUtils_Read_Uint8(FLASH_BASE));  // 0x00
    OLED_Printf("%lX \n", FlashUtils_Read_Uint16(FLASH_BASE)); // 0x5000
    OLED_Printf("%lX \n", FlashUtils_Read_Uint32(FLASH_BASE)); // 0x20005000

    FlashUtils_Erase_Page(FLASH_BASE + 63 * 1024); // 擦除第63页（每页1024字节）

    // 0x0800fc01	78
    // 0x0800fc02	56
    // 0x0800fc03	34
    // 0x0800fc04	12
    FlashUtils_Write_Word(FLASH_BASE + 63 * 1024 + 0, 0x12345678); // 写入4字节

    // 0x0800fc05	CD
    // 0x0800fc06	AB
    // 0x0800fc07	00
    // 0x0800fc08	00
    FlashUtils_Write_Word(FLASH_BASE + 63 * 1024 + 4, 0xABCD); // 写入2字节

#if 0
//  全页擦除
    FlashUtils_Erase_All_Pages();
#endif

    while (1)
    {
    }
}
