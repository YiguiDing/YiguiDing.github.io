#ifndef __Serial_H__
#define __Serial_H__
#include "stm32f10x.h"
#include "stdio.h"

#define USE_Serial_Printf 1

#ifdef __cplusplus
extern "C"
{
#endif

    void Serial_Init();
    void Serial_SendByte(uint8_t Byte);
    uint8_t Serial_ReceiveByte(uint8_t *Byte);
    void Serial_SendArray(uint8_t *arry, uint32_t length);
#ifdef USE_Serial_Printf
    #define Serial_Printf printf
#endif

#ifdef __cplusplus
}
#endif

#endif