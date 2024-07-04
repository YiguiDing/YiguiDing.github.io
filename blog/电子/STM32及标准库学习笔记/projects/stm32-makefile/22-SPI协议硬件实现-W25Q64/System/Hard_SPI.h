#ifndef __Hard_SPI_H__
#define __Hard_SPI_H__

#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Hard_SPI_Init();
    void Hard_SPI_Start();
    void Hard_SPI_Stop();
    uint8_t Hard_SPI_SwapByte(uint8_t data);

#ifdef __cplusplus
}
#endif

#endif