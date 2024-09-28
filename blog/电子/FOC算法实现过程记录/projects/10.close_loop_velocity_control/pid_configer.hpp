/**
 * @author YiguiDing 丁毅桂 2449695354@qq.com
 * @date 2024-09-27T22:07:00
 */
#ifndef _PID_CONFIGER_H_
#define _PID_CONFIGER_H_

#include <stdint.h>

typedef union
{
    // 数据格式
    struct
    {

        float K_p;
        float K_i;
        float K_d;
        float output_limit;
        float output_ROC_limit;
    } packet;
    uint8_t *raw;
} Packet;

typedef enum
{
    A = 0;
}
PacketType;

typedef union
{
    struct
    {
        uint8_t header;
        uint8_t length;
        PacketType type;
        uint8_t *data;
        uint8_t crc;
    };
} Message;

#define PacketHeader 0x55 // 数据包 包头
#define PacketTail 0xAA   // 数据包 包尾
#define PacketEscape 0x80 // 数据包 转义符号

/**
 * 发送数据包
 */
void sendPacket(Packet *packet)
{
    sendData(packet->raw, sizeof(Packet));
}

/**
 * 发送数据包的数据
 */
void sendData(uint8_t *data, uint8_t len)
{
    if (!data)
        return;
    sendByte(PacketHeader);
    for (uint16_t idx = 0; idx < len; idx++)
    {
        if (data[idx] == PacketHeader || data[idx] == PacketTail || data[idx] == PacketEscape)
            sendByte(PacketEscape);
        sendByte(data[idx]);
    }
    sendByte(PacketEscape);
}

/**
 * 发送一个字节数据
 */
// #include <Serial.h>

__attribute__((weak)) void sendByte(uint8_t byte)
{
    Serial.write(byte);
}

typedef enum : uint8_t
{
    WAITING_HEADER = 0;
    WAITING_TAIL = 1;
    WAITING_Data = 2;
    WAITING_EscapedData = 3;
}
State;

void onReceive(uint8_t byte)
{
    static State state = WAIT_HEADER;
    switch (state)
    {
    case:
    WAITING_HEADER:
        /* code */
        break;

    default:
        break;
    }
}

#endif