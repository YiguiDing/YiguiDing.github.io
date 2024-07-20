#ifndef __FlashStore_H__
#define __FlashStore_H__

#include "stm32f10x.h"
#include "FlashUtils.h"

#ifdef __cplusplus
extern "C"
{
#endif

    extern uint16_t store[512];
    void FlashStore_Init();
    void FlashStore_Save();
    void FlashStore_Sync();
    void FlashStore_Clear();

#ifdef __cplusplus
}
#endif

#endif