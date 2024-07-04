#include "Hard_I2C.h"

void Hard_I2C_Init()
{
    // init gpio
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);
    GPIO_InitTypeDef GPIO_InitStruct = {
        // PB10为I2C2_SCL
        // PB11为I2C2_SDA
        GPIO_Pin_10 | GPIO_Pin_11,
        GPIO_Speed_50MHz,
        GPIO_Mode_AF_OD // 复用开漏输出
    };
    GPIO_Init(GPIOB, &GPIO_InitStruct);

    // init i2c
    RCC_APB1PeriphClockCmd(RCC_APB1Periph_I2C2, ENABLE);
    I2C_InitTypeDef I2C_InitStruct = {
        50000,                        // 时钟速度 50khz
        I2C_Mode_I2C,                 // i2c模式
        I2C_DutyCycle_2,              // 占空比(低:高) 2:1
        0x01,                         // 本机地址
        I2C_Ack_Enable,               // 自动回应ACK
        I2C_AcknowledgedAddress_7bit, // 7bit地址模式
    };
    I2C_Init(I2C2, &I2C_InitStruct); // 初始化

    I2C_Cmd(I2C2, ENABLE); // 启动
}
#define TimeOut 10000
/**
 * 带有超时机制的等待事件
 */
uint8_t waitEvent(uint32_t I2C_EVENT)
{
    uint32_t timer = 0;
    while (I2C_CheckEvent(I2C2, I2C_EVENT) != SUCCESS)
    {
        if (timer++ > TimeOut)
            return ERROR; // 超时退出
    }
    return SUCCESS;
}
// ######################## [ Device Write/Write ] ########################
/**
 * @brief 在指定设备的指定寄存器写入单个字节
 */
uint8_t Hard_I2C_Write_Device_Register_Data(uint8_t deviceId, uint8_t regAddr, uint8_t data)
{
    return Hard_I2C_Write_Device_Register_Datas(deviceId, regAddr, &data, 1);
}
/**
 * @brief 在指定设备的指定寄存器写入单个或多个字节
 */
uint8_t Hard_I2C_Write_Device_Register_Datas(uint8_t deviceId, uint8_t regAddr, uint8_t *datas, uint32_t length)
{
    uint8_t isSuccess;
    // 多字节写入时序
    // | 主 | Start | AD+W |     | RA |     | DATA |     | DATA |     | ...... | DATA |     | Stop |
    // | 从 |       |      | ACK |    | ACK |      | ACK |      | ACK | ...... |      | ACK |      |

    // 生成START信号
    I2C_GenerateSTART(I2C2, ENABLE); // 开始通信
    // 阻塞，等待EV5事件（主机模式已选择，成功发送start信号）
    if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_MODE_SELECT /*主机模式已选择事件（默认处于从机模式）*/)))
        goto _stop_;
    // 发送数据（自带接收应答功能）
    I2C_SendData(I2C2, (deviceId << 1) | Write); // 发送设备id 读写标志
    // 阻塞，等待ev6事件（发送模式已选择）
    if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_TRANSMITTER_MODE_SELECTED /*主机发送模式已选择事件*/)))
        goto _stop_;
    // 发送数据
    I2C_SendData(I2C2, regAddr); // 发送寄存器地址
    // 阻塞，等待ev8事件（正在发送数据，因为此时数据写入DR寄存器,DR转交数据给移位寄存器发送数据，此时DR为空，移位寄存器有数据）
    if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_BYTE_TRANSMITTING /*主机模式正在发送字节事件*/)))
        goto _stop_;
    // 发送数据
    uint32_t idx = 0;
    while (idx < length)
    {
        I2C_SendData(I2C2, datas[idx++]); // 发送字节
        // 阻塞，等待ev8事件（正在发送数据，因为此时数据写入DR寄存器,DR转交数据给移位寄存器发送数据，此时DR为空，移位寄存器有数据）
        if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_BYTE_TRANSMITTING /*主机模式正在发送字节事件*/)))
            goto _stop_;
    }
    // 阻塞，等待ev8_2事件（发送数据完毕，因为此时数据写入DR寄存器,DR转交数据给移位寄存器发送数据，发送完毕后移位寄存器空，DR寄存器也空）
    if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_BYTE_TRANSMITTED /*主机模式发送字节完成*/)))
        goto _stop_;
_stop_:
    // 生成STOP信号
    I2C_GenerateSTOP(I2C2, ENABLE); // 结束通信
    return isSuccess;
}
/**
 * @brief 在指定设备的指定寄存器读取单个字节
 */
uint8_t Hard_I2C_Read_Device_Register_Data(uint8_t deviceId, uint8_t regAddr, uint8_t *data)
{
    return Hard_I2C_Read_Device_Register_Datas(deviceId, regAddr, data, 1);
}
/**
 * @brief 在指定设备的指定寄存器读取单个或多个字节
 */
uint8_t Hard_I2C_Read_Device_Register_Datas(uint8_t deviceId, uint8_t regAddr, uint8_t *datas, uint32_t length)
{
    uint8_t isSuccess;
    // 单字节写入时序
    // | 主 | Start | AD+W |     | RA |     | Start | AD+R |      | ACK |      | ACK | ...... |      | NACK | Stop |
    // | 从 |       |      | ACK |    | ACK |       |      | DATA |     | DATA |     | ...... | DATA |      |      |
    // 生成START信号
    I2C_GenerateSTART(I2C2, ENABLE); // 开始通信
    // 阻塞，等待EV5事件（主机模式已选择，成功发送start信号）
    if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_MODE_SELECT /*主机模式已选择事件（默认处于从机模式）*/)))
        goto _stop_;
    // 发送数据（自带接收应答功能）
    I2C_SendData(I2C2, (deviceId << 1) | Write); // 发送设备id 读写标志
    // 阻塞，等待ev6事件（发送模式已选择）
    if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_TRANSMITTER_MODE_SELECTED /*主机发送模式已选择事件*/)))
        goto _stop_;
    // 发送数据
    I2C_SendData(I2C2, regAddr); // 发送寄存器地址
    // 阻塞，等待ev8_2事件（发送数据完毕，因为此时数据写入DR寄存器,DR转交数据给移位寄存器发送数据，发送完毕后移位寄存器空，DR寄存器也空）
    if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_BYTE_TRANSMITTED /*主机模式发送字节完成*/)))
        goto _stop_;
    // 生成START信号
    I2C_GenerateSTART(I2C2, ENABLE); // 开始通信
    // 阻塞，等待EV5事件（主机模式已选择，成功发送start信号）
    if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_MODE_SELECT /*主机模式已选择事件（默认处于从机模式）*/)))
        goto _stop_;
    // 发送数据（自带接收应答功能）
    I2C_SendData(I2C2, (deviceId << 1) | Read); // 发送设备id 读写标志
    // 阻塞，等待ev6事件（接收模式已选择）
    if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_RECEIVER_MODE_SELECTED /*主机接收模式已选择事件*/)))
        goto _stop_;
    uint32_t idx = 0;
    while (idx < length)
    {
        if (idx == length - 1) // 接收最后一个字节时
        {
            // 准备接收最后一个数据，提前设置好ACK=1
            I2C_AcknowledgeConfig(I2C2, DISABLE);
            // 生成STOP信号(不会立即生成,会在字节接收完毕后产生stop信号)
            I2C_GenerateSTOP(I2C2, ENABLE);
        }
        // 阻塞，等待ev7事件（接收数据完毕，此时ACK=1响应已经发送，停止信号正在产生）
        if (!(isSuccess = waitEvent(I2C_EVENT_MASTER_BYTE_RECEIVED /*主机模式接收字节完成*/)))
            goto _stop_;
        // 读取DR,就是接收到的数据
        datas[idx++] = I2C_ReceiveData(I2C2);
    }
_stop_:
    // 恢复ACK默认设置，即在收到字节后默认发ACK=0
    I2C_AcknowledgeConfig(I2C2, ENABLE);
    return isSuccess;
}
