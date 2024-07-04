#include "W25Q64.h"

void W25Q64_Init()
{
    Soft_SPI_Init();
}
/**
 * 读取：
 * 厂商id:ManufacturerId
 * 芯片id：MemoryType + Capacity
 */
void W25Q64_ReadId(uint8_t *ManufacturerId, uint16_t *Id)
{
    Soft_SPI_Start();
    Soft_SPI_SwapByte(JEDEC_ID);
    *ManufacturerId = Soft_SPI_SwapByte(Dummy);
    *Id = Soft_SPI_SwapByte(Dummy) << 8;
    *Id |= Soft_SPI_SwapByte(Dummy);
    Soft_SPI_Stop();
}
void W25Q64_WriteEnable()
{
    Soft_SPI_Start();
    Soft_SPI_SwapByte(Write_Enable);
    Soft_SPI_Stop();
}
void W25Q64_ReadStatusReg1()
{
    Soft_SPI_Start();
    Soft_SPI_SwapByte(Read_Status_Register_1);
    uint8_t statusReg1 = Soft_SPI_SwapByte(Dummy);
    Soft_SPI_Stop();
    return statusReg1;
}
void W25Q64_WaitNotBusy()
{
    Soft_SPI_Start();
    Soft_SPI_SwapByte(Read_Status_Register_1);
    uint16_t timeout = 10000;
    while (timeout != 0 && Soft_SPI_SwapByte(Dummy) & 0x01) // 忙
        timeout--;
    Soft_SPI_Stop();
}

/**
 * length 0~256
 */
void W25Q64_PageProgram(uint32_t address, uint8_t *datas, uint16_t length)
{
    W25Q64_WaitNotBusy(); // 忙等待（事前等待）
    W25Q64_WriteEnable(); // 写使能
    Soft_SPI_Start();
    Soft_SPI_SwapByte(Page_Program);
    // 发送24bit地址
    Soft_SPI_SwapByte(address >> 16);
    Soft_SPI_SwapByte(address >> 8);
    Soft_SPI_SwapByte(address);
    // 发送数据
    for (uint16_t i = 0; i < length; i++)
        Soft_SPI_SwapByte(datas[i]);
    Soft_SPI_Stop();
}

void W25Q64_SectorErase4KB(uint32_t address)
{
    W25Q64_WaitNotBusy(); // 忙等待（事前等待）
    W25Q64_WriteEnable(); // 写使能
    Soft_SPI_Start();
    Soft_SPI_SwapByte(Sector_Erase_4KB);
    // 发送24bit地址
    Soft_SPI_SwapByte(address >> 16);
    Soft_SPI_SwapByte(address >> 8);
    Soft_SPI_SwapByte(address);
    Soft_SPI_Stop();
}
void W25Q64_ReadData(uint32_t address, uint8_t *datas, uint32_t length)
{
    W25Q64_WaitNotBusy(); // 忙等待（事前等待）
    Soft_SPI_Start();
    Soft_SPI_SwapByte(Read_Data);
    // 发送24bit地址
    Soft_SPI_SwapByte(address >> 16);
    Soft_SPI_SwapByte(address >> 8);
    Soft_SPI_SwapByte(address);
    // 读取数据
    for (uint32_t i = 0; i < length; i++)
        datas[i] = Soft_SPI_SwapByte(Dummy);
    Soft_SPI_Stop();
}