#ifndef __W25QXX_H__
#define __W25QXX_H__

#include "stm32f10x.h"
#include "Soft_SPI.h"

// #################### Instructions ####################
#define Write_Enable 0x06
#define Write_Disable 0x04
#define Read_Status_Register_1 0x05
#define Read_Status_Register_2 0x35
#define Write_Status_Register 0x01
#define Page_Program 0x02
#define Quad_Page_Program 0x32
#define Block_Erase_64KB 0xD8
#define Block_Erase_32KB 0x52
#define Sector_Erase_4KB 0x20
#define Chip_Erase 0x60 //  C7h/60h
#define Erase_Suspend 0x75
#define Erase_Resume 0x7A
#define Power_down 0xB9
#define High_Performance_Mode 0xA3
#define Continuous_Read_Mode_Reset 0xFF
#define Release_Power_down_or_HPM_Device_ID 0xAB
#define Manufacturer_Device_ID 0x90
#define Read_Unique_ID 0x4B
#define JEDEC_ID 0x9F
#define Read_Data 0x03
#define Fast_Read 0x0B
#define Fast_Read_Dual_Output 0x3B
#define Fast_Read_Dual_IO 0xBB
#define Fast_Read_Quad_Output 0x6B
#define Fast_Read_Quad_IO 0xEB
#define Octal_Word_Read_Quad_IO 0xE3
#define Dummy 0xFF

#ifdef __cplusplus
extern "C"
{
#endif

    void W25Q64_Init();
    void W25Q64_ReadId(uint8_t *ManufacturerId, uint16_t *Id);
    void W25Q64_PageProgram(uint32_t address, uint8_t *datas, uint16_t length);
    void W25Q64_SectorErase4KB(uint32_t address);
    void W25Q64_ReadData(uint32_t address, uint8_t *datas, uint32_t length);
    
#ifdef __cplusplus
}
#endif

#endif