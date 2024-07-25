#include "Soft_I2C.h"

void Soft_I2C_Init()
{
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);

    GPIO_InitTypeDef GPIO_InitStruct = {
        SLK | SDA,
        GPIO_Speed_50MHz,
        GPIO_Mode_Out_OD};
    GPIO_Init(GPIOA, &GPIO_InitStruct);

    GPIO_SetBits(GPIOA, SLK | SDA);
}
// ######################## [ Start/Stop ] ########################
void Soft_I2C_Start()
{
    // SCL ________
    //             |_________
    // SDA ____
    //         |_____________
    W_SDA(Height); // 先拉高数据
    W_SLK(Height); // 再拉高时钟（避免在时钟高电平期间修改数据位）
    W_SDA(LOW);    // 先拉低数据
    W_SLK(LOW);    // 再拉低时钟
}
void Soft_I2C_Stop()
{
    // SCL          ________________
    //     ________|
    // SDA                  ________
    //     ________________|
    W_SLK(LOW); // 先拉低时钟
    W_SDA(LOW); // 再拉低数据（避免在时钟高电平期间修改数据位）
    W_SLK(Height);
    W_SDA(Height);
}
// ######################## [ read/write Bit ] ########################
/**
 * 写入比特
 */
void Soft_I2C_WriteBit(uint8_t state)
{
    //                 ________
    // SCL ___________|        |___________
    //     ________ ______________ ________
    // SDA ________X______________X________
    W_SLK(LOW);                  // 先拉低时钟(始终保持时钟线低电平)
    W_SDA(state ? Height : LOW); // 再写入数据
    W_SLK(Height);               // 再拉高时钟
    W_SLK(LOW);                  // 再拉低时钟(始终保持时钟线低电平)
    W_SDA(Height);               // 松开数据线(保持数据线悬空)
}
/**
 * 读取比特
 */
uint8_t Soft_I2C_ReadBit()
{
    //                 ________
    // SCL ___________|        |___________
    //     ________ ______________ ________
    // SDA ________X______________X________

    W_SLK(LOW);            // 先拉低时钟(始终保持时钟线低电平)
    W_SLK(Height);         // 再拉高时钟
    uint8_t res = R_SDA(); // 再读取数据
    W_SLK(LOW);            // 再拉低时钟(始终保持时钟线低电平)
    return res;
}
/**
 * 写入字节
 */
void Soft_I2C_WriteByte(uint8_t byte)
{
    uint8_t idx = 0;
    while (idx < 8)
        Soft_I2C_WriteBit(byte & (0x80 >> idx++));
}
/**
 * 读取字节
 */
uint8_t Soft_I2C_ReadByte()
{
    uint8_t val = 0;
    uint8_t idx = 0;
    while (idx < 8)
    {
        val <<= 1;
        val |= Soft_I2C_ReadBit();
        idx++;
    }
    return val;
}
// ######################## [ send/receive Byte ] ########################
/**
 * @brief 发送字节
 * @return 是否发送成功
 */
uint8_t Soft_I2C_SendByte(uint8_t byte)
{
    Soft_I2C_WriteByte(byte);
    return Soft_I2C_ReadBit() == ACK;
}
/**
 * @brief 接收字节，并发送AKC
 * @return 接收值
 */
uint8_t Soft_I2C_ReceiveByte(uint8_t endWithAck)
{
    uint8_t val = Soft_I2C_ReadByte();
    Soft_I2C_WriteBit(endWithAck);
    return val;
}
// ######################## [ Device Write/Write Data/Datas ] ########################
/**
 * @brief 在指定设备的指定寄存器写入单字节
 * @return 是否写入成功
 *
 */
uint8_t Soft_I2C_Write_Device_Register_Data(uint8_t deviceId, uint8_t regAddr, uint8_t data)
{
    // 单字节写入时序
    // | 主 | Start | AD+W |     | RA |     | DATA |     | Stop |
    // | 从 |       |      | ACK |    | ACK |      | ACK |      |
    Soft_I2C_Start();                                                 // 开始通信
    uint8_t isSuccess = Soft_I2C_SendByte((deviceId << 1) | Write) && // 发送设备id 读写标志 返回是否发送成功
                        Soft_I2C_SendByte(regAddr) &&                 // 发送寄存器地址 返回是否发送成功
                        Soft_I2C_SendByte(data);                      // 发送字节 返回是否发送成功
    Soft_I2C_Stop();                                                  // 结束通信
    return isSuccess;                                                 // 返回是否成功
}
/**
 * @brief 在指定设备的指定寄存器写入多个字节
 * @return 是否写入成功
 *
 */
uint8_t Soft_I2C_Write_Device_Register_Datas(uint8_t deviceId, uint8_t regAddr, uint8_t *datas, uint32_t length)
{
    // 多字节写入时序
    // | 主 | Start | AD+W |     | RA |     | DATA |     | DATA |     | ...... | DATA |     | Stop |
    // | 从 |       |      | ACK |    | ACK |      | ACK |      | ACK | ...... |      | ACK |      |
    Soft_I2C_Start();                                                 // 开始通信
    uint8_t isSuccess = Soft_I2C_SendByte((deviceId << 1) | Write) && // 发送设备id 读写标志 返回是否发送成功
                        Soft_I2C_SendByte(regAddr);                   // 发送寄存器地址 返回是否发送成功

    if (!isSuccess) // 失败结束通信
        goto _stop_;

    uint32_t idx = 0;
    while (idx < length)
    {
        isSuccess = Soft_I2C_SendByte(datas[idx++]); // 发送寄存器地址 返回是否发送成功
        if (!isSuccess)                              // 失败结束通信
            goto _stop_;
    }
_stop_:
    Soft_I2C_Stop();  // 结束通信
    return isSuccess; // 返回是否成功
}

/**
 * @brief 在指定设备的指定寄存器读取单字节
 * @return 读取的字节数据
 *
 */
uint8_t Soft_I2C_Read_Device_Register_Data(uint8_t deviceId, uint8_t regAddr, uint8_t *data)
{
    // 单字节写入时序
    // | 主 | Start | AD+W |     | RA |     | Start | AD+R |      | NACK | Stop |
    // | 从 |       |      | ACK |    | ACK |       |      | DATA |      |      |

    Soft_I2C_Start();                                                 // 开始通信
    uint8_t isSuccess = Soft_I2C_SendByte((deviceId << 1) | Write) && // 发送设备id 读写标志 返回是否发送成功
                        Soft_I2C_SendByte(regAddr);                   // 发送寄存器地址 返回是否发送成功
    if (!isSuccess)                                                   // 失败结束通信
        goto _stop_;

    Soft_I2C_Start();                                      // 再次开始通信
    isSuccess = Soft_I2C_SendByte((deviceId << 1) | Read); // 发送设备id 读写标志 返回是否发送成功
    if (!isSuccess)                                        // 失败结束通信
        goto _stop_;

    *data = Soft_I2C_ReceiveByte(NACK); // 接收一个字节，回应一个NACK表示读取完毕

_stop_:
    Soft_I2C_Stop();  // 结束通信
    return isSuccess; // 返回是否成功
}
/**
 * @brief 在指定设备的指定寄存器读取多字节
 * @return 读取的字节数据
 *
 */
uint8_t Soft_I2C_Read_Device_Register_Datas(uint8_t deviceId, uint8_t regAddr, uint8_t *datas, uint32_t length)
{
    // 单字节写入时序
    // | 主 | Start | AD+W |     | RA |     | Start | AD+R |      | ACK |      | ACK | ...... |      | NACK | Stop |
    // | 从 |       |      | ACK |    | ACK |       |      | DATA |     | DATA |     | ...... | DATA |      |      |

    Soft_I2C_Start();                                                 // 开始通信
    uint8_t isSuccess = Soft_I2C_SendByte((deviceId << 1) | Write) && // 发送设备id 读写标志 返回是否发送成功
                        Soft_I2C_SendByte(regAddr);                   // 发送寄存器地址 返回是否发送成功
    if (!isSuccess)                                                   // 如果发送失败，结束通信
        goto _stop_;

    Soft_I2C_Start();                                      // 再次开始通信
    isSuccess = Soft_I2C_SendByte((deviceId << 1) | Read); // 发送设备id 读写标志 返回是否发送成功
    if (!isSuccess)                                        // 如果发送失败，结束通信
        goto _stop_;

    uint32_t idx = 0;
    while (idx < length - 1)                      // 除了读取最后一个字节时要回应NACK,读取其余字节要回应ACK
        datas[idx++] = Soft_I2C_ReceiveByte(ACK); // 接收一个字节，回应一个ACK表示读取成功
    datas[idx++] = Soft_I2C_ReceiveByte(NACK);    // 最后一个字节接收完成后发送NACK

_stop_:
    Soft_I2C_Stop(); // 结束通信
    return isSuccess;
}
