#ifndef __Hard_I2C_H_
#define __Hard_I2C_H_

#include "stm32f10x.h"
#include "Delay.h"

#ifdef __cplusplus
extern "C"
{
#endif

#define Write 0
#define Read 1

    void Hard_I2C_Init();

    // ######################## [ 对指定设备的指定寄存器读写数据 ] ########################
    // 在指定设备的指定寄存器写入单字节数据
    uint8_t Hard_I2C_Write_Device_Register_Data(uint8_t deviceId, uint8_t regAddr, uint8_t data);
    // 在指定设备的指定寄存器写入多字节数据
    uint8_t Hard_I2C_Write_Device_Register_Datas(uint8_t deviceId, uint8_t regAddr, uint8_t *datas, uint32_t length);
    // 在指定设备的指定寄存器读取单字节数据
    uint8_t Hard_I2C_Read_Device_Register_Data(uint8_t deviceId, uint8_t regAddr, uint8_t *data);
    // 在指定设备的指定寄存器读取多字节数据
    uint8_t Hard_I2C_Read_Device_Register_Datas(uint8_t deviceId, uint8_t regAddr, uint8_t *datas, uint32_t length);

#ifdef __cplusplus
}
#endif

#endif