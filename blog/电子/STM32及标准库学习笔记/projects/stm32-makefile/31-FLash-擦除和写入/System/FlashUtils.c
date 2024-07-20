#include "FlashUtils.h"

uint32_t FlashUtils_Read_Uint32(uint32_t address)
{
    return *((__IO uint32_t *)address);
}

uint16_t FlashUtils_Read_Uint16(uint32_t address)
{
    return *((__IO uint16_t *)address);
}

uint8_t FlashUtils_Read_Uint8(uint32_t address)
{
    return *((__IO uint8_t *)address);
}

void FlashUtils_Erase_All_Pages()
{
    FLASH_Unlock();
    FLASH_EraseAllPages();
    FLASH_Lock();
}

void FlashUtils_Erase_Page(uint32_t pageAddres)
{
    FLASH_Unlock();
    FLASH_ErasePage(pageAddres);
    FLASH_Lock();
}

void FlashUtils_Write_Word(uint32_t addres, uint32_t data)
{
    FLASH_Unlock();
    FLASH_ProgramWord(addres, data);
    FLASH_Lock();
}

void FlashUtils_Write_HalfWord(uint32_t addres, uint16_t data)
{
    FLASH_Unlock();
    FLASH_ProgramHalfWord(addres, data);
    FLASH_Lock();
}