#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "OLED_Printf.h"
#include "W25Q64.h"

uint8_t ManufacturerId;
uint16_t Id;

uint8_t datasA[4] = {0x55, 0xaa, 0x55, 0xaa};
uint8_t datasB[4] = {0x00};

int main(void)
{
    OLED_Init();
    W25Q64_Init();
    W25Q64_ReadId(&ManufacturerId, &Id);
    printf("%X %X\n", ManufacturerId, Id);

    W25Q64_SectorErase4KB(0x000000);         // 擦除扇区
    W25Q64_PageProgram(0x000000, datasA, 4); // 写入数据
    W25Q64_ReadData(0x000000, datasB, 4);    // 读取数据

    printf("%X %X %X %X\n", datasA[0], datasA[1], datasA[2], datasA[3]);
    printf("%X %X %X %X\n", datasB[0], datasB[1], datasB[2], datasB[3]);

    while (1)
    {
    }
}
