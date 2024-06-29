#ifndef __MPU6050_H_
#define __MPU6050_H_
#include "stm32f10x.h"
// 设备ID
#define MPU6050_ID 0x68
// 配置寄存器
#define Reg_SMPLRT_DIV 0x19
#define Reg_CONFIG 0x1A
#define Reg_GYRO_CONFIG 0x1B
#define Reg_ACCEL_CONFIG 0x1C
// 数据寄存器
#define Reg_ACCEL_XOUT_H 0x3B
#define Reg_ACCEL_XOUT_L 0x3C
#define Reg_ACCEL_YOUT_H 0x3D
#define Reg_ACCEL_YOUT_L 0x3E
#define Reg_ACCEL_ZOUT_H 0x3F
#define Reg_ACCEL_ZOUT_L 0x40
#define Reg_TEMP_OUT_H 0x41
#define Reg_TEMP_OUT_L 0x42
#define Reg_GYRO_XOUT_H 0x43
#define Reg_GYRO_XOUT_L 0x44
#define Reg_GYRO_YOUT_H 0x45
#define Reg_GYRO_YOUT_L 0x46
#define Reg_GYRO_ZOUT_H 0x47
#define Reg_GYRO_ZOUT_L 0x48
// 其他寄存器
#define Reg_PWR_MGMT_1 0x6B
#define Reg_PWR_MGMT_2 0x6C
#define Reg_WHO_AM_I 0x75

#ifdef __cplusplus
extern "C"
{
#endif

    extern int16_t acce[3];
    extern int16_t temp[1];
    extern int16_t gyro[3];
    void MPU6050_Init();
    void MPU6050_Read();

#ifdef __cplusplus
}
#endif

#endif