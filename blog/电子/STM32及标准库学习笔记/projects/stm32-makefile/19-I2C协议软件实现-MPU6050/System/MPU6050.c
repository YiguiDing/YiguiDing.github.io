#include "MPU6050.h"

// 数据
uint8_t data[14];

// 加速度x3
int16_t acce[3];
// 温度x1
int16_t temp;
// 加速度x3
int16_t gyro[3];

void MPU6050_Init()
{
    Soft_I2C_Init();
    Soft_I2C_Write_Device_Register_Data(MPU6050_ID, Reg_PWR_MGMT_1, 0x01);   // 关闭默认的睡眠模式,配置时钟源为陀螺仪时钟
    Soft_I2C_Write_Device_Register_Data(MPU6050_ID, Reg_SMPLRT_DIV, 0x09);   // 采样频率分频器,0x00不分频 0x09分频系数10
    Soft_I2C_Write_Device_Register_Data(MPU6050_ID, Reg_CONFIG, 0x06);       // 0x00不使用滤波器 0x06使用最平滑的滤波
    Soft_I2C_Write_Device_Register_Data(MPU6050_ID, Reg_GYRO_CONFIG, 0x00);  // 陀螺仪配置 默认满量程±250°/s
    Soft_I2C_Write_Device_Register_Data(MPU6050_ID, Reg_ACCEL_CONFIG, 0x00); // 加速度计配置 默认满量程±2g
}
void MPU6050_Read()
{
    /*
     * 耗时:
     * MPU6050时钟最大频率 400khz => 0.4Mhz => (1/0.4)us => 2.5us ≈ 3us
     * 数据量：开始 主机地址x1 ACK 寄存器地址x1 ACK 开始 主机地址x1 ACK (数据+ACK)x14 结束 ≈ 17字节 => 136比特位
     * 耗时 = 3us x 136bit = 408 us ≈ 0.4 ms
     *
     **/
    Soft_I2C_Read_Device_Register_Datas(MPU6050_ID, Reg_ACCEL_XOUT_H, data, 14);
    for (uint8_t i = 0, j = 0, k = 0; i < 7; i++)
    {
        int16_t value = (data[i * 2] << 8) | data[i * 2 + 1];
        if (i < 3)
            acce[j++] = value; // 加速度x3
        else if (i == 3)
            temp = value; // 温度x1
        else
            gyro[k++] = value; // 角速度x3
    }
}
