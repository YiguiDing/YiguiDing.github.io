#ifndef __Soft_I2C_H_
#define __Soft_I2C_H_

#include "stm32f10x.h"
#include "Delay.h"

#ifdef __cplusplus
extern "C"
{
#endif

#define I2C_Port GPIOA
#define SLK GPIO_Pin_2
#define SDA GPIO_Pin_1

#define Height Bit_SET
#define LOW Bit_RESET
#define ACK 0
#define NACK 1
#define Write 0
#define Read 1
// 1Mhz => 1us
// 400khz => 0.4Mhz => (1/0.4)us => 2.5us
#define US 3

// 写入
#define W_SLK(X)                     \
    GPIO_WriteBit(I2C_Port, SLK, X); \
    Delay_us(US)
#define W_SDA(X)                     \
    GPIO_WriteBit(I2C_Port, SDA, X); \
    Delay_us(US)
// 读取
#define R_SLK() GPIO_ReadInputDataBit(I2C_Port, SLK)
#define R_SDA() GPIO_ReadInputDataBit(I2C_Port, SDA)

    // 初始化
    void Soft_I2C_Init();

    // ######################## [ 产生基本时序 ] ########################
    // 开始
    void Soft_I2C_Start();
    // 停止
    void Soft_I2C_Stop();
    // 写比特
    void Soft_I2C_WriteBit(uint8_t state);
    // 读比特
    uint8_t Soft_I2C_ReadBit();

    // ######################## [ 读写字节 ] ########################
    // 写字节
    void Soft_I2C_WriteByte(uint8_t byte);
    // 读字节
    uint8_t Soft_I2C_ReadByte();

    // ######################## [ 发送和接收字节 ] ########################
    // 发字节，并检查ACK
    uint8_t Soft_I2C_SendByte(uint8_t byte);
    // 收字节，并发送ACK
    uint8_t Soft_I2C_ReceiveByte(uint8_t endWithAck);

    // ######################## [ 对指定设备的指定寄存器读写数据 ] ########################
    // 在指定设备的指定寄存器写入单字节数据
    uint8_t Soft_I2C_Write_Device_Register_Data(uint8_t deviceId, uint8_t regAddr, uint8_t data);
    // 在指定设备的指定寄存器写入多字节数据
    uint8_t Soft_I2C_Write_Device_Register_Datas(uint8_t deviceId, uint8_t regAddr, uint8_t *datas, uint32_t length);
    // 在指定设备的指定寄存器读取单字节数据
    uint8_t Soft_I2C_Read_Device_Register_Data(uint8_t deviceId, uint8_t regAddr, uint8_t *data);
    // 在指定设备的指定寄存器读取多字节数据
    uint8_t Soft_I2C_Read_Device_Register_Datas(uint8_t deviceId, uint8_t regAddr, uint8_t *datas, uint32_t length);
#ifdef __cplusplus
}
#endif
#endif