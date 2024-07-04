#ifndef __Soft_SPI_H__
#define __Soft_SPI_H__

#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void Soft_SPI_Init();
    void Soft_SPI_Start();
    void Soft_SPI_Stop();
    uint8_t Soft_SPI_SwapByte(uint8_t data);

#ifdef __cplusplus
}
#endif

#endif