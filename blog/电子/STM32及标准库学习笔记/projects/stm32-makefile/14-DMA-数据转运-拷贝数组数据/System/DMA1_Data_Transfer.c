#include "DMA1_Data_Transfer.h"
uint32_t length_of_byte;
void DMA1_Data_Transfer_Init(uint32_t from_addr, uint32_t copy_to_addr, uint32_t _length_of_byte)
{
    // 开启DMA1时钟
    RCC_AHBPeriphClockCmd(RCC_AHBPeriph_DMA1, ENABLE);

    DMA_InitTypeDef DMA_InitStruct;
    DMA_StructInit(&DMA_InitStruct);
    // 外设站点配置
    DMA_InitStruct.DMA_PeripheralBaseAddr = from_addr;                   // 外设站起始地址地址
    DMA_InitStruct.DMA_PeripheralDataSize = DMA_PeripheralDataSize_Byte; // 数据大小,字节
    DMA_InitStruct.DMA_PeripheralInc = DMA_PeripheralInc_Enable;         // 地址自增
    // 存储器站点配置
    DMA_InitStruct.DMA_MemoryBaseAddr = copy_to_addr;
    DMA_InitStruct.DMA_MemoryDataSize = DMA_PeripheralDataSize_Byte;
    DMA_InitStruct.DMA_MemoryInc = DMA_MemoryInc_Enable;
    DMA_InitStruct.DMA_BufferSize = length_of_byte = _length_of_byte; // 数据长度
    DMA_InitStruct.DMA_DIR = DMA_DIR_PeripheralSRC;                   // 方向： 外设 => 内存
    DMA_InitStruct.DMA_M2M = DMA_M2M_Enable;                          // 软件触发（存储器to存储器）
    DMA_InitStruct.DMA_Mode = DMA_Mode_Normal;                        // 自动重装器; 模式？ 循环:单次
    DMA_InitStruct.DMA_Priority = DMA_Priority_VeryHigh;              // 优先级

    // 初始化
    DMA_Init(DMA1_Channel1, &DMA_InitStruct);
}
void DMA1_Data_Transfer_Triger()
{
    // 关闭
    DMA_Cmd(DMA1_Channel1, DISABLE);
    // 重写传输计数器
    DMA_SetCurrDataCounter(DMA1_Channel1, length_of_byte);
    // 开启
    DMA_Cmd(DMA1_Channel1, ENABLE);
    // 等待转运完成
    while (DMA_GetFlagStatus(DMA1_FLAG_TC1) == RESET)
        ;
    // 清除标志位
    DMA_ClearFlag(DMA1_FLAG_TC1);
}
