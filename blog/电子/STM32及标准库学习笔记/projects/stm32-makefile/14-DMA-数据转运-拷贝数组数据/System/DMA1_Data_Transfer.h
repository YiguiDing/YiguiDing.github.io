#ifndef _DMA1_Data_Transfer_H_
#define _DMA1_Data_Transfer_H_
#include "stm32f10x.h"

#ifdef __cplusplus
extern "C"
{
#endif

    void DMA1_Data_Transfer_Init(uint32_t from_addr, uint32_t copy_to_addr, uint32_t _length_of_byte);
    void DMA1_Data_Transfer_Triger();
    
#ifdef __cplusplus
}
#endif

#endif