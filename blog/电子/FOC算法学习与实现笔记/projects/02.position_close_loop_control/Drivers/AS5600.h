#ifndef _AS5600_H_
#define _AS5600_H_

#include "math.h"
#include "Soft_I2C.h"

#define AS5600_Address 0x36

#define write(regAddr, datas, length) Soft_I2C_Write_Device_Register_Datas(AS5600_Address, regAddr, datas, length)
#define read(regAddr, datas, length) Soft_I2C_Read_Device_Register_Datas(AS5600_Address, regAddr, datas, length)

// Configuration Registers配置寄存器
#define AS5600_ZMCO 0x00
#define AS5600_ZPOS 0x01
#define AS5600_MPOS 0x03
#define AS5600_MANG 0x05
#define AS5600_CONF 0x07
// Output Registers输出寄存器
#define AS5600_RAW_ANGLE 0x0c
#define AS5600_ANGLE 0x0e
#define AS5600_STATUS 0x0b
#define AS5600_AGC 0x1a
#define AS5600_MAGNITUDE 0x1b
// Burn Commands
#define AS5600_BURN 0xff

#ifdef __cplusplus
extern "C"
{
#endif

    void AS5600_Init();
    float AS5600_Angle();
    float AS5600_RawAngle();
    void AS5600_SetError(float _error);
    float AS5600_Cycle();

#ifdef __cplusplus
}
#endif

#endif