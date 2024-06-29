#ifndef __Serial_H__
#define __Serial_H__
#include "stm32f10x.h"
#include "stdio.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Serial_Init();
    void Serial_SetDataHandler(void (*_dataHandler)(uint8_t data));
    void Serial_SendByte(uint8_t Byte);
    void Serial_SendArray(uint8_t *arry, uint32_t length);

#ifdef __cplusplus
}
#endif

#endif