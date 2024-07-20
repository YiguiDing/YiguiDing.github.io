#include "FlashStore.h"

#define SAVED_FLAG 0x55aa
#define Flash_Store_Size 512
#define Flash_Store_Address (FLASH_BASE + 63 * 1024) // 最后一页首地址

// 1kB内存空间
uint16_t store[Flash_Store_Size] = {SAVED_FLAG, 0};

// 初始化
void FlashStore_Init()
{
    // 第一次启动,没有保存标志位
    if (FlashUtils_Read_Uint16(Flash_Store_Address) != SAVED_FLAG)
        // 保存一次
        FlashStore_Save();
    else
        // 同步
        FlashStore_Sync();
}

// 内存数据store => Flash
void FlashStore_Save()
{
    FlashUtils_Erase_Page(Flash_Store_Address); // 擦除
    for (uint16_t i = 0; i < Flash_Store_Size; i++)
        FlashUtils_Write_HalfWord(Flash_Store_Address + i * 2, store[i]);
}

// Flash => 内存数据store
void FlashStore_Sync()
{
    for (uint16_t i = 0; i < Flash_Store_Size; i++)
        store[i] = FlashUtils_Read_Uint16(Flash_Store_Address + i * 2);
}

// 清除
void FlashStore_Clear()
{
    for (uint16_t i = 1; i < Flash_Store_Size; i++)
        store[i] = 0x0000;
    FlashStore_Save();
}
