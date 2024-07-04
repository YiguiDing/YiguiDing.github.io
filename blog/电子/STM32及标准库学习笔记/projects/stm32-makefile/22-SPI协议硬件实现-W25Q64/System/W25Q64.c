#include "W25Q64.h"

void W25Q64_Init()
{
    Hard_SPI_Init();
}
/**
 * 读取：
 * 厂商id:ManufacturerId
 * 芯片id：MemoryType + Capacity
 */
void W25Q64_ReadId(uint8_t *ManufacturerId, uint16_t *Id)
{
    Hard_SPI_Start();
    Hard_SPI_SwapByte(JEDEC_ID);
    *ManufacturerId = Hard_SPI_SwapByte(Dummy);
    *Id = Hard_SPI_SwapByte(Dummy) << 8;
    *Id |= Hard_SPI_SwapByte(Dummy);
    Hard_SPI_Stop();
}
void W25Q64_WriteEnable()
{
    Hard_SPI_Start();
    Hard_SPI_SwapByte(Write_Enable);
    Hard_SPI_Stop();
}
uint8_t W25Q64_ReadStatusReg1()
{
    Hard_SPI_Start();
    Hard_SPI_SwapByte(Read_Status_Register_1);
    uint8_t statusReg1 = Hard_SPI_SwapByte(Dummy);
    Hard_SPI_Stop();
    return statusReg1;
}
void W25Q64_WaitNotBusy()
{
    while (W25Q64_ReadStatusReg1() & 0x01)
        ;
}

/**
 * length 0~256
 */
void W25Q64_PageProgram(uint32_t address, uint8_t *datas, uint16_t length)
{
    W25Q64_WaitNotBusy(); // 忙等待（事前等待）
    W25Q64_WriteEnable(); // 写使能
    Hard_SPI_Start();
    Hard_SPI_SwapByte(Page_Program);
    // 发送24bit地址
    Hard_SPI_SwapByte(address >> 16);
    Hard_SPI_SwapByte(address >> 8);
    Hard_SPI_SwapByte(address);
    // 发送数据
    for (uint16_t i = 0; i < length; i++)
        Hard_SPI_SwapByte(datas[i]);
    Hard_SPI_Stop();
}

void W25Q64_SectorErase4KB(uint32_t address)
{
    W25Q64_WaitNotBusy(); // 忙等待（事前等待）
    W25Q64_WriteEnable(); // 写使能
    Hard_SPI_Start();
    Hard_SPI_SwapByte(Sector_Erase_4KB);
    // 发送24bit地址
    Hard_SPI_SwapByte(address >> 16);
    Hard_SPI_SwapByte(address >> 8);
    Hard_SPI_SwapByte(address);
    Hard_SPI_Stop();
}
void W25Q64_ReadData(uint32_t address, uint8_t *datas, uint32_t length)
{
    W25Q64_WaitNotBusy(); // 忙等待（事前等待）
    Hard_SPI_Start();
    Hard_SPI_SwapByte(Read_Data);
    // 发送24bit地址
    Hard_SPI_SwapByte(address >> 16);
    Hard_SPI_SwapByte(address >> 8);
    Hard_SPI_SwapByte(address);
    // 读取数据
    for (uint32_t i = 0; i < length; i++)
        datas[i] = Hard_SPI_SwapByte(Dummy);
    Hard_SPI_Stop();
}