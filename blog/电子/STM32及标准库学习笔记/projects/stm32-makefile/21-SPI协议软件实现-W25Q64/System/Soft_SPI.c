#include "Soft_SPI.h"

void Soft_SPI_Init()
{
    // 开启GPIOA时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    // 初始化GPIOA
    // PA4 CS （推挽输出）
    // PA5 SPI1_SCK （推挽输出）
    // PA6 SPI1_MISO （浮空或上拉）
    // PA7 SPI1_MOSI （推挽输出）
    GPIO_InitTypeDef GPIO_InitStruct = {
        GPIO_Pin_4 | GPIO_Pin_5 | GPIO_Pin_7,
        GPIO_Speed_50MHz,
        GPIO_Mode_Out_PP,
    };
    GPIO_Init(GPIOA, &GPIO_InitStruct);
    GPIO_InitStruct.GPIO_Pin = GPIO_Pin_6;
    GPIO_InitStruct.GPIO_Mode = GPIO_Mode_IPU;
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    Soft_SPI_W_CS(1);
    Soft_SPI_W_SCK(0);
}
// ###################################  [ 基本读写函数 ]  ###################################
void Soft_SPI_W_CS(uint8_t bitVal)
{
    GPIO_WriteBit(GPIOA, GPIO_Pin_4, (BitAction)bitVal);
}
void Soft_SPI_W_SCK(uint8_t bitVal)
{
    GPIO_WriteBit(GPIOA, GPIO_Pin_5, (BitAction)bitVal);
}
uint8_t Soft_SPI_R_MISO()
{
    return GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_6);
}
void Soft_SPI_W_MOSI(uint8_t bitVal)
{
    GPIO_WriteBit(GPIOA, GPIO_Pin_7, (BitAction)bitVal);
}

// ###################################  [ 基本通信时序 ]  ###################################

void Soft_SPI_Start()
{
    Soft_SPI_W_CS(0);
}
void Soft_SPI_Stop()
{
    Soft_SPI_W_CS(1);
}
uint8_t Soft_SPI_SwapByte(uint8_t data)
{
    // 模式0时序
    for (uint8_t idx = 0; idx < 8; idx++)
    {
        Soft_SPI_W_MOSI(data & 0x80); // 移出数据（最高位）
        Soft_SPI_W_SCK(1);            // 时钟上升沿
        data <<= 1;                   // 腾出位置
        data |= Soft_SPI_R_MISO();    // 移入数据（最低位）
        Soft_SPI_W_SCK(0);            // 时钟下降沿
    }
    return data;
}

