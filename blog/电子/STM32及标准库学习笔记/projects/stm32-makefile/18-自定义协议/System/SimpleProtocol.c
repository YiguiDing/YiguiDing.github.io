#include "SimpleProtocol.h"

// 定义包头，包尾
// 定义转义符号
// 类似于定义字符串 "12345"，两个双引号标识字符串的开始和结束，
// 但是字符串中间要传输双引号 就需要转义字符
// 如 "12345"  实际数据为 12345
// 如 "abcde"  实际数据为 abcde
// 如 "123\"45"  实际数据为 123"45
// 如 "123\x45"  实际数据为 123\x45
// 如 "123\145"  实际数据为 123\145
// 如 "123\\45"  实际数据为 123\45

#define pkg_header 0xff // 帧头
#define pkg_tail 0xfe   // 帧尾
#define pkg_escape 0xfc // 转义符号

#define waiting_for_header 0       // 等待包头
#define waiting_for_data 1         // 等待数据
#define waiting_for_escaped_data 2 // 等待转义数据
#define waiting_for_tail 3         // 等待包尾
#define waiting_for_read 4         // 等待读取

uint8_t state = waiting_for_header;

uint8_t rxPkgSize = 0;
uint8_t txPkgSize = 0;

/**收到的数据帧，无帧头帧尾，无转义的原始数据*/
uint8_t rxPacket[255] = {0};
/**待发送的封装完毕的数据帧，有帧头帧尾，有转义数据*/
uint8_t txPacket[255] = {0};

/*是否收到数据包*/
uint8_t protocol_isReceived()
{
    return state == waiting_for_read;
}

void protocol_reset_state()
{
    state = waiting_for_header;
}
/**解析数据*/
void protocol_parse_data(uint8_t data)
{
    // 等待帧头
    if (state == waiting_for_header)
    {
        // 收到帧头
        if (data == pkg_header)
        {
            rxPkgSize = 0;
            state = waiting_for_data;
        }
    }
    // 等待数据
    else if (state == waiting_for_data)
    {
        // 收到转义字符
        if (data == pkg_escape)
        {
            state = waiting_for_escaped_data;
        }
        // 收到帧头
        else if (data == pkg_tail)
        {
            rxPkgSize = 0;
            state = waiting_for_data;
        }
        // 收到帧尾
        else if (data == pkg_tail)
        {
            state = waiting_for_read;
        }
        // 收到普通数据
        else
        {
            rxPacket[rxPkgSize++] = data;
        }
    }
    // 等待转义数据
    else if (state == waiting_for_escaped_data)
    {
        rxPacket[rxPkgSize++] = data;
        state = waiting_for_data;
    }
}

void protocol_packet_data(uint8_t *data, uint8_t length)
{
    txPkgSize = 0;
    // 添加帧头
    txPacket[txPkgSize++] = pkg_header;
    // 填充数据
    uint8_t idx = 0;
    while (idx < length)
    {
        // 如果数据是特殊字符，添加转义
        if (data[idx] == pkg_header ||
            data[idx] == pkg_escape ||
            data[idx] == pkg_tail)
            txPacket[txPkgSize++] = pkg_escape;
        txPacket[txPkgSize++] = data[idx++];
    }
    // 添加帧尾
    txPacket[txPkgSize++] = pkg_tail;
}