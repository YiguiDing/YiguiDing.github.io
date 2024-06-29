#ifndef __Serial_H__
#define __Serial_H__
#include "stm32f10x.h"
#include "stdio.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Serial_Init();
    void Serial_SendByte(uint8_t Byte);
    uint8_t Serial_ReceiveByte(uint8_t *Byte);
    void Serial_SendArray(uint8_t *arry, uint32_t length);
    void Serial_SendString(const char *str);
    void Serial_SendNumber(int32_t num);
    void Serial_Printf(const uint8_t *format, ...);

#ifdef __cplusplus
}
#endif

#endif