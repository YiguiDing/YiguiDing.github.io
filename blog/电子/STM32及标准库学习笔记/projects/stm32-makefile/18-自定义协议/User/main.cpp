#include "stm32f10x.h"
#include "Delay.h"
#include "OLED.h"
#include "Serial.h"
#include "SimpleProtocol.h"

void dataHandler(uint8_t data)
{
    protocol_parse_data(data);
}

int main(void)
{
    OLED_Init();
    Serial_Init();
    Serial_SetDataHandler(dataHandler);

    uint8_t idx = 0;
    while (1)
    {
        if (protocol_isReceived())
        {
            for (uint8_t i = 0; i < rxPkgSize; i++)
            {
                OLED_ShowHexNum(1, 1 + i * 3, rxPacket[i], 2);
            }
            // 将收到的数据封装打包
            protocol_packet_data(rxPacket, rxPkgSize);
            // 将打包好的数据发送
            Serial_SendArray(txPacket, txPkgSize);
            protocol_reset_state();
        }
        OLED_ShowHexNum(2, 1, state, 2);
        OLED_ShowHexNum(3, 1, rxPkgSize, 2);
    }
}
