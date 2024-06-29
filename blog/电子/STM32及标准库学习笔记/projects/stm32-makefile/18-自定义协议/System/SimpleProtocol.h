#ifndef __SimpleProtocol_H__
#define __SimpleProtocol_H__

#include "stm32f10x.h"
#ifdef __cplusplus
extern "C"
{
#endif
    extern uint8_t state;
    extern uint8_t rxPkgSize;
    extern uint8_t txPkgSize;
    extern uint8_t rxPacket[255];
    extern uint8_t txPacket[255];

    /*是否收到数据包*/
    uint8_t protocol_isReceived();

    /*恢复接收状态*/
    void protocol_reset_state();

    /*解析数据包，提取原始数据*/
    void protocol_parse_data(uint8_t data);

    /*将数据封装成数据包*/
    void protocol_packet_data(uint8_t *data, uint8_t length);

#ifdef __cplusplus
}
#endif

#endif
