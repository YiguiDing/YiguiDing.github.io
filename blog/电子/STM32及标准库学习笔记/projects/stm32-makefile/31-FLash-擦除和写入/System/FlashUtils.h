#ifndef __FlashUtils_H__
#define __FlashUtils_H__

#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    uint32_t FlashUtils_Read_Uint32(uint32_t address);
    uint16_t FlashUtils_Read_Uint16(uint32_t address);
    uint8_t FlashUtils_Read_Uint8(uint32_t address);
    void FlashUtils_Erase_All_Pages();
    void FlashUtils_Erase_Page(uint32_t pageAddres);
    void FlashUtils_Write_Word(uint32_t addres, uint32_t data);
    void FlashUtils_Write_HalfWord(uint32_t addres, uint16_t data);

#ifdef __cplusplus
}
#endif

#endif