#include "Hard_SPI.h"

void Hard_SPI_Init()
{
    // 开启GPIOA时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    // 开启SPI1时钟
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_SPI1, ENABLE);
    // 初始化GPIOA
    // PA4 CS （推挽输出）
    // PA5 SPI1_SCK （复用推挽输出）
    // PA6 SPI1_MISO （浮空或上拉输入）
    // PA7 SPI1_MOSI （复用推挽输出）
    // CS （推挽输出）
    GPIO_InitTypeDef GPIO_InitStruct = {
        GPIO_Pin_4,
        GPIO_Speed_50MHz,
        GPIO_Mode_Out_PP,
    };
    GPIO_Init(GPIOA, &GPIO_InitStruct);
    // SPI1_SCK （复用推挽输出）
    // SPI1_MOSI （复用推挽输出）
    GPIO_InitStruct.GPIO_Pin = GPIO_Pin_5 | GPIO_Pin_7;
    GPIO_InitStruct.GPIO_Mode = GPIO_Mode_AF_PP;
    GPIO_Init(GPIOA, &GPIO_InitStruct);
    // SPI1_MISO （浮空或上拉输入）
    GPIO_InitStruct.GPIO_Pin = GPIO_Pin_6;
    GPIO_InitStruct.GPIO_Mode = GPIO_Mode_IPU;
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    SPI_InitTypeDef SPI_InitStruct = {
        SPI_Direction_2Lines_FullDuplex, // 两线，全双工模式
        SPI_Mode_Master,                 // 主机模式
        SPI_DataSize_8b,                 // 8位数据模式
        SPI_CPOL_Low,                    // 时钟默认低电平
        SPI_CPHA_1Edge,                  // 第1个边沿采样（模式0：时钟默认低电平，第一个边沿移入数据位，第二个边沿移出数据位）
        SPI_NSS_Soft,                    // 软件控制NSS位
        SPI_BaudRatePrescaler_2,         // 分频器系数 72M/2=36Mhz
        SPI_FirstBit_MSB,                // 高位先行
        7,                               // CRC系数,默认7
    };
    SPI_Init(SPI1, &SPI_InitStruct);
    SPI_Cmd(SPI1, ENABLE); // 开启SPI
    Hard_SPI_Stop();       // 拉高CS引脚
}
// ###################################  [ 基本读写函数 ]  ###################################
void Hard_SPI_W_CS(uint8_t bitVal)
{
    GPIO_WriteBit(GPIOA, GPIO_Pin_4, (BitAction)bitVal);
}
// ###################################  [ 基本通信时序 ]  ###################################

void Hard_SPI_Start()
{
    Hard_SPI_W_CS(0);
}
void Hard_SPI_Stop()
{
    Hard_SPI_W_CS(1);
}
uint8_t Hard_SPI_SwapByte(uint8_t data)
{
    while (!SPI_I2S_GetFlagStatus(SPI1, SPI_I2S_FLAG_TXE)) // 等待发送寄存器为空
        ;
    SPI_I2S_SendData(SPI1, data);                           // 发送数据
    while (!SPI_I2S_GetFlagStatus(SPI1, SPI_I2S_FLAG_RXNE)) // 等待接收寄存器不为空(发送数据完毕)
        ;
    return SPI_I2S_ReceiveData(SPI1); // 读取接收到的数据
}
